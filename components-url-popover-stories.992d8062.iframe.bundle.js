"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3030],{"./packages/block-editor/src/components/url-input/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dom-scroll-into-view/lib/index.js"),dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_1__),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/deprecated/build-module/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/i18n/build-module/index.js"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/keycodes/build-module/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/components/build-module/spinner/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/components/build-module/popover/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./packages/components/build-module/button/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/components/build-module/higher-order/with-spoken-messages/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/compose/build-module/utils/debounce/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./packages/compose/build-module/higher-order/compose.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/compose/build-module/higher-order/with-safe-timeout/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/compose/build-module/higher-order/with-instance-id/index.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/data/build-module/components/with-select/index.js"),_wordpress_url__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/url/build-module/is-url.js"),_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block-editor/src/store/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function isFunction(maybeFunc){return"function"==typeof maybeFunc}class URLInput extends react__WEBPACK_IMPORTED_MODULE_5__.Component{constructor(props){super(props),this.onChange=this.onChange.bind(this),this.onFocus=this.onFocus.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.selectLink=this.selectLink.bind(this),this.handleOnClick=this.handleOnClick.bind(this),this.bindSuggestionNode=this.bindSuggestionNode.bind(this),this.autocompleteRef=props.autocompleteRef||(0,react__WEBPACK_IMPORTED_MODULE_5__.createRef)(),this.inputRef=(0,react__WEBPACK_IMPORTED_MODULE_5__.createRef)(),this.updateSuggestions=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.D)(this.updateSuggestions.bind(this),200),this.suggestionNodes=[],this.suggestionsRequest=null,this.state={suggestions:[],showSuggestions:!1,isUpdatingSuggestions:!1,suggestionsValue:null,selectedSuggestion:null,suggestionsListboxId:"",suggestionOptionIdPrefix:""}}componentDidUpdate(prevProps){const{showSuggestions:showSuggestions,selectedSuggestion:selectedSuggestion}=this.state,{value:value,__experimentalShowInitialSuggestions:__experimentalShowInitialSuggestions=!1}=this.props;showSuggestions&&null!==selectedSuggestion&&this.suggestionNodes[selectedSuggestion]&&!this.scrollingIntoView&&(this.scrollingIntoView=!0,dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default()(this.suggestionNodes[selectedSuggestion],this.autocompleteRef.current,{onlyScrollIfNeeded:!0}),this.props.setTimeout((()=>{this.scrollingIntoView=!1}),100)),prevProps.value===value||this.props.disableSuggestions||this.state.isUpdatingSuggestions||(null!=value&&value.length?this.updateSuggestions(value):__experimentalShowInitialSuggestions&&this.updateSuggestions())}componentDidMount(){this.shouldShowInitialSuggestions()&&this.updateSuggestions()}componentWillUnmount(){var _this$suggestionsRequ,_this$suggestionsRequ2;null===(_this$suggestionsRequ=this.suggestionsRequest)||void 0===_this$suggestionsRequ||null===(_this$suggestionsRequ2=_this$suggestionsRequ.cancel)||void 0===_this$suggestionsRequ2||_this$suggestionsRequ2.call(_this$suggestionsRequ),this.suggestionsRequest=null}bindSuggestionNode(index){return ref=>{this.suggestionNodes[index]=ref}}shouldShowInitialSuggestions(){const{__experimentalShowInitialSuggestions:__experimentalShowInitialSuggestions=!1,value:value}=this.props;return __experimentalShowInitialSuggestions&&!(value&&value.length)}updateSuggestions(){var _value;let value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{__experimentalFetchLinkSuggestions:fetchLinkSuggestions,__experimentalHandleURLSuggestions:handleURLSuggestions}=this.props;if(!fetchLinkSuggestions)return;const isInitialSuggestions=!(null!==(_value=value)&&void 0!==_value&&_value.length);var _this$suggestionsRequ3,_this$suggestionsRequ4;if(value=value.trim(),!isInitialSuggestions&&(value.length<2||!handleURLSuggestions&&(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.P)(value)))return null===(_this$suggestionsRequ3=this.suggestionsRequest)||void 0===_this$suggestionsRequ3||null===(_this$suggestionsRequ4=_this$suggestionsRequ3.cancel)||void 0===_this$suggestionsRequ4||_this$suggestionsRequ4.call(_this$suggestionsRequ3),this.suggestionsRequest=null,void this.setState({suggestions:[],showSuggestions:!1,suggestionsValue:value,selectedSuggestion:null,loading:!1});this.setState({isUpdatingSuggestions:!0,selectedSuggestion:null,loading:!0});const request=fetchLinkSuggestions(value,{isInitialSuggestions:isInitialSuggestions});request.then((suggestions=>{this.suggestionsRequest===request&&(this.setState({suggestions:suggestions,isUpdatingSuggestions:!1,suggestionsValue:value,loading:!1,showSuggestions:!!suggestions.length}),suggestions.length?this.props.debouncedSpeak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",suggestions.length),suggestions.length),"assertive"):this.props.debouncedSpeak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No results."),"assertive"))})).catch((()=>{this.suggestionsRequest===request&&this.setState({isUpdatingSuggestions:!1,loading:!1})})),this.suggestionsRequest=request}onChange(event){this.props.onChange(event.target.value)}onFocus(){const{suggestions:suggestions}=this.state,{disableSuggestions:disableSuggestions,value:value}=this.props;!value||disableSuggestions||this.state.isUpdatingSuggestions||suggestions&&suggestions.length||this.updateSuggestions(value)}onKeyDown(event){const{showSuggestions:showSuggestions,selectedSuggestion:selectedSuggestion,suggestions:suggestions,loading:loading}=this.state;if(!showSuggestions||!suggestions.length||loading){switch(event.keyCode){case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP:0!==event.target.selectionStart&&(event.preventDefault(),event.target.setSelectionRange(0,0));break;case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.WV:this.props.value.length!==event.target.selectionStart&&(event.preventDefault(),event.target.setSelectionRange(this.props.value.length,this.props.value.length));break;case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.K5:this.props.onSubmit&&(event.preventDefault(),this.props.onSubmit(null,event))}return}const suggestion=this.state.suggestions[this.state.selectedSuggestion];switch(event.keyCode){case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP:{event.preventDefault();const previousIndex=selectedSuggestion?selectedSuggestion-1:suggestions.length-1;this.setState({selectedSuggestion:previousIndex});break}case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.WV:{event.preventDefault();const nextIndex=null===selectedSuggestion||selectedSuggestion===suggestions.length-1?0:selectedSuggestion+1;this.setState({selectedSuggestion:nextIndex});break}case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.Mf:null!==this.state.selectedSuggestion&&(this.selectLink(suggestion),this.props.speak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link selected.")));break;case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.K5:event.preventDefault(),null!==this.state.selectedSuggestion?(this.selectLink(suggestion),this.props.onSubmit&&this.props.onSubmit(suggestion,event)):this.props.onSubmit&&this.props.onSubmit(null,event)}}selectLink(suggestion){this.props.onChange(suggestion.url,suggestion),this.setState({selectedSuggestion:null,showSuggestions:!1})}handleOnClick(suggestion){this.selectLink(suggestion),this.inputRef.current.focus()}static getDerivedStateFromProps(_ref,_ref2){let{value:value,instanceId:instanceId,disableSuggestions:disableSuggestions,__experimentalShowInitialSuggestions:__experimentalShowInitialSuggestions=!1}=_ref,{showSuggestions:showSuggestions}=_ref2,shouldShowSuggestions=showSuggestions;const hasValue=value&&value.length;return __experimentalShowInitialSuggestions||hasValue||(shouldShowSuggestions=!1),!0===disableSuggestions&&(shouldShowSuggestions=!1),{showSuggestions:shouldShowSuggestions,suggestionsListboxId:`block-editor-url-input-suggestions-${instanceId}`,suggestionOptionIdPrefix:`block-editor-url-input-suggestion-${instanceId}`}}render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[this.renderControl(),this.renderSuggestions()]})}renderControl(){const{__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,label:label=null,className:className,isFullWidth:isFullWidth,instanceId:instanceId,placeholder:placeholder=(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Paste URL or type to search"),__experimentalRenderControl:renderControl,value:value=""}=this.props,{loading:loading,showSuggestions:showSuggestions,selectedSuggestion:selectedSuggestion,suggestionsListboxId:suggestionsListboxId,suggestionOptionIdPrefix:suggestionOptionIdPrefix}=this.state,inputId=`url-input-control-${instanceId}`,controlProps={id:inputId,label:label,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("block-editor-url-input",className,{"is-full-width":isFullWidth})},inputProps={id:inputId,value:value,required:!0,className:"block-editor-url-input__input",type:"text",onChange:this.onChange,onFocus:this.onFocus,placeholder:placeholder,onKeyDown:this.onKeyDown,role:"combobox","aria-label":label?void 0:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("URL"),"aria-expanded":showSuggestions,"aria-autocomplete":"list","aria-owns":suggestionsListboxId,"aria-activedescendant":null!==selectedSuggestion?`${suggestionOptionIdPrefix}-${selectedSuggestion}`:void 0,ref:this.inputRef};return renderControl?renderControl(controlProps,inputProps,loading):(__nextHasNoMarginBottom||(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9__.Z)("Bottom margin styles for wp.blockEditor.URLInput",{since:"6.2",version:"6.5",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__.ZP,{__nextHasNoMarginBottom:__nextHasNoMarginBottom,...controlProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{...inputProps}),loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ZP,{})]}))}renderSuggestions(){const{className:className,__experimentalRenderSuggestions:renderSuggestions}=this.props,{showSuggestions:showSuggestions,suggestions:suggestions,suggestionsValue:suggestionsValue,selectedSuggestion:selectedSuggestion,suggestionsListboxId:suggestionsListboxId,suggestionOptionIdPrefix:suggestionOptionIdPrefix,loading:loading}=this.state;if(!showSuggestions||0===suggestions.length)return null;const suggestionsListProps={id:suggestionsListboxId,ref:this.autocompleteRef,role:"listbox"},buildSuggestionItemProps=(suggestion,index)=>({role:"option",tabIndex:"-1",id:`${suggestionOptionIdPrefix}-${index}`,ref:this.bindSuggestionNode(index),"aria-selected":index===selectedSuggestion||void 0});return isFunction(renderSuggestions)?renderSuggestions({suggestions:suggestions,selectedSuggestion:selectedSuggestion,suggestionsListProps:suggestionsListProps,buildSuggestionItemProps:buildSuggestionItemProps,isLoading:loading,handleSuggestionClick:this.handleOnClick,isInitialSuggestions:!(null!=suggestionsValue&&suggestionsValue.length),currentInputValue:suggestionsValue}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__.Z,{placement:"bottom",focusOnMount:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{...suggestionsListProps,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("block-editor-url-input__suggestions",`${className}__suggestions`),children:suggestions.map(((suggestion,index)=>(0,react__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__.ZP,{...buildSuggestionItemProps(0,index),key:suggestion.id,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("block-editor-url-input__suggestion",{"is-selected":index===selectedSuggestion}),onClick:()=>this.handleOnClick(suggestion)},suggestion.title)))})})}}URLInput.displayName="URLInput",URLInput.__docgenInfo={description:"",methods:[{name:"bindSuggestionNode",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"shouldShowInitialSuggestions",docblock:null,modifiers:[],params:[],returns:null},{name:"updateSuggestions",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"onChange",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onFocus",docblock:null,modifiers:[],params:[],returns:null},{name:"onKeyDown",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"selectLink",docblock:null,modifiers:[],params:[{name:"suggestion",type:null}],returns:null},{name:"handleOnClick",docblock:null,modifiers:[],params:[{name:"suggestion",type:null}],returns:null},{name:"renderControl",docblock:null,modifiers:[],params:[],returns:null},{name:"renderSuggestions",docblock:null,modifiers:[],params:[],returns:null}],displayName:"URLInput"},__webpack_exports__.Z=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_14__.Z)(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__.Z,_wordpress_components__WEBPACK_IMPORTED_MODULE_16__.Z,_wordpress_compose__WEBPACK_IMPORTED_MODULE_17__.Z,(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_18__.Z)(((select,props)=>{if(isFunction(props.__experimentalFetchLinkSuggestions))return;const{getSettings:getSettings}=select(_store__WEBPACK_IMPORTED_MODULE_3__.h);return{__experimentalFetchLinkSuggestions:getSettings().__experimentalFetchLinkSuggestions}})))(URLInput),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/url-input/index.js"]={name:"URLInput",docgenInfo:URLInput.__docgenInfo,path:"packages/block-editor/src/components/url-input/index.js"})},"./packages/icons/build-module/library/keyboard-return.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const keyboardReturn=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"}));__webpack_exports__.Z=keyboardReturn},"./packages/block-editor/src/components/url-popover/stories/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:function(){return _default},default:function(){return stories}});var build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),toggle_control=__webpack_require__("./packages/components/build-module/toggle-control/index.js"),react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),keyboard_return=__webpack_require__("./packages/icons/build-module/library/keyboard-return.js"),private_apis=__webpack_require__("./packages/components/build-module/private-apis.js"),popover=__webpack_require__("./packages/components/build-module/popover/index.js"),chevron_down=__webpack_require__("./packages/icons/build-module/library/chevron-down.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),edit=__webpack_require__("./packages/icons/build-module/library/edit.js"),external_link=__webpack_require__("./packages/components/build-module/external-link/index.js"),filter_url_for_display=__webpack_require__("./packages/url/build-module/filter-url-for-display.js"),safe_decode_uri=__webpack_require__("./packages/url/build-module/safe-decode-uri.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LinkViewerURL(_ref){let{url:url,urlLabel:urlLabel,className:className}=_ref;const linkClassName=classnames_default()(className,"block-editor-url-popover__link-viewer-url");return url?(0,jsx_runtime.jsx)(external_link.Z,{className:linkClassName,href:url,children:urlLabel||(0,filter_url_for_display.w)((0,safe_decode_uri.x)(url))}):(0,jsx_runtime.jsx)("span",{className:linkClassName})}function LinkViewer(_ref){let{className:className,linkClassName:linkClassName,onEditLinkClick:onEditLinkClick,url:url,urlLabel:urlLabel,...props}=_ref;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("block-editor-url-popover__link-viewer",className),...props,children:[(0,jsx_runtime.jsx)(LinkViewerURL,{url:url,urlLabel:urlLabel,className:linkClassName}),onEditLinkClick&&(0,jsx_runtime.jsx)(build_module_button.ZP,{icon:edit.Z,label:(0,build_module.__)("Edit"),onClick:onEditLinkClick})]})}LinkViewerURL.displayName="LinkViewerURL",LinkViewerURL.__docgenInfo={description:"",methods:[],displayName:"LinkViewerURL"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/url-popover/link-viewer-url.js"]={name:"LinkViewerURL",docgenInfo:LinkViewerURL.__docgenInfo,path:"packages/block-editor/src/components/url-popover/link-viewer-url.js"}),LinkViewer.displayName="LinkViewer",LinkViewer.__docgenInfo={description:"",methods:[],displayName:"LinkViewer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/url-popover/link-viewer.js"]={name:"LinkViewer",docgenInfo:LinkViewer.__docgenInfo,path:"packages/block-editor/src/components/url-popover/link-viewer.js"});var url_input=__webpack_require__("./packages/block-editor/src/components/url-input/index.js");function LinkEditor(_ref){let{autocompleteRef:autocompleteRef,className:className,onChangeInputValue:onChangeInputValue,value:value,...props}=_ref;return(0,jsx_runtime.jsxs)("form",{className:classnames_default()("block-editor-url-popover__link-editor",className),...props,children:[(0,jsx_runtime.jsx)(url_input.Z,{__nextHasNoMarginBottom:!0,value:value,onChange:onChangeInputValue,autocompleteRef:autocompleteRef}),(0,jsx_runtime.jsx)(build_module_button.ZP,{icon:keyboard_return.Z,label:(0,build_module.__)("Apply"),type:"submit"})]})}LinkEditor.displayName="LinkEditor",LinkEditor.__docgenInfo={description:"",methods:[],displayName:"LinkEditor"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/url-popover/link-editor.js"]={name:"LinkEditor",docgenInfo:LinkEditor.__docgenInfo,path:"packages/block-editor/src/components/url-popover/link-editor.js"});var lock_unlock=__webpack_require__("./packages/block-editor/src/lock-unlock.js");const{__experimentalPopoverLegacyPositionToPlacement:__experimentalPopoverLegacyPositionToPlacement}=(0,lock_unlock.U)(private_apis.YH);function URLPopover(_ref){let computedPlacement,{additionalControls:additionalControls,children:children,renderSettings:renderSettings,placement:placement,focusOnMount:focusOnMount="firstElement",position:position,...popoverProps}=_ref;void 0!==position&&(0,deprecated_build_module.Z)("`position` prop in wp.blockEditor.URLPopover",{since:"6.2",alternative:"`placement` prop"}),void 0!==placement?computedPlacement=placement:void 0!==position&&(computedPlacement=__experimentalPopoverLegacyPositionToPlacement(position)),computedPlacement=computedPlacement||"bottom";const[isSettingsExpanded,setIsSettingsExpanded]=(0,react.useState)(!1),showSettings=!!renderSettings&&isSettingsExpanded;return(0,jsx_runtime.jsxs)(popover.Z,{className:"block-editor-url-popover",focusOnMount:focusOnMount,placement:computedPlacement,shift:!0,...popoverProps,children:[(0,jsx_runtime.jsxs)("div",{className:"block-editor-url-popover__input-container",children:[(0,jsx_runtime.jsxs)("div",{className:"block-editor-url-popover__row",children:[children,!!renderSettings&&(0,jsx_runtime.jsx)(build_module_button.ZP,{className:"block-editor-url-popover__settings-toggle",icon:chevron_down.Z,label:(0,build_module.__)("Link settings"),onClick:()=>{setIsSettingsExpanded(!isSettingsExpanded)},"aria-expanded":isSettingsExpanded})]}),showSettings&&(0,jsx_runtime.jsx)("div",{className:"block-editor-url-popover__row block-editor-url-popover__settings",children:renderSettings()})]}),additionalControls&&!showSettings&&(0,jsx_runtime.jsx)("div",{className:"block-editor-url-popover__additional-controls",children:additionalControls})]})}URLPopover.displayName="URLPopover",URLPopover.LinkEditor=LinkEditor,URLPopover.LinkViewer=LinkViewer,URLPopover.__docgenInfo={description:"",methods:[],displayName:"URLPopover",props:{focusOnMount:{defaultValue:{value:"'firstElement'",computed:!1},required:!1}}};var url_popover=URLPopover;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/url-popover/index.js"]={name:"URLPopover",docgenInfo:URLPopover.__docgenInfo,path:"packages/block-editor/src/components/url-popover/index.js"});var stories={parameters:{sourceLink:"packages/block-editor/src/components/url-popover",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { Button, ToggleControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\nimport { __ } from '@wordpress/i18n';\nimport { keyboardReturn } from '@wordpress/icons';\n\n/**\n * Internal dependencies\n */\nimport URLPopover from '../';\n\nexport default { title: 'BlockEditor/URLPopover' };\n\nconst TestURLPopover = () => {\n\tconst [ isVisible, setVisiblility ] = useState( false );\n\tconst [ url, setUrl ] = useState( '' );\n\n\tconst close = () => setVisiblility( false );\n\tconst setTarget = () => {};\n\n\treturn (\n\t\t<>\n\t\t\t<Button onClick={ () => setVisiblility( true ) }>Edit URL</Button>\n\t\t\t{ isVisible && (\n\t\t\t\t<URLPopover\n\t\t\t\t\tonClose={ close }\n\t\t\t\t\trenderSettings={ () => (\n\t\t\t\t\t\t<ToggleControl\n\t\t\t\t\t\t\t__nextHasNoMarginBottom\n\t\t\t\t\t\t\tlabel={ __( 'Open in new tab' ) }\n\t\t\t\t\t\t\tonChange={ setTarget }\n\t\t\t\t\t\t/>\n\t\t\t\t\t) }\n\t\t\t\t>\n\t\t\t\t\t<form onSubmit={ close }>\n\t\t\t\t\t\t<input type=\"url\" value={ url } onChange={ setUrl } />\n\t\t\t\t\t\t<Button\n\t\t\t\t\t\t\ticon={ keyboardReturn }\n\t\t\t\t\t\t\tlabel={ __( 'Apply' ) }\n\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</form>\n\t\t\t\t</URLPopover>\n\t\t\t) }\n\t\t</>\n\t);\n};\n\nexport const _default = () => {\n\treturn <TestURLPopover />;\n};\n",locationsMap:{default:{startLoc:{col:24,line:51},endLoc:{col:1,line:53},startBody:{col:24,line:51},endBody:{col:1,line:53}}}}},title:"BlockEditor/URLPopover"};const TestURLPopover=()=>{const[isVisible,setVisiblility]=(0,react.useState)(!1),[url,setUrl]=(0,react.useState)(""),close=()=>setVisiblility(!1),setTarget=()=>{};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(build_module_button.ZP,{onClick:()=>setVisiblility(!0),children:"Edit URL"}),isVisible&&(0,jsx_runtime.jsx)(url_popover,{onClose:close,renderSettings:()=>(0,jsx_runtime.jsx)(toggle_control.Z,{__nextHasNoMarginBottom:!0,label:(0,build_module.__)("Open in new tab"),onChange:setTarget}),children:(0,jsx_runtime.jsxs)("form",{onSubmit:close,children:[(0,jsx_runtime.jsx)("input",{type:"url",value:url,onChange:setUrl}),(0,jsx_runtime.jsx)(build_module_button.ZP,{icon:keyboard_return.Z,label:(0,build_module.__)("Apply"),type:"submit"})]})})]})},_default=()=>(0,jsx_runtime.jsx)(TestURLPopover,{});_default.displayName="_default",_default.__docgenInfo={description:"",methods:[],displayName:"_default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/url-popover/stories/index.js"]={name:"_default",docgenInfo:_default.__docgenInfo,path:"packages/block-editor/src/components/url-popover/stories/index.js"})}}]);