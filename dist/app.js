(function(d){t=d.createElement('script');t.src='dist/vendor.js';d.head.appendChild(t);t.onload=(function(){(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["select"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["select"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/mdc-select/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/mdc-base/component.ts":
/*!****************************************!*\
  !*** ./packages/mdc-base/component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __read = this && this.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = this && this.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-base/foundation.ts");
var MDCComponent = /** @class */function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, __spread(args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new foundation_1.MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root_.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root_.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) {
            shouldBubble = false;
        }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData
            });
        } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}();
exports.MDCComponent = MDCComponent;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCComponent;

/***/ }),

/***/ "./packages/mdc-base/foundation.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-base/foundation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var MDCFoundation = /** @class */function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) {
            adapter = {};
        }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}();
exports.MDCFoundation = MDCFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCFoundation;

/***/ }),

/***/ "./packages/mdc-dom/events.ts":
/*!************************************!*\
  !*** ./packages/mdc-dom/events.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) {
        globalObj = window;
    }
    if (forceRefresh === void 0) {
        forceRefresh = false;
    }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () {
                return undefined;
            }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                }
            });
        } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
exports.applyPassive = applyPassive;

/***/ }),

/***/ "./packages/mdc-dom/ponyfill.ts":
/*!**************************************!*\
  !*** ./packages/mdc-dom/ponyfill.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
exports.closest = closest;
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
exports.matches = matches;

/***/ }),

/***/ "./packages/mdc-floating-label/component.ts":
/*!**************************************************!*\
  !*** ./packages/mdc-floating-label/component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-floating-label/foundation.ts");
var MDCFloatingLabel = /** @class */function (_super) {
    __extends(MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation_.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation_.float(shouldFloat);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation_.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            getWidth: function getWidth() {
                return _this.root_.scrollWidth;
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this.unlisten(evtType, handler);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_1.MDCFloatingLabelFoundation(adapter);
    };
    return MDCFloatingLabel;
}(component_1.MDCComponent);
exports.MDCFloatingLabel = MDCFloatingLabel;

/***/ }),

/***/ "./packages/mdc-floating-label/constants.ts":
/*!**************************************************!*\
  !*** ./packages/mdc-floating-label/constants.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

/***/ }),

/***/ "./packages/mdc-floating-label/foundation.ts":
/*!***************************************************!*\
  !*** ./packages/mdc-floating-label/foundation.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-floating-label/constants.ts");
var MDCFloatingLabelFoundation = /** @class */function (_super) {
    __extends(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () {
            return _this.handleShakeAnimationEnd_();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                getWidth: function getWidth() {
                    return 0;
                },
                registerInteractionHandler: function registerInteractionHandler() {
                    return undefined;
                },
                deregisterInteractionHandler: function deregisterInteractionHandler() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter_.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
        } else {
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses,
            LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
            LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        } else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(foundation_1.MDCFoundation);
exports.MDCFloatingLabelFoundation = MDCFloatingLabelFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCFloatingLabelFoundation;

/***/ }),

/***/ "./packages/mdc-line-ripple/component.ts":
/*!***********************************************!*\
  !*** ./packages/mdc-line-ripple/component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-line-ripple/foundation.ts");
var MDCLineRipple = /** @class */function (_super) {
    __extends(MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation_.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            hasClass: function hasClass(className) {
                return _this.root_.classList.contains(className);
            },
            setStyle: function setStyle(propertyName, value) {
                return _this.root_.style.setProperty(propertyName, value);
            },
            registerEventHandler: function registerEventHandler(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                return _this.unlisten(evtType, handler);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_1.MDCLineRippleFoundation(adapter);
    };
    return MDCLineRipple;
}(component_1.MDCComponent);
exports.MDCLineRipple = MDCLineRipple;

/***/ }),

/***/ "./packages/mdc-line-ripple/constants.ts":
/*!***********************************************!*\
  !*** ./packages/mdc-line-ripple/constants.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};
exports.cssClasses = cssClasses;

/***/ }),

/***/ "./packages/mdc-line-ripple/foundation.ts":
/*!************************************************!*\
  !*** ./packages/mdc-line-ripple/foundation.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-line-ripple/constants.ts");
var MDCLineRippleFoundation = /** @class */function (_super) {
    __extends(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
        _this.transitionEndHandler_ = function (evt) {
            return _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                setStyle: function setStyle() {
                    return undefined;
                },
                registerEventHandler: function registerEventHandler() {
                    return undefined;
                },
                deregisterEventHandler: function deregisterEventHandler() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter_.removeClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(constants_1.cssClasses.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter_.addClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter_.removeClass(constants_1.cssClasses.LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(constants_1.cssClasses.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(foundation_1.MDCFoundation);
exports.MDCLineRippleFoundation = MDCLineRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCLineRippleFoundation;

/***/ }),

/***/ "./packages/mdc-list/component.ts":
/*!****************************************!*\
  !*** ./packages/mdc-list/component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var ponyfill_1 = __webpack_require__(/*! @material/dom/ponyfill */ "./packages/mdc-dom/ponyfill.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-list/constants.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-list/foundation.ts");
var MDCList = /** @class */function (_super) {
    __extends(MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function set(value) {
            this.foundation_.setVerticalOrientation(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function get() {
            return [].slice.call(this.root_.querySelectorAll("." + constants_1.cssClasses.LIST_ITEM_CLASS));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function set(value) {
            this.foundation_.setWrapFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function set(isSingleSelectionList) {
            this.foundation_.setSingleSelection(isSingleSelectionList);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function get() {
            return this.foundation_.getSelectedIndex();
        },
        set: function set(index) {
            this.foundation_.setSelectedIndex(index);
        },
        enumerable: true,
        configurable: true
    });
    MDCList.attachTo = function (root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function () {
        this.handleClick_ = this.handleClickEvent_.bind(this);
        this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
        this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
        this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
        this.listen('keydown', this.handleKeydown_);
        this.listen('click', this.handleClick_);
        this.listen('focusin', this.focusInEventListener_);
        this.listen('focusout', this.focusOutEventListener_);
        this.layout();
        this.initializeListType();
    };
    MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('click', this.handleClick_);
        this.unlisten('focusin', this.focusInEventListener_);
        this.unlisten('focusout', this.focusOutEventListener_);
    };
    MDCList.prototype.layout = function () {
        var direction = this.root_.getAttribute(constants_1.strings.ARIA_ORIENTATION);
        this.vertical = direction !== constants_1.strings.ARIA_ORIENTATION_HORIZONTAL;
        // List items need to have at least tabindex=-1 to be focusable.
        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        [].slice.call(this.root_.querySelectorAll(constants_1.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
            return el.setAttribute('tabindex', '-1');
        });
        this.foundation_.layout();
    };
    /**
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root_.querySelectorAll(constants_1.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector("\n      ." + constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    ");
        var radioSelectedListItem = this.root_.querySelector(constants_1.strings.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root_.querySelectorAll(constants_1.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
                return _this.listElements.indexOf(listItem);
            });
        } else if (singleSelectedListItem) {
            if (singleSelectedListItem.classList.contains(constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
                this.foundation_.setUseActivatedClass(true);
            }
            this.singleSelection = true;
            this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
        } else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    MDCList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function addClassForElementIndex(index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(className);
                }
            },
            focusItemAtIndex: function focusItemAtIndex(index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
                return _this.listElements[index].getAttribute(attr);
            },
            getFocusedElementIndex: function getFocusedElementIndex() {
                return _this.listElements.indexOf(document.activeElement);
            },
            getListItemCount: function getListItemCount() {
                return _this.listElements.length;
            },
            hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function hasRadioAtIndex(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(constants_1.strings.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function isFocusInsideList() {
                return _this.root_.contains(document.activeElement);
            },
            isRootFocused: function isRootFocused() {
                return document.activeElement === _this.root_;
            },
            notifyAction: function notifyAction(index) {
                _this.emit(constants_1.strings.ACTION_EVENT, { index: index }, /** shouldBubble */true);
            },
            removeClassForElementIndex: function removeClassForElementIndex(index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(className);
                }
            },
            setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(constants_1.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (el) {
                    return el.setAttribute('tabindex', tabIndexValue);
                });
            }
        };
        return new foundation_1.MDCListFoundation(adapter);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    MDCList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = ponyfill_1.closest(eventTarget, "." + constants_1.cssClasses.LIST_ITEM_CLASS + ", ." + constants_1.cssClasses.ROOT);
        // Get the index of the element if it is a list item.
        if (nearestParent && ponyfill_1.matches(nearestParent, "." + constants_1.cssClasses.LIST_ITEM_CLASS)) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusInEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusIn(evt, index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusOutEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusOut(evt, index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     */
    MDCList.prototype.handleKeydownEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        this.foundation_.handleKeydown(evt, target.classList.contains(constants_1.cssClasses.LIST_ITEM_CLASS), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleClickEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !ponyfill_1.matches(target, constants_1.strings.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
    };
    return MDCList;
}(component_1.MDCComponent);
exports.MDCList = MDCList;

/***/ }),

/***/ "./packages/mdc-list/constants.ts":
/*!****************************************!*\
  !*** ./packages/mdc-list/constants.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list'
};
exports.cssClasses = cssClasses;
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
};
exports.strings = strings;
var numbers = {
    UNSET_INDEX: -1
};
exports.numbers = numbers;

/***/ }),

/***/ "./packages/mdc-list/foundation.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-list/foundation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-list/constants.ts");
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = /** @class */function (_super) {
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = constants_1.numbers.UNSET_INDEX;
        _this.focusedItemIndex_ = constants_1.numbers.UNSET_INDEX;
        _this.useActivatedClass_ = false;
        _this.ariaCurrentAttrValue_ = null;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function get() {
            return {
                addClassForElementIndex: function addClassForElementIndex() {
                    return undefined;
                },
                focusItemAtIndex: function focusItemAtIndex() {
                    return undefined;
                },
                getAttributeForElementIndex: function getAttributeForElementIndex() {
                    return null;
                },
                getFocusedElementIndex: function getFocusedElementIndex() {
                    return 0;
                },
                getListItemCount: function getListItemCount() {
                    return 0;
                },
                hasCheckboxAtIndex: function hasCheckboxAtIndex() {
                    return false;
                },
                hasRadioAtIndex: function hasRadioAtIndex() {
                    return false;
                },
                isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
                    return false;
                },
                isFocusInsideList: function isFocusInsideList() {
                    return false;
                },
                isRootFocused: function isRootFocused() {
                    return false;
                },
                notifyAction: function notifyAction() {
                    return undefined;
                },
                removeClassForElementIndex: function removeClassForElementIndex() {
                    return undefined;
                },
                setAttributeForElementIndex: function setAttributeForElementIndex() {
                    return undefined;
                },
                setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
                    return undefined;
                },
                setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
                    return undefined;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter_.getListItemCount() === 0) {
            return;
        }
        if (this.adapter_.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
        } else if (this.adapter_.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
        }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(index);
        } else if (this.isRadioList_) {
            this.setRadioAtIndex_(index);
        } else {
            this.setSingleSelectionAtIndex_(index);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter_.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
        var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        if (this.adapter_.isRootFocused()) {
            if (isArrowUp || isEnd) {
                evt.preventDefault();
                this.focusLastElement();
            } else if (isArrowDown || isHome) {
                evt.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        var currentIndex = this.adapter_.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        var nextIndex;
        if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
        } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
        } else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
        } else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
        } else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                var target = evt.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent_(evt);
                if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(currentIndex);
                }
                this.adapter_.notifyAction(currentIndex);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    };
    /**
     * Click handler for the list.
     */
    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === constants_1.numbers.UNSET_INDEX) {
            return;
        }
        if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }
        this.adapter_.notifyAction(index);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            } else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
            } else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        this.adapter_.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     */
    MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
        var target = evt.target;
        var tagName = ("" + target.tagName).toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        if (this.selectedIndex_ === index) {
            return;
        }
        var selectedClassName = constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        }
        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
        // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
        if (this.selectedIndex_ === constants_1.numbers.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, constants_1.strings.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        var ariaAttribute = isAriaCurrent ? constants_1.strings.ARIA_CURRENT : constants_1.strings.ARIA_SELECTED;
        if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, constants_1.strings.ARIA_CHECKED, 'false');
        }
        this.adapter_.setAttributeForElementIndex(index, constants_1.strings.ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, constants_1.strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === constants_1.numbers.UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
            this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
        } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
        }
        this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio list.
     */
    MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
        var targetIndex = 0;
        if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                targetIndex = this.selectedIndex_;
            } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
                    return Math.min(currentIndex, minIndex);
                });
            }
        }
        this.setTabindexAtIndex_(targetIndex);
    };
    MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            } else {
                return index.some(function (i) {
                    return _this.isIndexInRange_(i);
                });
            }
        } else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
            }
            return this.isIndexInRange_(index);
        } else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
    };
    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) {
            toggleCheckbox = true;
        }
        if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        } else {
            this.setSelectedIndex(index);
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter_.setAttributeForElementIndex(index, constants_1.strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        } else {
            selectedIndexes = selectedIndexes.filter(function (i) {
                return i !== index;
            });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    return MDCListFoundation;
}(foundation_1.MDCFoundation);
exports.MDCListFoundation = MDCListFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCListFoundation;

/***/ }),

/***/ "./packages/mdc-menu-surface/component.ts":
/*!************************************************!*\
  !*** ./packages/mdc-menu-surface/component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-menu-surface/constants.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-menu-surface/foundation.ts");
var util = __importStar(__webpack_require__(/*! ./util */ "./packages/mdc-menu-surface/util.ts"));
var MDCMenuSurface = /** @class */function (_super) {
    __extends(MDCMenuSurface, _super);
    function MDCMenuSurface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenuSurface.attachTo = function (root) {
        return new MDCMenuSurface(root);
    };
    MDCMenuSurface.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var parentEl = this.root_.parentElement;
        this.anchorElement = parentEl && parentEl.classList.contains(constants_1.cssClasses.ANCHOR) ? parentEl : null;
        if (this.root_.classList.contains(constants_1.cssClasses.FIXED)) {
            this.setFixedPosition(true);
        }
        this.handleKeydown_ = function (evt) {
            return _this.foundation_.handleKeydown(evt);
        };
        this.handleBodyClick_ = function (evt) {
            return _this.foundation_.handleBodyClick(evt);
        };
        this.registerBodyClickListener_ = function () {
            return document.body.addEventListener('click', _this.handleBodyClick_);
        };
        this.deregisterBodyClickListener_ = function () {
            return document.body.removeEventListener('click', _this.handleBodyClick_);
        };
        this.listen('keydown', this.handleKeydown_);
        this.listen(constants_1.strings.OPENED_EVENT, this.registerBodyClickListener_);
        this.listen(constants_1.strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
    };
    MDCMenuSurface.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten(constants_1.strings.OPENED_EVENT, this.registerBodyClickListener_);
        this.unlisten(constants_1.strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
        _super.prototype.destroy.call(this);
    };
    MDCMenuSurface.prototype.isOpen = function () {
        return this.foundation_.isOpen();
    };
    MDCMenuSurface.prototype.open = function () {
        this.foundation_.open();
    };
    MDCMenuSurface.prototype.close = function (skipRestoreFocus) {
        if (skipRestoreFocus === void 0) {
            skipRestoreFocus = false;
        }
        this.foundation_.close(skipRestoreFocus);
    };
    Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
        set: function set(quickOpen) {
            this.foundation_.setQuickOpen(quickOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Removes the menu-surface from it's current location and appends it to the
     * body to overcome any overflow:hidden issues.
     */
    MDCMenuSurface.prototype.hoistMenuToBody = function () {
        document.body.appendChild(this.root_);
        this.setIsHoisted(true);
    };
    /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */
    MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
        this.foundation_.setIsHoisted(isHoisted);
    };
    /** Sets the element that the menu-surface is anchored to. */
    MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
        this.anchorElement = element;
    };
    /** Sets the menu-surface to position: fixed. */
    MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
        if (isFixed) {
            this.root_.classList.add(constants_1.cssClasses.FIXED);
        } else {
            this.root_.classList.remove(constants_1.cssClasses.FIXED);
        }
        this.foundation_.setFixedPosition(isFixed);
    };
    /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */
    MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
        this.foundation_.setAbsolutePosition(x, y);
        this.setIsHoisted(true);
    };
    /**
     * @param corner Default anchor corner alignment of top-left surface corner.
     */
    MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
        this.foundation_.setAnchorCorner(corner);
    };
    MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
        this.foundation_.setAnchorMargin(margin);
    };
    MDCMenuSurface.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            hasClass: function hasClass(className) {
                return _this.root_.classList.contains(className);
            },
            hasAnchor: function hasAnchor() {
                return !!_this.anchorElement;
            },
            notifyClose: function notifyClose() {
                return _this.emit(foundation_1.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
            },
            notifyOpen: function notifyOpen() {
                return _this.emit(foundation_1.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
            },
            isElementInContainer: function isElementInContainer(el) {
                return _this.root_.contains(el);
            },
            isRtl: function isRtl() {
                return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
            },
            setTransformOrigin: function setTransformOrigin(origin) {
                var propertyName = util.getTransformPropertyName(window) + "-origin";
                _this.root_.style.setProperty(propertyName, origin);
            },
            isFocused: function isFocused() {
                return document.activeElement === _this.root_;
            },
            saveFocus: function saveFocus() {
                _this.previousFocus_ = document.activeElement;
            },
            restoreFocus: function restoreFocus() {
                if (_this.root_.contains(document.activeElement)) {
                    if (_this.previousFocus_ && _this.previousFocus_.focus) {
                        _this.previousFocus_.focus();
                    }
                }
            },
            getInnerDimensions: function getInnerDimensions() {
                return { width: _this.root_.offsetWidth, height: _this.root_.offsetHeight };
            },
            getAnchorDimensions: function getAnchorDimensions() {
                return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
            },
            getWindowDimensions: function getWindowDimensions() {
                return { width: window.innerWidth, height: window.innerHeight };
            },
            getBodyDimensions: function getBodyDimensions() {
                return { width: document.body.clientWidth, height: document.body.clientHeight };
            },
            getWindowScroll: function getWindowScroll() {
                return { x: window.pageXOffset, y: window.pageYOffset };
            },
            setPosition: function setPosition(position) {
                _this.root_.style.left = 'left' in position ? position.left + "px" : '';
                _this.root_.style.right = 'right' in position ? position.right + "px" : '';
                _this.root_.style.top = 'top' in position ? position.top + "px" : '';
                _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
            },
            setMaxHeight: function setMaxHeight(height) {
                _this.root_.style.maxHeight = height;
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_1.MDCMenuSurfaceFoundation(adapter);
    };
    return MDCMenuSurface;
}(component_1.MDCComponent);
exports.MDCMenuSurface = MDCMenuSurface;

/***/ }),

/***/ "./packages/mdc-menu-surface/constants.ts":
/*!************************************************!*\
  !*** ./packages/mdc-menu-surface/constants.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface'
};
exports.cssClasses = cssClasses;
// tslint:disable:object-literal-sort-keys
var strings = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: ['button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)', 'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(', ')
};
exports.strings = strings;
// tslint:enable:object-literal-sort-keys
var numbers = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    MARGIN_TO_EDGE: 32,
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
};
exports.numbers = numbers;
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
exports.CornerBit = CornerBit;
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));
exports.Corner = Corner;

/***/ }),

/***/ "./packages/mdc-menu-surface/foundation.ts":
/*!*************************************************!*\
  !*** ./packages/mdc-menu-surface/foundation.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = this && this.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-menu-surface/constants.ts");
var MDCMenuSurfaceFoundation = /** @class */function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.isQuickOpen_ = false;
        _this.isHoistedElement_ = false;
        _this.isFixedPosition_ = false;
        _this.openAnimationEndTimerId_ = 0;
        _this.closeAnimationEndTimerId_ = 0;
        _this.animationRequestId_ = 0;
        _this.anchorCorner_ = constants_1.Corner.TOP_START;
        _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position_ = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function get() {
            return constants_1.Corner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                hasAnchor: function hasAnchor() {
                    return false;
                },
                isElementInContainer: function isElementInContainer() {
                    return false;
                },
                isFocused: function isFocused() {
                    return false;
                },
                isRtl: function isRtl() {
                    return false;
                },
                getInnerDimensions: function getInnerDimensions() {
                    return { height: 0, width: 0 };
                },
                getAnchorDimensions: function getAnchorDimensions() {
                    return null;
                },
                getWindowDimensions: function getWindowDimensions() {
                    return { height: 0, width: 0 };
                },
                getBodyDimensions: function getBodyDimensions() {
                    return { height: 0, width: 0 };
                },
                getWindowScroll: function getWindowScroll() {
                    return { x: 0, y: 0 };
                },
                setPosition: function setPosition() {
                    return undefined;
                },
                setMaxHeight: function setMaxHeight() {
                    return undefined;
                },
                setTransformOrigin: function setTransformOrigin() {
                    return undefined;
                },
                saveFocus: function saveFocus() {
                    return undefined;
                },
                restoreFocus: function restoreFocus() {
                    return undefined;
                },
                notifyClose: function notifyClose() {
                    return undefined;
                },
                notifyOpen: function notifyOpen() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses,
            ROOT = _a.ROOT,
            OPEN = _a.OPEN;
        if (!this.adapter_.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter_.hasClass(OPEN)) {
            this.isOpen_ = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId_);
        clearTimeout(this.closeAnimationEndTimerId_);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId_);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner_ = corner;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin_.top = margin.top || 0;
        this.anchorMargin_.right = margin.right || 0;
        this.anchorMargin_.bottom = margin.bottom || 0;
        this.anchorMargin_.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement_ = isHoisted;
    };
    /** Used to set the menu-surface calculations based on a fixed position menu. */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition_ = isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position_.x = this.isFinite_(x) ? x : 0;
        this.position_.y = this.isFinite_(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen_ = quickOpen;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        this.adapter_.saveFocus();
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
        }
        this.animationRequestId_ = requestAnimationFrame(function () {
            _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.dimensions_ = _this.adapter_.getInnerDimensions();
            _this.autoPosition_();
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyOpen();
            } else {
                _this.openAnimationEndTimerId_ = setTimeout(function () {
                    _this.openAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter_.notifyOpen();
                }, constants_1.numbers.TRANSITION_OPEN_DURATION);
            }
        });
        this.isOpen_ = true;
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) {
            skipRestoreFocus = false;
        }
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        }
        requestAnimationFrame(function () {
            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyClose();
            } else {
                _this.closeAnimationEndTimerId_ = setTimeout(function () {
                    _this.closeAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                    _this.adapter_.notifyClose();
                }, constants_1.numbers.TRANSITION_CLOSE_DURATION);
            }
        });
        this.isOpen_ = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus_();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter_.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode,
            key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements_ = this.getAutoLayoutMeasurements_();
        var corner = this.getOriginCorner_();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
        var verticalAlignment = this.hasBit_(corner, constants_1.CornerBit.BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit_(corner, constants_1.CornerBit.RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset_(corner);
        var verticalOffset = this.getVerticalOriginOffset_(corner);
        var _b = this.measurements_,
            anchorSize = _b.anchorSize,
            surfaceSize = _b.surfaceSize;
        var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a);
        // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width > constants_1.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
        if (this.isHoistedElement_ || this.isFixedPosition_) {
            this.adjustPositionForHoistedElement_(position);
        }
        this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter_.setPosition(position);
        this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
        var anchorRect = this.adapter_.getAnchorDimensions();
        var bodySize = this.adapter_.getBodyDimensions();
        var viewportSize = this.adapter_.getWindowDimensions();
        var windowScroll = this.adapter_.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position_.y,
                right: this.position_.x,
                bottom: this.position_.y,
                left: this.position_.x,
                width: 0,
                height: 0
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions_,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
        // Defaults: open from the top left.
        var corner = constants_1.Corner.TOP_LEFT;
        var _a = this.measurements_,
            viewportDistance = _a.viewportDistance,
            anchorSize = _a.anchorSize,
            surfaceSize = _a.surfaceSize;
        var isBottomAligned = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.BOTTOM);
        var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
        var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
        var topOverflow = surfaceSize.height - availableTop;
        var bottomOverflow = surfaceSize.height - availableBottom;
        if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
            corner = this.setBit_(corner, constants_1.CornerBit.BOTTOM);
        }
        var isRtl = this.adapter_.isRtl();
        var isFlipRtl = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.FLIP_RTL);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.RIGHT);
        var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
        var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
        var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
        var leftOverflow = surfaceSize.width - availableLeft;
        var rightOverflow = surfaceSize.width - availableRight;
        if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
            corner = this.setBit_(corner, constants_1.CornerBit.RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
        var viewportDistance = this.measurements_.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit_(corner, constants_1.CornerBit.BOTTOM);
        var isBottomAnchored = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements_.anchorSize.height;
            }
        } else {
            maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements_.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit_(corner, constants_1.CornerBit.RIGHT);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right;
            // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
            // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
            // the right property is correct.
            if (this.isHoistedElement_ || this.isFixedPosition_) {
                return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        var isBottomAligned = this.hasBit_(corner, constants_1.CornerBit.BOTTOM);
        var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, constants_1.CornerBit.BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        } else {
            y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin_.bottom : this.anchorMargin_.top;
        }
        return y;
    };
    /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
        var e_1, _a;
        var _b = this.measurements_,
            windowScroll = _b.windowScroll,
            viewportDistance = _b.viewportDistance;
        var props = Object.keys(position);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                // Hoisted surfaces need to have the anchor elements location on the page added to the
                // position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional calculations for scroll
                // and bottom positioning.
                if (!this.isFixedPosition_) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    } else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    } else if (prop === 'left') {
                        value += windowScroll.x;
                    } else {
                        // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
        var isRootFocused = this.adapter_.isFocused();
        var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
        if (isRootFocused || childHasFocus) {
            this.adapter_.restoreFocus();
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(foundation_1.MDCFoundation);
exports.MDCMenuSurfaceFoundation = MDCMenuSurfaceFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCMenuSurfaceFoundation;

/***/ }),

/***/ "./packages/mdc-menu-surface/util.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-menu-surface/util.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */
function getTransformPropertyName(globalObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
  }
  return cachedCssTransformPropertyName_;
}
exports.getTransformPropertyName = getTransformPropertyName;

/***/ }),

/***/ "./packages/mdc-menu/component.ts":
/*!****************************************!*\
  !*** ./packages/mdc-menu/component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var ponyfill_1 = __webpack_require__(/*! @material/dom/ponyfill */ "./packages/mdc-dom/ponyfill.ts");
var component_2 = __webpack_require__(/*! @material/list/component */ "./packages/mdc-list/component.ts");
var foundation_1 = __webpack_require__(/*! @material/list/foundation */ "./packages/mdc-list/foundation.ts");
var component_3 = __webpack_require__(/*! @material/menu-surface/component */ "./packages/mdc-menu-surface/component.ts");
var foundation_2 = __webpack_require__(/*! @material/menu-surface/foundation */ "./packages/mdc-menu-surface/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-menu/constants.ts");
var foundation_3 = __webpack_require__(/*! ./foundation */ "./packages/mdc-menu/foundation.ts");
var MDCMenu = /** @class */function (_super) {
    __extends(MDCMenu, _super);
    function MDCMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenu.attachTo = function (root) {
        return new MDCMenu(root);
    };
    MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
        if (menuSurfaceFactory === void 0) {
            menuSurfaceFactory = function menuSurfaceFactory(el) {
                return new component_3.MDCMenuSurface(el);
            };
        }
        if (listFactory === void 0) {
            listFactory = function listFactory(el) {
                return new component_2.MDCList(el);
            };
        }
        this.menuSurfaceFactory_ = menuSurfaceFactory;
        this.listFactory_ = listFactory;
    };
    MDCMenu.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
        var list = this.root_.querySelector(constants_1.strings.LIST_SELECTOR);
        if (list) {
            this.list_ = this.listFactory_(list);
            this.list_.wrapFocus = true;
        } else {
            this.list_ = null;
        }
        this.handleKeydown_ = function (evt) {
            return _this.foundation_.handleKeydown(evt);
        };
        this.handleItemAction_ = function (evt) {
            return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
        };
        this.handleMenuSurfaceOpened_ = function () {
            return _this.foundation_.handleMenuSurfaceOpened();
        };
        this.menuSurface_.listen(foundation_2.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
        this.listen('keydown', this.handleKeydown_);
        this.listen(foundation_1.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
    };
    MDCMenu.prototype.destroy = function () {
        if (this.list_) {
            this.list_.destroy();
        }
        this.menuSurface_.destroy();
        this.menuSurface_.unlisten(foundation_2.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten(foundation_1.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCMenu.prototype, "open", {
        get: function get() {
            return this.menuSurface_.isOpen();
        },
        set: function set(value) {
            if (value) {
                this.menuSurface_.open();
            } else {
                this.menuSurface_.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
        get: function get() {
            return this.list_ ? this.list_.wrapFocus : false;
        },
        set: function set(value) {
            if (this.list_) {
                this.list_.wrapFocus = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "items", {
        /**
         * Return the items within the menu. Note that this only contains the set of elements within
         * the items container that are proper list items, and not supplemental / presentational DOM
         * elements.
         */
        get: function get() {
            return this.list_ ? this.list_.listElements : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "quickOpen", {
        set: function set(quickOpen) {
            this.menuSurface_.quickOpen = quickOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     * @param focusState Default focus state.
     */
    MDCMenu.prototype.setDefaultFocusState = function (focusState) {
        this.foundation_.setDefaultFocusState(focusState);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu corner.
     */
    MDCMenu.prototype.setAnchorCorner = function (corner) {
        this.menuSurface_.setAnchorCorner(corner);
    };
    MDCMenu.prototype.setAnchorMargin = function (margin) {
        this.menuSurface_.setAnchorMargin(margin);
    };
    /**
     * Sets the list item as the selected row at the specified index.
     * @param index Index of list item within menu.
     */
    MDCMenu.prototype.setSelectedIndex = function (index) {
        this.foundation_.setSelectedIndex(index);
    };
    /**
     * @return The item within the menu at the index specified.
     */
    MDCMenu.prototype.getOptionByIndex = function (index) {
        var items = this.items;
        if (index < items.length) {
            return this.items[index];
        } else {
            return null;
        }
    };
    MDCMenu.prototype.setFixedPosition = function (isFixed) {
        this.menuSurface_.setFixedPosition(isFixed);
    };
    MDCMenu.prototype.hoistMenuToBody = function () {
        this.menuSurface_.hoistMenuToBody();
    };
    MDCMenu.prototype.setIsHoisted = function (isHoisted) {
        this.menuSurface_.setIsHoisted(isHoisted);
    };
    MDCMenu.prototype.setAbsolutePosition = function (x, y) {
        this.menuSurface_.setAbsolutePosition(x, y);
    };
    /**
     * Sets the element that the menu-surface is anchored to.
     */
    MDCMenu.prototype.setAnchorElement = function (element) {
        this.menuSurface_.anchorElement = element;
    };
    MDCMenu.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
                var list = _this.items;
                list[index].classList.add(className);
            },
            removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
                var list = _this.items;
                list[index].classList.remove(className);
            },
            addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
                var list = _this.items;
                list[index].setAttribute(attr, value);
            },
            removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
                var list = _this.items;
                list[index].removeAttribute(attr);
            },
            elementContainsClass: function elementContainsClass(element, className) {
                return element.classList.contains(className);
            },
            closeSurface: function closeSurface(skipRestoreFocus) {
                return _this.menuSurface_.close(skipRestoreFocus);
            },
            getElementIndex: function getElementIndex(element) {
                return _this.items.indexOf(element);
            },
            notifySelected: function notifySelected(evtData) {
                return _this.emit(constants_1.strings.SELECTED_EVENT, {
                    index: evtData.index,
                    item: _this.items[evtData.index]
                });
            },
            getMenuItemCount: function getMenuItemCount() {
                return _this.items.length;
            },
            focusItemAtIndex: function focusItemAtIndex(index) {
                return _this.items[index].focus();
            },
            focusListRoot: function focusListRoot() {
                return _this.root_.querySelector(constants_1.strings.LIST_SELECTOR).focus();
            },
            isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
                return !!ponyfill_1.closest(_this.items[index], "." + constants_1.cssClasses.MENU_SELECTION_GROUP);
            },
            getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
                var selectionGroupEl = ponyfill_1.closest(_this.items[index], "." + constants_1.cssClasses.MENU_SELECTION_GROUP);
                var selectedItemEl = selectionGroupEl.querySelector("." + constants_1.cssClasses.MENU_SELECTED_LIST_ITEM);
                return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_3.MDCMenuFoundation(adapter);
    };
    return MDCMenu;
}(component_1.MDCComponent);
exports.MDCMenu = MDCMenu;

/***/ }),

/***/ "./packages/mdc-menu/constants.ts":
/*!****************************************!*\
  !*** ./packages/mdc-menu/constants.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var cssClasses = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu'
};
exports.cssClasses = cssClasses;
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected'
};
exports.strings = strings;
var numbers = {
    FOCUS_ROOT_INDEX: -1
};
exports.numbers = numbers;
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));
exports.DefaultFocusState = DefaultFocusState;

/***/ }),

/***/ "./packages/mdc-menu/foundation.ts":
/*!*****************************************!*\
  !*** ./packages/mdc-menu/foundation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var foundation_2 = __webpack_require__(/*! @material/menu-surface/foundation */ "./packages/mdc-menu-surface/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-menu/constants.ts");
var MDCMenuFoundation = /** @class */function (_super) {
    __extends(MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
        _this.closeAnimationEndTimerId_ = 0;
        _this.defaultFocusState_ = constants_1.DefaultFocusState.LIST_ROOT;
        return _this;
    }
    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClassToElementAtIndex: function addClassToElementAtIndex() {
                    return undefined;
                },
                removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
                    return undefined;
                },
                addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
                    return undefined;
                },
                removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
                    return undefined;
                },
                elementContainsClass: function elementContainsClass() {
                    return false;
                },
                closeSurface: function closeSurface() {
                    return undefined;
                },
                getElementIndex: function getElementIndex() {
                    return -1;
                },
                notifySelected: function notifySelected() {
                    return undefined;
                },
                getMenuItemCount: function getMenuItemCount() {
                    return 0;
                },
                focusItemAtIndex: function focusItemAtIndex() {
                    return undefined;
                },
                focusListRoot: function focusListRoot() {
                    return undefined;
                },
                getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex() {
                    return -1;
                },
                isSelectableItemAtIndex: function isSelectableItemAtIndex() {
                    return false;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuFoundation.prototype.destroy = function () {
        if (this.closeAnimationEndTimerId_) {
            clearTimeout(this.closeAnimationEndTimerId_);
        }
        this.adapter_.closeSurface();
    };
    MDCMenuFoundation.prototype.handleKeydown = function (evt) {
        var key = evt.key,
            keyCode = evt.keyCode;
        var isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter_.closeSurface( /** skipRestoreFocus */true);
        }
    };
    MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
        var _this = this;
        var index = this.adapter_.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter_.notifySelected({ index: index });
        this.adapter_.closeSurface();
        // Wait for the menu to close before adding/removing classes that affect styles.
        this.closeAnimationEndTimerId_ = setTimeout(function () {
            if (_this.adapter_.isSelectableItemAtIndex(index)) {
                _this.setSelectedIndex(index);
            }
        }, foundation_2.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState_) {
            case constants_1.DefaultFocusState.FIRST_ITEM:
                this.adapter_.focusItemAtIndex(0);
                break;
            case constants_1.DefaultFocusState.LAST_ITEM:
                this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
                break;
            case constants_1.DefaultFocusState.NONE:
                // Do nothing.
                break;
            default:
                this.adapter_.focusListRoot();
                break;
        }
    };
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     */
    MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
        this.defaultFocusState_ = focusState;
    };
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
        this.validatedIndex_(index);
        if (!this.adapter_.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, constants_1.strings.ARIA_CHECKED_ATTR);
            this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, constants_1.cssClasses.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter_.addClassToElementAtIndex(index, constants_1.cssClasses.MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, constants_1.strings.ARIA_CHECKED_ATTR, 'true');
    };
    MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
        var menuSize = this.adapter_.getMenuItemCount();
        var isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    };
    return MDCMenuFoundation;
}(foundation_1.MDCFoundation);
exports.MDCMenuFoundation = MDCMenuFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCMenuFoundation;

/***/ }),

/***/ "./packages/mdc-notched-outline/component.ts":
/*!***************************************************!*\
  !*** ./packages/mdc-notched-outline/component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var foundation_1 = __webpack_require__(/*! @material/floating-label/foundation */ "./packages/mdc-floating-label/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-notched-outline/constants.ts");
var foundation_2 = __webpack_require__(/*! ./foundation */ "./packages/mdc-notched-outline/foundation.ts");
var MDCNotchedOutline = /** @class */function (_super) {
    __extends(MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement_ = this.root_.querySelector(constants_1.strings.NOTCH_ELEMENT_SELECTOR);
        var label = this.root_.querySelector('.' + foundation_1.MDCFloatingLabelFoundation.cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root_.classList.add(constants_1.cssClasses.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        } else {
            this.root_.classList.add(constants_1.cssClasses.NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation_.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation_.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            setNotchWidthProperty: function setNotchWidthProperty(width) {
                return _this.notchElement_.style.setProperty('width', width + 'px');
            },
            removeNotchWidthProperty: function removeNotchWidthProperty() {
                return _this.notchElement_.style.removeProperty('width');
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_2.MDCNotchedOutlineFoundation(adapter);
    };
    return MDCNotchedOutline;
}(component_1.MDCComponent);
exports.MDCNotchedOutline = MDCNotchedOutline;

/***/ }),

/***/ "./packages/mdc-notched-outline/constants.ts":
/*!***************************************************!*\
  !*** ./packages/mdc-notched-outline/constants.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
exports.strings = strings;
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8
};
exports.numbers = numbers;
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};
exports.cssClasses = cssClasses;

/***/ }),

/***/ "./packages/mdc-notched-outline/foundation.ts":
/*!****************************************************!*\
  !*** ./packages/mdc-notched-outline/foundation.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-notched-outline/constants.ts");
var MDCNotchedOutlineFoundation = /** @class */function (_super) {
    __extends(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                setNotchWidthProperty: function setNotchWidthProperty() {
                    return undefined;
                },
                removeNotchWidthProperty: function removeNotchWidthProperty() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += constants_1.numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(foundation_1.MDCFoundation);
exports.MDCNotchedOutlineFoundation = MDCNotchedOutlineFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCNotchedOutlineFoundation;

/***/ }),

/***/ "./packages/mdc-ripple/component.ts":
/*!******************************************!*\
  !*** ./packages/mdc-ripple/component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var events_1 = __webpack_require__(/*! @material/dom/events */ "./packages/mdc-dom/events.ts");
var ponyfill_1 = __webpack_require__(/*! @material/dom/ponyfill */ "./packages/mdc-dom/ponyfill.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-ripple/foundation.ts");
var util = __importStar(__webpack_require__(/*! ./util */ "./packages/mdc-ripple/util.ts"));
var MDCRipple = /** @class */function (_super) {
    __extends(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) {
            opts = { isUnbounded: undefined };
        }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function addClass(className) {
                return instance.root_.classList.add(className);
            },
            browserSupportsCssVars: function browserSupportsCssVars() {
                return util.supportsCssVariables(window);
            },
            computeBoundingRect: function computeBoundingRect() {
                return instance.root_.getBoundingClientRect();
            },
            containsEventTarget: function containsEventTarget(target) {
                return instance.root_.contains(target);
            },
            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, events_1.applyPassive());
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, events_1.applyPassive());
            },
            deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function getWindowPageOffset() {
                return { x: window.pageXOffset, y: window.pageYOffset };
            },
            isSurfaceActive: function isSurfaceActive() {
                return ponyfill_1.matches(instance.root_, ':active');
            },
            isSurfaceDisabled: function isSurfaceDisabled() {
                return Boolean(instance.disabled);
            },
            isUnbounded: function isUnbounded() {
                return Boolean(instance.unbounded);
            },
            registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, events_1.applyPassive());
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, events_1.applyPassive());
            },
            registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function removeClass(className) {
                return instance.root_.classList.remove(className);
            },
            updateCssVariable: function updateCssVariable(varName, value) {
                return instance.root_.style.setProperty(varName, value);
            }
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function get() {
            return Boolean(this.unbounded_);
        },
        set: function set(unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new foundation_1.MDCRippleFoundation(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(component_1.MDCComponent);
exports.MDCRipple = MDCRipple;

/***/ }),

/***/ "./packages/mdc-ripple/constants.ts":
/*!******************************************!*\
  !*** ./packages/mdc-ripple/constants.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
exports.strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top'
};
exports.numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
};

/***/ }),

/***/ "./packages/mdc-ripple/foundation.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-ripple/foundation.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-ripple/constants.ts");
var util_1 = __webpack_require__(/*! ./util */ "./packages/mdc-ripple/util.ts");
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) {
            return _this.activate_(e);
        };
        _this.deactivateHandler_ = function () {
            return _this.deactivate_();
        };
        _this.focusHandler_ = function () {
            return _this.handleFocus();
        };
        _this.blurHandler_ = function () {
            return _this.handleBlur();
        };
        _this.resizeHandler_ = function () {
            return _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function get() {
            return {
                addClass: function addClass() {
                    return undefined;
                },
                browserSupportsCssVars: function browserSupportsCssVars() {
                    return true;
                },
                computeBoundingRect: function computeBoundingRect() {
                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                },
                containsEventTarget: function containsEventTarget() {
                    return true;
                },
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
                    return undefined;
                },
                deregisterInteractionHandler: function deregisterInteractionHandler() {
                    return undefined;
                },
                deregisterResizeHandler: function deregisterResizeHandler() {
                    return undefined;
                },
                getWindowPageOffset: function getWindowPageOffset() {
                    return { x: 0, y: 0 };
                },
                isSurfaceActive: function isSurfaceActive() {
                    return true;
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                    return true;
                },
                isUnbounded: function isUnbounded() {
                    return true;
                },
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
                    return undefined;
                },
                registerInteractionHandler: function registerInteractionHandler() {
                    return undefined;
                },
                registerResizeHandler: function registerResizeHandler() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                updateCssVariable: function updateCssVariable() {
                    return undefined;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_1 = _a.ROOT,
                UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_2 = _a.ROOT,
                UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        } else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
            return _this.adapter_.containsEventTarget(target);
        });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _b.FG_DEACTIVATION,
            FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(),
                startPoint = _c.startPoint,
                endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () {
            return _this.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_,
            activationEvent = _a.activationEvent,
            wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = util_1.getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        } else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - this.initialSize_ / 2,
            y: startPoint.y - this.initialSize_ / 2
        };
        var endPoint = {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_,
            hasDeactivationUXRun = _a.hasDeactivationUXRun,
            isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, constants_1.numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () {
            return _this.previousActivationEvent_ = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                return _this.animateDeactivation_(state);
            });
            this.resetActivationState_();
        } else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer,
            wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function getBoundedRadius() {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _a.VAR_FG_SIZE,
            VAR_LEFT = _a.VAR_LEFT,
            VAR_TOP = _a.VAR_TOP,
            VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(foundation_1.MDCFoundation);
exports.MDCRippleFoundation = MDCRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCRippleFoundation;

/***/ }),

/***/ "./packages/mdc-ripple/util.ts":
/*!*************************************!*\
  !*** ./packages/mdc-ripple/util.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) {
        forceRefresh = false;
    }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    } else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
exports.supportsCssVariables = supportsCssVariables;
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x,
        y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),

/***/ "./packages/mdc-select/component.ts":
/*!******************************************!*\
  !*** ./packages/mdc-select/component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var component_2 = __webpack_require__(/*! @material/floating-label/component */ "./packages/mdc-floating-label/component.ts");
var component_3 = __webpack_require__(/*! @material/line-ripple/component */ "./packages/mdc-line-ripple/component.ts");
var menuSurfaceConstants = __importStar(__webpack_require__(/*! @material/menu-surface/constants */ "./packages/mdc-menu-surface/constants.ts"));
var component_4 = __webpack_require__(/*! @material/menu/component */ "./packages/mdc-menu/component.ts");
var menuConstants = __importStar(__webpack_require__(/*! @material/menu/constants */ "./packages/mdc-menu/constants.ts"));
var component_5 = __webpack_require__(/*! @material/notched-outline/component */ "./packages/mdc-notched-outline/component.ts");
var component_6 = __webpack_require__(/*! @material/ripple/component */ "./packages/mdc-ripple/component.ts");
var foundation_1 = __webpack_require__(/*! @material/ripple/foundation */ "./packages/mdc-ripple/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-select/constants.ts");
var foundation_2 = __webpack_require__(/*! ./foundation */ "./packages/mdc-select/foundation.ts");
var component_7 = __webpack_require__(/*! ./helper-text/component */ "./packages/mdc-select/helper-text/component.ts");
var component_8 = __webpack_require__(/*! ./icon/component */ "./packages/mdc-select/icon/component.ts");
var VALIDATION_ATTR_WHITELIST = ['required', 'aria-required'];
var MDCSelect = /** @class */function (_super) {
    __extends(MDCSelect, _super);
    function MDCSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelect.attachTo = function (root) {
        return new MDCSelect(root);
    };
    MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
        if (labelFactory === void 0) {
            labelFactory = function labelFactory(el) {
                return new component_2.MDCFloatingLabel(el);
            };
        }
        if (lineRippleFactory === void 0) {
            lineRippleFactory = function lineRippleFactory(el) {
                return new component_3.MDCLineRipple(el);
            };
        }
        if (outlineFactory === void 0) {
            outlineFactory = function outlineFactory(el) {
                return new component_5.MDCNotchedOutline(el);
            };
        }
        if (menuFactory === void 0) {
            menuFactory = function menuFactory(el) {
                return new component_4.MDCMenu(el);
            };
        }
        if (iconFactory === void 0) {
            iconFactory = function iconFactory(el) {
                return new component_8.MDCSelectIcon(el);
            };
        }
        if (helperTextFactory === void 0) {
            helperTextFactory = function helperTextFactory(el) {
                return new component_7.MDCSelectHelperText(el);
            };
        }
        this.isMenuOpen_ = false;
        this.nativeControl_ = this.root_.querySelector(constants_1.strings.NATIVE_CONTROL_SELECTOR);
        this.selectedText_ = this.root_.querySelector(constants_1.strings.SELECTED_TEXT_SELECTOR);
        var targetElement = this.nativeControl_ || this.selectedText_;
        if (!targetElement) {
            throw new Error('MDCSelect: Missing required element: Exactly one of the following selectors must be present: ' + ("'" + constants_1.strings.NATIVE_CONTROL_SELECTOR + "' or '" + constants_1.strings.SELECTED_TEXT_SELECTOR + "'"));
        }
        this.targetElement_ = targetElement;
        if (this.targetElement_.hasAttribute(constants_1.strings.ARIA_CONTROLS)) {
            var helperTextElement = document.getElementById(this.targetElement_.getAttribute(constants_1.strings.ARIA_CONTROLS));
            if (helperTextElement) {
                this.helperText_ = helperTextFactory(helperTextElement);
            }
        }
        if (this.selectedText_) {
            this.enhancedSelectSetup_(menuFactory);
        }
        var labelElement = this.root_.querySelector(constants_1.strings.LABEL_SELECTOR);
        this.label_ = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root_.querySelector(constants_1.strings.LINE_RIPPLE_SELECTOR);
        this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root_.querySelector(constants_1.strings.OUTLINE_SELECTOR);
        this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
        var leadingIcon = this.root_.querySelector(constants_1.strings.LEADING_ICON_SELECTOR);
        if (leadingIcon) {
            this.root_.classList.add(constants_1.cssClasses.WITH_LEADING_ICON);
            this.leadingIcon_ = iconFactory(leadingIcon);
            if (this.menuElement_) {
                this.menuElement_.classList.add(constants_1.cssClasses.WITH_LEADING_ICON);
            }
        }
        if (!this.root_.classList.contains(constants_1.cssClasses.OUTLINED)) {
            this.ripple = this.createRipple_();
        }
        // The required state needs to be sync'd before the mutation observer is added.
        this.initialSyncRequiredState_();
        this.addMutationObserverForRequired_();
    };
    /**
     * Initializes the select's event listeners and internal state based
     * on the environment's state.
     */
    MDCSelect.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange_ = function () {
            return _this.foundation_.handleChange( /* didChange */true);
        };
        this.handleFocus_ = function () {
            return _this.foundation_.handleFocus();
        };
        this.handleBlur_ = function () {
            return _this.foundation_.handleBlur();
        };
        this.handleClick_ = function (evt) {
            if (_this.selectedText_) {
                _this.selectedText_.focus();
            }
            _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
        };
        this.handleKeydown_ = function (evt) {
            return _this.foundation_.handleKeydown(evt);
        };
        this.handleMenuSelected_ = function (evtData) {
            return _this.selectedIndex = evtData.detail.index;
        };
        this.handleMenuOpened_ = function () {
            _this.foundation_.handleMenuOpened();
            if (_this.menu_.items.length === 0) {
                return;
            }
            // Menu should open to the last selected element, should open to first menu item otherwise.
            var focusItemIndex = _this.selectedIndex >= 0 ? _this.selectedIndex : 0;
            var focusItemEl = _this.menu_.items[focusItemIndex];
            focusItemEl.focus();
        };
        this.handleMenuClosed_ = function () {
            _this.foundation_.handleMenuClosed();
            // isMenuOpen_ is used to track the state of the menu opening or closing since the menu.open function
            // will return false if the menu is still closing and this method listens to the closed event which
            // occurs after the menu is already closed.
            _this.isMenuOpen_ = false;
            _this.selectedText_.removeAttribute('aria-expanded');
            if (document.activeElement !== _this.selectedText_) {
                _this.foundation_.handleBlur();
            }
        };
        this.targetElement_.addEventListener('change', this.handleChange_);
        this.targetElement_.addEventListener('focus', this.handleFocus_);
        this.targetElement_.addEventListener('blur', this.handleBlur_);
        this.targetElement_.addEventListener('click', this.handleClick_);
        if (this.menuElement_) {
            this.selectedText_.addEventListener('keydown', this.handleKeydown_);
            this.menu_.listen(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed_);
            this.menu_.listen(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened_);
            this.menu_.listen(menuConstants.strings.SELECTED_EVENT, this.handleMenuSelected_);
            if (this.hiddenInput_ && this.hiddenInput_.value) {
                // If the hidden input already has a value, use it to restore the select's value.
                // This can happen e.g. if the user goes back or (in some browsers) refreshes the page.
                var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                enhancedAdapterMethods.setValue(this.hiddenInput_.value);
            } else if (this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR)) {
                // If an element is selected, the select should set the initial selected text.
                var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                enhancedAdapterMethods.setValue(enhancedAdapterMethods.getValue());
            }
        }
        // Initially sync floating label
        this.foundation_.handleChange( /* didChange */false);
        if (this.root_.classList.contains(constants_1.cssClasses.DISABLED) || this.nativeControl_ && this.nativeControl_.disabled) {
            this.disabled = true;
        }
    };
    MDCSelect.prototype.destroy = function () {
        this.targetElement_.removeEventListener('change', this.handleChange_);
        this.targetElement_.removeEventListener('focus', this.handleFocus_);
        this.targetElement_.removeEventListener('blur', this.handleBlur_);
        this.targetElement_.removeEventListener('keydown', this.handleKeydown_);
        this.targetElement_.removeEventListener('click', this.handleClick_);
        if (this.menu_) {
            this.menu_.unlisten(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed_);
            this.menu_.unlisten(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened_);
            this.menu_.unlisten(menuConstants.strings.SELECTED_EVENT, this.handleMenuSelected_);
            this.menu_.destroy();
        }
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.outline_) {
            this.outline_.destroy();
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.destroy();
        }
        if (this.helperText_) {
            this.helperText_.destroy();
        }
        if (this.validationObserver_) {
            this.validationObserver_.disconnect();
        }
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCSelect.prototype, "value", {
        get: function get() {
            return this.foundation_.getValue();
        },
        set: function set(value) {
            this.foundation_.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
        get: function get() {
            var selectedIndex = -1;
            if (this.menuElement_ && this.menu_) {
                var selectedEl = this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR);
                selectedIndex = this.menu_.items.indexOf(selectedEl);
            } else if (this.nativeControl_) {
                selectedIndex = this.nativeControl_.selectedIndex;
            }
            return selectedIndex;
        },
        set: function set(selectedIndex) {
            this.foundation_.setSelectedIndex(selectedIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "disabled", {
        get: function get() {
            return this.root_.classList.contains(constants_1.cssClasses.DISABLED) || (this.nativeControl_ ? this.nativeControl_.disabled : false);
        },
        set: function set(disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
        set: function set(label) {
            this.foundation_.setLeadingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function set(content) {
            this.foundation_.setLeadingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
        /**
         * Sets the text content of the helper text.
         */
        set: function set(content) {
            this.foundation_.setHelperTextContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "valid", {
        /**
         * Checks if the select is in a valid state.
         */
        get: function get() {
            return this.foundation_.isValid();
        },
        /**
         * Sets the current invalid state of the select.
         */
        set: function set(isValid) {
            this.foundation_.setValid(isValid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "required", {
        /**
         * Returns whether the select is required.
         */
        get: function get() {
            if (this.nativeControl_) {
                return this.nativeControl_.required;
            } else {
                return this.selectedText_.getAttribute('aria-required') === 'true';
            }
        },
        /**
         * Sets the control to the required state.
         */
        set: function set(isRequired) {
            if (this.nativeControl_) {
                this.nativeControl_.required = isRequired;
            } else {
                if (isRequired) {
                    this.selectedText_.setAttribute('aria-required', isRequired.toString());
                } else {
                    this.selectedText_.removeAttribute('aria-required');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCSelect.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCSelect.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = __assign({}, this.nativeControl_ ? this.getNativeSelectAdapterMethods_() : this.getEnhancedSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());
        return new foundation_2.MDCSelectFoundation(adapter, this.getFoundationMap_());
    };
    /**
     * Handles setup for the enhanced menu.
     */
    MDCSelect.prototype.enhancedSelectSetup_ = function (menuFactory) {
        var isDisabled = this.root_.classList.contains(constants_1.cssClasses.DISABLED);
        this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
        this.hiddenInput_ = this.root_.querySelector(constants_1.strings.HIDDEN_INPUT_SELECTOR);
        this.menuElement_ = this.root_.querySelector(constants_1.strings.MENU_SELECTOR);
        this.menu_ = menuFactory(this.menuElement_);
        this.menu_.hoistMenuToBody();
        this.menu_.setAnchorElement(this.root_);
        this.menu_.setAnchorCorner(menuSurfaceConstants.Corner.BOTTOM_START);
        this.menu_.wrapFocus = false;
    };
    MDCSelect.prototype.createRipple_ = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = __assign({}, component_6.MDCRipple.createAdapter(this), { registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this.targetElement_.addEventListener(evtType, handler);
            }, deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this.targetElement_.removeEventListener(evtType, handler);
            } });
        // tslint:enable:object-literal-sort-keys
        return new component_6.MDCRipple(this.root_, new foundation_1.MDCRippleFoundation(adapter));
    };
    MDCSelect.prototype.getNativeSelectAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getValue: function getValue() {
                return _this.nativeControl_.value;
            },
            setValue: function setValue(value) {
                _this.nativeControl_.value = value;
            },
            openMenu: function openMenu() {
                return undefined;
            },
            closeMenu: function closeMenu() {
                return undefined;
            },
            isMenuOpen: function isMenuOpen() {
                return false;
            },
            setSelectedIndex: function setSelectedIndex(index) {
                _this.nativeControl_.selectedIndex = index;
            },
            setDisabled: function setDisabled(isDisabled) {
                _this.nativeControl_.disabled = isDisabled;
            },
            setValid: function setValid(isValid) {
                if (isValid) {
                    _this.root_.classList.remove(constants_1.cssClasses.INVALID);
                } else {
                    _this.root_.classList.add(constants_1.cssClasses.INVALID);
                }
            },
            checkValidity: function checkValidity() {
                return _this.nativeControl_.checkValidity();
            }
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getEnhancedSelectAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getValue: function getValue() {
                var listItem = _this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR);
                if (listItem && listItem.hasAttribute(constants_1.strings.ENHANCED_VALUE_ATTR)) {
                    return listItem.getAttribute(constants_1.strings.ENHANCED_VALUE_ATTR) || '';
                }
                return '';
            },
            setValue: function setValue(value) {
                var element = _this.menuElement_.querySelector("[" + constants_1.strings.ENHANCED_VALUE_ATTR + "=\"" + value + "\"]");
                _this.setEnhancedSelectedIndex_(element ? _this.menu_.items.indexOf(element) : -1);
            },
            openMenu: function openMenu() {
                if (_this.menu_ && !_this.menu_.open) {
                    _this.menu_.open = true;
                    _this.isMenuOpen_ = true;
                    _this.selectedText_.setAttribute('aria-expanded', 'true');
                }
            },
            closeMenu: function closeMenu() {
                if (_this.menu_ && _this.menu_.open) {
                    _this.menu_.open = false;
                }
            },
            isMenuOpen: function isMenuOpen() {
                return Boolean(_this.menu_) && _this.isMenuOpen_;
            },
            setSelectedIndex: function setSelectedIndex(index) {
                return _this.setEnhancedSelectedIndex_(index);
            },
            setDisabled: function setDisabled(isDisabled) {
                _this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
                _this.selectedText_.setAttribute('aria-disabled', isDisabled.toString());
                if (_this.hiddenInput_) {
                    _this.hiddenInput_.disabled = isDisabled;
                }
            },
            checkValidity: function checkValidity() {
                var classList = _this.root_.classList;
                if (classList.contains(constants_1.cssClasses.REQUIRED) && !classList.contains(constants_1.cssClasses.DISABLED)) {
                    // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
                    // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
                    return _this.selectedIndex !== -1 && (_this.selectedIndex !== 0 || Boolean(_this.value));
                } else {
                    return true;
                }
            },
            setValid: function setValid(isValid) {
                _this.selectedText_.setAttribute('aria-invalid', (!isValid).toString());
                if (isValid) {
                    _this.root_.classList.remove(constants_1.cssClasses.INVALID);
                } else {
                    _this.root_.classList.add(constants_1.cssClasses.INVALID);
                }
            }
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getCommonAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            hasClass: function hasClass(className) {
                return _this.root_.classList.contains(className);
            },
            setRippleCenter: function setRippleCenter(normalizedX) {
                return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
            },
            activateBottomLine: function activateBottomLine() {
                return _this.lineRipple_ && _this.lineRipple_.activate();
            },
            deactivateBottomLine: function deactivateBottomLine() {
                return _this.lineRipple_ && _this.lineRipple_.deactivate();
            },
            notifyChange: function notifyChange(value) {
                var index = _this.selectedIndex;
                _this.emit(constants_1.strings.CHANGE_EVENT, { value: value, index: index }, true /* shouldBubble  */);
            }
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasOutline: function hasOutline() {
                return Boolean(_this.outline_);
            },
            notchOutline: function notchOutline(labelWidth) {
                return _this.outline_ && _this.outline_.notch(labelWidth);
            },
            closeOutline: function closeOutline() {
                return _this.outline_ && _this.outline_.closeNotch();
            }
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getLabelAdapterMethods_ = function () {
        var _this = this;
        return {
            floatLabel: function floatLabel(shouldFloat) {
                return _this.label_ && _this.label_.float(shouldFloat);
            },
            getLabelWidth: function getLabelWidth() {
                return _this.label_ ? _this.label_.getWidth() : 0;
            }
        };
    };
    /**
     * Calculates where the line ripple should start based on the x coordinate within the component.
     */
    MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
        return xCoordinate - targetClientRect.left;
    };
    MDCSelect.prototype.isTouchEvent_ = function (evt) {
        return Boolean(evt.touches);
    };
    /**
     * Returns a map of all subcomponents to subfoundations.
     */
    MDCSelect.prototype.getFoundationMap_ = function () {
        return {
            helperText: this.helperText_ ? this.helperText_.foundation : undefined,
            leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined
        };
    };
    MDCSelect.prototype.setEnhancedSelectedIndex_ = function (index) {
        var selectedItem = this.menu_.items[index];
        this.selectedText_.textContent = selectedItem ? selectedItem.textContent.trim() : '';
        var previouslySelected = this.menuElement_.querySelector(constants_1.strings.SELECTED_ITEM_SELECTOR);
        if (previouslySelected) {
            previouslySelected.classList.remove(constants_1.cssClasses.SELECTED_ITEM_CLASS);
            previouslySelected.removeAttribute(constants_1.strings.ARIA_SELECTED_ATTR);
        }
        if (selectedItem) {
            selectedItem.classList.add(constants_1.cssClasses.SELECTED_ITEM_CLASS);
            selectedItem.setAttribute(constants_1.strings.ARIA_SELECTED_ATTR, 'true');
        }
        // Synchronize hidden input's value with data-value attribute of selected item.
        // This code path is also followed when setting value directly, so this covers all cases.
        if (this.hiddenInput_) {
            this.hiddenInput_.value = selectedItem ? selectedItem.getAttribute(constants_1.strings.ENHANCED_VALUE_ATTR) || '' : '';
        }
        this.layout();
    };
    MDCSelect.prototype.initialSyncRequiredState_ = function () {
        var isRequired = this.targetElement_.required || this.targetElement_.getAttribute('aria-required') === 'true' || this.root_.classList.contains(constants_1.cssClasses.REQUIRED);
        if (isRequired) {
            if (this.nativeControl_) {
                this.nativeControl_.required = true;
            } else {
                this.selectedText_.setAttribute('aria-required', 'true');
            }
            this.root_.classList.add(constants_1.cssClasses.REQUIRED);
        }
    };
    MDCSelect.prototype.addMutationObserverForRequired_ = function () {
        var _this = this;
        var observerHandler = function observerHandler(attributesList) {
            attributesList.some(function (attributeName) {
                if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) === -1) {
                    return false;
                }
                if (_this.selectedText_) {
                    if (_this.selectedText_.getAttribute('aria-required') === 'true') {
                        _this.root_.classList.add(constants_1.cssClasses.REQUIRED);
                    } else {
                        _this.root_.classList.remove(constants_1.cssClasses.REQUIRED);
                    }
                } else {
                    if (_this.nativeControl_.required) {
                        _this.root_.classList.add(constants_1.cssClasses.REQUIRED);
                    } else {
                        _this.root_.classList.remove(constants_1.cssClasses.REQUIRED);
                    }
                }
                return true;
            });
        };
        var getAttributesList = function getAttributesList(mutationsList) {
            return mutationsList.map(function (mutation) {
                return mutation.attributeName;
            }).filter(function (attributeName) {
                return attributeName;
            });
        };
        var observer = new MutationObserver(function (mutationsList) {
            return observerHandler(getAttributesList(mutationsList));
        });
        observer.observe(this.targetElement_, { attributes: true });
        this.validationObserver_ = observer;
    };
    return MDCSelect;
}(component_1.MDCComponent);
exports.MDCSelect = MDCSelect;

/***/ }),

/***/ "./packages/mdc-select/constants.ts":
/*!******************************************!*\
  !*** ./packages/mdc-select/constants.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var cssClasses = {
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon'
};
exports.cssClasses = cssClasses;
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    ENHANCED_VALUE_ATTR: 'data-value',
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_ITEM_SELECTOR: "." + cssClasses.SELECTED_ITEM_CLASS,
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text'
};
exports.strings = strings;
var numbers = {
    LABEL_SCALE: 0.75
};
exports.numbers = numbers;

/***/ }),

/***/ "./packages/mdc-select/foundation.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-select/foundation.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-select/constants.ts");
var MDCSelectFoundation = /** @class */function (_super) {
    __extends(MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) {
            foundationMap = {};
        }
        var _this = _super.call(this, __assign({}, MDCSelectFoundation.defaultAdapter, adapter)) || this;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.helperText_ = foundationMap.helperText;
        return _this;
    }
    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
        get: function get() {
            return constants_1.numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                activateBottomLine: function activateBottomLine() {
                    return undefined;
                },
                deactivateBottomLine: function deactivateBottomLine() {
                    return undefined;
                },
                setValue: function setValue() {
                    return undefined;
                },
                getValue: function getValue() {
                    return '';
                },
                floatLabel: function floatLabel() {
                    return undefined;
                },
                getLabelWidth: function getLabelWidth() {
                    return 0;
                },
                hasOutline: function hasOutline() {
                    return false;
                },
                notchOutline: function notchOutline() {
                    return undefined;
                },
                closeOutline: function closeOutline() {
                    return undefined;
                },
                openMenu: function openMenu() {
                    return undefined;
                },
                closeMenu: function closeMenu() {
                    return undefined;
                },
                isMenuOpen: function isMenuOpen() {
                    return false;
                },
                setSelectedIndex: function setSelectedIndex() {
                    return undefined;
                },
                setDisabled: function setDisabled() {
                    return undefined;
                },
                setRippleCenter: function setRippleCenter() {
                    return undefined;
                },
                notifyChange: function notifyChange() {
                    return undefined;
                },
                checkValidity: function checkValidity() {
                    return false;
                },
                setValid: function setValid() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectFoundation.prototype.setSelectedIndex = function (index) {
        this.adapter_.setSelectedIndex(index);
        this.adapter_.closeMenu();
        var didChange = true;
        this.handleChange(didChange);
    };
    MDCSelectFoundation.prototype.setValue = function (value) {
        this.adapter_.setValue(value);
        var didChange = true;
        this.handleChange(didChange);
    };
    MDCSelectFoundation.prototype.getValue = function () {
        return this.adapter_.getValue();
    };
    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
        if (isDisabled) {
            this.adapter_.addClass(constants_1.cssClasses.DISABLED);
        } else {
            this.adapter_.removeClass(constants_1.cssClasses.DISABLED);
        }
        this.adapter_.setDisabled(isDisabled);
        this.adapter_.closeMenu();
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
        }
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.layout = function () {
        var openNotch = this.getValue().length > 0;
        this.notchOutline(openNotch);
    };
    MDCSelectFoundation.prototype.handleMenuOpened = function () {
        this.adapter_.addClass(constants_1.cssClasses.ACTIVATED);
    };
    MDCSelectFoundation.prototype.handleMenuClosed = function () {
        this.adapter_.removeClass(constants_1.cssClasses.ACTIVATED);
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundation.prototype.handleChange = function (didChange) {
        if (didChange === void 0) {
            didChange = true;
        }
        var value = this.getValue();
        var optionHasValue = value.length > 0;
        var isRequired = this.adapter_.hasClass(constants_1.cssClasses.REQUIRED);
        this.notchOutline(optionHasValue);
        if (!this.adapter_.hasClass(constants_1.cssClasses.FOCUSED)) {
            this.adapter_.floatLabel(optionHasValue);
        }
        if (didChange) {
            this.adapter_.notifyChange(value);
            if (isRequired) {
                this.setValid(this.isValid());
                if (this.helperText_) {
                    this.helperText_.setValidity(this.isValid());
                }
            }
        }
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundation.prototype.handleFocus = function () {
        this.adapter_.addClass(constants_1.cssClasses.FOCUSED);
        this.adapter_.floatLabel(true);
        this.notchOutline(true);
        this.adapter_.activateBottomLine();
        if (this.helperText_) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundation.prototype.handleBlur = function () {
        if (this.adapter_.isMenuOpen()) {
            return;
        }
        this.adapter_.removeClass(constants_1.cssClasses.FOCUSED);
        this.handleChange(false);
        this.adapter_.deactivateBottomLine();
        var isRequired = this.adapter_.hasClass(constants_1.cssClasses.REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText_) {
                this.helperText_.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
        if (this.adapter_.isMenuOpen()) {
            return;
        }
        this.adapter_.setRippleCenter(normalizedX);
        this.adapter_.openMenu();
    };
    MDCSelectFoundation.prototype.handleKeydown = function (event) {
        if (this.adapter_.isMenuOpen()) {
            return;
        }
        var isEnter = event.key === 'Enter' || event.keyCode === 13;
        var isSpace = event.key === 'Space' || event.keyCode === 32;
        var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
        var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;
        if (this.adapter_.hasClass(constants_1.cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
            this.adapter_.openMenu();
            event.preventDefault();
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        var isFocused = this.adapter_.hasClass(constants_1.cssClasses.FOCUSED);
        if (openNotch) {
            var labelScale = constants_1.numbers.LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        } else if (!isFocused) {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.setValid = function (isValid) {
        this.adapter_.setValid(isValid);
    };
    MDCSelectFoundation.prototype.isValid = function () {
        return this.adapter_.checkValidity();
    };
    return MDCSelectFoundation;
}(foundation_1.MDCFoundation);
exports.MDCSelectFoundation = MDCSelectFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCSelectFoundation;

/***/ }),

/***/ "./packages/mdc-select/helper-text/component.ts":
/*!******************************************************!*\
  !*** ./packages/mdc-select/helper-text/component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-select/helper-text/foundation.ts");
var MDCSelectHelperText = /** @class */function (_super) {
    __extends(MDCSelectHelperText, _super);
    function MDCSelectHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectHelperText.attachTo = function (root) {
        return new MDCSelectHelperText(root);
    };
    Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
        get: function get() {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function addClass(className) {
                return _this.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
                return _this.root_.classList.remove(className);
            },
            hasClass: function hasClass(className) {
                return _this.root_.classList.contains(className);
            },
            setAttr: function setAttr(attr, value) {
                return _this.root_.setAttribute(attr, value);
            },
            removeAttr: function removeAttr(attr) {
                return _this.root_.removeAttribute(attr);
            },
            setContent: function setContent(content) {
                _this.root_.textContent = content;
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_1.MDCSelectHelperTextFoundation(adapter);
    };
    return MDCSelectHelperText;
}(component_1.MDCComponent);
exports.MDCSelectHelperText = MDCSelectHelperText;

/***/ }),

/***/ "./packages/mdc-select/helper-text/constants.ts":
/*!******************************************************!*\
  !*** ./packages/mdc-select/helper-text/constants.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role'
};
exports.strings = strings;
var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
};
exports.cssClasses = cssClasses;

/***/ }),

/***/ "./packages/mdc-select/helper-text/foundation.ts":
/*!*******************************************************!*\
  !*** ./packages/mdc-select/helper-text/foundation.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-select/helper-text/constants.ts");
var MDCSelectHelperTextFoundation = /** @class */function (_super) {
    __extends(MDCSelectHelperTextFoundation, _super);
    function MDCSelectHelperTextFoundation(adapter) {
        return _super.call(this, __assign({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
        get: function get() {
            return constants_1.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function addClass() {
                    return undefined;
                },
                removeClass: function removeClass() {
                    return undefined;
                },
                hasClass: function hasClass() {
                    return false;
                },
                setAttr: function setAttr() {
                    return undefined;
                },
                removeAttr: function removeAttr() {
                    return undefined;
                },
                setContent: function setContent() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    /**
     *  Sets the persistency of the helper text.
     */
    MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter_.addClass(constants_1.cssClasses.HELPER_TEXT_PERSISTENT);
        } else {
            this.adapter_.removeClass(constants_1.cssClasses.HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter_.addClass(constants_1.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        } else {
            this.adapter_.removeClass(constants_1.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(constants_1.strings.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the select validity.
     */
    MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(constants_1.cssClasses.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(constants_1.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;
        if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(constants_1.strings.ROLE, 'alert');
        } else {
            this.adapter_.removeAttr(constants_1.strings.ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.hide_ = function () {
        this.adapter_.setAttr(constants_1.strings.ARIA_HIDDEN, 'true');
    };
    return MDCSelectHelperTextFoundation;
}(foundation_1.MDCFoundation);
exports.MDCSelectHelperTextFoundation = MDCSelectHelperTextFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCSelectHelperTextFoundation;

/***/ }),

/***/ "./packages/mdc-select/helper-text/index.ts":
/*!**************************************************!*\
  !*** ./packages/mdc-select/helper-text/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./component */ "./packages/mdc-select/helper-text/component.ts"));
__export(__webpack_require__(/*! ./foundation */ "./packages/mdc-select/helper-text/foundation.ts"));
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-select/helper-text/constants.ts");
exports.helperTextCssClasses = constants_1.cssClasses;
exports.helperTextStrings = constants_1.strings;

/***/ }),

/***/ "./packages/mdc-select/icon/component.ts":
/*!***********************************************!*\
  !*** ./packages/mdc-select/icon/component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(/*! @material/base/component */ "./packages/mdc-base/component.ts");
var foundation_1 = __webpack_require__(/*! ./foundation */ "./packages/mdc-select/icon/foundation.ts");
var MDCSelectIcon = /** @class */function (_super) {
    __extends(MDCSelectIcon, _super);
    function MDCSelectIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectIcon.attachTo = function (root) {
        return new MDCSelectIcon(root);
    };
    Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
        get: function get() {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function getAttr(attr) {
                return _this.root_.getAttribute(attr);
            },
            setAttr: function setAttr(attr, value) {
                return _this.root_.setAttribute(attr, value);
            },
            removeAttr: function removeAttr(attr) {
                return _this.root_.removeAttribute(attr);
            },
            setContent: function setContent(content) {
                _this.root_.textContent = content;
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
            notifyIconAction: function notifyIconAction() {
                return _this.emit(foundation_1.MDCSelectIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new foundation_1.MDCSelectIconFoundation(adapter);
    };
    return MDCSelectIcon;
}(component_1.MDCComponent);
exports.MDCSelectIcon = MDCSelectIcon;

/***/ }),

/***/ "./packages/mdc-select/icon/constants.ts":
/*!***********************************************!*\
  !*** ./packages/mdc-select/icon/constants.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var strings = {
  ICON_EVENT: 'MDCSelect:icon',
  ICON_ROLE: 'button'
};
exports.strings = strings;

/***/ }),

/***/ "./packages/mdc-select/icon/foundation.ts":
/*!************************************************!*\
  !*** ./packages/mdc-select/icon/foundation.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var foundation_1 = __webpack_require__(/*! @material/base/foundation */ "./packages/mdc-base/foundation.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-select/icon/constants.ts");
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCSelectIconFoundation = /** @class */function (_super) {
    __extends(MDCSelectIconFoundation, _super);
    function MDCSelectIconFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) {
            return _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation, "strings", {
        get: function get() {
            return constants_1.strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
         */
        get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function getAttr() {
                    return null;
                },
                setAttr: function setAttr() {
                    return undefined;
                },
                removeAttr: function removeAttr() {
                    return undefined;
                },
                setContent: function setContent() {
                    return undefined;
                },
                registerInteractionHandler: function registerInteractionHandler() {
                    return undefined;
                },
                deregisterInteractionHandler: function deregisterInteractionHandler() {
                    return undefined;
                },
                notifyIconAction: function notifyIconAction() {
                    return undefined;
                }
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter_.setAttr('tabindex', '-1');
            this.adapter_.removeAttr('role');
        } else {
            this.adapter_.setAttr('tabindex', this.savedTabIndex_);
            this.adapter_.setAttr('role', constants_1.strings.ICON_ROLE);
        }
    };
    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter_.setAttr('aria-label', label);
    };
    MDCSelectIconFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter_.notifyIconAction();
        }
    };
    return MDCSelectIconFoundation;
}(foundation_1.MDCFoundation);
exports.MDCSelectIconFoundation = MDCSelectIconFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCSelectIconFoundation;

/***/ }),

/***/ "./packages/mdc-select/icon/index.ts":
/*!*******************************************!*\
  !*** ./packages/mdc-select/icon/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./component */ "./packages/mdc-select/icon/component.ts"));
__export(__webpack_require__(/*! ./foundation */ "./packages/mdc-select/icon/foundation.ts"));
var constants_1 = __webpack_require__(/*! ./constants */ "./packages/mdc-select/icon/constants.ts");
exports.iconStrings = constants_1.strings;

/***/ }),

/***/ "./packages/mdc-select/index.ts":
/*!**************************************!*\
  !*** ./packages/mdc-select/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./component */ "./packages/mdc-select/component.ts"));
__export(__webpack_require__(/*! ./constants */ "./packages/mdc-select/constants.ts"));
__export(__webpack_require__(/*! ./foundation */ "./packages/mdc-select/foundation.ts"));
__export(__webpack_require__(/*! ./helper-text/index */ "./packages/mdc-select/helper-text/index.ts"));
__export(__webpack_require__(/*! ./icon/index */ "./packages/mdc-select/icon/index.ts"));

/***/ })

/******/ });
});

},{}],2:[function(require,module,exports){
!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});
},{}],3:[function(require,module,exports){
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ETH, _x960b236A07cf, _x0D8775F648430679A, _x107c4504cd79C5d, _x1F573D6Fb3F13d689F, _x26E75307Fc0C, _xF5DCe57282A584D, _x41e5560054824eA6B, _x89d24A6b4CcB1B6fAA, _xE0B7927c4aF23765Cb, _x4f3AfEC4E5a3F2A6a, _x4946Fcea7C692606e, _x419D0d8BdD9aF5e, _x543Ff227F64Aa17eA, _x6810e776880C02933D, _x12B19D3e2ccc14Da, _x818Fc6C2Ec5986bc6E, _xdd974D5C2e2928deA, _x514910771AF9Ca656a, _xBBbbCA6A901c926F, _x6c6EE5e31d828De, _xD29F0b5b3F50b07Fe, _xA4e8C3Ec456107eA, _x58b6A8A3302369DAEc, _x0F5D2fB29fb7d3CFeE, _x7D1AfA7B718fb893dB, _x80f222a749a2e18Eb, _x9f8F72aA9304c8B, _x957c30aB0426e0C93C, _xB62132e35a6c13ee1E, _x1776e1F26f98b1A5dF, _x8E870D67F660D95d5b, _x93ED3FBe21207Ec2E, _x6758B7d441a9739b, _x687BfC3E73f6af55F, _x255Aa6DF07540Cb5d, _x408e41876cCCDC0F, _x1985365e9f78359a9B, _x168296bb09e24A, _x607F4C5BB672230e, _xB4EFd85c19999D, _x4156D3342D5c385a, _x42456D7084eacF, _x744d70FDBE2Ba4CF, _x2Dea20405c52Fb477e, _x42d6622deCe394b, _xB64ef51C888972c, _x0cbe2df57ca9191b, _xaAAf91D9b90dF800Df, _x8dd5fbCe2F6a956C, _x09cabEC1eAd1c0Ba, _xA0b86991c6218b36c, _x8f3470A7388c05eE4e, _x2260FAC5E5542a773A, _x09fE5f0236F0Ea5D, _xC02aaA39b223FE8D0A, _xB4272071eCAdd69d, _xE41d2489571d;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addrContract = exports.addrContract = '0x7e81081c45ebf2fade91de90d7c180f1edfcf534';
var cowSwapAddress = exports.cowSwapAddress = "0x14173d48b1602bb686f33cd40b4ca66535b980b2";

var etherscanDomain = exports.etherscanDomain = 'ropsten.etherscan.io';
var biggestNumber = exports.biggestNumber = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

var NAME = 'name';
var SYMBOL = 'symbol';
var DECIMALS = 'decimals';
var Address = 'address';
var EXCHANGE_ADDRESS = 'exchangeAddress';

var ETH = {
  ETH: (_ETH = {}, _defineProperty(_ETH, NAME, 'Ethereum'), _defineProperty(_ETH, SYMBOL, 'ETH'), _defineProperty(_ETH, DECIMALS, 18), _defineProperty(_ETH, EXCHANGE_ADDRESS, null), _ETH)
};

var tokens = exports.tokens = {
  '0x960b236A07cf122663c4303350609A66A7B288C0': (_x960b236A07cf = {}, _defineProperty(_x960b236A07cf, NAME, 'Aragon Network Token'), _defineProperty(_x960b236A07cf, SYMBOL, 'ANT'), _defineProperty(_x960b236A07cf, DECIMALS, 18), _defineProperty(_x960b236A07cf, EXCHANGE_ADDRESS, '0x077d52B047735976dfdA76feF74d4d988AC25196'), _x960b236A07cf),
  '0x0D8775F648430679A709E98d2b0Cb6250d2887EF': (_x0D8775F648430679A = {}, _defineProperty(_x0D8775F648430679A, NAME, 'Basic Attention Token'), _defineProperty(_x0D8775F648430679A, SYMBOL, 'BAT'), _defineProperty(_x0D8775F648430679A, DECIMALS, 18), _defineProperty(_x0D8775F648430679A, EXCHANGE_ADDRESS, '0x2E642b8D59B45a1D8c5aEf716A84FF44ea665914'), _x0D8775F648430679A),
  '0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e': (_x107c4504cd79C5d = {}, _defineProperty(_x107c4504cd79C5d, NAME, 'Bloom Token'), _defineProperty(_x107c4504cd79C5d, SYMBOL, 'BLT'), _defineProperty(_x107c4504cd79C5d, DECIMALS, 18), _defineProperty(_x107c4504cd79C5d, EXCHANGE_ADDRESS, '0x0E6A53B13688018A3df8C69f99aFB19A3068D04f'), _x107c4504cd79C5d),
  '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C': (_x1F573D6Fb3F13d689F = {}, _defineProperty(_x1F573D6Fb3F13d689F, NAME, 'Bancor Network Token'), _defineProperty(_x1F573D6Fb3F13d689F, SYMBOL, 'BNT'), _defineProperty(_x1F573D6Fb3F13d689F, DECIMALS, 18), _defineProperty(_x1F573D6Fb3F13d689F, EXCHANGE_ADDRESS, '0x87d80DBD37E551F58680B4217b23aF6a752DA83F'), _x1F573D6Fb3F13d689F),
  '0x26E75307Fc0C021472fEb8F727839531F112f317': (_x26E75307Fc0C = {}, _defineProperty(_x26E75307Fc0C, NAME, 'Crypto20'), _defineProperty(_x26E75307Fc0C, SYMBOL, 'C20'), _defineProperty(_x26E75307Fc0C, DECIMALS, 18), _defineProperty(_x26E75307Fc0C, EXCHANGE_ADDRESS, '0xF7B5A4b934658025390ff69dB302BC7F2AC4a542'), _x26E75307Fc0C),
  '0xF5DCe57282A584D2746FaF1593d3121Fcac444dC': (_xF5DCe57282A584D = {}, _defineProperty(_xF5DCe57282A584D, NAME, 'Compound Dai'), _defineProperty(_xF5DCe57282A584D, SYMBOL, 'cDAI'), _defineProperty(_xF5DCe57282A584D, DECIMALS, 8), _defineProperty(_xF5DCe57282A584D, EXCHANGE_ADDRESS, '0x45A2FDfED7F7a2c791fb1bdF6075b83faD821ddE'), _xF5DCe57282A584D),
  '0x41e5560054824eA6B0732E656E3Ad64E20e94E45': (_x41e5560054824eA6B = {}, _defineProperty(_x41e5560054824eA6B, NAME, 'Civic'), _defineProperty(_x41e5560054824eA6B, SYMBOL, 'CVC'), _defineProperty(_x41e5560054824eA6B, DECIMALS, 8), _defineProperty(_x41e5560054824eA6B, EXCHANGE_ADDRESS, '0x1C6c712b1F4a7c263B1DBd8F97fb447c945d3b9a'), _x41e5560054824eA6B),
  '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359': (_x89d24A6b4CcB1B6fAA = {}, _defineProperty(_x89d24A6b4CcB1B6fAA, NAME, 'Dai Stablecoin v1.0'), _defineProperty(_x89d24A6b4CcB1B6fAA, SYMBOL, 'DAI'), _defineProperty(_x89d24A6b4CcB1B6fAA, DECIMALS, 18), _defineProperty(_x89d24A6b4CcB1B6fAA, EXCHANGE_ADDRESS, '0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14'), _x89d24A6b4CcB1B6fAA),
  '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': (_xE0B7927c4aF23765Cb = {}, _defineProperty(_xE0B7927c4aF23765Cb, NAME, 'DigixDAO'), _defineProperty(_xE0B7927c4aF23765Cb, SYMBOL, 'DGD'), _defineProperty(_xE0B7927c4aF23765Cb, DECIMALS, 9), _defineProperty(_xE0B7927c4aF23765Cb, EXCHANGE_ADDRESS, '0xD55C1cA9F5992A2e5E379DCe49Abf24294ABe055'), _xE0B7927c4aF23765Cb),
  '0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF': (_x4f3AfEC4E5a3F2A6a = {}, _defineProperty(_x4f3AfEC4E5a3F2A6a, NAME, 'Digix Gold Token'), _defineProperty(_x4f3AfEC4E5a3F2A6a, SYMBOL, 'DGX'), _defineProperty(_x4f3AfEC4E5a3F2A6a, DECIMALS, 9), _defineProperty(_x4f3AfEC4E5a3F2A6a, EXCHANGE_ADDRESS, '0xb92dE8B30584392Af27726D5ce04Ef3c4e5c9924'), _x4f3AfEC4E5a3F2A6a),
  '0x4946Fcea7C692606e8908002e55A582af44AC121': (_x4946Fcea7C692606e = {}, _defineProperty(_x4946Fcea7C692606e, NAME, 'FOAM Token'), _defineProperty(_x4946Fcea7C692606e, SYMBOL, 'FOAM'), _defineProperty(_x4946Fcea7C692606e, DECIMALS, 18), _defineProperty(_x4946Fcea7C692606e, EXCHANGE_ADDRESS, '0xf79cb3BEA83BD502737586A6E8B133c378FD1fF2'), _x4946Fcea7C692606e),
  '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b': (_x419D0d8BdD9aF5e = {}, _defineProperty(_x419D0d8BdD9aF5e, NAME, 'FunFair'), _defineProperty(_x419D0d8BdD9aF5e, SYMBOL, 'FUN'), _defineProperty(_x419D0d8BdD9aF5e, DECIMALS, 8), _defineProperty(_x419D0d8BdD9aF5e, EXCHANGE_ADDRESS, '0x60a87cC7Fca7E53867facB79DA73181B1bB4238B'), _x419D0d8BdD9aF5e),
  '0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf': (_x543Ff227F64Aa17eA = {}, _defineProperty(_x543Ff227F64Aa17eA, NAME, 'DAOstack'), _defineProperty(_x543Ff227F64Aa17eA, SYMBOL, 'GEN'), _defineProperty(_x543Ff227F64Aa17eA, DECIMALS, 18), _defineProperty(_x543Ff227F64Aa17eA, EXCHANGE_ADDRESS, '0x26Cc0EAb6Cb650B0Db4D0d0dA8cB5BF69F4ad692'), _x543Ff227F64Aa17eA),
  '0x6810e776880C02933D47DB1b9fc05908e5386b96': (_x6810e776880C02933D = {}, _defineProperty(_x6810e776880C02933D, NAME, 'Gnosis Token'), _defineProperty(_x6810e776880C02933D, SYMBOL, 'GNO'), _defineProperty(_x6810e776880C02933D, DECIMALS, 18), _defineProperty(_x6810e776880C02933D, EXCHANGE_ADDRESS, '0xe8e45431b93215566BA923a7E611B7342Ea954DF'), _x6810e776880C02933D),
  '0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD': (_x12B19D3e2ccc14Da = {}, _defineProperty(_x12B19D3e2ccc14Da, NAME, 'GRID Token'), _defineProperty(_x12B19D3e2ccc14Da, SYMBOL, 'GRID'), _defineProperty(_x12B19D3e2ccc14Da, DECIMALS, 12), _defineProperty(_x12B19D3e2ccc14Da, EXCHANGE_ADDRESS, '0x4B17685b330307C751B47f33890c8398dF4Fe407'), _x12B19D3e2ccc14Da),
  '0x818Fc6C2Ec5986bc6E2CBf00939d90556aB12ce5': (_x818Fc6C2Ec5986bc6E = {}, _defineProperty(_x818Fc6C2Ec5986bc6E, NAME, 'Kin'), _defineProperty(_x818Fc6C2Ec5986bc6E, SYMBOL, 'KIN'), _defineProperty(_x818Fc6C2Ec5986bc6E, DECIMALS, 18), _defineProperty(_x818Fc6C2Ec5986bc6E, EXCHANGE_ADDRESS, '0xb7520a5F8c832c573d6BD0Df955fC5c9b72400F7'), _x818Fc6C2Ec5986bc6E),
  '0xdd974D5C2e2928deA5F71b9825b8b646686BD200': (_xdd974D5C2e2928deA = {}, _defineProperty(_xdd974D5C2e2928deA, NAME, 'Kyber Network Crystal'), _defineProperty(_xdd974D5C2e2928deA, SYMBOL, 'KNC'), _defineProperty(_xdd974D5C2e2928deA, DECIMALS, 18), _defineProperty(_xdd974D5C2e2928deA, EXCHANGE_ADDRESS, '0x49c4f9bc14884f6210F28342ceD592A633801a8b'), _xdd974D5C2e2928deA),
  '0x514910771AF9Ca656af840dff83E8264EcF986CA': (_x514910771AF9Ca656a = {}, _defineProperty(_x514910771AF9Ca656a, NAME, 'ChainLink Token'), _defineProperty(_x514910771AF9Ca656a, SYMBOL, 'LINK'), _defineProperty(_x514910771AF9Ca656a, DECIMALS, 18), _defineProperty(_x514910771AF9Ca656a, EXCHANGE_ADDRESS, '0xF173214C720f58E03e194085B1DB28B50aCDeeaD'), _x514910771AF9Ca656a),
  '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD': (_xBBbbCA6A901c926F = {}, _defineProperty(_xBBbbCA6A901c926F, NAME, 'LoopringCoin V2'), _defineProperty(_xBBbbCA6A901c926F, SYMBOL, 'LRC'), _defineProperty(_xBBbbCA6A901c926F, DECIMALS, 18), _defineProperty(_xBBbbCA6A901c926F, EXCHANGE_ADDRESS, '0xA539BAaa3aCA455c986bB1E25301CEF936CE1B65'), _xBBbbCA6A901c926F),
  '0x6c6EE5e31d828De241282B9606C8e98Ea48526E2': (_x6c6EE5e31d828De = {}, _defineProperty(_x6c6EE5e31d828De, NAME, 'HoloToken'), _defineProperty(_x6c6EE5e31d828De, SYMBOL, 'HOT'), _defineProperty(_x6c6EE5e31d828De, DECIMALS, 18), _defineProperty(_x6c6EE5e31d828De, EXCHANGE_ADDRESS, '0xd4777E164c6C683E10593E08760B803D58529a8E'), _x6c6EE5e31d828De),
  '0xD29F0b5b3F50b07Fe9a9511F7d86F4f4bAc3f8c4': (_xD29F0b5b3F50b07Fe = {}, _defineProperty(_xD29F0b5b3F50b07Fe, NAME, 'Liquidity.Network Token'), _defineProperty(_xD29F0b5b3F50b07Fe, SYMBOL, 'LQD'), _defineProperty(_xD29F0b5b3F50b07Fe, DECIMALS, 18), _defineProperty(_xD29F0b5b3F50b07Fe, EXCHANGE_ADDRESS, '0xe3406e7D0155E0a83236eC25D34Cd3D903036669'), _xD29F0b5b3F50b07Fe),
  '0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0': (_xA4e8C3Ec456107eA = {}, _defineProperty(_xA4e8C3Ec456107eA, NAME, 'LoomToken'), _defineProperty(_xA4e8C3Ec456107eA, SYMBOL, 'LOOM'), _defineProperty(_xA4e8C3Ec456107eA, DECIMALS, 18), _defineProperty(_xA4e8C3Ec456107eA, EXCHANGE_ADDRESS, '0x417CB32bc991fBbDCaE230C7c4771CC0D69daA6b'), _xA4e8C3Ec456107eA),
  '0x58b6A8A3302369DAEc383334672404Ee733aB239': (_x58b6A8A3302369DAEc = {}, _defineProperty(_x58b6A8A3302369DAEc, NAME, 'Livepeer Token'), _defineProperty(_x58b6A8A3302369DAEc, SYMBOL, 'LPT'), _defineProperty(_x58b6A8A3302369DAEc, DECIMALS, 18), _defineProperty(_x58b6A8A3302369DAEc, EXCHANGE_ADDRESS, '0xc4a1C45D5546029Fd57128483aE65b56124BFA6A'), _x58b6A8A3302369DAEc),
  '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942': (_x0F5D2fB29fb7d3CFeE = {}, _defineProperty(_x0F5D2fB29fb7d3CFeE, NAME, 'Decentraland MANA'), _defineProperty(_x0F5D2fB29fb7d3CFeE, SYMBOL, 'MANA'), _defineProperty(_x0F5D2fB29fb7d3CFeE, DECIMALS, 18), _defineProperty(_x0F5D2fB29fb7d3CFeE, EXCHANGE_ADDRESS, '0xC6581Ce3A005e2801c1e0903281BBd318eC5B5C2'), _x0F5D2fB29fb7d3CFeE),
  '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0': (_x7D1AfA7B718fb893dB = {}, _defineProperty(_x7D1AfA7B718fb893dB, NAME, 'Matic Token'), _defineProperty(_x7D1AfA7B718fb893dB, SYMBOL, 'MATIC'), _defineProperty(_x7D1AfA7B718fb893dB, DECIMALS, 18), _defineProperty(_x7D1AfA7B718fb893dB, EXCHANGE_ADDRESS, '0x9a7A75E66B325a3BD46973B2b57c9b8d9D26a621'), _x7D1AfA7B718fb893dB),
  '0x80f222a749a2e18Eb7f676D371F19ad7EFEEe3b7': (_x80f222a749a2e18Eb = {}, _defineProperty(_x80f222a749a2e18Eb, NAME, 'Magnolia Token'), _defineProperty(_x80f222a749a2e18Eb, SYMBOL, 'MGN'), _defineProperty(_x80f222a749a2e18Eb, DECIMALS, 18), _defineProperty(_x80f222a749a2e18Eb, EXCHANGE_ADDRESS, '0xdd80Ca8062c7Ef90FcA2547E6a2A126C596e611F'), _x80f222a749a2e18Eb),
  '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2': (_x9f8F72aA9304c8B = {}, _defineProperty(_x9f8F72aA9304c8B, NAME, 'Maker'), _defineProperty(_x9f8F72aA9304c8B, SYMBOL, 'MKR'), _defineProperty(_x9f8F72aA9304c8B, DECIMALS, 18), _defineProperty(_x9f8F72aA9304c8B, EXCHANGE_ADDRESS, '0x2C4Bd064b998838076fa341A83d007FC2FA50957'), _x9f8F72aA9304c8B),
  '0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e': (_x957c30aB0426e0C93C = {}, _defineProperty(_x957c30aB0426e0C93C, NAME, 'Modum Token'), _defineProperty(_x957c30aB0426e0C93C, SYMBOL, 'MOD'), _defineProperty(_x957c30aB0426e0C93C, DECIMALS, 0), _defineProperty(_x957c30aB0426e0C93C, EXCHANGE_ADDRESS, '0xCCB98654CD486216fFF273dd025246588E77cFC1'), _x957c30aB0426e0C93C),
  '0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206': (_xB62132e35a6c13ee1E = {}, _defineProperty(_xB62132e35a6c13ee1E, NAME, 'Nexo'), _defineProperty(_xB62132e35a6c13ee1E, SYMBOL, 'NEXO'), _defineProperty(_xB62132e35a6c13ee1E, DECIMALS, 18), _defineProperty(_xB62132e35a6c13ee1E, EXCHANGE_ADDRESS, '0x069C97DBA948175D10af4b2414969e0B88d44669'), _xB62132e35a6c13ee1E),
  '0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671': (_x1776e1F26f98b1A5dF = {}, _defineProperty(_x1776e1F26f98b1A5dF, NAME, 'Numeraire'), _defineProperty(_x1776e1F26f98b1A5dF, SYMBOL, 'NMR'), _defineProperty(_x1776e1F26f98b1A5dF, DECIMALS, 18), _defineProperty(_x1776e1F26f98b1A5dF, EXCHANGE_ADDRESS, '0x2Bf5A5bA29E60682fC56B2Fcf9cE07Bef4F6196f'), _x1776e1F26f98b1A5dF),
  '0x8E870D67F660D95d5be530380D0eC0bd388289E1': (_x8E870D67F660D95d5b = {}, _defineProperty(_x8E870D67F660D95d5b, NAME, 'PAX'), _defineProperty(_x8E870D67F660D95d5b, SYMBOL, 'PAX'), _defineProperty(_x8E870D67F660D95d5b, DECIMALS, 18), _defineProperty(_x8E870D67F660D95d5b, EXCHANGE_ADDRESS, '0xC040d51b07Aea5d94a89Bc21E8078B77366Fc6C7'), _x8E870D67F660D95d5b),
  '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d': (_x93ED3FBe21207Ec2E = {}, _defineProperty(_x93ED3FBe21207Ec2E, NAME, 'Pinakion'), _defineProperty(_x93ED3FBe21207Ec2E, SYMBOL, 'PNK'), _defineProperty(_x93ED3FBe21207Ec2E, DECIMALS, 18), _defineProperty(_x93ED3FBe21207Ec2E, EXCHANGE_ADDRESS, '0xF506828B166de88cA2EDb2A98D960aBba0D2402A'), _x93ED3FBe21207Ec2E),
  '0x6758B7d441a9739b98552B373703d8d3d14f9e62': (_x6758B7d441a9739b = {}, _defineProperty(_x6758B7d441a9739b, NAME, 'POA ERC20 on Foundation'), _defineProperty(_x6758B7d441a9739b, SYMBOL, 'POA20'), _defineProperty(_x6758B7d441a9739b, DECIMALS, 18), _defineProperty(_x6758B7d441a9739b, EXCHANGE_ADDRESS, '0xA2E6B3EF205FeAEe475937c4883b24E6eB717eeF'), _x6758B7d441a9739b),
  '0x687BfC3E73f6af55F0CccA8450114D107E781a0e': (_x687BfC3E73f6af55F = {}, _defineProperty(_x687BfC3E73f6af55F, NAME, 'QChi'), _defineProperty(_x687BfC3E73f6af55F, SYMBOL, 'QCH'), _defineProperty(_x687BfC3E73f6af55F, DECIMALS, 18), _defineProperty(_x687BfC3E73f6af55F, EXCHANGE_ADDRESS, '0x755899F0540c3548b99E68C59AdB0f15d2695188'), _x687BfC3E73f6af55F),
  '0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6': (_x255Aa6DF07540Cb5d = {}, _defineProperty(_x255Aa6DF07540Cb5d, NAME, 'Raiden Token'), _defineProperty(_x255Aa6DF07540Cb5d, SYMBOL, 'RDN'), _defineProperty(_x255Aa6DF07540Cb5d, DECIMALS, 18), _defineProperty(_x255Aa6DF07540Cb5d, EXCHANGE_ADDRESS, '0x7D03CeCb36820b4666F45E1b4cA2538724Db271C'), _x255Aa6DF07540Cb5d),
  '0x408e41876cCCDC0F92210600ef50372656052a38': (_x408e41876cCCDC0F = {}, _defineProperty(_x408e41876cCCDC0F, NAME, 'Republic Token'), _defineProperty(_x408e41876cCCDC0F, SYMBOL, 'REN'), _defineProperty(_x408e41876cCCDC0F, DECIMALS, 18), _defineProperty(_x408e41876cCCDC0F, EXCHANGE_ADDRESS, '0x43892992B0b102459E895B88601Bb2C76736942c'), _x408e41876cCCDC0F),
  '0x1985365e9f78359a9B6AD760e32412f4a445E862': (_x1985365e9f78359a9B = {}, _defineProperty(_x1985365e9f78359a9B, NAME, 'Reputation'), _defineProperty(_x1985365e9f78359a9B, SYMBOL, 'REP'), _defineProperty(_x1985365e9f78359a9B, DECIMALS, 18), _defineProperty(_x1985365e9f78359a9B, EXCHANGE_ADDRESS, '0x48B04d2A05B6B604d8d5223Fd1984f191DED51af'), _x1985365e9f78359a9B),
  '0x168296bb09e24A88805CB9c33356536B980D3fC5': (_x168296bb09e24A = {}, _defineProperty(_x168296bb09e24A, NAME, 'RHOC'), _defineProperty(_x168296bb09e24A, SYMBOL, 'RHOC'), _defineProperty(_x168296bb09e24A, DECIMALS, 8), _defineProperty(_x168296bb09e24A, EXCHANGE_ADDRESS, '0x394e524b47A3AB3D3327f7fF6629dC378c1494a3'), _x168296bb09e24A),
  '0x607F4C5BB672230e8672085532f7e901544a7375': (_x607F4C5BB672230e = {}, _defineProperty(_x607F4C5BB672230e, NAME, 'iEx.ec Network Token'), _defineProperty(_x607F4C5BB672230e, SYMBOL, 'RLC'), _defineProperty(_x607F4C5BB672230e, DECIMALS, 9), _defineProperty(_x607F4C5BB672230e, EXCHANGE_ADDRESS, '0xA825CAE02B310E9901b4776806CE25db520c8642'), _x607F4C5BB672230e),
  '0xB4EFd85c19999D84251304bDA99E90B92300Bd93': (_xB4EFd85c19999D = {}, _defineProperty(_xB4EFd85c19999D, NAME, 'Rocket Pool'), _defineProperty(_xB4EFd85c19999D, SYMBOL, 'RPL'), _defineProperty(_xB4EFd85c19999D, DECIMALS, 18), _defineProperty(_xB4EFd85c19999D, EXCHANGE_ADDRESS, '0x3Fb2F18065926DdB33E7571475c509541d15dA0e'), _xB4EFd85c19999D),
  '0x4156D3342D5c385a87D264F90653733592000581': (_x4156D3342D5c385a = {}, _defineProperty(_x4156D3342D5c385a, NAME, 'Salt'), _defineProperty(_x4156D3342D5c385a, SYMBOL, 'SALT'), _defineProperty(_x4156D3342D5c385a, DECIMALS, 8), _defineProperty(_x4156D3342D5c385a, EXCHANGE_ADDRESS, '0xC0C59cDe851bfcbdddD3377EC10ea54A18Efb937'), _x4156D3342D5c385a),
  '0x42456D7084eacF4083f1140d3229471bbA2949A8': (_x42456D7084eacF = {}, _defineProperty(_x42456D7084eacF, NAME, 'Synth sETH'), _defineProperty(_x42456D7084eacF, SYMBOL, 'sETH'), _defineProperty(_x42456D7084eacF, DECIMALS, 18), _defineProperty(_x42456D7084eacF, EXCHANGE_ADDRESS, '0x4740C758859D4651061CC9CDEFdBa92BDc3a845d'), _x42456D7084eacF),
  '0x744d70FDBE2Ba4CF95131626614a1763DF805B9E': (_x744d70FDBE2Ba4CF = {}, _defineProperty(_x744d70FDBE2Ba4CF, NAME, 'Status Network Token'), _defineProperty(_x744d70FDBE2Ba4CF, SYMBOL, 'SNT'), _defineProperty(_x744d70FDBE2Ba4CF, DECIMALS, 18), _defineProperty(_x744d70FDBE2Ba4CF, EXCHANGE_ADDRESS, '0x1aEC8F11A7E78dC22477e91Ed924Fab46e3A88Fd'), _x744d70FDBE2Ba4CF),
  '0x2Dea20405c52Fb477ecCa8Fe622661d316Ac5400': (_x2Dea20405c52Fb477e = {}, _defineProperty(_x2Dea20405c52Fb477e, NAME, 'Synthetix Network Token'), _defineProperty(_x2Dea20405c52Fb477e, SYMBOL, 'SNX'), _defineProperty(_x2Dea20405c52Fb477e, DECIMALS, 18), _defineProperty(_x2Dea20405c52Fb477e, EXCHANGE_ADDRESS, '0x9fAA0Cb10912DE7Ad1D86705C65de291a9088A61'), _x2Dea20405c52Fb477e),
  '0x42d6622deCe394b54999Fbd73D108123806f6a18': (_x42d6622deCe394b = {}, _defineProperty(_x42d6622deCe394b, NAME, 'SPANK'), _defineProperty(_x42d6622deCe394b, SYMBOL, 'SPANK'), _defineProperty(_x42d6622deCe394b, DECIMALS, 18), _defineProperty(_x42d6622deCe394b, EXCHANGE_ADDRESS, '0x4e395304655F0796bc3bc63709DB72173b9DdF98'), _x42d6622deCe394b),
  '0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC': (_xB64ef51C888972c = {}, _defineProperty(_xB64ef51C888972c, NAME, 'StorjToken'), _defineProperty(_xB64ef51C888972c, SYMBOL, 'STORJ'), _defineProperty(_xB64ef51C888972c, DECIMALS, 8), _defineProperty(_xB64ef51C888972c, EXCHANGE_ADDRESS, '0xA7298541E52f96d42382eCBe4f242cBcBC534d02'), _xB64ef51C888972c),
  '0x0cbe2df57ca9191b64a7af3baa3f946fa7df2f25': (_x0cbe2df57ca9191b = {}, _defineProperty(_x0cbe2df57ca9191b, NAME, 'Synth sUSD'), _defineProperty(_x0cbe2df57ca9191b, SYMBOL, 'sUSD'), _defineProperty(_x0cbe2df57ca9191b, DECIMALS, 18), _defineProperty(_x0cbe2df57ca9191b, EXCHANGE_ADDRESS, '0xA1ECDcca26150cF69090280eE2EE32347C238c7b'), _x0cbe2df57ca9191b),
  '0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a': (_xaAAf91D9b90dF800Df = {}, _defineProperty(_xaAAf91D9b90dF800Df, NAME, 'Monolith TKN'), _defineProperty(_xaAAf91D9b90dF800Df, SYMBOL, 'TKN'), _defineProperty(_xaAAf91D9b90dF800Df, DECIMALS, 8), _defineProperty(_xaAAf91D9b90dF800Df, EXCHANGE_ADDRESS, '0xb6cFBf322db47D39331E306005DC7E5e6549942B'), _xaAAf91D9b90dF800Df),
  '0x8dd5fbCe2F6a956C3022bA3663759011Dd51e73E': (_x8dd5fbCe2F6a956C = {}, _defineProperty(_x8dd5fbCe2F6a956C, NAME, 'TrueUSD'), _defineProperty(_x8dd5fbCe2F6a956C, SYMBOL, 'TUSD'), _defineProperty(_x8dd5fbCe2F6a956C, DECIMALS, 18), _defineProperty(_x8dd5fbCe2F6a956C, EXCHANGE_ADDRESS, '0x4F30E682D0541eAC91748bd38A648d759261b8f3'), _x8dd5fbCe2F6a956C),
  '0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14': (_x09cabEC1eAd1c0Ba = {}, _defineProperty(_x09cabEC1eAd1c0Ba, NAME, 'Uniswap V1'), _defineProperty(_x09cabEC1eAd1c0Ba, SYMBOL, 'UNI-V1:DAI'), _defineProperty(_x09cabEC1eAd1c0Ba, DECIMALS, 18), _defineProperty(_x09cabEC1eAd1c0Ba, EXCHANGE_ADDRESS, '0x601c32E0580D3aef9437dB52D09f5a5D7E60eC22'), _x09cabEC1eAd1c0Ba),
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': (_xA0b86991c6218b36c = {}, _defineProperty(_xA0b86991c6218b36c, NAME, 'USD//C'), _defineProperty(_xA0b86991c6218b36c, SYMBOL, 'USDC'), _defineProperty(_xA0b86991c6218b36c, DECIMALS, 6), _defineProperty(_xA0b86991c6218b36c, EXCHANGE_ADDRESS, '0x97deC872013f6B5fB443861090ad931542878126'), _xA0b86991c6218b36c),
  '0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374': (_x8f3470A7388c05eE4e = {}, _defineProperty(_x8f3470A7388c05eE4e, NAME, 'Veritaseum'), _defineProperty(_x8f3470A7388c05eE4e, SYMBOL, 'VERI'), _defineProperty(_x8f3470A7388c05eE4e, DECIMALS, 18), _defineProperty(_x8f3470A7388c05eE4e, EXCHANGE_ADDRESS, '0x17e5BF07D696eaf0d14caA4B44ff8A1E17B34de3'), _x8f3470A7388c05eE4e),
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599': (_x2260FAC5E5542a773A = {}, _defineProperty(_x2260FAC5E5542a773A, NAME, 'Wrapped BTC'), _defineProperty(_x2260FAC5E5542a773A, SYMBOL, 'WBTC'), _defineProperty(_x2260FAC5E5542a773A, DECIMALS, 8), _defineProperty(_x2260FAC5E5542a773A, EXCHANGE_ADDRESS, '0x4d2f5cFbA55AE412221182D8475bC85799A5644b'), _x2260FAC5E5542a773A),
  '0x09fE5f0236F0Ea5D930197DCE254d77B04128075': (_x09fE5f0236F0Ea5D = {}, _defineProperty(_x09fE5f0236F0Ea5D, NAME, 'Wrapped CryptoKitties'), _defineProperty(_x09fE5f0236F0Ea5D, SYMBOL, 'WCK'), _defineProperty(_x09fE5f0236F0Ea5D, DECIMALS, 18), _defineProperty(_x09fE5f0236F0Ea5D, EXCHANGE_ADDRESS, '0x4FF7Fa493559c40aBd6D157a0bfC35Df68d8D0aC'), _x09fE5f0236F0Ea5D),
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': (_xC02aaA39b223FE8D0A = {}, _defineProperty(_xC02aaA39b223FE8D0A, NAME, 'Wrapped Ether'), _defineProperty(_xC02aaA39b223FE8D0A, SYMBOL, 'WETH'), _defineProperty(_xC02aaA39b223FE8D0A, DECIMALS, 18), _defineProperty(_xC02aaA39b223FE8D0A, EXCHANGE_ADDRESS, '0xA2881A90Bf33F03E7a3f803765Cd2ED5c8928dFb'), _xC02aaA39b223FE8D0A),
  '0xB4272071eCAdd69d933AdcD19cA99fe80664fc08': (_xB4272071eCAdd69d = {}, _defineProperty(_xB4272071eCAdd69d, NAME, 'CryptoFranc'), _defineProperty(_xB4272071eCAdd69d, SYMBOL, 'XCHF'), _defineProperty(_xB4272071eCAdd69d, DECIMALS, 18), _defineProperty(_xB4272071eCAdd69d, EXCHANGE_ADDRESS, '0x8dE0d002DC83478f479dC31F76cB0a8aa7CcEa17'), _xB4272071eCAdd69d),
  '0xE41d2489571d322189246DaFA5ebDe1F4699F498': (_xE41d2489571d = {}, _defineProperty(_xE41d2489571d, NAME, '0x Protocol Token'), _defineProperty(_xE41d2489571d, SYMBOL, 'ZRX'), _defineProperty(_xE41d2489571d, DECIMALS, 18), _defineProperty(_xE41d2489571d, EXCHANGE_ADDRESS, '0xaE76c84C9262Cdb9abc0C2c8888e62Db8E22A0bF'), _xE41d2489571d)
};

},{}],5:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _pixi = require('pixi.js');

var PIXI = _interopRequireWildcard(_pixi);

var _countup = require('countup.js');

var _countup2 = _interopRequireDefault(_countup);

var _fontfaceobserver = require('fontfaceobserver');

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

PIXI.utils.skipHello();
var app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x7AC654
});

var stage = new PIXI.Container();
var topStage = new PIXI.Container();

var cowAreaWidth = window.innerWidth;
var cowAreaHeight = window.innerHeight;

var cows = [];
var elemContractAddress = document.getElementById('contractAddress');

function setupStage() {
  var texture = PIXI.Texture.fromFrame('grass');

  var tilingSprite = new PIXI.extras.TilingSprite(texture, app.screen.width, app.screen.height);

  var tileScale = 0.15;
  tilingSprite.tileScale.x = tileScale;
  tilingSprite.tileScale.y = tileScale;

  app.stage.addChild(tilingSprite);
  app.stage.addChild(stage);
  app.stage.addChild(topStage);

  window.addEventListener('resize', function () {
    app.renderer.resize(window.innerWidth, window.innerHeight);

    tilingSprite.width = app.screen.width;
    tilingSprite.height = app.screen.height;

    var stageScale = Math.min(window.innerWidth / cowAreaWidth, window.innerHeight / cowAreaHeight);

    stage.x = (window.innerWidth - cowAreaWidth * stageScale) / 2;
    stage.y = (window.innerHeight - cowAreaHeight * stageScale) / 2;

    stage.scale.x = stageScale;
    stage.scale.y = stageScale;
  });

  window.dispatchEvent(new Event('resize'));
}

function setupMainScreen() {
  elemContractAddress.href = 'https://' + _constants.etherscanDomain + '/address/' + _constants.addrContract;

  var ethProvider = _utils2.default.getMetaMaskProvider();

  var textScale = 1;
  if (window.innerWidth < 800) {
    textScale = 0.4;
  }

  var textStyleFatal = new PIXI.TextStyle({
    fontFamily: 'Philosopher, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: 64 * textScale,
    fill: ['#f1f2f3', '#ff8a80'], // gradient
    stroke: '#222',
    lineJoin: 'bevel',
    lineHeight: 90 * textScale,
    fillGradientStops: [0.29, 0.71],
    align: 'center',
    strokeThickness: 5 * textScale,
    dropShadow: true,
    dropShadowColor: '#333333aa',
    dropShadowBlur: 10 * textScale,
    dropShadowAngle: Math.PI / 4,
    dropShadowDistance: 6 * textScale,
    wordWrap: true,
    wordWrapWidth: window.innerWidth
  });

  // loading phase ends
  document.body.classList.remove('loading');
  document.body.classList.add('complete');

  if (ethProvider == null) {
    var richText = new PIXI.Text('No Ethereum provider detected.\nYou should install MetaMask to see cows!', textStyleFatal);

    richText.x = app.screen.width / 2;
    richText.y = app.screen.height / 2;
    richText.anchor.set(0.5);
    topStage.addChild(richText);

    return;
  }

  var web3 = _utils2.default.getWeb3Instance();

  return web3.eth.net.getId().then(function (netId) {
    switch (netId) {
      case 1:
        return [netId, 'mainnet'];
      case 3:
        return [netId, 'testnet (Ropsten)'];
      case 4:
        return [netId, 'testnet (Rinkeby)'];
      case 42:
        return [netId, 'testnet (Kovan)'];
      default:
        return [netId, 'unknown'];
    }
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        netId = _ref2[0],
        netName = _ref2[1];

    // if (netId != 1) {  // main net
    //   let richText = new PIXI.Text(`The contract is deployed on main net.\nPlease switch the network and refresh.`, textStyleFatal);

    //   richText.x = app.screen.width / 2;
    //   richText.y = app.screen.height / 2;
    //   richText.anchor.set(0.5);
    //   app.stage.addChild(richText);

    //   return Promise.reject(null);
    // }

    return web3.eth.getAccounts().then(function (accList_) {
      if (accList_ && accList_.length || !ethProvider.enable) {
        // older/unsupported EthereumProvider (for EIP-1102)
        return Promise.resolve(accList_);
      }

      // EP of MetaMask 5+ (EIP-1102-compliant) with privacy mode on
      return ethProvider.enable();
    });
  }).then(function (accList) {
    var elemWalletAddress = document.getElementById('walletAddress');

    var accChangeWatcher = setInterval(function () {
      web3.eth.getAccounts().then(function (acc) {
        if (!acc || acc[0] != web3.eth.defaultAccount) {
          console.log('acc change detected');
          elemWalletAddress.textContent = '---';
          clearInterval(accChangeWatcher);
          location.reload();
        }
      });
    }, 500);

    if (accList[0] == null) {
      var _richText = new PIXI.Text('No wallet address detected.\nYou may need to unlock your account.', textStyleFatal);

      _richText.x = app.screen.width / 2;
      _richText.y = app.screen.height / 2;
      _richText.anchor.set(0.5);
      topStage.addChild(_richText);

      return Promise.reject(null);
    }

    web3.eth.defaultAccount = accList[0];

    var accountTruncator = function accountTruncator(s) {
      return s.slice(0, 10) + '…' + s.slice(-8);
    };
    elemWalletAddress.textContent = accountTruncator(web3.eth.defaultAccount);
    var placeholder = document.getElementById('myLink_');
    placeholder.href = '/?wallet=' + web3.eth.defaultAccount;
    document.getElementById('myLink').value = placeholder.href;

    return _utils2.default.getContract(_constants.addrContract);
  }).then(function (contract) {
    return contract.methods.balanceOf(web3.eth.defaultAccount).call();
  }).then(function (tokBal) {
    var tokThershold = 1e-4;
    var tokBalInDecimal = parseFloat(web3.utils.fromWei(tokBal));

    var renderingCows = Math.floor(tokBalInDecimal);
    var tokBalFraction = tokBalInDecimal - renderingCows;

    if (tokBalInDecimal <= tokThershold) {
      // give 3 free cows for previewing
      renderingCows = 3.0;

      var _textScale = 1;
      if (window.innerWidth < 800) {
        _textScale = 0.6;
      }

      var tStyle = new PIXI.TextStyle({
        fontFamily: '-apple-system, Roboto, Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: 72 * _textScale,
        align: 'center',
        wordWrap: true,
        wordWrapWidth: window.innerWidth
      });

      var _richText2 = new PIXI.Text('You have no cows :(\n(These 3 cows are for previewing)', tStyle);
      _richText2.rotation = -Math.PI / 36;
      _richText2.alpha = 0.3;
      _richText2.x = app.screen.width / 2;
      _richText2.y = app.screen.height / 2;
      _richText2.anchor.set(0.5);
      topStage.addChild(_richText2);
    }

    // capped at 300
    if (tokBalInDecimal > 300) {
      renderingCows = 300;
      tokBalFraction = 0;
    }

    var no = 0;
    for (var i = 0; i < renderingCows; i += 16) {
      for (var j = 0; j < 16 && i + j < renderingCows; j++) {
        var cow = produceCow(parseInt(web3.eth.defaultAccount[no + 2], 16) == j);
        cows.push(cow);
      }
      no++;
    }

    if (tokBalFraction > tokThershold) {
      var cowAlpha = produceCow();
      cowAlpha.alpha = tokBalFraction;
      cows.push(cowAlpha);
    }

    cows.sort(function (a, b) {
      return a.y - b.y;
    });

    cows.forEach(function (cow) {
      stage.addChild(cow);
      cow.play();
    });

    var animTokBal = new _countup2.default('tokenBalance', 0, tokBalInDecimal, 2, 0.5, {
      useEasing: true,
      useGrouping: true
    });

    if (!animTokBal.error) {
      animTokBal.start();
    } else {
      console.error(animTokBal.error);
    }
  }).catch(function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function produceCow(flavor) {
  var frames = ['cow-2', 'cow-3', 'cow-4', 'cow-3'];
  var cowInst = new PIXI.extras.AnimatedSprite.fromFrames(frames);

  cowInst.x = (0.04 + Math.random() * 0.92) * cowAreaWidth;
  cowInst.y = (0.08 + Math.random() * 0.84) * cowAreaHeight;

  var sz = 1 + 0.3 * Math.pow(cowInst.y / app.screen.height, 2);
  var dir = Math.random() >= 0.5 ? 1 : -1;
  var spd = Math.random() + 1;

  cowInst.isWalking = true;
  // probabilities of walk->stop & stop->walk
  cowInst.transProb = [Math.random() * 0.1, Math.random() * 0.1 + 0.1];
  cowInst.period = Math.random();
  cowInst.dir = dir;
  cowInst.scale.x = sz * .3 * dir;
  cowInst.scale.y = sz * .3;
  cowInst.anchor.set(0.5);
  cowInst.animationSpeed = 0.05 * 1.3 * spd;
  cowInst.moveSpeed = 0.8 * spd;

  return cowInst;
}

function updateCowPosition(cows) {
  cows.forEach(function (cow) {
    cow.period += 0.01 * cow.moveSpeed;

    if (cow.period > 1) {
      cow.period -= 1;
      // decide the next state
      var prob = Math.random();

      if (cow.isWalking && prob <= cow.transProb[0]) {
        cow.isWalking = false;
        cow.gotoAndStop(1);
      } else if (!cow.isWalking && prob <= cow.transProb[1]) {
        cow.isWalking = true;
        cow.play();
      }

      // randomly determine new direction
      if (cow.isWalking && prob <= 0.2) {
        cow.dir *= -1;
        cow.scale.x *= -1;
      }
    }

    if (cow.x < 0 && cow.dir == 1) {
      cow.dir = -1;
      cow.scale.x *= -1;
    } else if (cow.x > cowAreaWidth && cow.dir == -1) {
      cow.dir = 1;
      cow.scale.x *= -1;
    }

    if (cow.isWalking) {
      cow.x += -cow.dir * cow.moveSpeed * (Math.sin(cow.period * Math.PI * 2) * 0.4 + 1);
    }
  });
}

(function init() {
  document.body.appendChild(app.view);

  // load fonts + assets
  var fontLoaderPromises = [['Philosopher', null, 2000], ['Fira Sans', null, 2000]].map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3),
        s = _ref4[0],
        opt = _ref4[1],
        t = _ref4[2];

    return new _fontfaceobserver2.default(s).load(opt, t);
  });

  var promiseLoadAssets = new Promise(function (resolve, reject) {
    PIXI.loader.add('cow-2', 'assets/cow-2.png').add('cow-3', 'assets/cow-3.png').add('cow-4', 'assets/cow-4.png').load(function () {
      // naive, optimistic loader callback
      resolve.apply(this, arguments);
    });
  });

  var promiseLoadFont = Promise.all(fontLoaderPromises).catch(function (fontspec) {
    // ignore the error, actually
    console.warn('Failed to load webfont "' + fontspec.family + '" in time:', fontspec);
  });

  var promiseLoadAll = Promise.all([promiseLoadAssets, promiseLoadFont]).then(setupMainScreen).then(function () {
    // add ticker
    app.ticker.add(function () {
      updateCowPosition(cows);
    });

    // param detection
    var searchParam = new URLSearchParams(new URL(document.baseURI).search);
    if (searchParam.has('wallet')) {
      var addr = searchParam.get('wallet');
      if (_web2.default.utils.isAddress(addr)) {
        _ui2.default._fillTransferForm(addr);
      }
      _ui2.default.transferDialog.open();
    }
  });

  // load grass background tile, init pixi & stage

  var stageLoader = new PIXI.loaders.Loader();

  stageLoader.add('grass', 'assets/grass.jpg').load(setupStage);
})();

},{"./constants":4,"./ui":6,"./utils":7,"countup.js":2,"fontfaceobserver":3,"pixi.js":"pixi.js","web3":"web3"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _drawer = require('@material/drawer');

var _ripple = require('@material/ripple');

var _dialog = require('@material/dialog');

var _textfield = require('@material/textfield');

var _snackbar = require('@material/snackbar');

var _notchedOutline = require('@material/notched-outline');

var _list = require('@material/list');

var _select = require('@material/select');

var _watcher = require('./watcher');

var _watcher2 = _interopRequireDefault(_watcher);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var web3 = _utils2.default.getWeb3Instance();

// --- drawer ---
var drawer = _drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
var navLinks = _list.MDCList.attachTo(document.getElementById('navLinks'));

// --- hamburger icon ---
var menuButton = document.getElementById('menuButton');
var menuButtonRipple = new _ripple.MDCRipple(menuButton);
menuButtonRipple.unbounded = true;

menuButton.disabled = false;
menuButton.addEventListener('click', function () {
  drawer.open = true;
});

// --- modals ---
var buySellDialog = new _dialog.MDCDialog(document.getElementById('my-mdc-dialog'));
var transferDialog = new _dialog.MDCDialog(document.getElementById('my-mdc-dialog2'));
var erc20BuyDialog = new _dialog.MDCDialog(document.getElementById('mdc-dialog-erc20-buy'));
// const erc20ApproveDialog = new MDCDialog(document.getElementById('mdc-dialog-erc20-approve'));
// const erc20LoadingDialog = new MDCDialog(document.getElementById('mdc-dialog-erc20-loading'));

// --- notification ---
var snackbar = new _snackbar.MDCSnackbar(document.getElementById('my-mdc-snackbar'));
snackbar.dismissesOnAction = false;

// --- input fields ---
var buyCowFragment = document.getElementById('buyCowFragment');
var buyEthWrapper = new _textfield.MDCTextField(buyCowFragment.querySelector('.--buySellEthWrapper'));
var buyCowWrapper = new _textfield.MDCTextField(buyCowFragment.querySelector('.--buySellCowWrapper'));
var buyCowAmountField = buyCowFragment.querySelector('.--buySellEthField');

var sellCowFragment = document.getElementById('sellCowFragment');
var sellEthWrapper = new _textfield.MDCTextField(sellCowFragment.querySelector('.--buySellEthWrapper'));
var sellCowWrapper = new _textfield.MDCTextField(sellCowFragment.querySelector('.--buySellCowWrapper'));
var sellCowAmountField = sellCowFragment.querySelector('.--buySellCowField');

var transferCowFragment = document.getElementById('transferCowFragment');
var transferCowWrapper = new _textfield.MDCTextField(transferCowFragment.querySelector('.--transferCowWrapper'));
var transferAddressWrapper = new _textfield.MDCTextField(transferCowFragment.querySelector('.--transferAddressWrapper'));
var transferCowAmountField = transferCowFragment.querySelector('.--transferCowField');
var transferCowAddressField = transferCowFragment.querySelector('.--transferAddressField');

var erc20BuyCowFragment = document.getElementById('erc20BuyCowFragment');
var erc20AmountWrapper = new _textfield.MDCTextField(erc20BuyCowFragment.querySelector('.--erc20AmountWrapper'));
var erc20AmountField = erc20BuyCowFragment.querySelector('.--erc20AmountField');
var erc20tokenSelect = new _select.MDCSelect(erc20BuyCowFragment.querySelector('.--erc20TokenSelect'));
var erc20BuyCowAmountWrapper = new _textfield.MDCTextField(erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountWrapper'));
var erc20BuyCowAmountField = erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountField');
var erc20BuyButton = document.querySelector('.--erc20BuyButton');
var erc20ApproveButton = document.querySelector('.--erc20ApproveButton');
var erc20ApproveStatus = document.querySelector('.--erc20ApproveStatus');
var erc20BalanceStatus = document.querySelector('.--erc20BalanceStatus');

// --- my link ---
var copyMyLinkButton = document.getElementById('copyMyLink');
// FIXME: incorrect ripple position!
var copyMyLinkRipple = new _ripple.MDCRipple(copyMyLinkButton);

var buySellStateIsBuy = true;

function updateDialogContent() {
  if (buySellStateIsBuy) {
    document.getElementById('my-mdc-dialog-label').textContent = '買牛';
    buyCowFragment.style.display = 'block';
    sellCowFragment.style.display = 'none';
  } else {
    document.getElementById('my-mdc-dialog-label').textContent = '賣牛';
    buyCowFragment.style.display = 'none';
    sellCowFragment.style.display = 'block';
  }
}

function updateBuySellPrice() {
  return Promise.all([_watcher2.default.getBuyAmount(web3.utils.toWei('0.1')), _watcher2.default.getSellPrice(web3.utils.toWei('1'))]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        buyPrice = _ref2[0],
        sellPrice = _ref2[1];

    document.querySelectorAll('.priceBuyInEth').forEach(function (elem) {
      elem.textContent = buyPrice ? parseFloat(buyPrice).toFixed(6) : '(N/A)';
    });
    document.querySelectorAll('.priceSellInEth').forEach(function (elem) {
      elem.textContent = sellPrice ? parseFloat(sellPrice).toFixed(6) : '(N/A)';
    });
  });
}

function updateTokenSelectItems() {
  var items = Object.keys(_constants.tokens).map(function (address) {
    var li = document.createElement('li');
    li.classList.add('mdc-list-item');
    li.setAttribute('data-value', address);
    li.textContent = _constants.tokens[address].symbol;
    return li;
  });
  var menuList = document.querySelector('.mdc-select__menu > .mdc-list');
  menuList.append.apply(menuList, _toConsumableArray(items));
}

function checkBalanceIsSufficient(tokenAddress, price) {
  return _utils2.default.getContract(tokenAddress).then(function (contract) {
    return contract.methods.balanceOf(web3.eth.defaultAccount).call();
  }).then(function (balance) {
    return Number.parseInt(balance) > Number.parseInt(price);
  });
}

document.getElementById('menuBuy').addEventListener('click', function (evt) {
  evt.preventDefault();
  buySellStateIsBuy = true;
  updateDialogContent();
  buySellDialog.open();
  updateBuySellPrice();
});

document.getElementById('menuSell').addEventListener('click', function (evt) {
  evt.preventDefault();
  buySellStateIsBuy = false;
  updateDialogContent();
  buySellDialog.open();
  updateBuySellPrice();
});

document.getElementById('menuTransfer').addEventListener('click', function (evt) {
  evt.preventDefault();
  transferDialog.open();
});

document.getElementById('menuERC20Buy').addEventListener('click', function (evt) {
  evt.preventDefault();
  erc20BuyDialog.open();
  updateBuySellPrice();
  updateTokenSelectItems();
});

copyMyLinkButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  document.getElementById('myLink').select();
  document.execCommand('copy');
});

erc20ApproveButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  var amount = erc20AmountField.value;
  var tokenAddress = erc20tokenSelect.value;
  if (!amount) return false;
  var rawAmount = amount * Math.pow(10, _constants.tokens[tokenAddress].decimals);

  _utils2.default.getContract(tokenAddress).then(function (contract) {
    contract.methods.approve(_constants.cowSwapAddress, _constants.biggestNumber).send({ from: web3.eth.defaultAccount }, function (err, transactionHash) {
      if (err) {
        erc20BuyButton.disabled = true;
      } else {
        erc20ApproveButton.style.display = 'none';
        erc20ApproveStatus.style.display = 'flex';
        _utils2.default.pollTransactionReceipt(transactionHash).then(function (receipt) {
          erc20ApproveStatus.style.display = 'none';
          erc20BuyButton.disabled = false;
        });
      }
    });
  });
});

['propertychange', 'change', 'click', 'keyup', 'input', 'paste'].forEach(function (evtName) {
  buyCowAmountField.addEventListener(evtName, function (evt) {
    var resultField = buyCowFragment.querySelector('.--buySellCowField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }
    var value = void 0;
    try {
      value = web3.utils.toWei(evt.target.value);
    } catch (err) {}
    if (value == null) return false;

    _watcher2.default.getBuyAmount(value).then(function (amount) {
      resultField.value = amount ? parseFloat(amount).toFixed(6) : '0';
    });
  });

  sellCowAmountField.addEventListener(evtName, function (evt) {
    var resultField = sellCowFragment.querySelector('.--buySellEthField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }
    var value = void 0;
    try {
      value = web3.utils.toWei(evt.target.value);
    } catch (err) {}
    if (value == null) return false;

    _watcher2.default.getSellPrice(value).then(function (price) {
      resultField.value = price ? parseFloat(price).toFixed(6) : '0';
    });
  });

  transferCowAddressField.addEventListener(evtName, function (evt) {
    // const isAddress = web3.utils.isAddress(evt.target.value);
  });

  erc20AmountField.addEventListener(evtName, function (evt) {
    var tokenAddress = erc20tokenSelect.value;
    if (!tokenAddress) return false;
    var resultField = erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }

    var value = Number.parseFloat(evt.target.value) * Math.pow(10, _constants.tokens[tokenAddress].decimals);
    if (!value) return false;
    _watcher2.default.getBuyAmountWithErc20(value.toString(), _constants.tokens[tokenAddress].exchangeAddress).then(function (price) {
      resultField.value = price ? parseFloat(price).toFixed(6) : '0';
    });

    checkBalanceIsSufficient(tokenAddress, value).then(function (result) {
      if (result) {
        erc20BalanceStatus.style.display = 'none';
        erc20BuyButton.disabled = false;
      } else {
        erc20BalanceStatus.style.display = 'block';
        erc20BuyButton.disabled = true;
      }
    });
  });
});

(function () {
  function tryConvertToWei(val) {
    var amount = void 0;
    try {
      if (+val < 0) throw new Error('');
      amount = web3.utils.toWei(val);
    } catch (err) {
      alert('請填入有效數值。');
      console.error(err);
    }
    return amount;
  }

  function txSentHandler(hash) {
    drawer.open = false;
    snackbar.show({
      message: '交易成功，正在等待上鏈',
      actionText: '在 Etherscan 上查看',
      timeout: 15000,
      multiline: true,
      actionHandler: function actionHandler() {
        window.open('https://' + _constants.etherscanDomain + '/tx/' + hash);
      }
    });
  }

  function txConfirmedHandler(hash) {
    snackbar.show({
      message: '交易已被確認！',
      actionText: '重新載入',
      timeout: 5000,
      multiline: true,
      actionHandler: function actionHandler() {
        location.reload();
      }
    });
  }

  buySellDialog.listen('MDCDialog:closing', function (_ref3) {
    var detail = _ref3.detail;
    var action = detail.action;

    if (action == 'close') return;
    _utils2.default.getContract(_constants.addrContract).then(function (contract) {
      if (buySellStateIsBuy) {
        var value = tryConvertToWei(buyCowAmountField.value);
        if (!value) return;
        contract.methods.buyToken().send({
          from: web3.eth.defaultAccount,
          value: value
        }).on('transactionHash', txSentHandler);
      } else {
        var amount = tryConvertToWei(sellCowAmountField.value);
        if (!amount) return;
        // XXX: should be modified to camel case in contract + ABI
        contract.methods.selltoken(amount).send({
          from: web3.eth.defaultAccount
        }).on('transactionHash', txSentHandler).on('receipt', txConfirmedHandler);
      }
    });
  });

  transferDialog.listen('MDCDialog:closing', function (_ref4) {
    var detail = _ref4.detail;
    var action = detail.action;

    if (action == 'close') return;
    _utils2.default.getContract(_constants.addrContract).then(function (contract) {
      var amount = tryConvertToWei(transferCowAmountField.value);
      if (!amount) return;

      var addr = transferCowAddressField.value;
      if (!web3.utils.isAddress(addr)) {
        alert('請輸入有效的錢包地址。');
        return;
      }

      contract.methods.transfer(addr, amount).send({
        from: web3.eth.defaultAccount
      }).on('transactionHash', txSentHandler).on('receipt', txConfirmedHandler);
    });
  });

  erc20tokenSelect.listen('MDCSelect:change', function () {
    var tokenAddress = erc20tokenSelect.value;
    var resultField = erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountField');
    var amount = erc20AmountField.value;
    if (!amount || !tokenAddress) return false;

    var value = Number.parseFloat(amount) * Math.pow(10, _constants.tokens[tokenAddress].decimals);
    if (!value) return false;

    _watcher2.default.getBuyAmountWithErc20(value.toString(), _constants.tokens[tokenAddress].exchangeAddress).then(function (price) {
      resultField.value = price ? parseFloat(price).toFixed(6) : '0';
    });

    _utils2.default.getContract(tokenAddress).then(function (contract) {
      return contract.methods.allowance(web3.eth.defaultAccount, _constants.cowSwapAddress).call();
    }).then(function (allowance) {
      if (+allowance === 0) {
        erc20BuyButton.disabled = true;
        erc20ApproveButton.style.display = 'inline-flex';
        erc20BalanceStatus.style.display = 'none';
        erc20ApproveButton.querySelector('.--erc20TokenName').textContent = _constants.tokens[tokenAddress].symbol;
      } else {
        erc20ApproveButton.style.display = 'none';
        checkBalanceIsSufficient(tokenAddress, value).then(function (result) {
          if (result) {
            erc20BalanceStatus.style.display = 'none';
            erc20BuyButton.disabled = false;
          } else {
            erc20BalanceStatus.style.display = 'block';
            erc20BuyButton.disabled = true;
          }
        });
      }
    });
  });

  erc20BuyDialog.listen('MDCDialog:closing', function (_ref5) {
    var detail = _ref5.detail;
    var action = detail.action;

    if (action == 'close') return;
    var amount = erc20AmountField.value;
    var tokenAddress = erc20tokenSelect.value;
    var rawAmount = amount * Math.pow(10, _constants.tokens[tokenAddress].decimals);
    _utils2.default.getSwapContract(_constants.cowSwapAddress).then(function (contract) {
      contract.methods.tokenToCow(tokenAddress, rawAmount).send({ from: web3.eth.defaultAccount }).on('transactionHash', txSentHandler);
    });
  });
})();

function _fillTransferForm(addr) {
  transferCowFragment.querySelector('label').classList.add('mdc-floating-label--float-above');
  transferCowAddressField.value = addr;
}

exports.default = {
  drawer: drawer,
  menuButton: menuButton,
  buySellDialog: buySellDialog,
  transferDialog: transferDialog,

  _fillTransferForm: _fillTransferForm
};

},{"./constants":4,"./utils":7,"./watcher":8,"@material/dialog":"@material/dialog","@material/drawer":"@material/drawer","@material/list":"@material/list","@material/notched-outline":"@material/notched-outline","@material/ripple":"@material/ripple","@material/select":1,"@material/snackbar":"@material/snackbar","@material/textfield":"@material/textfield"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3Instance = null;
var contractCache = {};

function getMetaMaskProvider() {
  var prov = _web2.default.givenProvider;
  if (prov && web3Instance) {
    // Use the browser's ethereum provider
    web3Instance.setProvider(prov);
  }
  return prov;
}

function getContract(addr) {
  if (contractCache[addr]) {
    return Promise.resolve(contractCache[addr]);
  }

  return fetch('assets/abi.json').then(function (respObj) {
    return respObj.json();
  }).then(function (abi) {
    contractCache[addr] = new web3Instance.eth.Contract(abi, addr);
    return Promise.resolve(contractCache[addr]);
  });
}

function getSwapContract(addr) {
  if (contractCache[addr]) {
    return Promise.resolve(contractCache[addr]);
  }

  return fetch('assets/swapAbi.json').then(function (respObj) {
    return respObj.json();
  }).then(function (abi) {
    contractCache[addr] = new web3Instance.eth.Contract(abi, addr);
    return Promise.resolve(contractCache[addr]);
  });
}

function getExchangeContract(addr) {
  if (contractCache[addr]) {
    return Promise.resolve(contractCache[addr]);
  }

  return fetch('assets/exchangeAbi.json').then(function (respObj) {
    return respObj.json();
  }).then(function (abi) {
    contractCache[addr] = new web3Instance.eth.Contract(abi, addr);
    return Promise.resolve(contractCache[addr]);
  });
}

function getWeb3Instance() {
  if (!web3Instance) {
    web3Instance = new _web2.default();
    getMetaMaskProvider();
  }
  return web3Instance;
}

function pollTransactionReceipt(transactionHash) {
  var interval = 1000;
  var getTransactionReceiptPromise = function getTransactionReceiptPromise(transactionHash) {
    return new Promise(function (resolve, reject) {
      web3Instance.eth.getTransactionReceipt(transactionHash, function (err, receipt) {
        if (err) reject(err);else resolve(receipt);
      });
    });
  };

  var checkCondition = function checkCondition(resolve, reject) {
    getTransactionReceiptPromise(transactionHash).then(function (receipt) {
      if (receipt) {
        resolve(receipt);
      } else {
        setTimeout(checkCondition, interval, resolve, reject);
      }
    });
  };

  return new Promise(checkCondition);
}

exports.default = {
  getMetaMaskProvider: getMetaMaskProvider,
  getContract: getContract,
  getWeb3Instance: getWeb3Instance,
  getSwapContract: getSwapContract,
  getExchangeContract: getExchangeContract,
  pollTransactionReceipt: pollTransactionReceipt
};

},{"web3":"web3"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bn = require('bn.js');

var _bn2 = _interopRequireDefault(_bn);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = _utils2.default.getWeb3Instance();

function _deductFor0xBeef(p) {
  var pBN = new _bn2.default(p);
  return pBN.sub(pBN.divn(40));
}

function getBuyAmount(price) {
  return _utils2.default.getContract(_constants.addrContract).then(function (contract) {
    return contract.methods.calculateTokenBuySimple(price).call();
  }).then(function (amount) {
    var dec = web3.utils.fromWei(_deductFor0xBeef(amount));
    return Promise.resolve(dec);
  }).catch(function (err) {
    return Promise.resolve(null);
  });
}

function getSellPrice(amount) {
  return _utils2.default.getContract(_constants.addrContract).then(function (contract) {
    return contract.methods.calculateTokenSell(amount).call();
  }).then(function (price) {
    var dec = web3.utils.fromWei(_deductFor0xBeef(price));
    return Promise.resolve(dec);
  }).catch(function (err) {
    return Promise.resolve(null);
  });
}

function getBuyAmountWithErc20(token, exchangeAddress) {
  return _utils2.default.getExchangeContract(exchangeAddress).then(function (contract) {
    return contract.methods.getTokenToEthInputPrice(token).call();
  }).then(function (price) {
    return _utils2.default.getContract(_constants.addrContract).then(function (contract) {
      return contract.methods.calculateTokenBuySimple(price).call();
    }).then(function (amount) {
      var dec = web3.utils.fromWei(_deductFor0xBeef(amount));
      return Promise.resolve(dec);
    }).catch(function (err) {
      return Promise.resolve(null);
    });
  });
}

exports.default = {
  getBuyAmount: getBuyAmount,
  getSellPrice: getSellPrice,
  getBuyAmountWithErc20: getBuyAmountWithErc20
};

},{"./constants":4,"./utils":7,"bn.js":"bn.js"}]},{},[5])
//# sourceMappingURL=app.js.map
})})(document)