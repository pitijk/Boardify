(window.webpackJsonpboardify=window.webpackJsonpboardify||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),s=n.n(i),c=n(2),o=n(1),l=n(20),d=n(14);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={isShowing:!1},b=Object(c.c)({lists:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CREATE_LIST":return[].concat(Object(d.a)(t),[{id:n.id,name:n.name,cards:[]}]);case"DELETE_LIST":return t.filter((function(e){return e.id!==n.id}));case"EDIT_LIST_NAME":return t.map((function(e){return e.id===n.id?p({},e,{name:n.name}):e}));case"CREATE_CARD":return t.map((function(e){return e.id===n.listId?p({},e,{cards:[].concat(Object(d.a)(e.cards),[{id:n.cardId,name:n.name}])}):e}));case"DELETE_CARD":return t.map((function(e){return e.id===n.listId?p({},e,{cards:e.cards.filter((function(e){return e.id!==n.cardId}))}):e}));case"EDIT_CARD_DESCRIPTION":return t.map((function(e){return e.id===n.listId?p({},e,{cards:e.cards.map((function(e){return e.id===n.cardId?p({},e,{description:n.description}):e}))}):e}));case"EDIT_CARD_NAME":return t.map((function(e){return e.id===n.listId?p({},e,{cards:e.cards.map((function(e){return e.id===n.cardId?p({},e,{name:n.description}):e}))}):e}));case"EDIT_CARD_POSITION":var r=n.payload,a=r.startingListId,i=r.endingListId,s=r.startingIndex,c=r.endingIndex,o=r.type,l=Object(d.a)(t);if("list"===o){var u=l.splice(s,1);return l.splice.apply(l,[c,0].concat(Object(d.a)(u))),l}var m=t.find((function(e){return e.id===a})),f=m.cards.splice(s,1),h=t.find((function(e){return e.id===i}));return(e=h.cards).splice.apply(e,[c,0].concat(Object(d.a)(f))),l;default:return t}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return f({isShowing:!0},t);case"HIDE_MODAL":return f({},e,{isShowing:!1});default:return e}}}),E=n(3),g=n(4),O=n(6),I=n(5),y=n(7),v=function(){return{type:"HIDE_MODAL"}},j=n(11),D=n(29),x=n.n(D),C=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(a)))).state={isInserting:!1,inputValue:n.props.description},n.toggleInserting=function(){n.setState({isInserting:!n.state.isInserting})},n.handleSubmit=function(e){e.preventDefault();var t=n.props,r=t.cardId,a=t.listId;n.props.editCardDescription(r,a,n.state.inputValue),n.toggleInserting()},n.onDeleteClick=function(){n.props.hideModal();var e=n.props,t=e.cardId,r=e.listId;n.props.deleteCard(t,r)},n.onCloseClick=function(){n.props.hideModal()},n}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isInserting&&this.input.focus()}},{key:"renderDescription",value:function(){var e=this;return this.state.isInserting?a.a.createElement("form",{onSubmit:this.handleSubmit,className:"desc-form",onClick:function(e){return e.stopPropagation()}},a.a.createElement("textarea",{onSubmit:this.handleSubmit,onChange:function(t){return e.setState({inputValue:t.target.value})},value:this.state.inputValue,ref:function(t){return e.input=t},onBlur:this.handleSubmit,className:"description--input",type:"text",placeholder:this.props.description||"Add a more detailed description..."}),a.a.createElement("input",{value:"Save",type:"submit",className:"button desc-button"})):a.a.createElement("p",{className:"description",onClick:this.toggleInserting},this.props.description||"Add a more detailed description...")}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"modal-header"},a.a.createElement("h2",{className:"card-name"},this.props.name),a.a.createElement("div",{className:"icons"},a.a.createElement("button",{className:"button-icon",onClick:this.onDeleteClick},a.a.createElement("i",{className:"fas fa-trash fa-2x"})),a.a.createElement("button",{className:"button-icon",onClick:this.onCloseClick},a.a.createElement("i",{className:"fas fa-times fa-2x"})))),a.a.createElement("div",{className:"content"},a.a.createElement("h3",{className:"small-header"},"Description"),this.renderDescription()))}}]),t}(a.a.Component),S=Object(o.b)((function(e){var t=e.modal,n=t.listId,r=t.cardId;try{var a=e.lists.find((function(e){return e.id===n})).cards.find((function(e){return e.id===r}));return{name:a.name,description:a.description,cardId:r,listId:n}}catch(i){console.log(i)}}),{editCardDescription:function(e,t,n){return{type:"EDIT_CARD_DESCRIPTION",cardId:e,listId:t,description:n}},hideModal:v,deleteCard:function(e,t){return{type:"DELETE_CARD",cardId:e,listId:t}}})(C);function N(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}var w=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(a)))).state={isInserting:!1,inputValue:""},n.toggleInserting=function(){n.setState({isInserting:!n.state.isInserting})},n.handleSubmit=function(e){e.preventDefault(),n.state.inputValue&&(n.props.create(n.props.formType,n.state.inputValue,n.props.listId||N(),N()),n.setState({inputValue:""}))},n}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isInserting&&(this.input.focus(),"list"===this.props.formType&&this.input.scrollIntoView({block:"center",inline:"start"}))}},{key:"render",value:function(){var e=this;return this.state.isInserting?a.a.createElement("form",{onSubmit:this.handleSubmit,className:"create-form"},a.a.createElement("input",{onChange:function(t){return e.setState({inputValue:t.target.value})},value:this.state.inputValue,ref:function(t){return e.input=t},onBlur:this.toggleInserting,type:"text",placeholder:"Enter ".concat(this.props.formType," title..."),className:"input"}),a.a.createElement("button",{onClick:this.handleSubmit,className:"button"},"Add ".concat(this.props.formType))):a.a.createElement("button",{className:"button-toggle",onClick:this.toggleInserting},"+ Add another ".concat(this.props.formType))}}]),t}(a.a.Component),_=Object(o.b)(null,{create:function(e,t,n,r){return"list"===e?function(e,t){return{type:"CREATE_LIST",id:e,name:t}}(n,t):function(e,t,n){return{type:"CREATE_CARD",cardId:e,name:t,listId:n}}(r,t,n)}})(w),T=function(e){function t(){return Object(E.a)(this,t),Object(O.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(j.b,{draggableId:this.props.id,index:this.props.index},(function(t){var n=t.innerRef,r=t.draggableProps,i=t.dragHandleProps;return a.a.createElement("div",Object.assign({ref:n},r,i),a.a.createElement("p",{onClick:function(){return e.props.showModal(e.props.id,e.props.listId)},className:"card"},e.props.name))}))}}]),t}(a.a.Component),k=Object(o.b)(null,{showModal:function(e,t){return{type:"SHOW_MODAL",cardId:e,listId:t}}})(T),P=function(e){function t(){return Object(E.a)(this,t),Object(O.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"renderCards",value:function(){var e=this;if(this.props.cards)return this.props.cards.map((function(t,n){var r=t.id,i=t.name;return a.a.createElement(k,{key:r,id:r,name:i,listId:e.props.id,index:n})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(j.b,{draggableId:this.props.id,index:this.props.index},(function(t){return a.a.createElement("div",Object.assign({className:"lists-item"},t.draggableProps,{ref:t.innerRef},t.dragHandleProps),a.a.createElement("div",{className:"list-head"},a.a.createElement("h2",{className:"list-title"},e.props.name),a.a.createElement("button",{onClick:function(){return e.props.deleteList(e.props.id)},className:"button-icon"},a.a.createElement("i",{className:"fas fa-trash"}))),a.a.createElement(j.c,{droppableId:e.props.id},(function(t){return a.a.createElement("div",Object.assign({className:"cards"},t.droppableProps,{ref:t.innerRef}),e.renderCards(),t.placeholder)})),a.a.createElement("div",{className:"create-card"},a.a.createElement(_,{formType:"card",listId:e.props.id})))}))}}]),t}(a.a.Component),A=Object(o.b)((function(e,t){return{cards:e.lists.find((function(e){return e.id===t.id})).cards}}),{deleteList:function(e){return{type:"DELETE_LIST",id:e}}})(P);x.a.setAppElement("#root");var L=function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(a)))).onDragEnd=function(e){var t=e.destination,r=e.source,a=e.type;t&&n.props.editCardPosition(r.droppableId,t.droppableId,r.index,t.index,a)},n}return Object(y.a)(t,e),Object(g.a)(t,[{key:"renderLists",value:function(){if(this.props.lists)return this.props.lists.map((function(e,t){var n=e.id,r=e.name;return a.a.createElement(A,{key:n,id:n,name:r,index:t})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(j.a,{onDragEnd:this.onDragEnd},a.a.createElement("div",{className:"container"},a.a.createElement(j.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(t){return a.a.createElement("div",Object.assign({className:"lists"},t.droppableProps,{ref:t.innerRef}),e.renderLists(),t.placeholder,a.a.createElement("div",{className:"lists-item"},a.a.createElement(_,{formType:"list"})))})),a.a.createElement(x.a,{isOpen:this.props.isModalShowing,onRequestClose:this.props.hideModal,contentLabel:"onRequestClose Example",className:"Modal",overlayClassName:"Overlay"},a.a.createElement(S,null))))}}]),t}(a.a.Component),R=Object(o.b)((function(e){return{lists:e.lists,isModalShowing:e.modal.isShowing}}),{hideModal:v,editCardPosition:function(e,t,n,r,a){return{type:"EDIT_CARD_POSITION",payload:{startingListId:e,endingListId:t,startingIndex:n,endingIndex:r,type:a}}}})(L),M=Object(c.e)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(a.a.createElement(o.a,{store:M},a.a.createElement(R,null)),document.getElementById("root"))},48:function(e,t,n){e.exports=n(100)}},[[48,1,2]]]);
//# sourceMappingURL=main.843b9196.chunk.js.map