/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_URL = 'mongodb://it-stone:g3QMmzLgTp1qGRXf2n89jVlc5iVxHGVeO9zTguvH8W90sdEeLB9BxEIe00F7XmDwEg1Z9DeXHe0SEEWmTSaabg%3D%3D@it-stone.documents.azure.com:10255/?ssl=true';
exports.USER_COLLECTION = 'user';
exports.CARD_COLLECTION = 'card';
exports.DECK_COLLECTION = 'deck';


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("inversify-express-utils");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var inversify_inject_decorators_1 = __importDefault(__webpack_require__(24));
var user_authentication_1 = __webpack_require__(2);
var card_1 = __webpack_require__(1);
var desk_1 = __webpack_require__(8);
var linkedinInfoParser_1 = __webpack_require__(9);
var parser_1 = __webpack_require__(29);
exports.CONTAINER = new inversify_1.Container();
exports.CONTAINER.bind(user_authentication_1.UserAuthenticationRepository).to(user_authentication_1.UserAuthenticationRepository);
exports.CONTAINER.bind(card_1.CardRepository).to(card_1.CardRepository);
exports.CONTAINER.bind(desk_1.DeskRepository).to(desk_1.DeskRepository);
exports.CONTAINER.bind(linkedinInfoParser_1.LinkedinInfoParserService).to(linkedinInfoParser_1.LinkedinInfoParserService);
exports.CONTAINER.bind(parser_1.ParserService).to(parser_1.ParserService);
exports.inject = inversify_inject_decorators_1.default(exports.CONTAINER).lazyInject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(25));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(26));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(11);
var inversify_express_utils_1 = __webpack_require__(6);
var body_parser_1 = __importDefault(__webpack_require__(12));
var morgan_1 = __importDefault(__webpack_require__(13));
var cors_1 = __importDefault(__webpack_require__(14));
var express_1 = __importDefault(__webpack_require__(32));
var path_1 = __importDefault(__webpack_require__(33));
var socket_io_1 = __importDefault(__webpack_require__(15));
__webpack_require__(16);
var services_registration_1 = __webpack_require__(7);
var socket_1 = __webpack_require__(27);
var server = new inversify_express_utils_1.InversifyExpressServer(services_registration_1.CONTAINER);
server.setConfig(function (app) {
    app.use(morgan_1.default('dev'));
    app.use(cors_1.default());
    app.use(body_parser_1.default.urlencoded({
        extended: true
    }));
    app.use(body_parser_1.default.json());
    app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist/client')));
});
var application = server.build();
var port = process.env.PORT || 3030;
var serverInstance = application.listen(port, function () {
    console.log('Press CTRL+C to stop\n');
});
var socketService = socket_1.SocketService.getInstance();
socketService.setSocket(socket_io_1.default(serverInstance));


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));


/***/ }),
/* 17 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = __webpack_require__(6);
var inversify_1 = __webpack_require__(0);
var user_authentication_1 = __webpack_require__(2);
var card_1 = __webpack_require__(1);
var service_1 = __webpack_require__(23);
var linkedinInfoParser_1 = __webpack_require__(9);
var data = {
    name: 'Nikita Bazhkou',
    currentPosition: '.Net Software Engineer - EPAM Systems',
    skills: [
        'C#',
        'JavaScript',
        'SQL',
        'Microsoft SQL Server',
        'Cascading Style Sheets (CSS)',
        'ASP.NET Core',
        'ASP.NET MVC 5',
        'Entity Framework',
        'LINQ',
        'ADO.NET',
        'jQuery',
        'React.js',
        'Angular',
        'git',
        'AJAX',
        'JIRA',
        'Solr',
        'EPiServer CMS',
        'EPiServer Commerce'
    ],
    education: 5,
    image: 'https://media.licdn.com/dms/image/C4E03AQHQPp3axkhdSA/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=NkQL-yaMMRa4WzI22Ks9xrmeTLekzYAjYnhGWD1Nc1Y',
    connections: 50
};
var UserController = (function () {
    function UserController(userAuthenticationRepository, cardRepository, deskRepository, linkedinInfoParserService, parserService) {
        this.userAuthenticationRepository = userAuthenticationRepository;
        this.cardRepository = cardRepository;
        this.deskRepository = deskRepository;
        this.linkedinInfoParserService = linkedinInfoParserService;
        this.parserService = parserService;
    }
    UserController.prototype.googleAuth = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, name, accessToken;
            return __generator(this, function (_b) {
                _a = request.body, email = _a.email, name = _a.name, accessToken = _a.accessToken;
                try {
                    return [2, this.userAuthenticationRepository.socialNetworksLogin(email, name, accessToken)];
                }
                catch (error) {
                    return [2, response.status(500).json(error)];
                }
                return [2];
            });
        });
    };
    UserController.prototype.saveCard = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, currentPosition, education, skills, image;
            return __generator(this, function (_b) {
                _a = request.body, name = _a.name, currentPosition = _a.currentPosition, education = _a.education, skills = _a.skills, image = _a.image;
                try {
                    return [2, this.cardRepository.saveCard(name, currentPosition, education, skills, image)];
                }
                catch (error) {
                    return [2, response.status(500).json(error)];
                }
                return [2];
            });
        });
    };
    UserController.prototype.getCards = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2, this.cardRepository.getCards()];
                }
                catch (error) {
                    return [2, response.status(500).json(error)];
                }
                return [2];
            });
        });
    };
    UserController.prototype.updateImage = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userEmail, cardIds;
            return __generator(this, function (_a) {
                userEmail = request.body.email;
                cardIds = request.body.cardIds;
                try {
                    return [2, this.deskRepository.updateCard(userEmail, cardIds)];
                }
                catch (error) {
                    return [2, response.status(500).json(error)];
                }
                return [2];
            });
        });
    };
    UserController.prototype.getDeckCards = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userEmail;
            return __generator(this, function (_a) {
                userEmail = request.params.userEmail;
                try {
                    return [2, this.deskRepository.getDeckCards(userEmail)];
                }
                catch (error) {
                    return [2, response.status(500).json(error)];
                }
                return [2];
            });
        });
    };
    UserController.prototype.TestParser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userEmail;
            return __generator(this, function (_a) {
                userEmail = request.params.userEmail;
                try {
                    return [2, this.linkedinInfoParserService.parseProfileData(data)];
                }
                catch (error) {
                    return [2, response.status(500).json(error)];
                }
                return [2];
            });
        });
    };
    UserController.prototype.parseUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = request.body.name;
                        console.log(name, "name parse");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.parserService.parseUser(name)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        return [2, response.status(500).json(error_1)];
                    case 4: return [2];
                }
            });
        });
    };
    var _a;
    __decorate([
        inversify_express_utils_1.httpPost('/google-auth'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "googleAuth", null);
    __decorate([
        inversify_express_utils_1.httpPost('/save-card'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "saveCard", null);
    __decorate([
        inversify_express_utils_1.httpGet('/get-cards'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getCards", null);
    __decorate([
        inversify_express_utils_1.httpPut('/update-deck'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "updateImage", null);
    __decorate([
        inversify_express_utils_1.httpGet('/get-deck-cards/:userEmail'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getDeckCards", null);
    __decorate([
        inversify_express_utils_1.httpGet('/test-parser'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "TestParser", null);
    __decorate([
        inversify_express_utils_1.httpPost('/parseUser'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "parseUser", null);
    UserController = __decorate([
        inversify_express_utils_1.controller('/api/users'),
        __param(0, inversify_1.inject(user_authentication_1.UserAuthenticationRepository)),
        __param(1, inversify_1.inject(card_1.CardRepository)),
        __param(2, inversify_1.inject(service_1.DeskRepository)),
        __param(3, inversify_1.inject(linkedinInfoParser_1.LinkedinInfoParserService)),
        __param(4, inversify_1.inject(service_1.ParserService)),
        __metadata("design:paramtypes", [user_authentication_1.UserAuthenticationRepository, typeof (_a = typeof card_1.CardRepository !== "undefined" && card_1.CardRepository) === "function" && _a || Object, service_1.DeskRepository,
            linkedinInfoParser_1.LinkedinInfoParserService,
            service_1.ParserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;


/***/ }),
/* 18 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var mongoose_1 = __webpack_require__(3);
var models_1 = __webpack_require__(4);
var db_1 = __webpack_require__(5);
var UserAuthenticationRepository = (function () {
    function UserAuthenticationRepository() {
        this.mongoose = new mongoose_1.Mongoose();
        this.userModel = this.mongoose.model(db_1.USER_COLLECTION, new mongoose_1.Schema(models_1.USER_SCHEMA));
        this.mongoose.connect(db_1.DB_URL);
    }
    UserAuthenticationRepository.prototype.socialNetworksLogin = function (email, name, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser;
            return __generator(this, function (_a) {
                newUser = new this.userModel({ email: email, name: name, accessToken: accessToken });
                return [2, new Promise(function (resolve, reject) {
                        newUser.save(function (error, data) {
                            if (error) {
                                reject(error);
                                console.log(error);
                            }
                            else {
                                resolve(data);
                                console.log("Save " + data._id + " user success");
                            }
                        });
                    })];
            });
        });
    };
    UserAuthenticationRepository = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], UserAuthenticationRepository);
    return UserAuthenticationRepository;
}());
exports.UserAuthenticationRepository = UserAuthenticationRepository;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_SCHEMA = {
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CARD_SCHEMA = {
    name: {
        type: String,
        required: true
    },
    currentPosition: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    education: {
        type: Number,
        required: true
    },
    skills: {
        type: [String],
    },
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DECK_SCHEMA = {
    userEmail: {
        type: String,
        required: true
    },
    cardIds: {
        type: [String],
    },
};


/***/ }),
/* 22 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var mongoose_1 = __webpack_require__(3);
var models_1 = __webpack_require__(4);
var db_1 = __webpack_require__(5);
var CardRepository = (function () {
    function CardRepository() {
        this.mongoose = new mongoose_1.Mongoose();
        this.cardModel = this.mongoose.model(db_1.CARD_COLLECTION, new mongoose_1.Schema(models_1.CARD_SCHEMA));
        this.mongoose.connect(db_1.DB_URL);
    }
    CardRepository.prototype.saveCard = function (name, currentPosition, education, skills, image) {
        return __awaiter(this, void 0, void 0, function () {
            var newCard;
            return __generator(this, function (_a) {
                newCard = new this.cardModel({
                    name: name,
                    currentPosition: currentPosition,
                    education: education,
                    skills: skills,
                    image: image
                });
                return [2, new Promise(function (resolve, reject) {
                        newCard.save(function (error, data) {
                            if (error) {
                                reject(error);
                                console.log(error);
                            }
                            else {
                                resolve(data);
                                console.log("Save " + data._id + " card success");
                            }
                        });
                    })];
            });
        });
    };
    CardRepository.prototype.getCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        _this.cardModel.find({}, function (error, data) {
                            if (error) {
                                reject(error);
                            }
                            else {
                                resolve(data);
                                console.log("Get all cards");
                            }
                        });
                    })];
            });
        });
    };
    CardRepository = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], CardRepository);
    return CardRepository;
}());
exports.CardRepository = CardRepository;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(29));


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),
/* 25 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var mongoose_1 = __webpack_require__(3);
var models_1 = __webpack_require__(4);
var db_1 = __webpack_require__(5);
var card_1 = __webpack_require__(1);
var DeskRepository = (function () {
    function DeskRepository(cardRepository) {
        this.cardRepository = cardRepository;
        this.mongoose = new mongoose_1.Mongoose();
        this.deckModel = this.mongoose.model(db_1.DECK_COLLECTION, new mongoose_1.Schema(models_1.DECK_SCHEMA));
        this.mongoose.connect(db_1.DB_URL);
    }
    DeskRepository.prototype.createDeck = function (userEmail, cardIds) {
        return __awaiter(this, void 0, void 0, function () {
            var newDeck;
            return __generator(this, function (_a) {
                newDeck = new this.deckModel({
                    userEmail: userEmail,
                    cardIds: cardIds,
                });
                return [2, new Promise(function (resolve, reject) {
                        newDeck.save(function (error, data) {
                            if (error) {
                                reject(error);
                                console.log(error);
                            }
                            else {
                                resolve(data);
                                console.log("Save " + data._id + " deck success");
                            }
                        });
                    })];
            });
        });
    };
    DeskRepository.prototype.updateCard = function (userEmail, cardIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        _this.deckModel.findOneAndUpdate({ userEmail: userEmail }, cardIds, function (error, data) { return __awaiter(_this, void 0, void 0, function () {
                            var newDate;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!error) return [3, 1];
                                        reject(error);
                                        return [3, 4];
                                    case 1:
                                        if (!!data) return [3, 3];
                                        return [4, this.createDeck(userEmail, cardIds)];
                                    case 2:
                                        newDate = _a.sent();
                                        resolve(newDate);
                                        return [3, 4];
                                    case 3:
                                        resolve(data);
                                        console.log("Update " + data.userEmail + " image success");
                                        _a.label = 4;
                                    case 4: return [2];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    DeskRepository.prototype.getDeckCards = function (userEmail) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        _this.deckModel.findOne({ userEmail: userEmail }, function (error, data) { return __awaiter(_this, void 0, void 0, function () {
                            var cards, deckCards;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!error) return [3, 1];
                                        reject(error);
                                        return [3, 3];
                                    case 1: return [4, this.cardRepository.getCards()];
                                    case 2:
                                        cards = _a.sent();
                                        deckCards = cards.filter(function (card) { return data.cardIds
                                            .findIndex(function (cardId) { return cardId === card._id; }) !== -1; });
                                        resolve(deckCards);
                                        console.log("Get deck cards");
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    var _a;
    DeskRepository = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(card_1.CardRepository)),
        __metadata("design:paramtypes", [typeof (_a = typeof card_1.CardRepository !== "undefined" && card_1.CardRepository) === "function" && _a || Object])
    ], DeskRepository);
    return DeskRepository;
}());
exports.DeskRepository = DeskRepository;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ignoreSkillsJson = {
    'HTML': 'XML',
    'CSS': [
        'Sass',
        'Less'
    ],
    'JavaScript': [
        'TypeScript'
    ],
    'React': [
        'Angular',
        'AngularJS',
        'Vue.js'
    ],
    'D3.js': 6,
    'Webpack': [
        'Grunt',
        'Gulp'
    ],
    'SQL': [
        'NOSQL'
    ],
    'C#': [
        'Java'
    ],
    'ASP.NET': 4,
    'Java': [
        '.Net',
        'C#'
    ],
    'Android': 1,
    '.NET': 'Java',
    'arduino': 9,
    'Arduino': [
        'C'
    ],
    'C++': '',
    'C': 'Rust',
    'Rust': 'C'
};
var superSkillsArray = function (coreSkills) {
    if (coreSkills.indexOf("Java") !== -1) {
        return function (education) {
            return function (connection) {
                if (education <= 2) {
                    return "easyJava";
                }
                if (connection <= 50) {
                    return "mediumJava";
                }
                return "hardJava";
            };
        };
    }
    if (coreSkills.indexOf(".Net") !== -1 || coreSkills.indexOf("C#") !== -1) {
        return function (education) {
            return function (connection) {
                if (education <= 2) {
                    return "easy.Net";
                }
                if (connection <= 50) {
                    return "medium.Net";
                }
                return "hard.Net";
            };
        };
    }
    return function (education) {
        return function (connections) {
            return "Base";
        };
    };
};
var skillsValues = {
    'HTML': 1,
    'CSS': 2,
    'JavaScript': 7,
    'React': 6,
    'D3.js': 6,
    'Webpack': 3,
    'SQL': 4,
    'C#': 1,
    'ASP.NET': 4,
    'Java': 0,
    'Android': 1,
    '.NET': 4,
    'arduino': 9,
    'Arduino': 10,
    'C++': 10,
    'C': 10
};
var inversify_1 = __webpack_require__(0);
var LinkedinInfoParserService = (function () {
    function LinkedinInfoParserService() {
    }
    LinkedinInfoParserService.prototype.parseProfileData = function (data) {
        var skills = data.skills;
        var createAttack = function (skills) {
            return skills
                .map(function (skill) { return skillsValues[skill] ? { skill: skill, value: skillsValues[skill], } : { skill: skill, value: 2 }; })
                .reduce(function (resultObj, current) {
                resultObj[current.skill] = current.value;
                return resultObj;
            }, {});
        };
        var ignoreSkills = function (skills) {
            return skills
                .map(function (skill) { return ignoreSkillsJson[skill] ? ignoreSkillsJson[skill] : []; })
                .reduce(function (result, current) { return result.concat(current); }, []);
        };
        var getSuperSkill = function (profile) {
            var education = profile.education || 0;
            var connections = profile.connections || 0;
            var skills = profile.skills;
            var coreSkills = skills.slice(0, 3);
            return superSkillsArray(coreSkills)(education)(connections);
        };
        var getCoef = function (coreSkills) {
            var superSkill = ['.Net', 'JavaScript', 'TypeScript', 'C#'];
            return coreSkills.map(function (skill) { return superSkill.indexOf(skill) !== -1 ? 1.5 : 1; }).reduce(function (acc, cur) { return acc * cur; }, 1);
        };
        return {
            name: data.name,
            image: data.image,
            hp: (data.education + data.skills.length) * getCoef(skills.slice(0, 3)),
            superSkill: getSuperSkill(data),
            createAttack: createAttack(data.skills),
            ignore: ignoreSkills(skills)
        };
    };
    LinkedinInfoParserService = __decorate([
        inversify_1.injectable()
    ], LinkedinInfoParserService);
    return LinkedinInfoParserService;
}());
exports.LinkedinInfoParserService = LinkedinInfoParserService;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));


/***/ }),
/* 28 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var SocketService = (function () {
    function SocketService() {
        this.clients = [];
        if (SocketService_1.instance) {
            throw new Error('You try to destroy singleton');
        }
    }
    SocketService_1 = SocketService;
    SocketService.getInstance = function () {
        if (!SocketService_1.instance) {
            SocketService_1.instance = new SocketService_1();
        }
        return SocketService_1.instance;
    };
    SocketService.prototype.setSocket = function (socketIO) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                socketIO.on('connection', function (client) {
                    _this.clients.push(client);
                    if (_this.clients.length === 2) {
                        client.emit('onReady');
                    }
                    client.on('disconnect', function () { return _this.onDisconnect(client); });
                    client.on('onStep', function (data) { return _this.notifyOtherUser(client, data); });
                });
                return [2];
            });
        });
    };
    SocketService.prototype.notifyOtherUser = function (client, data) {
        var otherClient = this.clients.find(function (c) { return c.id !== client.id; });
        var newDate = this.swapStepData(data);
        otherClient.emit('onStepChange', newDate);
    };
    SocketService.prototype.onDisconnect = function (client) {
        this.clients.splice(this.clients.indexOf(client), 1);
    };
    SocketService.prototype.swapStepData = function (data) {
        var newData = [];
        data.forEach(function (gameStepData) {
            if (gameStepData.id === 1) {
                var newGameStepData = { id: 4, cards: gameStepData.cards };
                newData.push(newGameStepData);
            }
            if (gameStepData.id === 4) {
                var newGameStepData = { id: 1, cards: gameStepData.cards };
                newData.push(newGameStepData);
            }
            if (gameStepData.id === 2) {
                var newGameStepData = { id: 3, cards: gameStepData.cards };
                newData.push(newGameStepData);
            }
            if (gameStepData.id === 3) {
                var newGameStepData = { id: 2, cards: gameStepData.cards };
                newData.push(newGameStepData);
            }
        });
        return newData;
    };
    var SocketService_1;
    SocketService = SocketService_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(30));


/***/ }),
/* 30 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var child_process_1 = __webpack_require__(31);
var fs = __importStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs-extra\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var linkedinInfoParser_1 = __webpack_require__(9);
var ParserService = (function () {
    function ParserService(linkedinInfoParserService) {
        this.linkedinInfoParserService = linkedinInfoParserService;
    }
    ParserService.prototype.parseUser = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var opt = {
                stdio: 'inherit', shell: true,
                cwd: '../linkedInParser',
            };
            var args = ["run test -- --params.login.email=wot220697@gmail.com --params.login.password=Kin11001 --params.search.username=\"" + name + "\""];
            var child = child_process_1.spawn('npm', args, opt);
            child.on('close', function () { return __awaiter(_this, void 0, void 0, function () {
                var path, isPathExist, json, parsedData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "../linkedInParser/" + name + ".json";
                            console.log(__dirname, "__dirname");
                            return [4, fs.pathExists(path)];
                        case 1:
                            isPathExist = _a.sent();
                            if (!isPathExist) {
                                reject();
                            }
                            return [4, fs.readJson(path)];
                        case 2:
                            json = _a.sent();
                            console.log('JSON DATA', json);
                            parsedData = this.linkedinInfoParserService.parseProfileData(json);
                            resolve(parsedData);
                            return [2];
                    }
                });
            }); });
        });
    };
    ParserService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(linkedinInfoParser_1.LinkedinInfoParserService)),
        __metadata("design:paramtypes", [linkedinInfoParser_1.LinkedinInfoParserService])
    ], ParserService);
    return ParserService;
}());
exports.ParserService = ParserService;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=community-app-server.app.bundle.js.map