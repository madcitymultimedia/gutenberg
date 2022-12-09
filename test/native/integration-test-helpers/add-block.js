/**
 * External dependencies
 */
import { fireEvent } from '@testing-library/react-native';

/**
 * Adds a block via the block picker.
 *
 * @param {import('@testing-library/react-native').RenderAPI} screen                   A Testing Library screen.
 * @param {string}                                            blockName                Name of the block to be inserted as shown in the block picker.
 * @param {Object}                                            options                  Configuration options for adding a block.
 * @param {boolean}                                           [options.isPickerOpened] Option to skip opening the inserter picker.
 */
export const addBlock = async (
	screen,
	blockName,
	{ isPickerOpened } = {}
) => {
	if ( ! isPickerOpened ) {
		fireEvent.press( screen.getByLabelText( 'Add block' ) );
	}

	const blockList = screen.getByTestId( 'InserterUI-Blocks' );
	// onScroll event used to force the FlatList to render all items
	fireEvent.scroll( blockList, {
		nativeEvent: {
			contentOffset: { y: 0, x: 0 },
			contentSize: { width: 100, height: 100 },
			layoutMeasurement: { width: 100, height: 100 },
		},
	} );

	fireEvent.press( await screen.findByText( blockName ) );
};
