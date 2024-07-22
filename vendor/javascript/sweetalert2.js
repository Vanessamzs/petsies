var e=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var t={};(function(e,n){t=n()})(0,(function(){function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _assertClassBrand(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _callSuper(e,t,n){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,n||[],_getPrototypeOf(e).constructor):t.apply(e,n))}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classPrivateFieldGet2(e,t){return e.get(_assertClassBrand(e,t))}function _classPrivateFieldInitSpec(e,t,n){_checkPrivateRedeclaration(e,t),t.set(e,n)}function _classPrivateFieldSet2(e,t,n){return e.set(_assertClassBrand(e,t),n),n}function _construct(e,t,n){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var r=new(e.bind.apply(e,a));return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t){n&&(e=n);var a=0,F=function(){};return{s:F,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw r}}}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var a=_superPropBase(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},_get.apply(null,arguments)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,i,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t);else for(;!(l=(a=o.call(n)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return s}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _superPropBase(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _toPrimitive(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:t+""}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}var t=100;
/** @type {GlobalState} */var n={};var a=function focusPreviousActiveElement(){if(n.previousActiveElement instanceof HTMLElement){n.previousActiveElement.focus();n.previousActiveElement=null}else document.body&&document.body.focus()};
/**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */var r=function restoreActiveElement(e){return new Promise((function(r){if(!e)return r();var o=window.scrollX;var i=window.scrollY;n.restoreFocusTimeout=setTimeout((function(){a();r()}),t);window.scrollTo(o,i)}))};var o="swal2-";
/**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */
/**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */
/** @type {SwalClass[]} */var i=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"];var s=i.reduce((function(e,t){e[t]=o+t;return e}),/** @type {SwalClasses} */{});
/** @type {SwalIcon[]} */var l=["success","warning","info","question","error"];var c=l.reduce((function(e,t){e[t]=o+t;return e}),/** @type {SwalIcons} */{});var u="SweetAlert2:";
/**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */var d=function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)};
/**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */var p=function warn(e){console.warn("".concat(u," ").concat(_typeof(e)==="object"?e.join(" "):e))};
/**
   * Standardize console errors
   *
   * @param {string} message
   */var f=function error(e){console.error("".concat(u," ").concat(e))};
/**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */var w=[];
/**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */var m=function warnOnce(e){if(!w.includes(e)){w.push(e);p(e)}};
/**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */var h=function warnAboutDeprecation(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;m('"'.concat(e,'" is deprecated and will be removed in the next major release.').concat(t?' Use "'.concat(t,'" instead.'):""))};
/**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */var v=function callIfFunction(e){return typeof e==="function"?e():e};
/**
   * @param {any} arg
   * @returns {boolean}
   */var g=function hasToPromiseFn(e){return e&&typeof e.toPromise==="function"};
/**
   * @param {any} arg
   * @returns {Promise<any>}
   */var b=function asPromise(e){return g(e)?e.toPromise():Promise.resolve(e)};
/**
   * @param {any} arg
   * @returns {boolean}
   */var y=function isPromise(e){return e&&Promise.resolve(e)===e};
/**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */var C=function getContainer(){return document.body.querySelector(".".concat(s.container))};
/**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */var k=function elementBySelector(e){var t=C();return t?t.querySelector(e):null};
/**
   * @param {string} className
   * @returns {HTMLElement | null}
   */var x=function elementByClass(e){return k(".".concat(e))};
/**
   * @returns {HTMLElement | null}
   */var A=function getPopup(){return x(s.popup)};
/**
   * @returns {HTMLElement | null}
   */var P=function getIcon(){return x(s.icon)};
/**
   * @returns {HTMLElement | null}
   */var B=function getIconContent(){return x(s["icon-content"])};
/**
   * @returns {HTMLElement | null}
   */var T=function getTitle(){return x(s.title)};
/**
   * @returns {HTMLElement | null}
   */var S=function getHtmlContainer(){return x(s["html-container"])};
/**
   * @returns {HTMLElement | null}
   */var E=function getImage(){return x(s.image)};
/**
   * @returns {HTMLElement | null}
   */var _=function getProgressSteps(){return x(s["progress-steps"])};
/**
   * @returns {HTMLElement | null}
   */var I=function getValidationMessage(){return x(s["validation-message"])};
/**
   * @returns {HTMLButtonElement | null}
   */var O=function getConfirmButton(){/** @type {HTMLButtonElement} */
return k(".".concat(s.actions," .").concat(s.confirm))};
/**
   * @returns {HTMLButtonElement | null}
   */var L=function getCancelButton(){/** @type {HTMLButtonElement} */
return k(".".concat(s.actions," .").concat(s.cancel))};
/**
   * @returns {HTMLButtonElement | null}
   */var j=function getDenyButton(){/** @type {HTMLButtonElement} */
return k(".".concat(s.actions," .").concat(s.deny))};
/**
   * @returns {HTMLElement | null}
   */var M=function getInputLabel(){return x(s["input-label"])};
/**
   * @returns {HTMLElement | null}
   */var H=function getLoader(){return k(".".concat(s.loader))};
/**
   * @returns {HTMLElement | null}
   */var V=function getActions(){return x(s.actions)};
/**
   * @returns {HTMLElement | null}
   */var D=function getFooter(){return x(s.footer)};
/**
   * @returns {HTMLElement | null}
   */var z=function getTimerProgressBar(){return x(s["timer-progress-bar"])};
/**
   * @returns {HTMLElement | null}
   */var R=function getCloseButton(){return x(s.close)};var q='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
/**
   * @returns {HTMLElement[]}
   */var N=function getFocusableElements(){var e=A();if(!e)return[];
/** @type {NodeListOf<HTMLElement>} */var t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');var n=Array.from(t).sort((function(e,t){var n=parseInt(e.getAttribute("tabindex")||"0");var a=parseInt(t.getAttribute("tabindex")||"0");return n>a?1:n<a?-1:0}));
/** @type {NodeListOf<HTMLElement>} */var a=e.querySelectorAll(q);var r=Array.from(a).filter((function(e){return e.getAttribute("tabindex")!=="-1"}));return _toConsumableArray(new Set(n.concat(r))).filter((function(e){return ce(e)}))};
/**
   * @returns {boolean}
   */var W=function isModal(){return Z(document.body,s.shown)&&!Z(document.body,s["toast-shown"])&&!Z(document.body,s["no-backdrop"])};
/**
   * @returns {boolean}
   */var U=function isToast(){var e=A();return!!e&&Z(e,s.toast)};
/**
   * @returns {boolean}
   */var K=function isLoading(){var e=A();return!!e&&e.hasAttribute("data-loading")};
/**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */var $=function setInnerHtml(e,t){e.textContent="";if(t){var n=new DOMParser;var a=n.parseFromString(t,"text/html");var r=a.querySelector("head");r&&Array.from(r.childNodes).forEach((function(t){e.appendChild(t)}));var o=a.querySelector("body");o&&Array.from(o.childNodes).forEach((function(t){t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(true)):e.appendChild(t)}))}};
/**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */var Z=function hasClass(e,t){if(!t)return false;var n=t.split(/\s+/);for(var a=0;a<n.length;a++)if(!e.classList.contains(n[a]))return false;return true};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */var Y=function removeCustomClasses(e,t){Array.from(e.classList).forEach((function(n){Object.values(s).includes(n)||Object.values(c).includes(n)||Object.values(t.showClass||{}).includes(n)||e.classList.remove(n)}))};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */var X=function applyCustomClass(e,t,n){Y(e,t);if(t.customClass){var a=t.customClass[/** @type {keyof SweetAlertCustomClass} */n];a&&(typeof a==="string"||a.forEach?ee(e,a):p("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(_typeof(a),'"')))}};
/**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */var G=function getInput(e,t){if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(s.popup," > .").concat(s[t]));case"checkbox":return e.querySelector(".".concat(s.popup," > .").concat(s.checkbox," input"));case"radio":return e.querySelector(".".concat(s.popup," > .").concat(s.radio," input:checked"))||e.querySelector(".".concat(s.popup," > .").concat(s.radio," input:first-child"));case"range":return e.querySelector(".".concat(s.popup," > .").concat(s.range," input"));default:return e.querySelector(".".concat(s.popup," > .").concat(s.input))}};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */var J=function focusInput(e){e.focus();if(e.type!=="file"){var t=e.value;e.value="";e.value=t}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */var Q=function toggleClass(e,t,n){if(e&&t){typeof t==="string"&&(t=t.split(/\s+/).filter(Boolean));t.forEach((function(t){Array.isArray(e)?e.forEach((function(e){n?e.classList.add(t):e.classList.remove(t)})):n?e.classList.add(t):e.classList.remove(t)}))}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */var ee=function addClass(e,t){Q(e,t,true)};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */var te=function removeClass(e,t){Q(e,t,false)};
/**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */var ne=function getDirectChildByClass(e,t){var n=Array.from(e.children);for(var a=0;a<n.length;a++){var r=n[a];if(r instanceof HTMLElement&&Z(r,t))return r}};
/**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */var ae=function applyNumericalStyle(e,t,n){n==="".concat(parseInt(n))&&(n=parseInt(n));n||parseInt(n)===0?e.style.setProperty(t,typeof n==="number"?"".concat(n,"px"):n):e.style.removeProperty(t)};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */var re=function show(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=t)};
/**
   * @param {HTMLElement | null} elem
   */var oe=function hide(e){e&&(e.style.display="none")};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */var ie=function showWhenInnerHtmlPresent(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";e&&new MutationObserver((function(){le(e,e.innerHTML,t)})).observe(e,{childList:true,subtree:true})};
/**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */var se=function setStyle(e,t,n,a){
/** @type {HTMLElement | null} */
var r=e.querySelector(t);r&&r.style.setProperty(n,a)};
/**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */var le=function toggle(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";t?re(e,n):oe(e)};
/**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */var ce=function isVisible(e){return!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))};
/**
   * @returns {boolean}
   */var ue=function allButtonsAreHidden(){return!ce(O())&&!ce(j())&&!ce(L())};
/**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */var de=function isScrollable(e){return!!(e.scrollHeight>e.clientHeight)};
/**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */var pe=function hasCssAnimation(e){var t=window.getComputedStyle(e);var n=parseFloat(t.getPropertyValue("animation-duration")||"0");var a=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||a>0};
/**
   * @param {number} timer
   * @param {boolean} reset
   */var fe=function animateTimerProgressBar(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];var n=z();if(n&&ce(n)){if(t){n.style.transition="none";n.style.width="100%"}setTimeout((function(){n.style.transition="width ".concat(e/1e3,"s linear");n.style.width="0%"}),10)}};var we=function stopTimerProgressBar(){var e=z();if(e){var t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition");e.style.width="100%";var n=parseInt(window.getComputedStyle(e).width);var a=t/n*100;e.style.width="".concat(a,"%")}};
/**
   * Detect Node env
   *
   * @returns {boolean}
   */var me=function isNodeEnv(){return typeof window==="undefined"||typeof document==="undefined"};var he='\n <div aria-labelledby="'.concat(s.title,'" aria-describedby="').concat(s["html-container"],'" class="').concat(s.popup,'" tabindex="-1">\n   <button type="button" class="').concat(s.close,'"></button>\n   <ul class="').concat(s["progress-steps"],'"></ul>\n   <div class="').concat(s.icon,'"></div>\n   <img class="').concat(s.image,'" />\n   <h2 class="').concat(s.title,'" id="').concat(s.title,'"></h2>\n   <div class="').concat(s["html-container"],'" id="').concat(s["html-container"],'"></div>\n   <input class="').concat(s.input,'" id="').concat(s.input,'" />\n   <input type="file" class="').concat(s.file,'" />\n   <div class="').concat(s.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(s.select,'" id="').concat(s.select,'"></select>\n   <div class="').concat(s.radio,'"></div>\n   <label class="').concat(s.checkbox,'">\n     <input type="checkbox" id="').concat(s.checkbox,'" />\n     <span class="').concat(s.label,'"></span>\n   </label>\n   <textarea class="').concat(s.textarea,'" id="').concat(s.textarea,'"></textarea>\n   <div class="').concat(s["validation-message"],'" id="').concat(s["validation-message"],'"></div>\n   <div class="').concat(s.actions,'">\n     <div class="').concat(s.loader,'"></div>\n     <button type="button" class="').concat(s.confirm,'"></button>\n     <button type="button" class="').concat(s.deny,'"></button>\n     <button type="button" class="').concat(s.cancel,'"></button>\n   </div>\n   <div class="').concat(s.footer,'"></div>\n   <div class="').concat(s["timer-progress-bar-container"],'">\n     <div class="').concat(s["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,"");
/**
   * @returns {boolean}
   */var ve=function resetOldContainer(){var e=C();if(!e)return false;e.remove();te([document.documentElement,document.body],[s["no-backdrop"],s["toast-shown"],s["has-column"]]);return true};var ge=function resetValidationMessage(){n.currentInstance.resetValidationMessage()};var be=function addInputChangeListeners(){var e=A();var t=ne(e,s.input);var n=ne(e,s.file);
/** @type {HTMLInputElement} */var a=e.querySelector(".".concat(s.range," input"));
/** @type {HTMLOutputElement} */var r=e.querySelector(".".concat(s.range," output"));var o=ne(e,s.select);
/** @type {HTMLInputElement} */var i=e.querySelector(".".concat(s.checkbox," input"));var l=ne(e,s.textarea);t.oninput=ge;n.onchange=ge;o.onchange=ge;i.onchange=ge;l.oninput=ge;a.oninput=function(){ge();r.value=a.value};a.onchange=function(){ge();r.value=a.value}};
/**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */var ye=function getTarget(e){return typeof e==="string"?document.querySelector(e):e};
/**
   * @param {SweetAlertOptions} params
   */var Ce=function setupAccessibility(e){var t=A();t.setAttribute("role",e.toast?"alert":"dialog");t.setAttribute("aria-live",e.toast?"polite":"assertive");e.toast||t.setAttribute("aria-modal","true")};
/**
   * @param {HTMLElement} targetElement
   */var ke=function setupRTL(e){window.getComputedStyle(e).direction==="rtl"&&ee(C(),s.rtl)};
/**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */var xe=function init(e){var t=ve();if(me())f("SweetAlert2 requires document to initialize");else{var n=document.createElement("div");n.className=s.container;t&&ee(n,s["no-transition"]);$(n,he);var a=ye(e.target);a.appendChild(n);Ce(e);ke(a);be()}};
/**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */var Ae=function parseHtmlToContainer(e,t){e instanceof HTMLElement?t.appendChild(e):_typeof(e)==="object"?Pe(e,t):e&&$(t,e)};
/**
   * @param {any} param
   * @param {HTMLElement} target
   */var Pe=function handleObject(e,t){e.jquery?Be(t,e):$(t,e.toString())};
/**
   * @param {HTMLElement} target
   * @param {any} elem
   */var Be=function handleJqueryElem(e,t){e.textContent="";if(0 in t)for(var n=0;n in t;n++)e.appendChild(t[n].cloneNode(true));else e.appendChild(t.cloneNode(true))};
/**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */var Te=function(){if(me())return false;var e=document.createElement("div");return typeof e.style.webkitAnimation!=="undefined"?"webkitAnimationEnd":typeof e.style.animation!=="undefined"&&"animationend"}();
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Se=function renderActions(e,t){var n=V();var a=H();if(n&&a){t.showConfirmButton||t.showDenyButton||t.showCancelButton?re(n):oe(n);X(n,t,"actions");renderButtons(n,a,t);$(a,t.loaderHtml||"");X(a,t,"loader")}};
/**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */function renderButtons(e,t,n){var a=O();var r=j();var o=L();if(a&&r&&o){renderButton(a,"confirm",n);renderButton(r,"deny",n);renderButton(o,"cancel",n);handleButtonsStyling(a,r,o,n);if(n.reverseButtons)if(n.toast){e.insertBefore(o,a);e.insertBefore(r,a)}else{e.insertBefore(o,t);e.insertBefore(r,t);e.insertBefore(a,t)}}}
/**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */function handleButtonsStyling(e,t,n,a){if(a.buttonsStyling){ee([e,t,n],s.styled);if(a.confirmButtonColor){e.style.backgroundColor=a.confirmButtonColor;ee(e,s["default-outline"])}if(a.denyButtonColor){t.style.backgroundColor=a.denyButtonColor;ee(t,s["default-outline"])}if(a.cancelButtonColor){n.style.backgroundColor=a.cancelButtonColor;ee(n,s["default-outline"])}}else te([e,t,n],s.styled)}
/**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */function renderButton(e,t,n){var a=/** @type {'Confirm' | 'Deny' | 'Cancel'} */d(t);le(e,n["show".concat(a,"Button")],"inline-block");$(e,n["".concat(t,"ButtonText")]||"");e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]||"");e.className=s[t];X(e,n,"".concat(t,"Button"))}
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Ee=function renderCloseButton(e,t){var n=R();if(n){$(n,t.closeButtonHtml||"");X(n,t,"closeButton");le(n,t.showCloseButton);n.setAttribute("aria-label",t.closeButtonAriaLabel||"")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var _e=function renderContainer(e,t){var n=C();if(n){handleBackdropParam(n,t.backdrop);handlePositionParam(n,t.position);handleGrowParam(n,t.grow);X(n,t,"container")}};
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */function handleBackdropParam(e,t){typeof t==="string"?e.style.background=t:t||ee([document.documentElement,document.body],s["no-backdrop"])}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */function handlePositionParam(e,t){if(t)if(t in s)ee(e,s[t]);else{p('The "position" parameter is not valid, defaulting to "center"');ee(e,s.center)}}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */function handleGrowParam(e,t){t&&ee(e,s["grow-".concat(t)])}var Ie={innerParams:new WeakMap,domCache:new WeakMap};
/** @type {InputClass[]} */var Oe=["input","file","range","select","radio","checkbox","textarea"];
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Le=function renderInput(e,t){var n=A();if(n){var a=Ie.innerParams.get(e);var r=!a||t.input!==a.input;Oe.forEach((function(e){var a=ne(n,s[e]);if(a){He(e,t.inputAttributes);a.className=s[e];r&&oe(a)}}));if(t.input){r&&je(t);Ve(t)}}};
/**
   * @param {SweetAlertOptions} params
   */var je=function showInput(e){if(e.input)if(Fe[e.input]){var t=Re(e.input);if(t){var n=Fe[e.input](t,e);re(t);e.inputAutoFocus&&setTimeout((function(){J(n)}))}}else f("Unexpected type of input! Expected ".concat(Object.keys(Fe).join(" | "),', got "').concat(e.input,'"'))};
/**
   * @param {HTMLInputElement} input
   */var Me=function removeAttributes(e){for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].name;["id","type","value","style"].includes(n)||e.removeAttribute(n)}};
/**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */var He=function setAttributes(e,t){var n=A();if(n){var a=G(n,e);if(a){Me(a);for(var r in t)a.setAttribute(r,t[r])}}};
/**
   * @param {SweetAlertOptions} params
   */var Ve=function setCustomClass(e){if(e.input){var t=Re(e.input);t&&X(t,e,"input")}};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */var De=function setInputPlaceholder(e,t){!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)};
/**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */var ze=function setInputLabel(e,t,n){if(n.inputLabel){var a=document.createElement("label");var r=s["input-label"];a.setAttribute("for",e.id);a.className=r;_typeof(n.customClass)==="object"&&ee(a,n.customClass.inputLabel);a.innerText=n.inputLabel;t.insertAdjacentElement("beforebegin",a)}};
/**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */var Re=function getInputContainer(e){var t=A();if(t)return ne(t,s[/** @type {SwalClass} */e]||s.input)};
/**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */var qe=function checkAndSetInputValue(e,t){["string","number"].includes(_typeof(t))?e.value="".concat(t):y(t)||p('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(t),'"'))};
/** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */var Fe={};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Fe.text=Fe.email=Fe.password=Fe.number=Fe.tel=Fe.url=Fe.search=Fe.date=Fe["datetime-local"]=Fe.time=Fe.week=Fe.month=/** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
function(e,t){qe(e,t.inputValue);ze(e,e,t);De(e,t);e.type=t.input;return e};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Fe.file=function(e,t){ze(e,e,t);De(e,t);return e};
/**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Fe.range=function(e,t){var n=e.querySelector("input");var a=e.querySelector("output");qe(n,t.inputValue);n.type=t.input;qe(a,t.inputValue);ze(n,e,t);return e};
/**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */Fe.select=function(e,t){e.textContent="";if(t.inputPlaceholder){var n=document.createElement("option");$(n,t.inputPlaceholder);n.value="";n.disabled=true;n.selected=true;e.appendChild(n)}ze(e,e,t);return e};
/**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */Fe.radio=function(e){e.textContent="";return e};
/**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Fe.checkbox=function(e,t){var n=G(A(),"checkbox");n.value="1";n.checked=Boolean(t.inputValue);var a=e.querySelector("span");$(a,t.inputPlaceholder);return n};
/**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */Fe.textarea=function(e,t){qe(e,t.inputValue);De(e,t);ze(e,e,t);
/**
     * @param {HTMLElement} el
     * @returns {number}
     */var n=function getMargin(e){return parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight)};setTimeout((function(){if("MutationObserver"in window){var a=parseInt(window.getComputedStyle(A()).width);var r=function textareaResizeHandler(){if(document.body.contains(e)){var r=e.offsetWidth+n(e);r>a?A().style.width="".concat(r,"px"):ae(A(),"width",t.width)}};new MutationObserver(r).observe(e,{attributes:true,attributeFilter:["style"]})}}));return e};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Ne=function renderContent(e,t){var n=S();if(n){ie(n);X(n,t,"htmlContainer");if(t.html){Ae(t.html,n);re(n,"block")}else if(t.text){n.textContent=t.text;re(n,"block")}else oe(n);Le(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var We=function renderFooter(e,t){var n=D();if(n){ie(n);le(n,t.footer,"block");t.footer&&Ae(t.footer,n);X(n,t,"footer")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Ue=function renderIcon(e,t){var n=Ie.innerParams.get(e);var a=P();if(a)if(n&&t.icon===n.icon){Xe(a,t);Ke(a,t)}else if(t.icon||t.iconHtml)if(t.icon&&Object.keys(c).indexOf(t.icon)===-1){f('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"'));oe(a)}else{re(a);Xe(a,t);Ke(a,t);ee(a,t.showClass&&t.showClass.icon)}else oe(a)};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */var Ke=function applyStyles(e,t){for(var n=0,a=Object.entries(c);n<a.length;n++){var r=_slicedToArray(a[n],2),o=r[0],i=r[1];t.icon!==o&&te(e,i)}ee(e,t.icon&&c[t.icon]);Ge(e,t);$e();X(e,t,"icon")};var $e=function adjustSuccessIconBackgroundColor(){var e=A();if(e){var t=window.getComputedStyle(e).getPropertyValue("background-color");
/** @type {NodeListOf<HTMLElement>} */var n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(var a=0;a<n.length;a++)n[a].style.backgroundColor=t}};var Ze='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';var Ye='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */var Xe=function setContent(e,t){if(t.icon||t.iconHtml){var n=e.innerHTML;var a="";if(t.iconHtml)a=Je(t.iconHtml);else if(t.icon==="success"){a=Ze;n=n.replace(/ style=".*?"/g,"")}else if(t.icon==="error")a=Ye;else if(t.icon){var r={question:"?",warning:"!",info:"i"};a=Je(r[t.icon])}n.trim()!==a.trim()&&$(e,a)}};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */var Ge=function setColor(e,t){if(t.iconColor){e.style.color=t.iconColor;e.style.borderColor=t.iconColor;for(var n=0,a=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<a.length;n++){var r=a[n];se(e,r,"background-color",t.iconColor)}se(e,".swal2-success-ring","border-color",t.iconColor)}};
/**
   * @param {string} content
   * @returns {string}
   */var Je=function iconContent(e){return'<div class="'.concat(s["icon-content"],'">').concat(e,"</div>")};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Qe=function renderImage(e,t){var n=E();if(n)if(t.imageUrl){re(n,"");n.setAttribute("src",t.imageUrl);n.setAttribute("alt",t.imageAlt||"");ae(n,"width",t.imageWidth);ae(n,"height",t.imageHeight);n.className=s.image;X(n,t,"image")}else oe(n)};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var et=function renderPopup(e,t){var n=C();var a=A();if(n&&a){if(t.toast){ae(n,"width",t.width);a.style.width="100%";var r=H();r&&a.insertBefore(r,P())}else ae(a,"width",t.width);ae(a,"padding",t.padding);t.color&&(a.style.color=t.color);t.background&&(a.style.background=t.background);oe(I());tt(a,t)}};
/**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */var tt=function addClasses(e,t){var n=t.showClass||{};e.className="".concat(s.popup," ").concat(ce(e)?n.popup:"");if(t.toast){ee([document.documentElement,document.body],s["toast-shown"]);ee(e,s.toast)}else ee(e,s.modal);X(e,t,"popup");typeof t.customClass==="string"&&ee(e,t.customClass);t.icon&&ee(e,s["icon-".concat(t.icon)])};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var nt=function renderProgressSteps(e,t){var n=_();if(n){var a=t.progressSteps,r=t.currentProgressStep;if(a&&a.length!==0&&r!==void 0){re(n);n.textContent="";r>=a.length&&p("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");a.forEach((function(e,o){var i=at(e);n.appendChild(i);o===r&&ee(i,s["active-progress-step"]);if(o!==a.length-1){var l=rt(t);n.appendChild(l)}}))}else oe(n)}};
/**
   * @param {string} step
   * @returns {HTMLLIElement}
   */var at=function createStepElement(e){var t=document.createElement("li");ee(t,s["progress-step"]);$(t,e);return t};
/**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */var rt=function createLineElement(e){var t=document.createElement("li");ee(t,s["progress-step-line"]);e.progressStepsDistance&&ae(t,"width",e.progressStepsDistance);return t};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var ot=function renderTitle(e,t){var n=T();if(n){ie(n);le(n,t.title||t.titleText,"block");t.title&&Ae(t.title,n);t.titleText&&(n.innerText=t.titleText);X(n,t,"title")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var it=function render(e,t){et(e,t);_e(e,t);nt(e,t);Ue(e,t);Qe(e,t);ot(e,t);Ee(e,t);Ne(e,t);Se(e,t);We(e,t);var n=A();typeof t.didRender==="function"&&n&&t.didRender(n)};var st=function isVisible(){return ce(A())};var lt=function clickConfirm(){var e;return(e=O())===null||e===void 0?void 0:e.click()};var ct=function clickDeny(){var e;return(e=j())===null||e===void 0?void 0:e.click()};var ut=function clickCancel(){var e;return(e=L())===null||e===void 0?void 0:e.click()};
/** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */
/** @type {Record<DismissReason, DismissReason>} */var dt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"});
/**
   * @param {GlobalState} globalState
   */var pt=function removeKeydownHandler(e){if(e.keydownTarget&&e.keydownHandlerAdded){e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=false}};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */var ft=function addKeydownHandler(e,t,n){pt(e);if(!t.toast){e.keydownHandler=function(e){return vt(t,e,n)};e.keydownTarget=t.keydownListenerCapture?window:A();e.keydownListenerCapture=t.keydownListenerCapture;e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=true}};
/**
   * @param {number} index
   * @param {number} increment
   */var wt=function setFocus(e,t){var n;var a=N();if(a.length){e+=t;e===a.length?e=0:e===-1&&(e=a.length-1);a[e].focus()}else(n=A())===null||n===void 0||n.focus()};var mt=["ArrowRight","ArrowDown"];var ht=["ArrowLeft","ArrowUp"];
/**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */var vt=function keydownHandler(e,t,n){if(e&&!t.isComposing&&t.keyCode!==229){e.stopKeydownPropagation&&t.stopPropagation();t.key==="Enter"?gt(t,e):t.key==="Tab"?bt(t):[].concat(mt,ht).includes(t.key)?yt(t.key):t.key==="Escape"&&Ct(t,e,n)}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */var gt=function handleEnter(e,t){if(v(t.allowEnterKey)){var n=G(A(),t.input);if(e.target&&n&&e.target instanceof HTMLElement&&e.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(t.input))return;lt();e.preventDefault()}}};
/**
   * @param {KeyboardEvent} event
   */var bt=function handleTab(e){var t=e.target;var n=N();var a=-1;for(var r=0;r<n.length;r++)if(t===n[r]){a=r;break}e.shiftKey?wt(a,-1):wt(a,1);e.stopPropagation();e.preventDefault()};
/**
   * @param {string} key
   */var yt=function handleArrows(e){var t=V();var n=O();var a=j();var r=L();if(t&&n&&a&&r){
/** @type HTMLElement[] */
var o=[n,a,r];if(!(document.activeElement instanceof HTMLElement)||o.includes(document.activeElement)){var i=mt.includes(e)?"nextElementSibling":"previousElementSibling";var s=document.activeElement;if(s){for(var l=0;l<t.children.length;l++){s=s[i];if(!s)return;if(s instanceof HTMLButtonElement&&ce(s))break}s instanceof HTMLButtonElement&&s.focus()}}}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */var Ct=function handleEsc(e,t,n){if(v(t.allowEscapeKey)){e.preventDefault();n(dt.esc)}};var kt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};var xt=function setAriaHidden(){var e=C();var t=Array.from(document.body.children);t.forEach((function(t){if(!t.contains(e)){t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||"");t.setAttribute("aria-hidden","true")}}))};var At=function unsetAriaHidden(){var e=Array.from(document.body.children);e.forEach((function(e){if(e.hasAttribute("data-previous-aria-hidden")){e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||"");e.removeAttribute("data-previous-aria-hidden")}else e.removeAttribute("aria-hidden")}))};var Pt=typeof window!=="undefined"&&!!window.GestureEvent;var Bt=function iOSfix(){if(Pt&&!Z(document.body,s.iosfix)){var e=document.body.scrollTop;document.body.style.top="".concat(e*-1,"px");ee(document.body,s.iosfix);Tt()}};var Tt=function lockBodyScroll(){var e=C();if(e){
/** @type {boolean} */
var t;
/**
     * @param {TouchEvent} event
     */e.ontouchstart=function(e){t=St(e)};
/**
     * @param {TouchEvent} event
     */e.ontouchmove=function(e){if(t){e.preventDefault();e.stopPropagation()}}}};
/**
   * @param {TouchEvent} event
   * @returns {boolean}
   */var St=function shouldPreventTouchMove(e){var t=e.target;var n=C();var a=S();return!(!n||!a)&&(!Et(e)&&!_t(e)&&(t===n||!de(n)&&t instanceof HTMLElement&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&(!de(a)||!a.contains(t))))};
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */var Et=function isStylus(e){return e.touches&&e.touches.length&&e.touches[0].touchType==="stylus"};
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */var _t=function isZoom(e){return e.touches&&e.touches.length>1};var It=function undoIOSfix(){if(Z(document.body,s.iosfix)){var e=parseInt(document.body.style.top,10);te(document.body,s.iosfix);document.body.style.top="";document.body.scrollTop=e*-1}};
/**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */var Ot=function measureScrollbar(){var e=document.createElement("div");e.className=s["scrollbar-measure"];document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;document.body.removeChild(e);return t};
/**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */var Lt=null;
/**
   * @param {string} initialBodyOverflow
   */var jt=function replaceScrollbarWithPadding(e){if(Lt===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")){Lt=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));document.body.style.paddingRight="".concat(Lt+Ot(),"px")}};var Mt=function undoReplaceScrollbarWithPadding(){if(Lt!==null){document.body.style.paddingRight="".concat(Lt,"px");Lt=null}};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */function removePopupAndResetState(e,t,a,o){if(U())qt(e,o);else{r(a).then((function(){return qt(e,o)}));pt(n)}if(Pt){t.setAttribute("style","display:none !important");t.removeAttribute("class");t.innerHTML=""}else t.remove();if(W()){Mt();It();At()}removeBodyClasses()}function removeBodyClasses(){te([document.documentElement,document.body],[s.shown,s["height-auto"],s["no-backdrop"],s["toast-shown"]])}
/**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */function close(t){t=Dt(t);var n=kt.swalPromiseResolve.get(this||e);var a=Ht(this||e);if((this||e).isAwaitingPromise){if(!t.isDismissed){Vt(this||e);n(t)}}else a&&n(t)}var Ht=function triggerClosePopup(e){var t=A();if(!t)return false;var n=Ie.innerParams.get(e);if(!n||Z(t,n.hideClass.popup))return false;te(t,n.showClass.popup);ee(t,n.hideClass.popup);var a=C();te(a,n.showClass.backdrop);ee(a,n.hideClass.backdrop);zt(e,t,n);return true};
/**
   * @param {any} error
   */function rejectPromise(t){var n=kt.swalPromiseReject.get(this||e);Vt(this||e);n&&n(t)}
/**
   * @param {SweetAlert} instance
   */var Vt=function handleAwaitingPromise(e){if(e.isAwaitingPromise){delete e.isAwaitingPromise;Ie.innerParams.get(e)||e._destroy()}};
/**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */var Dt=function prepareResolveValue(e){return typeof e==="undefined"?{isConfirmed:false,isDenied:false,isDismissed:true}:Object.assign({isConfirmed:false,isDenied:false,isDismissed:false},e)};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */var zt=function handlePopupAnimation(e,t,n){var a=C();var r=Te&&pe(t);typeof n.willClose==="function"&&n.willClose(t);r?Rt(e,t,a,n.returnFocus,n.didClose):removePopupAndResetState(e,a,n.returnFocus,n.didClose)};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */var Rt=function animatePopup(e,t,a,r,o){if(Te){n.swalCloseEventFinishedCallback=removePopupAndResetState.bind(null,e,a,r,o);t.addEventListener(Te,(function(e){if(e.target===t){n.swalCloseEventFinishedCallback();delete n.swalCloseEventFinishedCallback}}))}};
/**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */var qt=function triggerDidCloseAndDispose(e,t){setTimeout((function(){typeof t==="function"&&t.bind(e.params)();e._destroy&&e._destroy()}))};
/**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */var Ft=function showLoading(e){var t=A();t||new Pa;t=A();if(t){var n=H();U()?oe(P()):Nt(t,e);re(n);t.setAttribute("data-loading","true");t.setAttribute("aria-busy","true");t.focus()}};
/**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */var Nt=function replaceButton(e,t){var n=V();var a=H();if(n&&a){!t&&ce(O())&&(t=O());re(n);if(t){oe(t);a.setAttribute("data-button-to-replace",t.className);n.insertBefore(a,t)}ee([e,n],s.loading)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Wt=function handleInputOptionsAndValue(e,t){if(t.input==="select"||t.input==="radio")Yt(e,t);else if(["text","email","number","tel","textarea"].some((function(e){return e===t.input}))&&(g(t.inputValue)||y(t.inputValue))){Ft(O());Xt(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */var Ut=function getInputValue(e,t){var n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Kt(n);case"radio":return $t(n);case"file":return Zt(n);default:return t.inputAutoTrim?n.value.trim():n.value}};
/**
   * @param {HTMLInputElement} input
   * @returns {number}
   */var Kt=function getCheckboxValue(e){return e.checked?1:0};
/**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */var $t=function getRadioValue(e){return e.checked?e.value:null};
/**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */var Zt=function getFileValue(e){return e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Yt=function handleInputOptions(e,t){var n=A();if(n){
/**
     * @param {Record<string, any>} inputOptions
     */
var a=function processInputOptions(e){t.input==="select"?populateSelectOptions(n,Gt(e),t):t.input==="radio"&&populateRadioOptions(n,Gt(e),t)};if(g(t.inputOptions)||y(t.inputOptions)){Ft(O());b(t.inputOptions).then((function(t){e.hideLoading();a(t)}))}else _typeof(t.inputOptions)==="object"?a(t.inputOptions):f("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(t.inputOptions)))}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Xt=function handleInputValue(e,t){var n=e.getInput();if(n){oe(n);b(t.inputValue).then((function(a){n.value=t.input==="number"?"".concat(parseFloat(a)||0):"".concat(a);re(n);n.focus();e.hideLoading()})).catch((function(t){f("Error in inputValue promise: ".concat(t));n.value="";re(n);n.focus();e.hideLoading()}))}};
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function populateSelectOptions(e,t,n){var a=ne(e,s.select);if(a){
/**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
var r=function renderOption(e,t,a){var r=document.createElement("option");r.value=a;$(r,t);r.selected=Jt(a,n.inputValue);e.appendChild(r)};t.forEach((function(e){var t=e[0];var n=e[1];if(Array.isArray(n)){var o=document.createElement("optgroup");o.label=t;o.disabled=false;a.appendChild(o);n.forEach((function(e){return r(o,e[1],e[0])}))}else r(a,n,t)}));a.focus()}}
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function populateRadioOptions(e,t,n){var a=ne(e,s.radio);if(a){t.forEach((function(e){var t=e[0];var r=e[1];var o=document.createElement("input");var i=document.createElement("label");o.type="radio";o.name=s.radio;o.value=t;Jt(t,n.inputValue)&&(o.checked=true);var l=document.createElement("span");$(l,r);l.className=s.label;i.appendChild(o);i.appendChild(l);a.appendChild(i)}));var r=a.querySelectorAll("input");r.length&&r[0].focus()}}
/**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */var Gt=function formatInputOptions(e){
/** @type {InputOptionFlattened[]} */
var t=[];e instanceof Map?e.forEach((function(e,n){var a=e;_typeof(a)==="object"&&(a=formatInputOptions(a));t.push([n,a])})):Object.keys(e).forEach((function(n){var a=e[n];_typeof(a)==="object"&&(a=formatInputOptions(a));t.push([n,a])}));return t};
/**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */var Jt=function isSelected(e,t){return!!t&&t.toString()===e.toString()};var Qt=void 0;
/**
   * @param {SweetAlert} instance
   */var en=function handleConfirmButtonClick(e){var t=Ie.innerParams.get(e);e.disableButtons();t.input?an(e,"confirm"):cn(e,true)};
/**
   * @param {SweetAlert} instance
   */var tn=function handleDenyButtonClick(e){var t=Ie.innerParams.get(e);e.disableButtons();t.returnInputValueOnDeny?an(e,"deny"):on(e,false)};
/**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */var nn=function handleCancelButtonClick(e,t){e.disableButtons();t(dt.cancel)};
/**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */var an=function handleConfirmOrDenyWithInput(e,t){var n=Ie.innerParams.get(e);if(n.input){var a=e.getInput();var r=Ut(e,n);if(n.inputValidator)rn(e,r,t);else if(a&&!a.checkValidity()){e.enableButtons();e.showValidationMessage(n.validationMessage||a.validationMessage)}else t==="deny"?on(e,r):cn(e,r)}else f('The "input" parameter is needed to be set when using returnInputValueOn'.concat(d(t)))};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */var rn=function handleInputValidator(e,t,n){var a=Ie.innerParams.get(e);e.disableInput();var r=Promise.resolve().then((function(){return b(a.inputValidator(t,a.validationMessage))}));r.then((function(a){e.enableButtons();e.enableInput();a?e.showValidationMessage(a):n==="deny"?on(e,t):cn(e,t)}))};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */var on=function deny(e,t){var n=Ie.innerParams.get(e||Qt);n.showLoaderOnDeny&&Ft(j());if(n.preDeny){e.isAwaitingPromise=true;var a=Promise.resolve().then((function(){return b(n.preDeny(t,n.validationMessage))}));a.then((function(n){if(n===false){e.hideLoading();Vt(e)}else e.close({isDenied:true,value:typeof n==="undefined"?t:n})})).catch((function(t){return ln(e||Qt,t)}))}else e.close({isDenied:true,value:t})};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */var sn=function succeedWith(e,t){e.close({isConfirmed:true,value:t})};
/**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */var ln=function rejectWith(e,t){e.rejectPromise(t)};
/**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */var cn=function confirm(e,t){var n=Ie.innerParams.get(e||Qt);n.showLoaderOnConfirm&&Ft();if(n.preConfirm){e.resetValidationMessage();e.isAwaitingPromise=true;var a=Promise.resolve().then((function(){return b(n.preConfirm(t,n.validationMessage))}));a.then((function(n){if(ce(I())||n===false){e.hideLoading();Vt(e)}else sn(e,typeof n==="undefined"?t:n)})).catch((function(t){return ln(e||Qt,t)}))}else sn(e,t)};function hideLoading(){var t=Ie.innerParams.get(this||e);if(t){var n=Ie.domCache.get(this||e);oe(n.loader);U()?t.icon&&re(P()):un(n);te([n.popup,n.actions],s.loading);n.popup.removeAttribute("aria-busy");n.popup.removeAttribute("data-loading");n.confirmButton.disabled=false;n.denyButton.disabled=false;n.cancelButton.disabled=false}}var un=function showRelatedButton(e){var t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?re(t[0],"inline-block"):ue()&&oe(e.actions)};
/**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */function getInput(){var t=Ie.innerParams.get(this||e);var n=Ie.domCache.get(this||e);return n?G(n.popup,t.input):null}
/**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */function setButtonsDisabled(e,t,n){var a=Ie.domCache.get(e);t.forEach((function(e){a[e].disabled=n}))}
/**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */function setInputDisabled(e,t){var n=A();if(n&&e)if(e.type==="radio"){
/** @type {NodeListOf<HTMLInputElement>} */
var a=n.querySelectorAll('[name="'.concat(s.radio,'"]'));for(var r=0;r<a.length;r++)a[r].disabled=t}else e.disabled=t}function enableButtons(){setButtonsDisabled(this||e,["confirmButton","denyButton","cancelButton"],false)}function disableButtons(){setButtonsDisabled(this||e,["confirmButton","denyButton","cancelButton"],true)}function enableInput(){setInputDisabled(this.getInput(),false)}function disableInput(){setInputDisabled(this.getInput(),true)}
/**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */function showValidationMessage(t){var n=Ie.domCache.get(this||e);var a=Ie.innerParams.get(this||e);$(n.validationMessage,t);n.validationMessage.className=s["validation-message"];a.customClass&&a.customClass.validationMessage&&ee(n.validationMessage,a.customClass.validationMessage);re(n.validationMessage);var r=this.getInput();if(r){r.setAttribute("aria-invalid","true");r.setAttribute("aria-describedby",s["validation-message"]);J(r);ee(r,s.inputerror)}}function resetValidationMessage(){var t=Ie.domCache.get(this||e);t.validationMessage&&oe(t.validationMessage);var n=this.getInput();if(n){n.removeAttribute("aria-invalid");n.removeAttribute("aria-describedby");te(n,s.inputerror)}}var dn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:false,animation:true,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:true,heightAuto:true,allowOutsideClick:true,allowEscapeKey:true,allowEnterKey:true,stopKeydownPropagation:true,keydownListenerCapture:false,showConfirmButton:true,showDenyButton:false,showCancelButton:false,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:true,reverseButtons:false,focusConfirm:true,focusDeny:false,focusCancel:false,returnFocus:true,showCloseButton:false,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:false,showLoaderOnDeny:false,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:false,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:true,inputAutoTrim:true,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:false,validationMessage:void 0,grow:false,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:true};var pn=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"];
/** @type {Record<string, string | undefined>} */var fn={allowEnterKey:void 0};var wn=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"];
/**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */var mn=function isValidParameter(e){return Object.prototype.hasOwnProperty.call(dn,e)};
/**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */var hn=function isUpdatableParameter(e){return pn.indexOf(e)!==-1};
/**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */var vn=function isDeprecatedParameter(e){return fn[e]};
/**
   * @param {string} param
   */var gn=function checkIfParamIsValid(e){mn(e)||p('Unknown parameter "'.concat(e,'"'))};
/**
   * @param {string} param
   */var bn=function checkIfToastParamIsValid(e){wn.includes(e)&&p('The parameter "'.concat(e,'" is incompatible with toasts'))};
/**
   * @param {string} param
   */var yn=function checkIfParamIsDeprecated(e){var t=vn(e);t&&h(e,t)};
/**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */var Cn=function showWarningsForParams(e){e.backdrop===false&&e.allowOutsideClick&&p('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var t in e){gn(t);e.toast&&bn(t);yn(t)}};
/**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */function update(t){var n=A();var a=Ie.innerParams.get(this||e);if(n&&!Z(n,a.hideClass.popup)){var r=kn(t);var o=Object.assign({},a,r);it(this||e,o);Ie.innerParams.set(this||e,o);Object.defineProperties(this||e,{params:{value:Object.assign({},(this||e).params,t),writable:false,enumerable:true}})}else p("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.")}
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */var kn=function filterValidParams(e){var t={};Object.keys(e).forEach((function(n){hn(n)?t[n]=e[n]:p("Invalid parameter to update: ".concat(n))}));return t};function _destroy(){var t=Ie.domCache.get(this||e);var a=Ie.innerParams.get(this||e);if(a){if(t.popup&&n.swalCloseEventFinishedCallback){n.swalCloseEventFinishedCallback();delete n.swalCloseEventFinishedCallback}typeof a.didDestroy==="function"&&a.didDestroy();xn(this||e)}else An(this||e)}
/**
   * @param {SweetAlert} instance
   */var xn=function disposeSwal(e){An(e);delete e.params;delete n.keydownHandler;delete n.keydownTarget;delete n.currentInstance};
/**
   * @param {SweetAlert} instance
   */var An=function disposeWeakMaps(e){if(e.isAwaitingPromise){Pn(Ie,e);e.isAwaitingPromise=true}else{Pn(kt,e);Pn(Ie,e);delete e.isAwaitingPromise;delete e.disableButtons;delete e.enableButtons;delete e.getInput;delete e.disableInput;delete e.enableInput;delete e.hideLoading;delete e.disableLoading;delete e.showValidationMessage;delete e.resetValidationMessage;delete e.close;delete e.closePopup;delete e.closeModal;delete e.closeToast;delete e.rejectPromise;delete e.update;delete e._destroy}};
/**
   * @param {object} obj
   * @param {SweetAlert} instance
   */var Pn=function unsetWeakMaps(e,t){for(var n in e)e[n].delete(t)};var Bn=Object.freeze({__proto__:null,_destroy:_destroy,close:close,closeModal:close,closePopup:close,closeToast:close,disableButtons:disableButtons,disableInput:disableInput,disableLoading:hideLoading,enableButtons:enableButtons,enableInput:enableInput,getInput:getInput,handleAwaitingPromise:Vt,hideLoading:hideLoading,rejectPromise:rejectPromise,resetValidationMessage:resetValidationMessage,showValidationMessage:showValidationMessage,update:update});
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */var Tn=function handlePopupClick(e,t,n){if(e.toast)Sn(e,t,n);else{In(t);On(t);Ln(e,t,n)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */var Sn=function handleToastClick(e,t,n){t.popup.onclick=function(){e&&(En(e)||e.timer||e.input)||n(dt.close)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */var En=function isAnyButtonShown(e){return!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton)};var _n=false;
/**
   * @param {DomCache} domCache
   */var In=function handleModalMousedown(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=function(){};t.target===e.container&&(_n=true)}}};
/**
   * @param {DomCache} domCache
   */var On=function handleContainerMousedown(e){e.container.onmousedown=function(t){t.target===e.container&&t.preventDefault();e.popup.onmouseup=function(t){e.popup.onmouseup=function(){};(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(_n=true)}}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */var Ln=function handleModalClick(e,t,n){t.container.onclick=function(a){_n?_n=false:a.target===t.container&&v(e.allowOutsideClick)&&n(dt.backdrop)}};var jn=function isJqueryElement(e){return _typeof(e)==="object"&&e.jquery};var Mn=function isElement(e){return e instanceof Element||jn(e)};var Hn=function argsToParams(e){var t={};_typeof(e[0])!=="object"||Mn(e[0])?["title","html","icon"].forEach((function(n,a){var r=e[a];typeof r==="string"||Mn(r)?t[n]=r:r!==void 0&&f("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(_typeof(r)))})):Object.assign(t,e[0]);return t};
/**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */function fire(){var t=this||e;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return _construct(t,a)}
/**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */function mixin(t){var n=function(n){function MixinSwal(){_classCallCheck(this||e,MixinSwal);return _callSuper(this||e,MixinSwal,arguments)}_inherits(MixinSwal,n);return _createClass(MixinSwal,[{key:"_main",value:function _main(n,a){return _get(_getPrototypeOf(MixinSwal.prototype),"_main",this||e).call(this||e,n,Object.assign({},t,a))}}])}(this||e);return n}
/**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */var Vn=function getTimerLeft(){return n.timeout&&n.timeout.getTimerLeft()};
/**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */var Dn=function stopTimer(){if(n.timeout){we();return n.timeout.stop()}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */var zn=function resumeTimer(){if(n.timeout){var e=n.timeout.start();fe(e);return e}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */var Rn=function toggleTimer(){var e=n.timeout;return e&&(e.running?Dn():zn())};
/**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */var qn=function increaseTimer(e){if(n.timeout){var t=n.timeout.increase(e);fe(t,true);return t}};
/**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */var Fn=function isTimerRunning(){return!!(n.timeout&&n.timeout.isRunning())};var Nn=false;var Wn={};
/**
   * @param {string} attr
   */function bindClickHandler(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Wn[t]=this||e;if(!Nn){document.body.addEventListener("click",Un);Nn=true}}var Un=function bodyClickListener(e){for(var t=e.target;t&&t!==document;t=t.parentNode)for(var n in Wn){var a=t.getAttribute(n);if(a){Wn[n].fire({template:a});return}}};var Kn=Object.freeze({__proto__:null,argsToParams:Hn,bindClickHandler:bindClickHandler,clickCancel:ut,clickConfirm:lt,clickDeny:ct,enableLoading:Ft,fire:fire,getActions:V,getCancelButton:L,getCloseButton:R,getConfirmButton:O,getContainer:C,getDenyButton:j,getFocusableElements:N,getFooter:D,getHtmlContainer:S,getIcon:P,getIconContent:B,getImage:E,getInputLabel:M,getLoader:H,getPopup:A,getProgressSteps:_,getTimerLeft:Vn,getTimerProgressBar:z,getTitle:T,getValidationMessage:I,increaseTimer:qn,isDeprecatedParameter:vn,isLoading:K,isTimerRunning:Fn,isUpdatableParameter:hn,isValidParameter:mn,isVisible:st,mixin:mixin,resumeTimer:zn,showLoading:Ft,stopTimer:Dn,toggleTimer:Rn});var $n=function(){
/**
     * @param {Function} callback
     * @param {number} delay
     */
function Timer(t,n){_classCallCheck(this||e,Timer);(this||e).callback=t;(this||e).remaining=n;(this||e).running=false;this.start()}
/**
     * @returns {number}
     */return _createClass(Timer,[{key:"start",value:function start(){if(!(this||e).running){(this||e).running=true;(this||e).started=new Date;(this||e).id=setTimeout((this||e).callback,(this||e).remaining)}return(this||e).remaining}
/**
       * @returns {number}
       */},{key:"stop",value:function stop(){if((this||e).started&&(this||e).running){(this||e).running=false;clearTimeout((this||e).id);(this||e).remaining-=(new Date).getTime()-(this||e).started.getTime()}return(this||e).remaining}
/**
       * @param {number} n
       * @returns {number}
       */},{key:"increase",value:function increase(t){var n=(this||e).running;n&&this.stop();(this||e).remaining+=t;n&&this.start();return(this||e).remaining}
/**
       * @returns {number}
       */},{key:"getTimerLeft",value:function getTimerLeft(){if((this||e).running){this.stop();this.start()}return(this||e).remaining}
/**
       * @returns {boolean}
       */},{key:"isRunning",value:function isRunning(){return(this||e).running}}])}();var Zn=["swal-title","swal-html","swal-footer"];
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */var Yn=function getTemplateParams(e){var t=typeof e.template==="string"?/** @type {HTMLTemplateElement} */document.querySelector(e.template):e.template;if(!t)return{};
/** @type {DocumentFragment} */var n=t.content;aa(n);var a=Object.assign(Xn(n),Gn(n),Jn(n),Qn(n),ea(n),ta(n),na(n,Zn));return a};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */var Xn=function getSwalParams(e){
/** @type {Record<string, any>} */
var t={};
/** @type {HTMLElement[]} */var n=Array.from(e.querySelectorAll("swal-param"));n.forEach((function(e){ra(e,["name","value"]);var n=/** @type {keyof SweetAlertOptions} */e.getAttribute("name");var a=e.getAttribute("value");n&&a&&(typeof dn[n]==="boolean"?t[n]=a!=="false":_typeof(dn[n])==="object"?t[n]=JSON.parse(a):t[n]=a)}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */var Gn=function getSwalFunctionParams(e){
/** @type {Record<string, any>} */
var t={};
/** @type {HTMLElement[]} */var n=Array.from(e.querySelectorAll("swal-function-param"));n.forEach((function(e){var n=/** @type {keyof SweetAlertOptions} */e.getAttribute("name");var a=e.getAttribute("value");n&&a&&(t[n]=new Function("return ".concat(a))())}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */var Jn=function getSwalButtons(e){
/** @type {Record<string, any>} */
var t={};
/** @type {HTMLElement[]} */var n=Array.from(e.querySelectorAll("swal-button"));n.forEach((function(e){ra(e,["type","color","aria-label"]);var n=e.getAttribute("type");if(n&&["confirm","cancel","deny"].includes(n)){t["".concat(n,"ButtonText")]=e.innerHTML;t["show".concat(d(n),"Button")]=true;e.hasAttribute("color")&&(t["".concat(n,"ButtonColor")]=e.getAttribute("color"));e.hasAttribute("aria-label")&&(t["".concat(n,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */var Qn=function getSwalImage(e){var t={};
/** @type {HTMLElement | null} */var n=e.querySelector("swal-image");if(n){ra(n,["src","width","height","alt"]);n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")||void 0);n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")||void 0);n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")||void 0);n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt")||void 0)}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */var ea=function getSwalIcon(e){var t={};
/** @type {HTMLElement | null} */var n=e.querySelector("swal-icon");if(n){ra(n,["type","color"]);n.hasAttribute("type")&&(t.icon=n.getAttribute("type"));n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color"));t.iconHtml=n.innerHTML}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */var ta=function getSwalInput(e){
/** @type {Record<string, any>} */
var t={};
/** @type {HTMLElement | null} */var n=e.querySelector("swal-input");if(n){ra(n,["type","label","placeholder","value"]);t.input=n.getAttribute("type")||"text";n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label"));n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder"));n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value"))}
/** @type {HTMLElement[]} */var a=Array.from(e.querySelectorAll("swal-input-option"));if(a.length){t.inputOptions={};a.forEach((function(e){ra(e,["value"]);var n=e.getAttribute("value");if(n){var a=e.innerHTML;t.inputOptions[n]=a}}))}return t};
/**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */var na=function getSwalStringParams(e,t){
/** @type {Record<string, any>} */
var n={};for(var a in t){var r=t[a];
/** @type {HTMLElement | null} */var o=e.querySelector(r);if(o){ra(o,[]);n[r.replace(/^swal-/,"")]=o.innerHTML.trim()}}return n};
/**
   * @param {DocumentFragment} templateContent
   */var aa=function showWarningsForElements(e){var t=Zn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((function(e){var n=e.tagName.toLowerCase();t.includes(n)||p("Unrecognized element <".concat(n,">"))}))};
/**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */var ra=function showWarningsForAttributes(e,t){Array.from(e.attributes).forEach((function(n){t.indexOf(n.name)===-1&&p(['Unrecognized attribute "'.concat(n.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])}))};var oa=10;
/**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */var ia=function openPopup(e){var t=C();var a=A();typeof e.willOpen==="function"&&e.willOpen(a);var r=window.getComputedStyle(document.body);var o=r.overflowY;ua(t,a,e);setTimeout((function(){la(t,a)}),oa);if(W()){ca(t,e.scrollbarPadding,o);xt()}U()||n.previousActiveElement||(n.previousActiveElement=document.activeElement);typeof e.didOpen==="function"&&setTimeout((function(){return e.didOpen(a)}));te(t,s["no-transition"])};
/**
   * @param {AnimationEvent} event
   */var sa=function swalOpenAnimationFinished(e){var t=A();if(e.target===t&&Te){var n=C();t.removeEventListener(Te,swalOpenAnimationFinished);n.style.overflowY="auto"}};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */var la=function setScrollingVisibility(e,t){if(Te&&pe(t)){e.style.overflowY="hidden";t.addEventListener(Te,sa)}else e.style.overflowY="auto"};
/**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */var ca=function fixScrollContainer(e,t,n){Bt();t&&n!=="hidden"&&jt(n);setTimeout((function(){e.scrollTop=0}))};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */var ua=function addClasses(e,t,n){ee(e,n.showClass.backdrop);if(n.animation){t.style.setProperty("opacity","0","important");re(t,"grid");setTimeout((function(){ee(t,n.showClass.popup);t.style.removeProperty("opacity")}),oa)}else re(t,"grid");ee([document.documentElement,document.body],s.shown);n.heightAuto&&n.backdrop&&!n.toast&&ee([document.documentElement,document.body],s["height-auto"])};var da={
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
email:function email(e,t){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address")},
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
url:function url(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")}};
/**
   * @param {SweetAlertOptions} params
   */function setDefaultInputValidators(e){if(!e.inputValidator){e.input==="email"&&(e.inputValidator=da.email);e.input==="url"&&(e.inputValidator=da.url)}}
/**
   * @param {SweetAlertOptions} params
   */function validateCustomTargetElement(e){if(!e.target||typeof e.target==="string"&&!document.querySelector(e.target)||typeof e.target!=="string"&&!e.target.appendChild){p('Target parameter is not valid, defaulting to "body"');e.target="body"}}
/**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */function setParameters(e){setDefaultInputValidators(e);e.showLoaderOnConfirm&&!e.preConfirm&&p("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");validateCustomTargetElement(e);typeof e.title==="string"&&(e.title=e.title.split("\n").join("<br />"));xe(e)}
/** @type {SweetAlert} */var pa;var fa=new WeakMap;var wa=function(){
/**
     * @param {...any} args
     * @this {SweetAlert}
     */
function SweetAlert(){_classCallCheck(this||e,SweetAlert);
/**
       * @type {Promise<SweetAlertResult>}
       */_classPrivateFieldInitSpec(this||e,fa,void 0);if(typeof window!=="undefined"){pa=this||e;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=Object.freeze((this||e).constructor.argsToParams(n));
/** @type {Readonly<SweetAlertOptions>} */(this||e).params=r;
/** @type {boolean} */(this||e).isAwaitingPromise=false;_classPrivateFieldSet2(fa,this||e,this._main(pa.params))}}return _createClass(SweetAlert,[{key:"_main",value:function _main(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Cn(Object.assign({},t,e));if(n.currentInstance){var a=kt.swalPromiseResolve.get(n.currentInstance);var r=n.currentInstance.isAwaitingPromise;n.currentInstance._destroy();r||a({isDismissed:true});W()&&At()}n.currentInstance=pa;var o=ha(e,t);setParameters(o);Object.freeze(o);if(n.timeout){n.timeout.stop();delete n.timeout}clearTimeout(n.restoreFocusTimeout);var i=va(pa);it(pa,o);Ie.innerParams.set(pa,o);return ma(pa,i,o)}},{key:"then",value:function then(t){return _classPrivateFieldGet2(fa,this||e).then(t)}},{key:"finally",value:function _finally(t){return _classPrivateFieldGet2(fa,this||e).finally(t)}}])}();
/**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */var ma=function swalPromise(e,t,a){return new Promise((function(r,o){
/**
       * @param {DismissReason} dismiss
       */
var i=function dismissWith(t){e.close({isDismissed:true,dismiss:t})};kt.swalPromiseResolve.set(e,r);kt.swalPromiseReject.set(e,o);t.confirmButton.onclick=function(){en(e)};t.denyButton.onclick=function(){tn(e)};t.cancelButton.onclick=function(){nn(e,i)};t.closeButton.onclick=function(){i(dt.close)};Tn(a,t,i);ft(n,a,i);Wt(e,a);ia(a);ga(n,a,i);ba(t,a);setTimeout((function(){t.container.scrollTop=0}))}))};
/**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */var ha=function prepareParams(e,t){var n=Yn(e);var a=Object.assign({},dn,t,n,e);a.showClass=Object.assign({},dn.showClass,a.showClass);a.hideClass=Object.assign({},dn.hideClass,a.hideClass);if(a.animation===false){a.showClass={backdrop:"swal2-noanimation"};a.hideClass={}}return a};
/**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */var va=function populateDomCache(e){var t={popup:A(),container:C(),actions:V(),confirmButton:O(),denyButton:j(),cancelButton:L(),loader:H(),closeButton:R(),validationMessage:I(),progressSteps:_()};Ie.domCache.set(e,t);return t};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */var ga=function setupTimer(e,t,n){var a=z();oe(a);if(t.timer){e.timeout=new $n((function(){n("timer");delete e.timeout}),t.timer);if(t.timerProgressBar){re(a);X(a,t,"timerProgressBar");setTimeout((function(){e.timeout&&e.timeout.running&&fe(t.timer)}))}}};
/**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */var ba=function initFocus(e,t){if(!t.toast)if(v(t.allowEnterKey))ya(e)||Ca(e,t)||wt(-1,1);else{h("allowEnterKey");ka()}};
/**
   * @param {DomCache} domCache
   * @returns {boolean}
   */var ya=function focusAutofocus(e){var t=e.popup.querySelectorAll("[autofocus]");var n,a=_createForOfIteratorHelper(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r instanceof HTMLElement&&ce(r)){r.focus();return true}}}catch(e){a.e(e)}finally{a.f()}return false};
/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */var Ca=function focusButton(e,t){if(t.focusDeny&&ce(e.denyButton)){e.denyButton.focus();return true}if(t.focusCancel&&ce(e.cancelButton)){e.cancelButton.focus();return true}if(t.focusConfirm&&ce(e.confirmButton)){e.confirmButton.focus();return true}return false};var ka=function blurActiveElement(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur==="function"&&document.activeElement.blur()};if(typeof window!=="undefined"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var xa=new Date;var Aa=localStorage.getItem("swal-initiation");Aa?(xa.getTime()-Date.parse(Aa))/864e5>3&&setTimeout((function(){document.body.style.pointerEvents="none";var e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";e.loop=true;document.body.appendChild(e);setTimeout((function(){e.play().catch((function(){}))}),2500)}),500):localStorage.setItem("swal-initiation","".concat(xa))}wa.prototype.disableButtons=disableButtons;wa.prototype.enableButtons=enableButtons;wa.prototype.getInput=getInput;wa.prototype.disableInput=disableInput;wa.prototype.enableInput=enableInput;wa.prototype.hideLoading=hideLoading;wa.prototype.disableLoading=hideLoading;wa.prototype.showValidationMessage=showValidationMessage;wa.prototype.resetValidationMessage=resetValidationMessage;wa.prototype.close=close;wa.prototype.closePopup=close;wa.prototype.closeModal=close;wa.prototype.closeToast=close;wa.prototype.rejectPromise=rejectPromise;wa.prototype.update=update;wa.prototype._destroy=_destroy;Object.assign(wa,Kn);Object.keys(Bn).forEach((function(e){
/**
     * @param {...any} args
     * @returns {any | undefined}
     */
wa[e]=function(){if(pa&&pa[e]){var t;return(t=pa)[e].apply(t,arguments)}return null}}));wa.DismissReason=dt;wa.version="11.12.3";var Pa=wa;Pa.default=Pa;return Pa}));typeof t!=="undefined"&&t.Sweetalert2&&(t.swal=t.sweetAlert=t.Swal=t.SweetAlert=t.Sweetalert2);"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');var n=t;export{n as default};

