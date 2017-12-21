webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'rooms', pathMatch: 'full' },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_2__rooms_rooms_component__["a" /* RoomsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'rooms/:id', component: __WEBPACK_IMPORTED_MODULE_3__messages_messages_component__["a" /* MessagesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row header\">\n        <div class=\"col s10\">\n            <h1>{{title}}</h1>\n        </div>\n        <div *ngIf=\"username\">\n            <p class=\"col s2\">Logged in as: <strong>{{username}}</strong></p>\n            <button (click)=\"logout()\" class=\"btn waves-effect col s2 waves-light\" type=\"submit\" name=\"action\">Logout\n            </button>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__ = __webpack_require__("../../../../../src/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_room_service__ = __webpack_require__("../../../../../src/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(cookieService, router, socketService, roomService, loginService) {
        var _this = this;
        this.cookieService = cookieService;
        this.router = router;
        this.socketService = socketService;
        this.roomService = roomService;
        this.loginService = loginService;
        this.title = 'Messaging app';
        this.loginService.didLogIn.subscribe(function (user) {
            if (user) {
                _this.setUsername(user);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.cookieService.get("isLoggedIn");
        if (this.isLoggedIn !== "true") {
            this.router.navigateByUrl('/login');
        }
        else {
            this.username = this.cookieService.get('username');
        }
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.cookieService.put('isLoggedIn', "false");
        this.router.navigateByUrl('/login');
        this.username = null;
        var roomId = this.cookieService.get('roomId');
        var userId = this.cookieService.get('userId');
        if (roomId) {
            this.roomService.leaveRoom(roomId, userId).subscribe(function (_) {
                console.log("left room " + roomId);
                _this.socketService.disconnect();
            });
        }
        this.deleteCookies();
    };
    AppComponent.prototype.deleteCookies = function () {
        this.cookieService.removeAll();
    };
    AppComponent.prototype.setUsername = function (username) {
        this.username = username;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_room_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_room_room_service__["a" /* RoomService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_room_room_service__ = __webpack_require__("../../../../../src/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_login_service__ = __webpack_require__("../../../../../src/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_message_message_service__ = __webpack_require__("../../../../../src/services/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subscribers_subscribers_component__ = __webpack_require__("../../../../../src/app/subscribers/subscribers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__send_message_send_message_component__ = __webpack_require__("../../../../../src/app/send-message/send-message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__rooms_rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__subscribers_subscribers_component__["a" /* SubscribersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__send_message_send_message_component__["a" /* SendMessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__["a" /* CookieModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_room_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_12__services_message_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_11__services_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_10__services_socket_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cookiebanner {\n    background-color: teal;\n    line-height: 2em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.cookiebanner > p {\n    color: white;\n    font-size: 1.2em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2>Log in or create a new account</h2>\n  </div>\n<div class=\"row\">\n  <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\">\n</div>\n<div class=\"row\">\n  <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n</div>\n<div class=\"row\">\n    <button class=\"col s6\" (click)=\"login()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Login\n    </button>\n    <button class=\"col s6\" (click)=\"create()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Create new account\n      </button>\n</div>\n<div *ngIf=\"cookiesEnabled===false\" class=\"row cookiebanner\">\n  <p>Please enable cookies to use this application</p>\n</div>\n<div *ngIf=\"usernameTaken===true\" class=\"row cookiebanner\">\n  <p>Username already in use. select another.</p>\n</div>\n<div *ngIf=\"invalidLogin===true\" class=\"row cookiebanner\">\n    <p>Your login credentials didn't seem to be correct.</p>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__ = __webpack_require__("../../../../../src/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(cookieService, loginService, router, socketService) {
        this.cookieService = cookieService;
        this.loginService = loginService;
        this.router = router;
        this.socketService = socketService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.usernameTaken = false;
        this.invalidLogin = false;
        this.cookiesEnabled = navigator.cookieEnabled;
        if (!this.cookiesEnabled) {
            return;
        }
        this.socketService.createSocket();
        this.loginService.login(this.username, this.password).subscribe(function (user) {
            if (!user.username) {
                _this.invalidLogin = true;
                return;
            }
            else {
                _this.invalidLogin = false;
            }
            _this.router.navigateByUrl('/rooms');
            _this.setupCookies(user);
        });
    };
    LoginComponent.prototype.create = function () {
        var _this = this;
        this.usernameTaken = false;
        this.invalidLogin = false;
        this.cookiesEnabled = navigator.cookieEnabled;
        if (!this.cookiesEnabled) {
            return;
        }
        this.loginService.create(this.username, this.password).subscribe(function (user) {
            if (!user.username) {
                _this.usernameTaken = true;
                return;
            }
            else {
                _this.usernameTaken = false;
            }
            _this.socketService.createSocket();
            _this.router.navigateByUrl('/rooms');
            _this.setupCookies(user);
        });
    };
    LoginComponent.prototype.setupCookies = function (user) {
        this.cookieService.put("isLoggedIn", "true");
        this.cookieService.put("userId", user.id);
        this.cookieService.put("username", user.username);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_socket_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.message-sender {\n    position: fixed;\n    bottom: 0;\n    width: 80%;\n}\n\ndiv.received {\n    text-align: left;\n    background-color: #ddd;\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\ndiv.sent {\n    border-radius: 5px;\n    text-align: right;\n    background-color: teal;\n    padding: 10px;\n    color: white;\n    margin-bottom: 20px;\n}\n\n.sender {\n    opacity: 0.7;\n    font-size: 0.8em;\n    margin: 0;\n}\n.message{\n    margin: 0;\n}\n\n.roomheader {\n    margin: 0;\n    margin-right: -10px;\n}\n.back {\n    margin-top: 10px;\n    margin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s8\">\n    <div class=\"row\">\n        <h3 class=\"col s10 roomheader\">{{roomname}}</h3>\n        <a (click)=\"goBack()\" class=\"waves-effect back col s2 waves-light btn\">go back</a>\n    </div>\n    <div class=\"message-container\" *ngFor=\"let message of messages\">\n      <div [class.sent]=\"message.received === 'false'\" [class.received]=\"message.received === 'true'\">\n        <p class=\"message\">{{message.message}}</p>\n        <p class=\"sender\">{{message.user.username}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s4\">\n    <app-subscribers></app-subscribers>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"message-sender\">\n    <app-send-message [roomId]=\"roomId\" (newMessage)=\"newMessage($event)\"></app-send-message>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_message_service__ = __webpack_require__("../../../../../src/services/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_room_room_service__ = __webpack_require__("../../../../../src/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesComponent = (function () {
    function MessagesComponent(messageService, roomService, route, location, cookieService, socketService) {
        var _this = this;
        this.messageService = messageService;
        this.roomService = roomService;
        this.route = route;
        this.location = location;
        this.cookieService = cookieService;
        this.socketService = socketService;
        if (this.socketService.socket.hasListeners('message')) {
            this.socketService.socket.removeListener('message');
        }
        this.socketService.socket.on('message', function () {
            console.log('received message event');
            _this.getMessages();
        });
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.userId = this.cookieService.get("userId");
        this.roomId = this.route.snapshot.paramMap.get('id');
        this.getMessages();
        this.getRoomname();
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.roomService.leaveRoom(this.roomId, this.userId).subscribe(function (_) { return console.log("left room: " + _this.roomId); });
    };
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessages(this.roomId).subscribe(function (messages) {
            messages.forEach(function (message) {
                if (message.user._id == _this.userId) {
                    message.received = "false";
                }
                else {
                    message.received = "true";
                }
            });
            _this.messages = messages;
        });
    };
    MessagesComponent.prototype.getRoomname = function () {
        var _this = this;
        this.roomService.getRoomname(this.roomId).subscribe(function (roomname) { return _this.roomname = roomname["roomname"]; });
    };
    MessagesComponent.prototype.newMessage = function (event) {
        this.getMessages();
    };
    MessagesComponent.prototype.goBack = function () {
        this.location.back();
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_message_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_message_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_room_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_room_room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__["a" /* SocketService */]) === "function" && _f || Object])
], MessagesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.roomname {\n    font-size: 1.3em;\n    font-weight: bold;\n}\n.room-link{\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s8\">\n  <ul class=\"collection\">\n    <a class=\"collection-item\" *ngFor=\"let room of rooms\" >\n      <a (click)=\"joinRoom(room._id)\">\n        <div class=\"room-link\">\n            <p class=\"roomname\">{{room.roomname}}</p>\n            <p class=\"about\">{{room.about}}</p>\n        </div>\n      </a>\n    </a>\n  </ul>\n  <input type=\"text\" placeholder=\"Room name\" [(ngModel)]=\"roomName\"/>\n  <textarea id=\"textarea1\" class=\"materialize-textarea\" type=\"text\" placeholder=\"What is the chatroom about?\" [(ngModel)]=\"about\"></textarea>\n  <a (click)=\"createRoom()\" class=\"waves-effect waves-light btn\">Create new room</a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_room__ = __webpack_require__("../../../../../src/models/room.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_room_room_service__ = __webpack_require__("../../../../../src/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomsComponent = (function () {
    function RoomsComponent(roomService, router, cookieService, socketService) {
        var _this = this;
        this.roomService = roomService;
        this.router = router;
        this.cookieService = cookieService;
        this.socketService = socketService;
        if (!this.socketService.socket.hasListeners('room'))
            this.socketService.socket.on('room', function (_) {
                console.log('received room event');
                _this.getRooms();
            });
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomsComponent.prototype.getRooms = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (rooms) { return _this.rooms = rooms; });
    };
    RoomsComponent.prototype.createRoom = function () {
        var _this = this;
        var room = new __WEBPACK_IMPORTED_MODULE_1__models_room__["a" /* Room */]();
        if (this.roomName === "" || !this.roomName || !this.about || this.about === "") {
            return;
        }
        room.roomname = this.roomName;
        room.about = this.about;
        this.roomService.createRoom(room).subscribe(function (_) { return _this.getRooms(); });
        this.roomName = null;
        this.about = null;
    };
    RoomsComponent.prototype.joinRoom = function (roomId) {
        var _this = this;
        var userId = this.cookieService.get('userId');
        this.cookieService.put('roomId', roomId);
        this.roomService.joinRoom(roomId, userId).subscribe(function (_) {
            _this.router.navigateByUrl("/rooms/" + roomId);
        });
    };
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rooms',
        template: __webpack_require__("../../../../../src/app/rooms/rooms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rooms/rooms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_room_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_room_room_service__["a" /* RoomService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__["b" /* CookieService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_socket_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], RoomsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=rooms.component.js.map

/***/ }),

/***/ "../../../../../src/app/send-message/send-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/send-message/send-message.component.html":
/***/ (function(module, exports) {

module.exports = "<input class=\"col s6\" type=\"text\" placeholder=\"message\" [(ngModel)]=\"message\">\n<a class=\"col s2\" (click)=\"sendMessage()\" class=\"waves-effect waves-light btn\">Send</a>\n"

/***/ }),

/***/ "../../../../../src/app/send-message/send-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_message_service__ = __webpack_require__("../../../../../src/services/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendMessageComponent = (function () {
    function SendMessageComponent(messageService, cookieService) {
        this.messageService = messageService;
        this.cookieService = cookieService;
        this.newMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SendMessageComponent.prototype.ngOnInit = function () {
    };
    SendMessageComponent.prototype.sendMessage = function (roomId) {
        var _this = this;
        var message = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]();
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        var userId = this.cookieService.get('userId');
        console.log(userId);
        user._id = userId;
        message.user = user;
        if (!this.message || this.message === "") {
            return;
        }
        message.message = this.message;
        this.message = null;
        console.log(message);
        this.messageService.sendMessage(this.roomId, message).subscribe(function (_) { _this.newMessage.emit(); });
    };
    return SendMessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SendMessageComponent.prototype, "roomId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SendMessageComponent.prototype, "newMessage", void 0);
SendMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-send-message',
        template: __webpack_require__("../../../../../src/app/send-message/send-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/send-message/send-message.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object])
], SendMessageComponent);

var _a, _b;
//# sourceMappingURL=send-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/subscribers/subscribers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscribers/subscribers.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collection with-header\">\n  <li class=\"collection-header\"><h5>Subscribers</h5></li>\n  <li class=\"collection-item\" *ngFor=\"let user of users\">\n    <p class=\"username\">{{user.username}}</p>\n    <p class=\"mood\">{{user.currentMood}}</p>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/subscribers/subscribers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_room_service__ = __webpack_require__("../../../../../src/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubscribersComponent = (function () {
    function SubscribersComponent(roomService, route, socketService) {
        var _this = this;
        this.roomService = roomService;
        this.route = route;
        this.socketService = socketService;
        if (this.socketService.socket.hasListeners('subscriber')) {
            this.socketService.socket.removeListener('subscriber');
        }
        this.socketService.socket.on('subscriber', function () {
            console.log('received subscriber event');
            _this.getSubscribers();
        });
    }
    SubscribersComponent.prototype.ngOnInit = function () {
        this.roomId = this.route.snapshot.paramMap.get('id');
        this.getSubscribers();
    };
    SubscribersComponent.prototype.getSubscribers = function () {
        var _this = this;
        this.roomService.getSubscribers(this.roomId).subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
            console.log('requested subs');
        });
    };
    return SubscribersComponent;
}());
SubscribersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-subscribers',
        template: __webpack_require__("../../../../../src/app/subscribers/subscribers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subscribers/subscribers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_room_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_room_room_service__["a" /* RoomService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_socket_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], SubscribersComponent);

var _a, _b, _c;
//# sourceMappingURL=subscribers.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
var baseUrl = 'http://localhost:3000/api/';
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["b" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/models/room.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room() {
    }
    return Room;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ "../../../../../src/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* baseUrl */] + 'users';
        this.didLogIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var auth = { username: username, password: password };
        return this.http.post(this.url + "/login", auth).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* tap */])(function (user) { return _this.didLogIn.emit(user['username']); }));
    };
    LoginService.prototype.create = function (username, password) {
        var _this = this;
        var auth = { username: username, password: password };
        return this.http.post(this.url + "/signUp", auth).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* tap */])(function (user) { return _this.didLogIn.emit(user['username']); }));
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/services/message/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_tap__ = __webpack_require__("../../../../rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageService = (function () {
    function MessageService(http, cookieService, socketService) {
        this.http = http;
        this.cookieService = cookieService;
        this.socketService = socketService;
    }
    MessageService.prototype.getMessages = function (roomId) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* baseUrl */] + "rooms/" + roomId + "/messages";
        return this.http.get(url);
    };
    MessageService.prototype.sendMessage = function (roomId, message) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* baseUrl */] + "rooms/" + roomId + "/send";
        return this.http.post(url, message).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_tap__["a" /* tap */])(function (_) { return _this.socketService.message(roomId); }));
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], MessageService);

var _a, _b, _c;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/services/room/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("../../../../rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__ = __webpack_require__("../../../../../src/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomService = (function () {
    function RoomService(http, socketService) {
        this.http = http;
        this.socketService = socketService;
        this.roomsUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* baseUrl */] + 'rooms';
    }
    RoomService.prototype.getRooms = function () {
        return this.http.get(this.roomsUrl);
    };
    RoomService.prototype.getSubscribers = function (roomId) {
        return this.http.get(this.roomsUrl + ("/" + roomId + "/users"));
    };
    RoomService.prototype.createRoom = function (room) {
        var _this = this;
        console.log(room.roomname);
        return this.http.post(this.roomsUrl, room).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (_) { return _this.socketService.room(room.roomname); }));
    };
    RoomService.prototype.joinRoom = function (roomId, userId) {
        var _this = this;
        var reqObject = {
            roomId: roomId,
            userId: userId
        };
        console.log(reqObject);
        return this.http.patch(this.roomsUrl + '/join', reqObject).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (_) { return _this.socketService.join(reqObject.roomId); }));
    };
    RoomService.prototype.getRoomname = function (roomId) {
        return this.http.get(this.roomsUrl + "/roomname/" + roomId);
    };
    RoomService.prototype.leaveRoom = function (roomId, userId) {
        var _this = this;
        var reqObject = {
            roomId: roomId,
            userId: userId
        };
        return this.http.patch(this.roomsUrl + '/leave', reqObject).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (_) { return _this.socketService.leave(reqObject.roomId); }));
    };
    return RoomService;
}());
RoomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], RoomService);

var _a, _b;
//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ "../../../../../src/services/socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.createSocket();
    }
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
        console.log('disconnecting');
    };
    SocketService.prototype.createSocket = function () {
        if (this.socket) {
            this.socket = null;
        }
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]('http://localhost:3000');
        this.socket.on('connection', function (room) {
            console.log("event for creation of " + room + " was received");
        });
    };
    SocketService.prototype.join = function (roomId) {
        console.log('sending join event');
        this.socket.emit('join', roomId);
    };
    SocketService.prototype.leave = function (roomId) {
        console.log('sending leave event');
        this.socket.emit('leave', roomId);
    };
    SocketService.prototype.room = function (roomname) {
        console.log('sending room event');
        this.socket.emit('room', roomname);
    };
    SocketService.prototype.message = function (roomId) {
        console.log("sending event for message");
        this.socket.emit('message', roomId);
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map