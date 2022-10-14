/**
 * WordPress dependencies
 */
import {
	store as coreStore,
	useResourcePermissions,
} from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { isNumeric } from './edit/utils';

export default function useNavigationMenu( recordKey, navPostId ) {
	const permissions = useResourcePermissions( 'navigation', navPostId );

	return useSelect(
		( select ) => {
			const {
				canCreate,
				canUpdate,
				canDelete,
				isResolving,
				hasResolved,
			} = permissions;

			const {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,
			} = selectNavigationMenus( select );

			const {
				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,
			} = selectExistingMenu( select, recordKey );

			return {
				navigationMenus,
				isResolvingNavigationMenus,
				hasResolvedNavigationMenus,

				navigationMenu,
				isNavigationMenuResolved,
				isNavigationMenuMissing,

				canSwitchNavigationMenu: recordKey
					? navigationMenus?.length > 1
					: navigationMenus?.length > 0,

				canUserCreateNavigationMenu: canCreate,
				isResolvingCanUserCreateNavigationMenu: isResolving,
				hasResolvedCanUserCreateNavigationMenu: hasResolved,

				canUserUpdateNavigationMenu: canUpdate,
				hasResolvedCanUserUpdateNavigationMenu: recordKey
					? hasResolved
					: undefined,

				canUserDeleteNavigationMenu: canDelete,
				hasResolvedCanUserDeleteNavigationMenu: recordKey
					? hasResolved
					: undefined,
			};
		},
		[ recordKey, permissions ]
	);
}

function selectNavigationMenus( select ) {
	const { getEntityRecords, hasFinishedResolution, isResolving } =
		select( coreStore );

	const args = [
		'postType',
		'wp_navigation',
		{ per_page: -1, status: [ 'publish', 'draft' ] },
	];
	return {
		navigationMenus: getEntityRecords( ...args ),
		isResolvingNavigationMenus: isResolving( 'getEntityRecords', args ),
		hasResolvedNavigationMenus: hasFinishedResolution(
			'getEntityRecords',
			args
		),
	};
}

function selectExistingMenu( select, recordKey ) {
	if ( ! recordKey ) {
		return {
			isNavigationMenuResolved: false,
			isNavigationMenuMissing: true,
		};
	}

	const { getEntityRecords, getEditedEntityRecord, hasFinishedResolution } =
		select( coreStore );

	const recordKeyQuery = isNumeric( recordKey )
		? {
				include: recordKey, // fetch by post id.
		  }
		: {
				slug: recordKey, // fetch by slug (post_name).
		  };

	// Find a **single** Navigation Menu using the appropriate
	// recordKey as the identifier (i.e. recordKey). This may be
	// either a slug or (for legacy blocks) as post ID.
	// This call to `getEntityRecords` **must** be distinct from the
	// call within the `selectNavigationMenus` (above) otherwise the
	// query will return only `published` menus.
	const navigationMenus = getEntityRecords( 'postType', 'wp_navigation', {
		...recordKeyQuery,
		per_page: 1, // only a single record is required.
		status: [ 'publish', 'draft' ],
	} );

	const hasResolvedNavigationMenuSlugQuery = hasFinishedResolution(
		'getEntityRecords',
		[
			'postType',
			'wp_navigation',
			{
				...recordKeyQuery,
				per_page: 1, // only a single record is required.
				status: [ 'publish', 'draft' ],
			},
		]
	);

	const hasNavigationMenu =
		hasResolvedNavigationMenuSlugQuery && navigationMenus?.length;

	// `wp_navigation` entities are keyed by Post ID in state.
	// Perform subsequent lookups based on the ID of the record
	// returned by the slug-based query (if available).
	const idQueryArgs = hasNavigationMenu
		? [ 'postType', 'wp_navigation', navigationMenus[ 0 ]?.id ]
		: [];

	const editedNavigationMenu = hasNavigationMenu
		? getEditedEntityRecord( ...idQueryArgs )
		: null;

	// "Resolved" in this case means either
	// - the resolution state of request for the edited entity record
	// (in the case there is an 0th Nav Post).
	// - the resolution state of the query to look up with 0th post.
	const hasResolvedNavigationMenu = hasNavigationMenu
		? hasFinishedResolution( 'getEditedEntityRecord', idQueryArgs )
		: hasResolvedNavigationMenuSlugQuery;

	// Only published Navigation posts are considered valid.
	// Draft Navigation posts are valid only on the editor,
	// requiring a post update to publish to show in frontend.
	// To achieve that, index.php must reflect this validation only for published.
	const isNavigationMenuPublishedOrDraft =
		editedNavigationMenu?.status === 'publish' ||
		editedNavigationMenu?.status === 'draft';

	return {
		isNavigationMenuResolved: hasResolvedNavigationMenu,
		isNavigationMenuMissing:
			hasResolvedNavigationMenu &&
			( ! hasNavigationMenu || ! isNavigationMenuPublishedOrDraft ),

		// getEditedEntityRecord will return the post regardless of status.
		// Therefore if the found post is not published then we should ignore it.
		navigationMenu: isNavigationMenuPublishedOrDraft
			? editedNavigationMenu
			: null,
	};
}
