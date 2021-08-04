/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
/** *** */
/** *** */ 	// The require function
/** *** */ 	function __webpack_require__(moduleId) {
/** *** */
/** *** */ 		// Check if module is in cache
/** *** */ 		if (installedModules[moduleId]) {
/** *** */ 			return installedModules[moduleId].exports;
/** *** */ 		}
/** *** */ 		// Create a new module (and put it into the cache)
/** *** */ 		const module = installedModules[moduleId] = {
/** *** */ 			i: moduleId,
/** *** */ 			l: false,
/** *** */ 			exports: {},
/** *** */ 		};
/** *** */
/** *** */ 		// Execute the module function
/** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/** *** */
/** *** */ 		// Flag the module as loaded
/** *** */ 		module.l = true;
/** *** */
/** *** */ 		// Return the exports of the module
/** *** */ 		return module.exports;
/** *** */ 	}
/** *** */
/** *** */
/** *** */ 	// expose the modules object (__webpack_modules__)
/** *** */ 	__webpack_require__.m = modules;
/** *** */
/** *** */ 	// expose the module cache
/** *** */ 	__webpack_require__.c = installedModules;
/** *** */
/** *** */ 	// define getter function for harmony exports
/** *** */ 	__webpack_require__.d = function (exports, name, getter) {
/** *** */ 		if (!__webpack_require__.o(exports, name)) {
/** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/** *** */ 		}
/** *** */ 	};
/** *** */
/** *** */ 	// define __esModule on exports
/** *** */ 	__webpack_require__.r = function (exports) {
/** *** */ 		if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
/** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
/** *** */ 		}
/** *** */ 		Object.defineProperty(exports, "__esModule", { value: true });
/** *** */ 	};
/** *** */
/** *** */ 	// create a fake namespace object
/** *** */ 	// mode & 1: value is a module id, require it
/** *** */ 	// mode & 2: merge all properties of value into the ns
/** *** */ 	// mode & 4: return value when already ns object
/** *** */ 	// mode & 8|1: behave like require
/** *** */ 	__webpack_require__.t = function (value, mode) {
/** *** */ 		if (mode & 1) value = __webpack_require__(value);
/** *** */ 		if (mode & 8) return value;
/** *** */ 		if ((mode & 4) && typeof value === "object" && value && value.__esModule) return value;
/** *** */ 		const ns = Object.create(null);
/** *** */ 		__webpack_require__.r(ns);
/** *** */ 		Object.defineProperty(ns, "default", { enumerable: true, value });
/** *** */ 		if (mode & 2 && typeof value !== "string") for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
/** *** */ 		return ns;
/** *** */ 	};
/** *** */
/** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
/** *** */ 	__webpack_require__.n = function (module) {
/** *** */ 		const getter = module && module.__esModule
/** *** */ 			? function getDefault() { return module.default; }
/** *** */ 			: function getModuleExports() { return module; };
/** *** */ 		__webpack_require__.d(getter, "a", getter);
/** *** */ 		return getter;
/** *** */ 	};
/** *** */
/** *** */ 	// Object.prototype.hasOwnProperty.call
/** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/** *** */
/** *** */ 	// __webpack_public_path__
/** *** */ 	__webpack_require__.p = "";
/** *** */
/** *** */
/** *** */ 	// Load entry module and return exports
/** *** */ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/** *** */ }({

/***/ "./src/components/factory/factory.js":
/*! *******************************************!*\
  !*** ./src/components/factory/factory.js ***!
  \****************************************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => Factory);
/* harmony import */ const _rendercards_rendercards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendercards/rendercards */ "./src/components/rendercards/rendercards.js");
/* harmony import */ const _playgame_playGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../playgame/playGame */ "./src/components/playgame/playGame.js");
/* harmony import */ const _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu */ "./src/components/menu/menu.js");
/* harmony import */ const _langMenu_langMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../langMenu/langMenu */ "./src/components/langMenu/langMenu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // import renderTrain from "../renderTrain/renderTrain"

var Factory = /* #__PURE__ */(function () {
  function Factory() {
    _classCallCheck(this, Factory);

    this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_2__.default(); // this.renderTrain = new renderTrain()
  }

  _createClass(Factory, [{
    key: "init",
    value: function init() {
      this.menu.init(); // this.renderTrain.init()
    },
  }]);

  return Factory;
}());
/***/ }),

/***/ "./src/components/finishGame/finishGame.js":
/*! *************************************************!*\
  !*** ./src/components/finishGame/finishGame.js ***!
  \************************************************ */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => finishGame);
/* harmony import */ const _menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu */ "./src/components/menu/menu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var finishGame = /* #__PURE__ */(function () {
  function finishGame() {
    _classCallCheck(this, finishGame);

    this.container = document.querySelector(".container");
    this.newGameButton = document.createElement("div");
    this.newGameButton.classList.add("playButtonClassWin");
    this.newGameButton.innerHTML = "Новая гульня";
  }

  _createClass(finishGame, [{
    key: "removeAllChildNodes",
    value: function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    },
  }, {
    key: "failGame",
    value: function failGame(count) {
      this.removeAllChildNodes(this.container);
      this.lose = document.createElement("div");
      this.lose.classList.add("winMessage");
      this.container.append(this.lose);
      this.lose.innerHTML = "Нажаль, вы не выгралі, паспрабуйце згуляць зноў";
      this.errorAmount = document.createElement("div");
      this.errorAmount.classList.add("winMessage");
      this.errorAmount.innerHTML = "\u041A\u043E\u043B\u044C\u043A\u0430\u0441\u044C\u0446\u044C \u043F\u0430\u043C\u044B\u043B\u0430\u043A: ".concat(count);
      this.container.append(this.errorAmount);
      this.winImage = document.createElement("div");
      this.winImage.classList.add("winImage");
      this.container.append(this.winImage);
      this.resetGame();
    },
  }, {
    key: "winGame",
    value: function winGame() {
      this.removeAllChildNodes(this.container);
      this.win = document.createElement("div");
      this.win.classList.add("winMessage");
      this.container.append(this.win);
      this.win.innerHTML = "Віншую! Вы выгралі!";
      this.winImage = document.createElement("div");
      this.winImage.classList.add("winImage");
      this.container.append(this.winImage);
      this.resetGame();
    },
  }, {
    key: "resetGame",
    value: function resetGame() {
      const _this = this;

      this.container.append(this.newGameButton);
      this.newGameButton.addEventListener("click", () => {
        _this.container.remove();

        _this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_0__.default();

        _this.menu.init();
      });
    },
  }]);

  return finishGame;
}());
/***/ }),

/***/ "./src/components/langMenu/langMenu.js":
/*! *********************************************!*\
  !*** ./src/components/langMenu/langMenu.js ***!
  \******************************************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => langMenu);
/* harmony import */ const _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ const _rendercards_rendercards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendercards/rendercards */ "./src/components/rendercards/rendercards.js");
/* harmony import */ const _playgame_playGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playgame/playGame */ "./src/components/playgame/playGame.js");
/* harmony import */ const _renderTrain_renderTrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderTrain/renderTrain */ "./src/components/renderTrain/renderTrain.js");
/* harmony import */ const _menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu */ "./src/components/menu/menu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var langMenu = /* #__PURE__ */(function () {
  function langMenu() {
    _classCallCheck(this, langMenu);

    this.langMenuContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuContainer");
    this.main = document.querySelector(".main");
    this.main.append(this.langMenuContainer);
    this.BackButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "backButton");
    this.langMenuContainer.append(this.BackButton);
  }

  _createClass(langMenu, [{
    key: "renderLangMenu",
    value: function renderLangMenu() {
      this.title = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", "title");
      this.title.innerHTML = "Абярыце мову";
      this.langMenuContainer.append(this.title);
      this.linksContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "linksContainer");
      this.langMenuContainer.append(this.linksContainer);
      this.german = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "german");
      this.english = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "english");
      this.linksContainer.append(this.german);
      this.linksContainer.append(this.english);
      this.german.innerHTML = "Deutsch";
      this.english.innerHTML = "Englisch";
    },
  }, {
    key: "onStartGerman",
    value: function onStartGerman(mode) {
      const _this = this;

      this.german.addEventListener("click", () => {
        if (mode === "game") {
          _this.rendercards = new _rendercards_rendercards__WEBPACK_IMPORTED_MODULE_1__.default();
          _this.playGame = new _playgame_playGame__WEBPACK_IMPORTED_MODULE_2__.default();

          _this.rendercards.init(0);

          _this.playGame.init(0);
        } else {
          _this.renderTrain = new _renderTrain_renderTrain__WEBPACK_IMPORTED_MODULE_3__.default();

          _this.renderTrain.init(0);
        }

        _this.langMenuContainer.remove();
      });
    },
  }, {
    key: "OnStartEnglish",
    value: function OnStartEnglish(mode) {
      const _this2 = this;

      this.english.addEventListener("click", () => {
        if (mode === "game") {
          _this2.rendercards = new _rendercards_rendercards__WEBPACK_IMPORTED_MODULE_1__.default();
          _this2.playGame = new _playgame_playGame__WEBPACK_IMPORTED_MODULE_2__.default();

          _this2.rendercards.init(1);

          _this2.playGame.init(1);
        } else {
          _this2.renderTrain = new _renderTrain_renderTrain__WEBPACK_IMPORTED_MODULE_3__.default();

          _this2.renderTrain.init(1);
        }

        _this2.langMenuContainer.remove();
      });
    },
  }, {
    key: "onClickBackButton",
    value: function onClickBackButton() {
      const _this3 = this;

      this.BackButton.addEventListener("click", () => {
        _this3.langMenuContainer.remove();

        _this3.BackButton.remove();

        _this3.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_4__.default();

        _this3.menu.init();
      });
    },
  }, {
    key: "init",
    value: function init(mode) {
      this.renderLangMenu();
      this.onStartGerman(mode);
      this.OnStartEnglish(mode);
      this.onClickBackButton();
    },
  }]);

  return langMenu;
}());
/***/ }),

/***/ "./src/components/menu/menu.js":
/*! *************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \************************************ */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => Menu);
/* harmony import */ const _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ const _rendercards_rendercards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendercards/rendercards */ "./src/components/rendercards/rendercards.js");
/* harmony import */ const _playgame_playGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playgame/playGame */ "./src/components/playgame/playGame.js");
/* harmony import */ const _renderTrain_renderTrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderTrain/renderTrain */ "./src/components/renderTrain/renderTrain.js");
/* harmony import */ const _langMenu_langMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../langMenu/langMenu */ "./src/components/langMenu/langMenu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /* #__PURE__ */(function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.game = "game";
    this.train = "train";
    this.menuContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "menuContainer");
    this.main = document.querySelector(".main");
    this.main.append(this.menuContainer);
  }

  _createClass(Menu, [{
    key: "renderMenu",
    value: function renderMenu() {
      this.title = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("h3", "title");
      this.title.innerHTML = "Прыкладаньне для вывучэньня замежных моў";
      this.menuContainer.append(this.title);
      this.linksContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "linksContainer");
      this.menuContainer.append(this.linksContainer);
      this.trainLink = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "trainLink");
      this.gameLink = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "gameLink");
      this.linksContainer.append(this.trainLink);
      this.linksContainer.append(this.gameLink);
      this.trainLink.innerHTML = "Трэнавальны рэжым";
      this.gameLink.innerHTML = "Рэжым гульні";
    },
  }, {
    key: "startGameMode",
    value: function startGameMode() {
      const _this = this;

      this.gameLink.addEventListener("click", () => {
        _this.menuContainer.remove(); // this.rendercards = new RenderCards();
        // this.playGame = new playGame();
        // this.rendercards.init();
        // this.playGame.init();

        _this.langMenu = new _langMenu_langMenu__WEBPACK_IMPORTED_MODULE_4__.default();

        _this.langMenu.init(_this.game);
      });
    },
  }, {
    key: "startTrainMode",
    value: function startTrainMode() {
      const _this2 = this;

      this.trainLink.addEventListener("click", () => {
        _this2.menuContainer.remove(); // this.renderTrain = new renderTrain();
        // this.renderTrain.init();

        _this2.langMenu = new _langMenu_langMenu__WEBPACK_IMPORTED_MODULE_4__.default();

        _this2.langMenu.init(_this2.train);
      });
    },
  }, {
    key: "init",
    value: function init() {
      this.renderMenu();
      this.startGameMode();
      this.startTrainMode();
    },
  }]);

  return Menu;
}());
/***/ }),

/***/ "./src/components/playgame/playGame.js":
/*! *********************************************!*\
  !*** ./src/components/playgame/playGame.js ***!
  \******************************************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => playGame);
/* harmony import */ const _data_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/cards */ "./src/data/cards.js");
/* harmony import */ const _finishGame_finishGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finishGame/finishGame */ "./src/components/finishGame/finishGame.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var playGame = /* #__PURE__ */(function () {
  function playGame() {
    _classCallCheck(this, playGame);

    this.playButton = document.createElement("div");
    this.playButton.classList.add("playButtonClass");
    this.container = document.querySelector(".container");
    this.container.append(this.playButton);
    this.playButton.innerHTML = "Spielen";
    this.picsContainer = document.querySelectorAll("cardImage");
    this.audio = new Audio();
    this.audioArr = [];
    this.correctAudio = new Audio();
    this.wrongAudio = new Audio();
    this.playButtonRepeat = document.createElement("div");
    this.playButtonRepeat.classList.add("playButtonRepeatClass");
    this.errorCounter = 0;
    this.errorDiv = document.createElement("div");
    this.errorDiv.classList.add("errorCounter");
    this.errorDiv.innerHTML = "Fehler : ".concat(this.errorCounter);
    this.finishGame = new _finishGame_finishGame__WEBPACK_IMPORTED_MODULE_1__.default();
    this.span = document.createElement("div");
    this.span.classList.add("span");
    this.playButtonRepeat.append(this.span);
  }

  _createClass(playGame, [{
    key: "onPlayGame",
    value: function onPlayGame(lang) {
      const _this = this;

      this.picsContainer = document.querySelectorAll(".cardImage");

      const _loop = function _loop(i) {
        _this.playButton.addEventListener("click", () => {
          _this.audioArr.push(_data_cards__WEBPACK_IMPORTED_MODULE_0__.default[lang][i].audio);

          _this.audioArr.sort(() => Math.random() - 0.5);

          _this.audio.src = _this.audioArr[0];

          _this.audio.play();

          _this.playButton.remove();

          _this.container.append(_this.errorDiv);

          _this.container.append(_this.playButtonRepeat);
        });

        _this.playButtonRepeat.addEventListener("click", () => {
          _this.audio.play();
        });
      };

      for (let i = 0; i < _data_cards__WEBPACK_IMPORTED_MODULE_0__.default[lang].length; i++) {
        _loop(i);
      }
    },
  }, {
    key: "chooseCard",
    value: function chooseCard(lang) {
      const _this2 = this;

      this.picsContainer.forEach((item) => {
        item.addEventListener("click", (event) => {
          _this2.currentTarget = event.target;

          if (_this2.audioArr[0].includes(item.alt)) {
            _this2.correctAudio.src = "src/data/audio/success.mp3";

            _this2.correctAudio.play();

            _this2.audioArr.shift();

            item.classList.add("usedCard");
            _this2.audio.src = _this2.audioArr[0];
            setTimeout(() => {
              _this2.audio.play();
            }, 1000);
          } else {
            _this2.wrongAudio.src = "src/data/audio/fail.mp3";

            _this2.wrongAudio.play();

            _this2.errorDiv.innerHTML = "Errors:".concat(_this2.errorCounter += 1);
          }

          _this2.onEndGame();
        });
      });
    },
  }, {
    key: "onEndGame",
    value: function onEndGame() {
      if (!this.audioArr.length) {
        this.errorCounter ? this.finishGame.failGame(this.errorCounter) : this.finishGame.winGame();
      }
    },
  }, {
    key: "init",
    value: function init(lang) {
      this.onPlayGame(lang);
      this.chooseCard();
    },
  }]);

  return playGame;
}());
/***/ }),

/***/ "./src/components/renderTrain/renderTrain.js":
/*! ***************************************************!*\
  !*** ./src/components/renderTrain/renderTrain.js ***!
  \************************************************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => renderTrain);
/* harmony import */ const _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ const _data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/cards */ "./src/data/cards.js");
/* harmony import */ const _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu */ "./src/components/menu/menu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var renderTrain = /* #__PURE__ */(function () {
  function renderTrain() {
    _classCallCheck(this, renderTrain);

    this.trainContainer = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "trainContainer");
    this.main = document.querySelector(".main");
    this.BackButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "backButton");
    this.main.append(this.BackButton);
    this.main.append(this.trainContainer);
  }

  _createClass(renderTrain, [{
    key: "onRenderCards",
    value: function onRenderCards(lang) {
      for (let i = 0; i < _data_cards__WEBPACK_IMPORTED_MODULE_1__.default[lang].length; i++) {
        this.flipCard = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "flip-card");
        this.flipCardInner = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "flip-card-inner");
        this.flipCardFront = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "flip-card-front");
        this.imgAvatar = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("img", "imgAvatar");
        this.imgAvatar.src = _data_cards__WEBPACK_IMPORTED_MODULE_1__.default[lang][i].img;
        this.imgAvatarFront = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("img", "imgAvatar");
        this.imgAvatarFront.src = _data_cards__WEBPACK_IMPORTED_MODULE_1__.default[lang][i].img;
        this.flipCardBack = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "flip-card-back");
        this.belText = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "belText");
        this.belText.innerHTML = _data_cards__WEBPACK_IMPORTED_MODULE_1__.default[lang][i].translation;
        this.gemText = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__.default)("div", "gemText");
        this.gemText.innerHTML = _data_cards__WEBPACK_IMPORTED_MODULE_1__.default[lang][i].word;
        this.flipCardFront.append(this.imgAvatarFront);
        this.flipCardFront.append(this.gemText);
        this.flipCardBack.append(this.imgAvatar);
        this.flipCardBack.append(this.belText);
        this.flipCardInner.append(this.flipCardFront);
        this.flipCardInner.append(this.flipCardBack);
        this.flipCard.append(this.flipCardInner);
        this.trainContainer.append(this.flipCard);
      }
    },
  }, {
    key: "onClickBackButton",
    value: function onClickBackButton() {
      const _this = this;

      this.BackButton.addEventListener("click", () => {
        _this.trainContainer.remove();

        _this.BackButton.remove();

        _this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_2__.default();

        _this.menu.init();
      });
    },
  }, {
    key: "init",
    value: function init(lang) {
      this.onRenderCards(lang);
      this.onClickBackButton();
    },
  }]);

  return renderTrain;
}());
/***/ }),

/***/ "./src/components/rendercards/rendercards.js":
/*! ***************************************************!*\
  !*** ./src/components/rendercards/rendercards.js ***!
  \************************************************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", () => RenderCards);
/* harmony import */ const _data_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/cards */ "./src/data/cards.js");
/* harmony import */ const _menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu */ "./src/components/menu/menu.js");
/* harmony import */ const _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderCards = /* #__PURE__ */(function () {
  function RenderCards() {
    _classCallCheck(this, RenderCards);

    this.cardsContainer = document.createElement("div");
    this.cardsContainer.classList.add("containercards");
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.main = document.querySelector(".main");
    this.BackButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.default)("div", "backButton");
    this.main.append(this.BackButton);
    this.main.append(this.container);
    this.container.append(this.cardsContainer);
  }

  _createClass(RenderCards, [{
    key: "onClickBackButton",
    value: function onClickBackButton() {
      const _this = this;

      this.BackButton.addEventListener("click", () => {
        _this.container.remove();

        _this.BackButton.remove();

        _this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_1__.default();

        _this.menu.init();
      });
    },
  }, {
    key: "onRenderCards",
    value: function onRenderCards(lang) {
      for (let i = 0; i < _data_cards__WEBPACK_IMPORTED_MODULE_0__.default[lang].length; i++) {
        this.image = document.createElement("img");
        this.image.classList.add("cardImage");
        this.image.src = _data_cards__WEBPACK_IMPORTED_MODULE_0__.default[lang][i].img;
        this.cardSection = document.createElement("div");
        this.cardSection.classList.add("sectionClass");
        this.cardSection.append(this.image);
        this.cardsContainer.append(this.cardSection);
        this.image.alt = _data_cards__WEBPACK_IMPORTED_MODULE_0__.default[lang][i].audio;
      }
    },
  }, {
    key: "init",
    value: function init(lang) {
      this.onRenderCards(lang);
      this.onClickBackButton();
    },
  }]);

  return RenderCards;
}());
/***/ }),

/***/ "./src/data/cards.js":
/*! ***************************!*\
  !*** ./src/data/cards.js ***!
  \************************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
const cards = [[{
  word: "schwimmen",
  translation: "плаваць",
  img: "src/data/img/swim.jpeg",
  audio: "src/data/audio/schwimmen.ogg.mp3",
  id: 0,
}, {
  word: "beißen",
  translation: "кусаць",
  img: "src/data/img/beissen.jpeg",
  audio: "src/data/audio/beißen.ogg.mp3",
  id: 1,
}, {
  word: "weinen",
  translation: "плакаць",
  img: "src/data/img/cry.jpeg",
  audio: "src/data/audio/weinen.ogg.mp3",
  id: 2,
}, {
  word: "fernsehen",
  translation: "глядзець тэлевізар",
  img: "src/data/img/fernsehen.jpeg",
  audio: "src/data/audio/Fernsehen.ogg.mp3",
  id: 3,
}, {
  word: "joggen",
  translation: "бегаць",
  img: "src/data/img/joggen.jpeg",
  audio: "src/data/audio/joggen.ogg.mp3",
  id: 4,
}, {
  word: "lernen",
  translation: "вучыцца",
  img: "src/data/img/lernen.jpeg",
  audio: "src/data/audio/lernen2.ogg.mp3",
  id: 5,
}, {
  word: "lesen",
  translation: "чытаць",
  img: "src/data/img/lesen.jpeg",
  audio: "src/data/audio/lesen.ogg.mp3",
  id: 6,
}, {
  word: "springen",
  translation: "прыгаць",
  img: "src/data/img/springen.jpeg",
  audio: "src/data/audio/springen.ogg.mp3",
  id: 7,
}], [{
  word: "cry",
  translation: "плакаць",
  img: "src/data/img/cry.jpg",
  audio: "src/data/audio/cry.mp3",
  id: 8,
}, {
  word: "dance",
  translation: "танчыць",
  img: "src/data/img/dance.jpg",
  audio: "src/data/audio/dance.mp3",
  id: 9,
}, {
  word: "dive",
  translation: "ныраць",
  img: "src/data/img/dive.jpg",
  audio: "src/data/audio/dive.mp3",
  id: 10,
}, {
  word: "draw",
  translation: "маляваць",
  img: "src/data/img/draw.jpg",
  audio: "src/data/audio/draw.mp3",
  id: 11,
}, {
  word: "fish",
  translation: "рыбаліць",
  img: "src/data/img/fish.jpg",
  audio: "src/data/fish.mp3",
  id: 12,
}, {
  word: "fly",
  translation: "лётаць",
  img: "src/data/img/fly.jpg",
  audio: "src/data/fly.mp3",
  id: 13,
}, {
  word: "hug",
  translation: "абдымаць",
  img: "src/data/img/hug.jpg",
  audio: "src/data/hug.mp3",
  id: 14,
}, {
  word: "jump",
  translation: "скакаць",
  img: "src/data/img/jump.jpg",
  audio: "src/data/jump.mp3",
  id: 15,
}]];
/* harmony default export */ __webpack_exports__.default = (cards);
/***/ }),

/***/ "./src/helpers.js":
/*! ************************!*\
  !*** ./src/helpers.js ***!
  \*********************** */
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
const createElement = function createElement(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
};

/* harmony default export */ __webpack_exports__.default = (createElement);
/***/ }),

/***/ "./src/index.js":
/*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const _components_factory_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/factory/factory */ "./src/components/factory/factory.js");

const factory = new _components_factory_factory__WEBPACK_IMPORTED_MODULE_0__.default();
factory.init();
console.log("hijna");
/***/ }),

/** *** */ }));
// # sourceMappingURL=script.js.map
