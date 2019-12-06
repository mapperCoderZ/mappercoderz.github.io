webpackJsonp([0],{

/***/ 1019:
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
var activities_routing_module_1 = __webpack_require__(1026);
var ActivitiesModule = (function () {
    function ActivitiesModule() {
    }
    return ActivitiesModule;
}());
ActivitiesModule = __decorate([
    core_1.NgModule({
        imports: [activities_routing_module_1.ActivitiesRoutingModule, shared_module_1.SharedModule],
        declarations: [activities_routing_module_1.ActivitiesRoutingModule.components]
    })
], ActivitiesModule);
exports.ActivitiesModule = ActivitiesModule;


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

var map = {};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1023;


/***/ }),

/***/ 1024:
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
var trackby_service_1 = __webpack_require__(452);
var ActivityCardComponent = (function () {
    function ActivityCardComponent(trackbyService) {
        this.trackbyService = trackbyService;
        this.activities = [];
    }
    ActivityCardComponent.prototype.ngOnInit = function () {
    };
    ActivityCardComponent.prototype.getImgPath = function (activity) {
        return __webpack_require__(1023)("./" + activity.picture + '.png');
    };
    return ActivityCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ActivityCardComponent.prototype, "activities", void 0);
ActivityCardComponent = __decorate([
    core_1.Component({
        selector: 'cm-activities-card',
        template: __webpack_require__(1039),
        styles: [__webpack_require__(1046)],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [trackby_service_1.TrackByService])
], ActivityCardComponent);
exports.ActivityCardComponent = ActivityCardComponent;


/***/ }),

/***/ 1025:
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
var sorter_service_1 = __webpack_require__(454);
var trackby_service_1 = __webpack_require__(452);
var ActivitiesGridComponent = (function () {
    function ActivitiesGridComponent(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.activities = [];
    }
    ActivitiesGridComponent.prototype.ngOnInit = function () {
    };
    ActivitiesGridComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.activities, prop);
    };
    ActivitiesGridComponent.prototype.getImgPath = function (activity) {
        return __webpack_require__(1023)("./" + activity.picture + '.png');
    };
    return ActivitiesGridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ActivitiesGridComponent.prototype, "activities", void 0);
ActivitiesGridComponent = __decorate([
    core_1.Component({
        selector: 'cm-activities-grid',
        template: __webpack_require__(1040),
        styles: [__webpack_require__(1047)],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [sorter_service_1.SorterService, trackby_service_1.TrackByService])
], ActivitiesGridComponent);
exports.ActivitiesGridComponent = ActivitiesGridComponent;


/***/ }),

/***/ 1026:
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
var activities_component_1 = __webpack_require__(1027);
var activities_card_component_1 = __webpack_require__(1024);
var activities_grid_component_1 = __webpack_require__(1025);
var routes = [
    { path: '', component: activities_component_1.ActivitiesComponent }
];
var ActivitiesRoutingModule = (function () {
    function ActivitiesRoutingModule() {
    }
    return ActivitiesRoutingModule;
}());
ActivitiesRoutingModule.components = [activities_component_1.ActivitiesComponent, activities_card_component_1.ActivityCardComponent, activities_grid_component_1.ActivitiesGridComponent];
ActivitiesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ActivitiesRoutingModule);
exports.ActivitiesRoutingModule = ActivitiesRoutingModule;


/***/ }),

/***/ 1027:
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
var filter_service_1 = __webpack_require__(453);
var ActivitiesComponent = (function () {
    function ActivitiesComponent(dataService, filterService) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.activities = [];
        this.filteredActivities = [];
        this.displayModeEnum = DisplayModeEnum;
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.title = 'Activities';
        this.filterText = 'Filter Activities:';
        this.displayMode = DisplayModeEnum.Card;
        this.getActivitiesPage(1);
    };
    ActivitiesComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    ActivitiesComponent.prototype.pageChanged = function (page) {
        this.getActivitiesPage(page);
    };
    ActivitiesComponent.prototype.getActivitiesPage = function (page) {
        var _this = this;
        this.dataService.getActivitiesPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.activities = _this.filteredActivities = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getActivitiesPage() retrieved activities for page: ' + page); });
    };
    ActivitiesComponent.prototype.filterChanged = function (data) {
        if (data && this.activities) {
            data = data.toUpperCase();
            var props = ['name', 'description', 'date', 'address', 'organizerName'];
            this.filteredActivities = this.filterService.filter(this.activities, data, props);
        }
        else {
            this.filteredActivities = this.activities;
        }
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    core_1.Component({
        selector: 'cm-activities',
        template: __webpack_require__(1041)
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, filter_service_1.FilterService])
], ActivitiesComponent);
exports.ActivitiesComponent = ActivitiesComponent;
var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));


/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(109)();
// imports


// module
exports.push([module.i, ".card-container {\n    width:85%;\n}\n\n.card {\n    background-color:#fff;\n    border: 1px solid #d4d4d4;\n    height:150px;\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.card-header {\n    background-color:#585858;\n    font-size:14pt;\n    color:white;\n    padding:5px;\n    width:100%;\n}\n\n.card-close {\n    color: white;\n    font-weight:bold;\n    margin-right:5px;\n}\n\n.card-body {\n    padding-left: 5px;\n}\n\n.card-body-left {\n    margin-top: -5px;\n}\n\n.card-body-right {\n    margin-left: 20px;\n    margin-top: 2px;\n}\n\n.card-body-content {\n    width: 100px;\n}\n\n.card-image {\n    height:50px;width:50px;margin-top:10px;\n}\n\n.white {\n    color: white;\n}\n\n.white:hover {\n    color: white;\n}", ""]);

// exports


/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(109)();
// imports


// module
exports.push([module.i, ".grid-container  div {\n    padding-left: 0px;\n}\n\n.grid-container td {\n    vertical-align: middle;\n}\n\n.grid-image {\n    height:50px;width:50px;margin-top:10px;\n}", ""]);

// exports


/***/ }),

/***/ 1039:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row card-container\">\n        <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let activity of activities;trackBy:trackbyService.activity\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <a [routerLink]=\"['/activities',activity.id,'details']\" class=\"white\">\n                        {{activity.name | capitalize }}\n                    </a>\n                    <!--<a [routerLink]=\"['/activities',activity.id,'edit']\">\n                        <i title=\"Edit\"\n                           class=\"pull-right glyphicon glyphicon-edit edit-icon white\"></i>\n                    </a>-->\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"clearfix\">\n                        <div class=\"pull-left card-body-left\">\n                                <img src=\"{{ getImgPath(activity) }}\" class=\"card-image\" />\n\n                        </div>\n                        <div class=\"pull-left card-body-right\">\n                        <div class=\"card-body-content\">{{activity.date }}</div>\n                        <div class=\"card-body-content\">{{activity.address | trim }}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!activities.length\">\n            No Records Found\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 1040:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row grid-container\">\n        <div class=\"col-md-10\">\n            <div class=\"table\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>&nbsp;</th>\n                            <!-- le tri ne marche pas avec la pagination-->\n                            <th> <!--cm-sort-by=\"name\" (sorted)=\"sort($event)\"-->Activity</th>\n                            <th> <!--cm-sort-by=\"date\" (sorted)=\"sort($event)\"-->Date/time</th>\n                            <th> <!--cm-sort-by=\"address\" (sorted)=\"sort($event)\"-->Address</th>\n                            <!-- Or you can do this directly rather than using sort-by directive -->\n                            <th>&nbsp;</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let activity of activities;trackBy:trackbyService.activity\">\n                            <td><img src=\"{{ getImgPath(activity) }}\"\n                                    class=\"grid-image\" alt=\"Activity Image\" /></td>\n                            <td><a [routerLink]=\"['/activities',activity.id,'details']\">{{ activity.name | capitalize }}</a></td>\n                            <td>{{ activity.date }}</td>\n                            <td>{{ activity.address }}</td>\n                        </tr>\n                        <tr *ngIf=\"!activities.length\">\n                            <td>&nbsp;</td>\n                            <td colspan=\"7\">No Records Found</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1041:
/***/ (function(module, exports) {

module.exports = "<div class=\"activities view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                {{ title }}\n            </h3>\n        </header>\n        <br />\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"navbar\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Card)\" [class.active]=\"displayMode === displayModeEnum.Card\">\n                                <span class=\"glyphicon glyphicon-th-large\"></span> Card View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Grid)\" [class.active]=\"displayMode === displayModeEnum.Grid\">\n                                <span class=\"glyphicon glyphicon-align-justify\"></span> List View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Map)\" [class.active]=\"displayMode === displayModeEnum.Map\">\n                                <span class=\"glyphicon glyphicon-map-marker\"></span> Map View\n                            </a>\n                        </li>\n                        <!--<li class=\"toolbar-item\">\n                            <a routerLink=\"/activities/0/edit\">\n                                <span class=\"glyphicon glyphicon-plus\"></span> New Activity\n                            </a>\n                        </li>-->\n                    </ul>\n                    <cm-filter-textbox class=\"navbar-right\"\n                     (changed)=\"filterChanged($event)\"></cm-filter-textbox>\n                </div>\n            </div>\n        </div>\n        \n        <cm-activities-card\n                [activities]=\"filteredActivities\"\n                [hidden]=\"displayMode !== displayModeEnum.Card\"></cm-activities-card>\n    \n        <cm-activities-grid\n          [activities]=\"filteredActivities\"\n          [hidden]=\"displayMode !== displayModeEnum.Grid\"></cm-activities-grid>\n\n        <cm-map *ngIf=\"filteredActivities.length\" [latitude]=\"43.611208\" [longitude]=\"1.456876\"\n                [zoom]=\"12\"\n                [enabled]=\"displayMode === displayModeEnum.Map\"\n                [hidden]=\"displayMode !== displayModeEnum.Map\">\n            <cm-map-point\n                    *ngFor=\"let activity of filteredActivities\"\n                    [latitude]=\"activity.latitude\"\n                    [longitude]=\"activity.longitude\"\n                    [markerText]=\"'<h3>' + activity.name + '</h3>' + activity.date + ' with ' + activity.organizerName\"></cm-map-point>\n        </cm-map>\n\n        <cm-pagination\n            [totalItems]=\"totalRecords\" \n            [pageSize]=\"pageSize\" \n            (pageChanged)=\"pageChanged($event)\"></cm-pagination>\n          \n    </div>\n</div>\n"

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1036);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1037);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=0.map