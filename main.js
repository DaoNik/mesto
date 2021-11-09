(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".profile__button-add"),n=document.querySelector(".popup_edit"),r=document.querySelector(".popup_add"),o=n.querySelector(".popup__form"),i=r.querySelector(".popup__form"),u=document.forms.popupUpdateAvatarForm,c=n.querySelector(".popup__input_value_name"),a=n.querySelector(".popup__input_value_job"),l={inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_type_error"},s=document.querySelector(".profile__avatar"),f=document.querySelector(".profile__title"),p=document.querySelector(".profile__subtitle"),h=document.querySelector(".popup__btn_confirm"),d=document.querySelector(".popup__btn-update"),_=document.querySelector(".popup__btn-add");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r,o,i,u,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=i,this._nameCard=t.name,this._imgCard=t.link,this._likesArray=t.likes,this._likesNumber=t.likes.length,this._id=t._id,this._ownerId=t.owner._id,this._handleCardClick=c,this._handleAddLikeCard=n,this._handleDeleteLikeCard=r,this._myId=o,this._popupConfirm=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallery__card").cloneNode(!0)}},{key:"_setEventListeners",value:function(e,t,n,r){var o=this;e.addEventListener("click",(function(){o._handleCardClick({link:o._imgCard,name:o._nameCard})})),this._ownerId!==this._myId?t.remove():t.addEventListener("click",(function(){o._popupConfirm.open(r,o._id)})),n.addEventListener("click",(function(){n.classList.toggle("gallery__card-btn_active"),n.classList.contains("gallery__card-btn_active")?o._handleAddLikeCard(n,o._id):o._handleDeleteLikeCard(n,o._id)}))}},{key:"generateValue",value:function(){var e=this;this._element=this._getTemplate();var t=this._element.querySelector(".gallery__card-title"),n=this._element.querySelector(".gallery__card-img"),r=this._element.querySelector(".gallery__card-btn-trash"),o=this._element.querySelector(".gallery__card-btn");return this._likesArray.forEach((function(t){t._id===e._myId&&o.classList.add("gallery__card-btn_active")})),o.setAttribute("data-before",this._likesNumber),t.textContent=this._nameCard,n.src=this._imgCard,n.alt=this._nameCard,this._setEventListeners(n,r,o,this._element),this._element}}])&&y(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(t),this._renderer=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){this._renderer(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(t,n){var r=this,o=t.inputSelector,i=t.submitButtonSelector,u=t.inputErrorClass,c=t.inactiveButtonClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"_showInputError",(function(e,t){e.classList.add(r._inputErrorClass),t.textContent=e.validationMessage})),g(this,"_hideInputError",(function(e,t){e.classList.remove(r._inputErrorClass),t.textContent=""})),g(this,"_checkInputValidity",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));e.validity.valid?r._hideInputError(e,t):r._showInputError(e,t)})),g(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),g(this,"disableSubmitButton",(function(){r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.setAttribute("disabled",!0)})),g(this,"_enableSubmitButton",(function(){r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.removeAttribute("disabled")})),g(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():r._enableSubmitButton()})),g(this,"_setEventListeners",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))})),r._toggleButtonState()})),this._form=n,this._inputList=Array.from(this._form.querySelectorAll(o)),this._submitButton=this._form.querySelector(i),this._inputErrorClass=u,this._inactiveButtonClass=c}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}}])&&k(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this.open=this.open.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__btn-closed"))&&e.close()}))}}])&&E(t.prototype,n),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},j(e,t,n||e)}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function P(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(){return O(this,u),i.apply(this,arguments)}return t=u,n=[{key:"open",value:function(e,t){j(R(u.prototype),"open",this).call(this),this._card=e,this._id=t}},{key:"setDeleteCardHandler",value:function(e){this._handleDeleteCard=e}},{key:"setEventListeners",value:function(e){var t=this;j(R(u.prototype),"setEventListeners",this).call(this),e.addEventListener("click",(function(){t._handleDeleteCard(t._card,t._id)}))}}],n&&L(t.prototype,n),u}(S);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},A(e,t,n||e)}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function N(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(){return T(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popup.querySelector(".popup__view-title").textContent=n;var r=this._popup.querySelector(".popup__view-image");r.src=t,r.alt=n,A(U(u.prototype),"open",this).call(this)}}])&&x(t.prototype,n),u}(S);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t,n){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},J(e,t,n||e)}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function z(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popupFormElement=n._popup.querySelector(".popup__form"),n._handleFormSubmit=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupFormElement.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;J(M(u.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._popupFormElement.reset(),J(M(u.prototype),"close",this).call(this)}}])&&H(t.prototype,n),u}(S);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(t){var n=t.userSelector,r=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._user=document.querySelector(n),this._info=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={user:this._user.textContent,info:this._info.textContent},this._userInfo}},{key:"setUserInfo",value:function(e){e.name&&e.job?(this._user.textContent=e.name,this._info.textContent=e.job):console.log("Не все поля заполнены")}}])&&Q(t.prototype,n),e}();function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,n=[{key:"_checkRequest",value:function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkRequest(t)}))}},{key:"addNewUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.value,about:t.value})}).then((function(e){return n._checkRequest(e)}))}},{key:"addCards",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkRequest(t)}))}},{key:"addNewCard",value:function(e,t,n){var r=this,o=e.name,i=e.link,u=e.likes;return t(!0,n),fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:o,link:i,likes:u})}).then((function(e){return r._checkRequest(e)}))}},{key:"updateAvatar",value:function(e,t,n){var r=this;return t(!0,n),fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return r._checkRequest(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkRequest(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkRequest(e)}))}},{key:"deleteCard",value:function(e,t,n){var r=this;return t(!0,n),fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return r._checkRequest(e)}))}}],n&&X(t.prototype,n),e}();function Z(e,t){t.textContent=e?"Создание...":"Создать"}function $(e,t){t.textContent=e?"Удаление...":"Да"}function ee(e,t){t.textContent=e?"Сохранение...":"Сохранить"}var te=new I(".popup_confirm");te.setDeleteCardHandler((function(e,t){e.remove(),e=null,ne.deleteCard(t,$,h).then((function(e){te.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally($(!1,h))})),te.setEventListeners(h);var ne=new Y({url:"https://nomoreparties.co/v1/cohort-29/",headers:{authorization:"965be665-caac-4684-953a-3ef75da5404d","Content-Type":"application/json"}});function re(e,t){ne.addLike(t).then((function(t){e.setAttribute("data-before",t.likes.length)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}function oe(e,t){ne.deleteLike(t).then((function(t){e.setAttribute("data-before",t.likes.length)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}var ie=new W({userSelector:".profile__title",infoSelector:".profile__subtitle"}),ue=new K(".popup_update-avatar",(function(e){s.src=e.link,ne.updateAvatar(e.link,ee,d).then((function(e){ue.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally(ee(!1,d))}));ue.setEventListeners(),document.querySelector(".profile__container-avatar").addEventListener("click",(function(){ue.open()}));var ce=new K(".popup_edit",(function(e){ne.addNewUserInfo(c,a).then((function(t){ie.setUserInfo(e),ce.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}));ce.setEventListeners(),e.addEventListener("click",(function(){var e=ie.getUserInfo();c.value=e.user,a.value=e.info,ce.open()}));var ae=new V(".popup_view");ae.setEventListeners(),new w(l,o).enableValidation();var le=new w(l,i);function se(e,t,n){return new v(e,re,oe,s._id,t,te,(function(e){var t=e.link,r=e.name;n.open({link:t,name:r})})).generateValue()}le.enableValidation(),new w(l,u).enableValidation();var fe=new b(".gallery__cards",(function(e){e.forEach((function(e){var t=se(e,"#template-card",ae);fe.addItem(t)}))}));Promise.all([ne.getUserInfo(),ne.addCards()]).then((function(e){var t=e[0],n=e[1];return f.textContent=t.name,p.textContent=t.about,s.src=t.avatar,s._id=t._id,n})).then((function(e){fe.renderItems(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var pe=new K(".popup_add",(function(e){ne.addNewCard({name:e.name,link:e.link,likes:0},Z,_).then((function(e){var t=se(e,"#template-card",ae);fe.addItem(t),pe.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally(Z(!1,_))}));pe.setEventListeners(),t.addEventListener("click",(function(){le.disableSubmitButton(),pe.open()}))})();