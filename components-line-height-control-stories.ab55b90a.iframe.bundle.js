"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9425],{"./packages/block-editor/src/components/line-height-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return line_height_control}});var build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),number_control=__webpack_require__("./packages/components/build-module/number-control/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LineHeightControl=_ref=>{let{value:lineHeight,onChange:onChange,__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,__unstableInputWidth:__unstableInputWidth="60px",...otherProps}=_ref;const isDefined=function isLineHeightDefined(lineHeight){return void 0!==lineHeight&&""!==lineHeight}(lineHeight),adjustNextValue=(nextValue,wasTypedOrPasted)=>{if(isDefined)return nextValue;switch(`${nextValue}`){case"0.1":return 1.6;case"0":return wasTypedOrPasted?nextValue:1.4;case"":return 1.5;default:return nextValue}},value=isDefined?lineHeight:"";__nextHasNoMarginBottom||(0,build_module.Z)("Bottom margin styles for wp.blockEditor.LineHeightControl",{since:"6.0",version:"6.4",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version"});const deprecatedStyles=__nextHasNoMarginBottom?void 0:{marginBottom:24};return(0,jsx_runtime.jsx)("div",{className:"block-editor-line-height-control",style:deprecatedStyles,children:(0,jsx_runtime.jsx)(number_control.Z,{...otherProps,__unstableInputWidth:__unstableInputWidth,__unstableStateReducer:(state,action)=>{var _action$payload$event;const wasTypedOrPasted=["insertText","insertFromPaste"].includes(null===(_action$payload$event=action.payload.event.nativeEvent)||void 0===_action$payload$event?void 0:_action$payload$event.inputType),value=adjustNextValue(state.value,wasTypedOrPasted);return{...state,value:value}},onChange:(nextValue,_ref2)=>{let{event:event}=_ref2;""!==nextValue?"click"!==event.type?onChange(`${nextValue}`):onChange(adjustNextValue(`${nextValue}`,!1)):onChange()},label:(0,i18n_build_module.__)("Line height"),placeholder:1.5,step:.1,value:value,min:0,spinControls:"custom"})})};LineHeightControl.displayName="LineHeightControl",LineHeightControl.__docgenInfo={description:"",methods:[],displayName:"LineHeightControl",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false",computed:!1},required:!1},__unstableInputWidth:{defaultValue:{value:"'60px'",computed:!1},required:!1}}};var line_height_control=LineHeightControl;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/line-height-control/index.js"]={name:"LineHeightControl",docgenInfo:LineHeightControl.__docgenInfo,path:"packages/block-editor/src/components/line-height-control/index.js"})},"./packages/block-editor/src/components/line-height-control/stories/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},UnconstrainedWidth:function(){return UnconstrainedWidth}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/line-height-control/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={parameters:{sourceLink:"packages/block-editor/src/components/line-height-control",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useState } from '@wordpress/element';\n\n/**\n * Internal dependencies\n */\nimport LineHeightControl from '../';\n\nexport default {\n\tcomponent: LineHeightControl,\n\ttitle: 'BlockEditor/LineHeightControl',\n};\n\nconst Template = ( props ) => {\n\tconst [ value, setValue ] = useState();\n\treturn (\n\t\t<LineHeightControl onChange={ setValue } value={ value } { ...props } />\n\t);\n};\n\nexport const Default = Template.bind( {} );\nDefault.args = {\n\t__nextHasNoMarginBottom: true,\n\t__unstableInputWidth: '100px',\n};\n\nexport const UnconstrainedWidth = Template.bind( {} );\nUnconstrainedWidth.args = {\n\t...Default.args,\n\t__unstableInputWidth: '100%',\n};\n",locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:1,line:21},startBody:{col:17,line:16},endBody:{col:1,line:21}},"unconstrained-width":{startLoc:{col:17,line:16},endLoc:{col:1,line:21},startBody:{col:17,line:16},endBody:{col:1,line:21}}}}},component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"BlockEditor/LineHeightControl"};const Template=props=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{onChange:setValue,value:value,...props})};Template.displayName="Template";const Default=Template.bind({});Default.args={__nextHasNoMarginBottom:!0,__unstableInputWidth:"100px"};const UnconstrainedWidth=Template.bind({});UnconstrainedWidth.args={...Default.args,__unstableInputWidth:"100%"}}}]);