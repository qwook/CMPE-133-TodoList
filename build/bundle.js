/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _appJsx = __webpack_require__(1);
	
	var _appJsx2 = _interopRequireDefault(_appJsx);
	
	ReactDOM.render(React.createElement(_appJsx2["default"], {}), document.getElementById("content"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _modelJsx = __webpack_require__(2);
	
	var _RawModelViewJsx = __webpack_require__(3);
	
	var _RawModelViewJsx2 = _interopRequireDefault(_RawModelViewJsx);
	
	var uuid = 0;
	
	var TodoListItemModel = (function (_Model) {
		_inherits(TodoListItemModel, _Model);
	
		function TodoListItemModel(description) {
			_classCallCheck(this, TodoListItemModel);
	
			_get(Object.getPrototypeOf(TodoListItemModel.prototype), 'constructor', this).call(this, {
				description: description,
				done: false,
				uuid: ++uuid
			});
		}
	
		return TodoListItemModel;
	})(_modelJsx.Model);
	
	var todoListModel = new _modelJsx.Collection([new TodoListItemModel("Mow the lawn."), new TodoListItemModel("Wash the car.")]);
	
	var TodoListItem = (function (_React$Component) {
		_inherits(TodoListItem, _React$Component);
	
		function TodoListItem() {
			_classCallCheck(this, TodoListItem);
	
			_get(Object.getPrototypeOf(TodoListItem.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(TodoListItem, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this = this;
	
				this.props.model.on("change", function () {
					_this.forceUpdate();
				});
			}
		}, {
			key: 'markAsDone',
			value: function markAsDone() {
				this.props.model.setProp("done", !this.props.model.getProp("done"));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				return React.createElement(
					'div',
					{ className: 'well well-sm' },
					React.createElement(
						'div',
						{ className: 'media-body' },
						React.createElement(
							'p',
							{ className: 'media-heading' },
							(function () {
								if (_this2.props.model.getProp("done")) {
									return React.createElement(
										'strike',
										null,
										_this2.props.model.getProp("description")
									);
								} else {
									return _this2.props.model.getProp("description");
								}
							})()
						),
						React.createElement(
							'div',
							{ className: 'btn-group btn-group-sm' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-default', onClick: function () {
										_this2.props.onDeleteItem(_this2.props.model);
									} },
								React.createElement('span', { className: 'glyphicon glyphicon-trash' })
							),
							(function () {
								if (_this2.props.model.getProp("done")) {
									return React.createElement(
										'button',
										{ type: 'button', className: 'btn btn-success', onClick: _this2.markAsDone.bind(_this2) },
										React.createElement('span', { className: 'glyphicon glyphicon-ok-sign' })
									);
								} else {
									return React.createElement(
										'button',
										{ type: 'button', className: 'btn btn-default', onClick: _this2.markAsDone.bind(_this2) },
										React.createElement('span', { className: 'glyphicon glyphicon-ok-circle' })
									);
								}
							})()
						)
					)
				);
			}
		}]);
	
		return TodoListItem;
	})(React.Component);
	
	var TodoList = (function (_React$Component2) {
		_inherits(TodoList, _React$Component2);
	
		function TodoList() {
			_classCallCheck(this, TodoList);
	
			_get(Object.getPrototypeOf(TodoList.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(TodoList, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this3 = this;
	
				this.props.model.on("change", function () {
					_this3.forceUpdate();
				});
			}
		}, {
			key: 'addItem',
			value: function addItem(event) {
				event.preventDefault();
				var description = this.refs.inputDescription.value;
				this.refs.inputDescription.value = "";
	
				this.props.model.insert(new TodoListItemModel(description));
			}
		}, {
			key: 'removeItem',
			value: function removeItem(item) {
				console.log(item);
				this.props.model.remove(item);
			}
		}, {
			key: 'renderItemView',
			value: function renderItemView(item, index) {
				return React.createElement(TodoListItem, { key: item.getProp("uuid"), model: item, onDeleteItem: this.removeItem.bind(this) });
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					this.props.model.getRaw().map(this.renderItemView.bind(this)),
					React.createElement(
						'form',
						{ className: 'form-inline', onSubmit: this.addItem.bind(this) },
						React.createElement('input', { className: 'form-control', ref: 'inputDescription', type: 'text' }),
						' ',
						React.createElement(
							'button',
							{ className: 'btn btn-primary', type: 'submit' },
							'Add'
						)
					)
				);
			}
		}]);
	
		return TodoList;
	})(React.Component);
	
	var AppView = (function (_React$Component3) {
		_inherits(AppView, _React$Component3);
	
		function AppView() {
			_classCallCheck(this, AppView);
	
			_get(Object.getPrototypeOf(AppView.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(AppView, [{
			key: 'render',
	
			/* Render the View */
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-xs-6' },
							React.createElement(
								'h1',
								null,
								'Henry’s Todo List'
							),
							React.createElement(TodoList, { model: todoListModel })
						),
						React.createElement(
							'div',
							{ className: 'col-xs-6' },
							React.createElement(
								'h1',
								null,
								'Model'
							),
							React.createElement(_RawModelViewJsx2['default'], { model: todoListModel })
						)
					)
				);
			}
		}]);
	
		return AppView;
	})(React.Component);
	
	;
	
	exports['default'] = AppView;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventDispatcher = (function () {
		function EventDispatcher() {
			_classCallCheck(this, EventDispatcher);
	
			this.hooks = {};
		}
	
		_createClass(EventDispatcher, [{
			key: "on",
			value: function on(name, fn) {
				this.hooks[name] = this.hooks[name] || [];
				this.hooks[name].push(fn);
				console.log(name, fn);
			}
		}, {
			key: "off",
			value: function off(name, fn) {
				if (this.hooks[name]) {
					this.hooks[name].splice(this.hooks[name].indexOf(fn), 1);
					if (this.hooks[name].length == 0) {
						this.hooks[name] = undefined;
					}
				}
			}
		}, {
			key: "dispatch",
			value: function dispatch(name) {
				if (this.hooks[name]) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = this.hooks[name][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var hook = _step.value;
	
							hook();
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator["return"]) {
								_iterator["return"]();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			}
		}]);
	
		return EventDispatcher;
	})();
	
	var Model = (function (_EventDispatcher) {
		_inherits(Model, _EventDispatcher);
	
		function Model(defaultModel) {
			_classCallCheck(this, Model);
	
			_get(Object.getPrototypeOf(Model.prototype), "constructor", this).call(this);
	
			this.data = defaultModel || {};
		}
	
		_createClass(Model, [{
			key: "setProp",
			value: function setProp(property, val) {
				this.data[property] = val;
	
				this.dispatch("change");
			}
		}, {
			key: "getProp",
			value: function getProp(property) {
				return this.data[property];
			}
		}, {
			key: "getRaw",
			value: function getRaw() {
				return this.data;
			}
		}]);
	
		return Model;
	})(EventDispatcher);
	
	exports.Model = Model;
	;
	
	var Collection = (function (_EventDispatcher2) {
		_inherits(Collection, _EventDispatcher2);
	
		function Collection(defaultCollection) {
			_classCallCheck(this, Collection);
	
			_get(Object.getPrototypeOf(Collection.prototype), "constructor", this).call(this);
	
			this.data = defaultCollection || [];
			this.changeFn = this.dispatchChange.bind(this);
	
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;
	
			try {
				for (var _iterator2 = this.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var obj = _step2.value;
	
					if (typeof obj.on == "function") {
						obj.on('change', this.changeFn);
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
						_iterator2["return"]();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	
		_createClass(Collection, [{
			key: "dispatchChange",
			value: function dispatchChange() {
				console.log("uh");
				this.dispatch("change");
			}
		}, {
			key: "insert",
			value: function insert(obj) {
				this.data.push(obj);
	
				if (typeof obj.on == "function") {
					obj.on('change', this.changeFn);
				}
	
				this.dispatch("change");
			}
		}, {
			key: "remove",
			value: function remove(obj) {
				if (this.data.indexOf(obj) > -1) {
					if (typeof obj.off == "function") {
						obj.off('change', this.changeFn);
					}
	
					this.data.splice(this.data.indexOf(obj), 1);
				} else {
					throw "Index out of bounds!";
				}
	
				this.dispatch("change");
			}
		}, {
			key: "getRaw",
			value: function getRaw() {
				return this.data;
			}
		}]);
	
		return Collection;
	})(EventDispatcher);
	
	exports.Collection = Collection;
	;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RawModelView = (function (_React$Component) {
		_inherits(RawModelView, _React$Component);
	
		function RawModelView() {
			_classCallCheck(this, RawModelView);
	
			_get(Object.getPrototypeOf(RawModelView.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(RawModelView, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _this = this;
	
				this.props.model.on("change", function () {
					_this.forceUpdate();
				});
			}
		}, {
			key: "render",
			value: function render() {
				return React.createElement(
					"pre",
					null,
					this.prettify()
				);
			}
		}, {
			key: "prettify",
			value: function prettify(data) {
				var ret = "";
	
				ret += "[\n";
	
				for (var i in this.props.model.data) {
					var model = this.props.model.data[i];
	
					ret += "\t{\n";
	
					for (var k in model.data) {
						ret += "\t\t\"" + k + "\": \"" + model.data[k] + "\",\n";
					}
					ret = ret.substring(0, ret.length - 2) + "\n";
	
					ret += "\t},\n";
				}
	
				if (this.props.model.data.length > 0) {
					ret = ret.substring(0, ret.length - 2) + "\n";
				}
	
				ret += "]";
	
				return ret;
			}
		}]);
	
		return RawModelView;
	})(React.Component);
	
	exports["default"] = RawModelView;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map