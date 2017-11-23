webpackJsonp([0],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TodoItem__ = __webpack_require__(7);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#TodoApp',
    data: {
        todos: [
            new __WEBPACK_IMPORTED_MODULE_1__TodoItem__["a" /* TodoItem */](42, "fourty-two"),
            new __WEBPACK_IMPORTED_MODULE_1__TodoItem__["a" /* TodoItem */](43, "fourty-three")
        ]
    }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItem; });
var TodoItem = /** @class */ (function () {
    function TodoItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return TodoItem;
}());

//# sourceMappingURL=TodoItem.js.map

/***/ })

},[6]);