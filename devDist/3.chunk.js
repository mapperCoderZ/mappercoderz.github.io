webpackJsonp([3],{

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(1);
var shared_module_1 = __webpack_require__(294);
var come_routing_module_1 = __webpack_require__(1032);
var ComeModule = (function () {
    function ComeModule() {
    }
    return ComeModule;
}());
ComeModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, come_routing_module_1.ComeRoutingModule],
        declarations: [come_routing_module_1.ComeRoutingModule.components]
    })
], ComeModule);
exports.ComeModule = ComeModule;


/***/ }),

/***/ 1032:
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
var come_component_1 = __webpack_require__(1033);
var routes = [
    { path: '', component: come_component_1.ComeComponent }
];
var ComeRoutingModule = (function () {
    function ComeRoutingModule() {
    }
    return ComeRoutingModule;
}());
ComeRoutingModule.components = [come_component_1.ComeComponent];
ComeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ComeRoutingModule);
exports.ComeRoutingModule = ComeRoutingModule;


/***/ }),

/***/ 1033:
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
var data_service_1 = __webpack_require__(451);
var trackby_service_1 = __webpack_require__(452);
var ComeComponent = (function () {
    function ComeComponent(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    ComeComponent.prototype.ngOnInit = function () {
        this.getActivitiesPage(1);
    };
    ComeComponent.prototype.pageChanged = function (page) {
        this.getActivitiesPage(page);
    };
    ComeComponent.prototype.getActivitiesPage = function (page) {
        var _this = this;
        this.dataService.getActivitiesPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.totalRecords = response.totalRecords;
            _this.activities = response.results;
        });
    };
    ComeComponent.prototype.ngAfterViewInit = function () {
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "scripts/momondo.js";
        s1.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(s1);
    };
    return ComeComponent;
}());
ComeComponent = __decorate([
    core_1.Component({
        selector: 'cm-activities-orders',
        template: __webpack_require__(1044)
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, trackby_service_1.TrackByService])
], ComeComponent);
exports.ComeComponent = ComeComponent;


/***/ }),

/***/ 1044:
/***/ (function(module, exports) {

module.exports = "<div class=\"activities view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                Come & sleep\n            </h3>\n        </header>\n        <br />\n        <h3>How to come ?</h3>\n        <i>Always take a look at companies websites prices after finding your flight</i>\n        <ul>\n            <li>Plane: <a href=\"http://www.edreams.com\" target=\"_blank\">www.edreams.com</a> </li>\n            <li>Plane: <a href=\"http://www.liligo.com\" target=\"_blank\">www.liligo.com</a> </li>\n            <li>Plane (usefull website, FR) : <a href=\"http://www.partirou.com/vols/\" target=\"_blank\">www.partirou.com</a> </li>\n            <li>Train : <a href=\"http://www.sncf.com/\" target=\"_blank\">www.sncf.com</a> </li>\n            <li>Bus : <a href=\"https://www.busradar.fr/\" target=\"_blank\">www.busradar.fr</a> </li>\n            <li>By Car (free of charge, FR) : <a href=\"https://covoiturage-libre.fr/\" target=\"_blank\">covoiturage-libre.fr</a> </li>\n            <li>By Car (blablacar) : <a href=\"https://www.blablacar.fr/\" target=\"_blank\">www.blablacar.fr</a> </li>\n        </ul>\n        <h3>Where to sleep ?</h3>\n        <ul>\n            <li>BeWelcome : <a href=\"http://www.bewelcome.org\" target=\"_blank\">www.bewelcome.org</a> </li>\n            <li>TrustRoots : <a href=\"https://www.trustroots.org\" target=\"_blank\">www.trustroots.org</a> </li>\n        </ul>\n    </div>\n</div>\n<br/>\n<div id=\"mmd-flight-widget\"></div>\n\n\n\n"

/***/ })

});
//# sourceMappingURL=3.map