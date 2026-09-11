(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-position-sticky"] = factory();
	else
		root["vue-position-sticky"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/barda/vue-position-sticky-v1/node_modules/.cache/vue-loader","cacheIdentifier":"50fa02e4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-position-sticky.vue?vue&type=template&id=52f8682b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.wrapperStyles)},[_c('div',{class:[{'vue-position-sticky': _vm.sticky}, _vm.stickyClass],style:(_vm.stickyStyles)},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-position-sticky.vue?vue&type=template&id=52f8682b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-position-sticky.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/*
* @params
* offsetTop     距离窗口顶部的偏移量
* offsetBottom  距离窗口底部的偏移量
* stickyClass   自定义sticky元素的类名
*
* @callback
* change        sticky发生变化
*/
/* harmony default export */ var vue_position_stickyvue_type_script_lang_js_ = ({
  name: 'sticky',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    },
    stickyClass: {
      type: String
    }
  },
  watch: {
    offsetTop: function offsetTop() {
      this.handleResize();
    }
  },
  data: function data() {
    return {
      sticky: false,
      wrapperStyles: {},
      // 外层容器样式
      stickyStyles: {} // sticky容器样式

    };
  },
  computed: {
    // sticky类型
    offsetType: function offsetType() {
      var type = 'top';

      if (this.offsetBottom >= 0) {
        type = 'bottom';
      }

      return type;
    }
  },
  methods: {
    // 获取滚动条位置
    getScroll: function getScroll(target, top) {
      var page = top ? 'pageYOffset' : 'pageXOffset';
      return target[page];
    },
    // 获取元素在文档中的位置
    getOffset: function getOffset(element) {
      var rect = element.getBoundingClientRect();
      var scrollTop = this.getScroll(window, true);
      var scrollLeft = this.getScroll(window); // 减去 clientTop 和 clientLeft 是解决IE的getBoundingClientRect方法以(2, 2)开始计算的问题

      var docEl = window.document.body;
      var clientTop = docEl.clientTop || 0;
      var clientLeft = docEl.clientLeft || 0;
      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft,
        width: rect.width,
        height: rect.height
      };
    },
    handleScroll: function handleScroll() {
      var sticky = this.sticky;
      var scrollTop = this.getScroll(window, true);
      var elOffset = this.getOffset(this.$el);
      var windowHeight = window.innerHeight;
      var elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight; // Fixed Top

      if (elOffset.top - this.offsetTop <= scrollTop && this.offsetType === 'top' && !sticky) {
        this.sticky = true;
        this.wrapperStyles = {
          'width': "".concat(elOffset.width, "px"),
          'min-width': "".concat(elOffset.width, "px"),
          'height': "".concat(elOffset.height, "px"),
          'min-height': "".concat(elOffset.height, "px")
        };
        this.stickyStyles = {
          'position': 'fixed',
          'z-index': 999,
          'top': "".concat(this.offsetTop, "px"),
          'left': "".concat(elOffset.left, "px"),
          'width': "".concat(this.$el.offsetWidth, "px")
        };
        this.$emit('change', true);
      } else if (elOffset.top - this.offsetTop > scrollTop && this.offsetType === 'top' && sticky) {
        this.sticky = false;
        this.wrapperStyles = null;
        this.stickyStyles = null;
        this.$emit('change', false);
      } // Fixed Bottom


      if (elOffset.top + this.offsetBottom + elHeight > scrollTop + windowHeight && this.offsetType === 'bottom' && !sticky) {
        this.sticky = true;
        this.wrapperStyles = {
          'width': "".concat(elOffset.width, "px"),
          'min-width': "".concat(elOffset.width, "px"),
          'height': "".concat(elOffset.height, "px"),
          'min-height': "".concat(elOffset.height, "px")
        };
        this.stickyStyles = {
          'position': 'fixed',
          'z-index': 999,
          'bottom': "".concat(this.offsetBottom, "px"),
          'left': "".concat(elOffset.left, "px"),
          'width': "".concat(this.$el.offsetWidth, "px")
        };
        this.$emit('change', true);
      } else if (elOffset.top + this.offsetBottom + elHeight < scrollTop + windowHeight && this.offsetType === 'bottom' && sticky) {
        this.sticky = false;
        this.wrapperStyles = null;
        this.stickyStyles = null;
        this.$emit('change', false);
      }
    },
    handleResize: function handleResize() {
      var _this = this;

      this.sticky = false;
      this.wrapperStyles = null;
      this.stickyStyles = null;
      this.$nextTick(function () {
        _this.handleScroll();
      });
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
    window.addEventListener('resize', this.handleResize, false);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll, false);
    window.removeEventListener('resize', this.handleResize, false);
  }
});
// CONCATENATED MODULE: ./src/vue-position-sticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_position_stickyvue_type_script_lang_js_ = (vue_position_stickyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-position-sticky.vue





/* normalize component */

var component = normalizeComponent(
  src_vue_position_stickyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_position_sticky = (component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = ({
  install: function install(Vue) {
    Vue.component('vue-position-sticky', vue_position_sticky);
  }
});

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-position-sticky', vue_position_sticky);
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});