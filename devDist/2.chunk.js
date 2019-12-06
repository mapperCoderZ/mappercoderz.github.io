webpackJsonp([2],{

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(1);
var welcome_routing_module_1 = __webpack_require__(1034);
var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    return WelcomeModule;
}());
WelcomeModule = __decorate([
    core_1.NgModule({
        imports: [welcome_routing_module_1.WelcomeRoutingModule],
        declarations: [welcome_routing_module_1.WelcomeRoutingModule.components]
    })
], WelcomeModule);
exports.WelcomeModule = WelcomeModule;


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(78);
var welcome_component_1 = __webpack_require__(1035);
var routes = [
    { path: '', component: welcome_component_1.WelcomeComponent }
];
var WelcomeRoutingModule = (function () {
    function WelcomeRoutingModule() {
    }
    return WelcomeRoutingModule;
}());
WelcomeRoutingModule.components = [welcome_component_1.WelcomeComponent];
WelcomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], WelcomeRoutingModule);
exports.WelcomeRoutingModule = WelcomeRoutingModule;


/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.canardImg = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/canard.png\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'cm-about',
        template: __webpack_require__(1045)
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ 1045:
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n    <div class=\"container\">\n        <header>\n            <h3>Hi ducks!</h3>\n        </header>\n        <br />\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10\">\n                    <p>\n                    The locals together are glad to invite you again in Toulouse to the 6th edition\n                    of Seek The Duck, a Bewelcome gathering for locals and travelers, on June 2nd, 3rd and 4th 2017. Feel free to\n                    invite your friends, your neighbours... and to tell about this event in your local group!\n                    All activities are free, except if you want to participate to the wine tasting\n                    (3€ to cover the costs) and except for special activities. You also may have to bring some food & drinks of your\n                    choice to share with others.</p>\n                    <p>\n                    Come here easily by trains, buses or car-pooling, meet locals and share this crazy\n                    adventure with them... please tell to others if you need a place for the carpooling,\n                    accomodations here... </p>\n                    <p>\n                    Please register on BeWelcome so locals will be able to host you <a href=\"http://www.bewelcome.org/activities/1757\" target=\"_blank\">BeWelcome SeekTheDuck page...<br/>\n                    <img src=\"images/BeWelcome-logo.png\" width=\"250\"/></a></p>\n                    <p>Please use the \"Planning\" button to see the activities in detail and register.</p>\n                    <p>See U !</p>\n                </div>\n                <div class=\"col-md-10\">\n                <img src={{canardImg}}/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=2.map