webpackJsonp([1],{

/***/ 1020:
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
var activity_routing_module_1 = __webpack_require__(1029);
var ActivityModule = (function () {
    function ActivityModule() {
    }
    return ActivityModule;
}());
ActivityModule = __decorate([
    core_1.NgModule({
        imports: [activity_routing_module_1.ActivityRoutingModule, shared_module_1.SharedModule],
        declarations: [activity_routing_module_1.ActivityRoutingModule.components]
    })
], ActivityModule);
exports.ActivityModule = ActivityModule;


/***/ }),

/***/ 1028:
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
var router_1 = __webpack_require__(78);
var data_service_1 = __webpack_require__(451);
var ActivityDetailsComponent = (function () {
    function ActivityDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ActivityDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getActivity(id)
                .subscribe(function (activity) {
                _this.activity = activity;
                _this.mapEnabled = true;
            });
        });
    };
    return ActivityDetailsComponent;
}());
ActivityDetailsComponent = __decorate([
    core_1.Component({
        selector: 'cm-activity-details',
        template: __webpack_require__(1042),
        styles: [__webpack_require__(1048)]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService])
], ActivityDetailsComponent);
exports.ActivityDetailsComponent = ActivityDetailsComponent;


/***/ }),

/***/ 1029:
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
var activity_component_1 = __webpack_require__(1030);
var activity_details_component_1 = __webpack_require__(1028);
var can_activate_guard_1 = __webpack_require__(1031);
var routes = [
    {
        path: '',
        component: activity_component_1.ActivityComponent,
        children: [
            { path: 'details', component: activity_details_component_1.ActivityDetailsComponent }
        ]
    }
];
var ActivityRoutingModule = (function () {
    function ActivityRoutingModule() {
    }
    return ActivityRoutingModule;
}());
ActivityRoutingModule.components = [activity_component_1.ActivityComponent, activity_details_component_1.ActivityDetailsComponent];
ActivityRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: [can_activate_guard_1.CanActivateGuard]
    })
], ActivityRoutingModule);
exports.ActivityRoutingModule = ActivityRoutingModule;


/***/ }),

/***/ 1030:
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
var router_1 = __webpack_require__(78);
var ActivityComponent = (function () {
    function ActivityComponent(router) {
        this.router = router;
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    core_1.Component({
        selector: 'cm-orders',
        template: __webpack_require__(1043)
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ActivityComponent);
exports.ActivityComponent = ActivityComponent;


/***/ }),

/***/ 1031:
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
var router_1 = __webpack_require__(78);
var auth_service_1 = __webpack_require__(202);
var CanActivateGuard = (function () {
    function CanActivateGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    return CanActivateGuard;
}());
CanActivateGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], CanActivateGuard);
exports.CanActivateGuard = CanActivateGuard;


/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(109)();
// imports


// module
exports.push([module.i, ".details-image {\n    height:100px;width:100px;margin-top:10px;\n}", ""]);

// exports


/***/ }),

/***/ 1042:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"activity\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <img src=\"images/{{activity.picture | lowercase}}.png\" class=\"details-image\" />\n    </div>\n    <div class=\"col-md-10\">\n      <h3>{{ activity.name | capitalize }} <i *ngIf=\"activity.registerUrl\">(registration needed please)</i> <br/></h3>\n      <h4><div [innerHTML]=\"activity.description\"></div></h4>\n      <h4>Organized by  <a href=\"{{ activity.bewelcome }}\" target=\"_blank\">{{ activity.organizerName }}</a>\n        <br />\n        When ? {{ activity.date }}<br/>\n        Where ? {{ activity.address }}<br/>\n      </h4>\n      <div *ngIf=\"activity.registerUrl\"><h4>\n        <b>Registration</b><br/><br/>\n        <p>Only people who registered to this activity will be able to join !<br/>\n        <i>Maybe you will have to pay for this activity on the BeWelcome page, click here: </i><br/><br/>\n          <a href=\"{{ activity.registerUrl }}\" target=\"_blank\"><img src=\"images/register.png\" /></a></p></h4>\n      </div>\n      <div *ngIf=\"!activity.registerUrl\"><h5><i>\n        (no registration needed, but please go to the main BeWelcome activity page to attend)</i></h5>\n      </div>\n    </div>\n  </div>    \n  <br /><br />\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <cm-map [latitude]=\"activity.latitude\"\n           [longitude]=\"activity.longitude\"\n           [zoom]=\"13\"\n           [enabled]=\"mapEnabled\"\n           [markerText]=\"'<h3>' + activity.name + '</h3>' + activity.date + ' with ' + activity.organizerName\"></cm-map>\n    </div>\n  </div>\n</div>   \n<div *ngIf=\"!activity\" class=\"row\">\n   No activity found\n</div>  "

/***/ }),

/***/ 1043:
/***/ (function(module, exports) {

module.exports = "<div class=\"orders view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Activity Information</h3>\n        </header>\n        <br />\n        <div class=\"navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"details\" routerLinkActive=\"active\">\n                       <span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Activity Details\n                    </a>\n                </li>\n                <!--<li class=\"toolbar-item\">\n                    <a routerLink=\"edit\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>&nbsp;&nbsp;Edit Activity\n                    </a>\n                </li>-->\n            </ul>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n            <br />\n            <br />\n            <a routerLink=\"/activities\">View all Activities</a>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1038);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=1.map