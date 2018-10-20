(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-field {\r\n    margin:0px;\r\n    padding: 0px;\r\n    background: url('bg.jpg');\r\n    height: 100vh;\r\n    width:100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n}\r\n\r\n.shadow {\r\n    background-color: rgba(3, 3, 3, 0.7);\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user1-field {\r\n    border: 1px solid red;\r\n    height: 180px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.user1-cards {\r\n    display: flex;\r\n}\r\n\r\n.countOfHp {\r\n    width:50px;\r\n    height: 50px;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    right: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #00DEDF;\r\n}\r\n\r\n.countOfHp h1 {\r\n    text-align: center;\r\n}\r\n\r\n.battle-field {\r\n    border: 1px solid yellow;\r\n    height: 290px;\r\n    display: flex;\r\n    font-display: row;\r\n}\r\n\r\n.enemyCard {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.myActiveCard {\r\n    border: 1px solid red;\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.enemyActiveCard {\r\n    border: 1px solid blue;\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.user2-field {\r\n    border: 1px solid green;\r\n    height: 180px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.user2-cards {\r\n    display: flex;  \r\n}\r\n\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-field\"\r\n     *ngIf=\"status == Status.GameField\">\r\n    <div class=\"shadow\">\r\n        <div class=\"container\">\r\n            <div class=\"user1-field\">\r\n                <div class=\"user1-cards\">\r\n                    <app-card *ngFor=\"let person of enemyCard\"\r\n                              [isShowCard]=\"false\"\r\n                              [person]=\"person\"></app-card>\r\n                </div>\r\n\r\n                <div class=\"countOfHp\">\r\n                    <h1>\r\n                        {{enemyHp}}\r\n                    </h1>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"battle-field\">\r\n                <div cdkDropList\r\n                     #myActiveCardField=\"cdkDropList\"\r\n                     [cdkDropListData]=\"myActiveCard\"\r\n                     [cdkDropListConnectedTo]=\"[myCardRef]\"\r\n                     class=\"myActiveCard\"\r\n                     (cdkDropListDropped)=\"drop($event)\">\r\n                    <app-card *ngFor=\"let person of myActiveCard\"\r\n                              [person]=\"person\"\r\n                              [isShowCard]=\"true\"\r\n                              (click)=\"onCardSelect({type: 'my', person: person})\"\r\n                              cdkDrag></app-card>\r\n                </div>\r\n\r\n                <div class=\"enemyActiveCard\">\r\n                    <app-card *ngFor=\"let person of enemyActiveCard\"\r\n                              [person]=\"person\"\r\n                              [isShowCard]=\"true\"\r\n                              (click)=\"onCardSelect({type: 'enemy', person: person})\"\r\n                              cdkDrag></app-card>\r\n                </div>\r\n            </div>\r\n\r\n            <div cdkDropList\r\n                 #myCardRef=\"cdkDropList\"\r\n                 [cdkDropListData]=\"myCard\"\r\n                 [cdkDropListConnectedTo]=\"[myActiveCardField]\"\r\n                 class=\"user2-field\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"user2-cards\">\r\n                    <app-card *ngFor=\"let person of myCard\"\r\n                              [person]=\"person\"\r\n                              [isShowCard]=\"true\"\r\n                              cdkDrag></app-card>\r\n                </div>\r\n\r\n                <div class=\"countOfHp\">\r\n                    <h1>\r\n                        {{myHp}}\r\n                    </h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-signin *ngIf=\"status == Status.Auth\"></app-signin>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Status;
(function (Status) {
    Status[Status["GameField"] = 0] = "GameField";
    Status[Status["Auth"] = 1] = "Auth";
})(Status || (Status = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.myCard = [
            {
                firstName: 'Valiantsin1',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
            {
                firstName: 'Valiantsin2',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
            {
                firstName: 'Valiantsin3',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
        ];
        this.myActiveCard = [];
        this.enemyActiveCard = [
            {
                firstName: 'Valiantsin4',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
            {
                firstName: 'Valiantsi5',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
            {
                firstName: 'Valiantsin6',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
        ];
        this.enemyCard = [{
                firstName: 'Valiantsin1',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
            {
                firstName: 'Valiantsin2',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
            {
                firstName: 'Valiantsin3',
                lastName: 'Tsikhanau',
                picture: 'https://static.cdn.epam.com/avatar/60655420492f5fca5a2f840c132d7e82.jpg',
                jobPosition: '...',
                skil1: 'Skil1',
                skil2: 'Skil2',
                skil3: 'Skil3',
            },
        ];
        this.Status = Status;
        this.status = Status.GameField;
        this.myHp = 100;
        this.enemyHp = 100;
        this.attackStateArray = {
            me: null,
            enemy: null
        };
        this.socket = this.socketService.getSocket();
    }
    AppComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.socket.emit('onStep', [
                { id: 1, cards: this.myCard },
                { id: 2, cards: this.myActiveCard },
                { id: 3, cards: this.enemyActiveCard },
                { id: 4, cards: this.enemyCard },
            ]);
        }
    };
    AppComponent.prototype.onCardSelect = function (data) {
        if (data.type === 'my') {
            this.attackStateArray.me = data.person;
        }
        else {
            this.attackStateArray.enemy = data.person;
        }
        if (this.attackStateArray.enemy && this.attackStateArray.me) {
            console.log("FIGHT");
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin */ "./src/app/signin/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/timer.service */ "./src/app/services/timer.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"]('109247559839-2osrqa6gnuqovro4kb25hal7mtt8pdj2.apps.googleusercontent.com')
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _signin__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialLoginModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                _services_timer_service__WEBPACK_IMPORTED_MODULE_7__["TimerService"],
                _services_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);\r\n    width:100px;\r\n    height: 150px;\r\n    background-color: #fff;\r\n    margin-left: 20px;\r\n}\r\n\r\n/* .card:hover {\r\n    transform:translate(0, 0) \r\n} */\r\n\r\n.person-block {\r\n    padding-top: 10px;\r\n}\r\n\r\n.image-block {\r\n    border: 2px solid #00DEDF;\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n}\r\n\r\n.image {\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.name-block {\r\n    text-align: center;\r\n}\r\n\r\n.first-name {\r\n    font-weight: bold;\r\n}\r\n\r\n.job-position {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.skills-block {\r\n    \r\n}\r\n\r\n.skill-list {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n\r\n.skil-item{\r\n    color: #fff;\r\n    padding-left: 5px;\r\n    padding-top: 2px;\r\n    background-color:  #00DEDF;\r\n}\r\n\r\n.skil-item:nth-child(2){\r\n    color: #fff;\r\n    padding-left: 5px;\r\n    padding-top: 2px;\r\n    background-color:  #01CDCC;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div *ngIf=\"isShowCard\">\r\n        <div class=\"person-block\">\r\n            <div class=\"image-block\">\r\n                <img class=\"image\"\r\n                     src={{person.picture}}>\r\n            </div>\r\n\r\n            <div class=\"name-block\">\r\n                <div class=\"first-name\">{{person.firstName}}</div>\r\n                <div class=\"last-name\">{{person.lastName}}</div>\r\n            </div>\r\n\r\n            <div class=\"job-position\">\r\n                {{person.jobPosition}}\r\n            </div>\r\n        </div>\r\n        <div class=\"skills-block\">\r\n            <ul class=\"skill-list\">\r\n                <li class=\"skil-item\">{{person.skil1}}</li>\r\n                <li class=\"skil-item\">{{person.skil2}}</li>\r\n                <li class=\"skil-item\">{{person.skil3}}</li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.isShowCard = true;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "person", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "isShowCard", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/baseUrl */ "./src/constants/baseUrl.ts");


var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.getSocket = function () {
        if (!this.socket) {
            // this.socket = openSocket('http://localhost:3030');
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__(_constants_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]);
        }
        return this.socket;
    };
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/timer.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/timer.service.ts ***!
  \*******************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimerService = /** @class */ (function () {
    function TimerService() {
    }
    TimerService.prototype.start = function (onInterval, onComplete, ms, interval) {
        if (interval === void 0) { interval = 1000; }
        var countDownDate = new Date((new Date()).getTime() + ms).getTime();
        onInterval(ms);
        var newInterval = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            onInterval(distance);
            if (distance < 0) {
                onComplete();
                clearInterval(newInterval);
            }
        }, interval);
        return newInterval;
    };
    TimerService.prototype.end = function (timer) {
        clearInterval(timer);
    };
    TimerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TimerService);
    return TimerService;
}());



/***/ }),

/***/ "./src/app/signin/index.ts":
/*!*********************************!*\
  !*** ./src/app/signin/index.ts ***!
  \*********************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component */ "./src/app/signin/signin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return _signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]; });




/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Sign in\r\n</h1>\r\n\r\n<button (click)=\"socialSignIn()\">Sign in with Google</button>    "

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/baseUrl */ "./src/constants/baseUrl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(socialAuthService, http) {
        this.socialAuthService = socialAuthService;
        this.http = http;
    }
    SigninComponent.prototype.socialSignIn = function () {
        var _this = this;
        this.socialAuthService.signIn(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID)
            .then(function (userData) {
            console.log(' sign in data : ', userData);
            var url = _constants_baseUrl__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/api/users/google-auth";
            _this.http.post(url, {
                email: userData.email,
                name: userData.name,
                accessToken: userData.token,
            }).subscribe(function (res) { return console.log('RESPONSE', res); });
        })
            .catch(function (err) { return console.log('Error', err); });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
        }),
        __metadata("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/constants/baseUrl.ts":
/*!**********************************!*\
  !*** ./src/constants/baseUrl.ts ***!
  \**********************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
var baseUrl = 'https://it-stone.herokuapp.com';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


window.global = window;


if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\Projects\it-stone\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map