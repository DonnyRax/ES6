// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"scripts/example.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = [1, 2, 3];
exports.data = data;
},{}],"scripts/animal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cat = exports.Animal = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal =
/*#__PURE__*/
function () {
  function Animal(type, legs) {
    _classCallCheck(this, Animal);

    this.type = type;
    this.legs = legs;
  }

  _createClass(Animal, [{
    key: "makeNoise",
    value: function makeNoise() {
      var sound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loud';
      console.log(sound);
    }
  }, {
    key: "metaData",
    get: function get() {
      return "Type: ".concat(this.type, ", Legs: ").concat(this.legs);
    }
  }], [{
    key: "return10",
    value: function return10() {
      return 10;
    }
  }]);

  return Animal;
}();

exports.Animal = Animal;

var Cat =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    _classCallCheck(this, Cat);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cat).apply(this, arguments));
  }

  _createClass(Cat, [{
    key: "makeNoise",
    // constructor(type, legs, tail) {
    //     super(type, legs);
    //     this.tail = tail;
    // }
    value: function makeNoise() {
      var sound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Meow';
      console.log(sound);
    }
  }]);

  return Cat;
}(Animal);

exports.Cat = Cat;
},{}],"scripts/index.js":[function(require,module,exports) {
"use strict";

var _example = require("./example.js");

var _animal = require("./animal.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Template literals (String interpolation)
var fn = "Rakesh";
var ln = "Chotalia";
var name = "".concat(fn, " ").concat(ln);
console.log(name); // Destructuring Objects

var personalInformation = {
  firstName: 'Ole Gunnar',
  lastName: 'Solksjaer',
  city: 'Watford'
};
var fname = personalInformation.firstName,
    lastName = personalInformation.lastName;
console.log("".concat(fname, " ").concat(lastName)); // destructuring arrays

var firstName = 'Paul',
    middleName = 'Labille',
    surname = 'Pogba';
console.log("".concat(firstName, " ").concat(middleName, " ").concat(surname)); // object literals

function addressMaker(address) {
  var city = address.city,
      state = address.state;
  var newAddress = {
    city: city,
    state: state,
    country: 'UK'
  };
  console.log("".concat(newAddress.city, ", ").concat(newAddress.state, ", ").concat(newAddress.country));
}

addressMaker({
  city: 'Watford',
  state: 'Hertfordshire'
}); // for of loop

var incomes = [62000, 67000, 73000];
var total = 0;
var bonus = 0;

for (var _i = 0; _i < incomes.length; _i++) {
  var income = incomes[_i];
  total += income;
}

console.log("Total Income: ".concat(total));

for (var _i2 = 0; _i2 < incomes.length; _i2++) {
  var _income = incomes[_i2];
  bonus += _income + 5000;
}

console.log("Total Bonus: ".concat(bonus)); // spread operator

var example1 = [1, 2, 3, 4, 5, 6];
var example2 = [0].concat(example1, [7]);
console.log(example2); // Rest operator

function add() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  console.log(nums);
}

add(4, 5, 6, 8, 12); // arrow functions

function add() {
  for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    nums[_key2] = arguments[_key2];
  }

  // old
  // let total = nums.reduce(function(x,y) {
  //     return x + y;
  // });
  // ES6
  // let total = nums.reduce((x,y) => {
  //     return x + y;
  // });
  var total = nums.reduce(function (x, y) {
    return x + y;
  });
  console.log(total);
}

add(4, 5, 6, 8, 12); // default params
// function add(numArray = []){
//     let total = 0;
//     console.log(numArray);
//     // numArray.forEach((element) => {
//     //     total += element;
//     // });
//     console.log(total);
// }
// add();
// includes

var numArray = [1, 2, 3, 4, 5]; // not supported by IE

console.log(numArray.includes(2)); // let and consts
// if(false){
//     let example = 5;
// }
// console.log(example);

var ex = 5;
console.log(ex);
var ex1 = {};
ex1.fn = 'Rakesh';
console.log(ex1); // import/export

var updatedData = _example.data;
updatedData = [].concat(_toConsumableArray(_example.data), [5]);
console.log(updatedData); // padstart and padend

var n = 'Rakesh';
console.log(n.padStart(10, 'a'));
console.log(n.padEnd(10, 'a')); // classes

var cat = new _animal.Animal('Cat', 4); // cat.legs = 3;
// cat.makeNoise('meow');

console.log(cat.metaData);
console.log(cat);
console.log(_animal.Animal.return10());
var cat1 = new _animal.Cat('Cat', 4);
console.log(cat1.makeNoise());
console.log(cat1.metaData); // aync await
// const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
// async function getTop100Campers() {
//     const response = await fetch(apiUrl);
//     const json = await response.json();
//     console.log(json[0]);
// };
// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json[0]);
//     })
//     .catch((error) => {
//         console.log('failed');
//     });
// }
//getTop100Campers();

function resolveAfter3Seconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('resloved');
    }, 3000);
  });
} // resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });


function getAsyncData() {
  return _getAsyncData.apply(this, arguments);
}

function _getAsyncData() {
  _getAsyncData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return resolveAfter3Seconds();

          case 2:
            result = _context.sent;
            console.log(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getAsyncData.apply(this, arguments);
}

getAsyncData();
},{"./example.js":"scripts/example.js","./animal.js":"scripts/animal.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65488" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.map