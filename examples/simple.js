webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(174);


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-swipeout/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcSwipeout = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-swipeout\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcSwipeout2 = _interopRequireDefault(_rcSwipeout);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  { style: { marginBottom: 12 } },
	  _react2.default.createElement(
	    _rcSwipeout2.default,
	    {
	      style: { backgroundColor: 'white' },
	      autoClose: true,
	      right: [{ text: 'more',
	        onPress: function onPress() {
	          return console.log('more');
	        },
	        style: { backgroundColor: 'orange', color: 'white' }
	      }, { text: 'delete',
	        onPress: function onPress() {
	          return console.log('delete');
	        },
	        style: { backgroundColor: 'red', color: 'white' }
	      }],
	      left: [{
	        text: 'read',
	        onPress: function onPress() {
	          return console.log('read');
	        },
	        style: { backgroundColor: 'blue', color: 'white' }
	      }, {
	        text: 'reply',
	        onPress: function onPress() {
	          return console.log('reply');
	        },
	        style: { backgroundColor: 'green', color: 'white' }
	      }],
	      onOpen: function onOpen() {
	        return console.log('open');
	      },
	      onClose: function onClose() {
	        return console.log('close');
	      }
	    },
	    _react2.default.createElement(
	      'div',
	      { style: {
	          height: 44,
	          backgroundColor: 'white',
	          lineHeight: '44px',
	          borderTop: '1px solid #dedede',
	          borderBottom: '1px solid #dedede'
	        }
	      },
	      'swipe out simple demo'
	    )
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map