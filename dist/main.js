/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --text-primary: "Jaro", sans-serif;
  --text-secondary: "Lilita One", sans-serif;
  --text-tertiary: "Roboto Condensed", sans-serif;
}

body {
  width: 100%;
  height: 100vh;

  margin: 0;
  background-color: #212529;

  display: grid;
  grid-template-rows: 1fr 9fr;
  grid-template-columns: 1fr 4fr;

  font-family: var(--text-primary);
}

nav {
  grid-row: 1/2;
  grid-column: 1/3;
}

#todos {
  grid-row: 2/3;
  grid-column: 2/3;

  width: 100%;
  background-color: #dee2e6;
}

#sidebar {
  grid-row: 2/3;
  grid-column: 1/2;

  width: 100%;
  background-color: #e9ecef;
}

button {
  border: none;
  background-color: #ced4da;
}

/* index page */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #adb5bd;
  height: 10vh;
}

nav p:nth-child(1) {
  margin-left: 2%;
  font-size: 2.7em;
}

nav p:nth-child(2) {
  margin-right: 2%;
  font-size: 1.3em;
}

#sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.daily-todo,
.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 15%;

  margin-left: 8%;
  padding: 2%;
}

.daily-todo p,
.projects p {
  font-size: 2.2em;
  color: #212529;

  margin: 5%;
}

.daily-todo button,
.projects button {
  width: 90%;
  height: 35%;

  border-radius: 8px;
  background-color: #f8f9fa;

  font-size: 0.9em;
  font-family: var(--text-tertiary);
  font-weight: bold;
  color: #495057;
  cursor: pointer;
}

/* dialog styling */
dialog {
  border: none;
  border-radius: 8px;

  height: 40%;

  background-color: lightgrey;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}

.todo-container,
.todo-form,
.project-todo-container,
.project-todo-form {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3%;

  background-color: lightgrey;
}

input,
textarea,
select {
  outline: none;

  width: 100%;
  height: 12%;

  text-align: center;

  border-radius: 8px;
  border: none;

  margin: 3%;
}

.btn-make-todo,
.btn-close-todo,
.btn-make-project-todo,
.btn-close-project-todo {
  width: 90%;
  height: 10%;

  border-radius: 8px;
}

.project-dialog {
  height: 15%;
}

.project-container,
.project-form {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3%;
}

.project-form input {
  height: 30%;
}

.project-container button {
  width: 90%;
  height: 20%;

  border-radius: 8px;
}

/* styling todos */
.todo-card {
  padding: 12px;
  margin: 2%;

  width: 95%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  background-color: #f8f9fa;
}

.todo-card p {
  margin: 0;
}

.todo-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 3%;
  margin-right: 2%;
}

.todo-priority {
  padding: 6px;
  border-radius: 5px;
  width: 100%;
}

.btn-delete-todo {
  width: 100%;
  padding: 4px;
  cursor: pointer;
}

.btn-expand-todo {
  width: 100%;
  padding: 6px;
  cursor: pointer;
}

.todo-priority {
  border-radius: 50%;
  width: auto;
}

.heading {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 12px;
}

.todo-title {
  font-size: 1.5em;
  font-weight: 600;
  font-family: var(--text-secondary);

  color: #495057;
  padding: 8px;
}

.todo-dueDate {
  font-size: 0.9em;
  font-family: var(--text-secondary);
  font-weight: 100;

  padding: 8px;
  color: #adb5bd;
}

/* styling info modal */
.info-dialog {
  width: 30%;
  height: 30%;

  background-color: #edf2f4;
  border: none;
}

.info-dialog p {
  margin: 0;

  font-family: var(--text-tertiary);
}

.info-container {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
}

.info-heading {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 3%;
}

.info-heading p {
  font-size: 2.4em;
  font-weight: 800;
  padding: 4px;
  color: #343a40;
}

.info-heading button {
  outline: none;
  padding: 4px;
}

.info-container p:nth-child(2) {
  font-size: 1.4em;
  font-weight: 400;
  color: #495057;
  padding: 4px;
}

.info-container p:nth-child(3) {
  font-size: 1.2em;
  font-weight: 300;
  color: #6c757d;
  padding: 4px;
}

.btn-info-close {
  padding: 4px;
  margin-left: 4px;
  margin-top: 4px;

  width: 20%;
  height: 15%;
  border-radius: 8px;
  font-family: var(--text-tertiary);
  font-size: 0.8em;
  font-weight: 400;
  color: #343a40;
}

/* project names styling */
.project-names {
  width: 100%;
  margin-left: 8%;

  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
}

.project-names-container {
  width: 16.5vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  padding: 4%;
  margin: 3%;

  background-color: #f8f9fa;
  border-radius: 8px;
}

.project-title {
  background-color: #f8f9fa;
  cursor: pointer;

  font-family: var(--text-secondary);
  font-size: 1.3em;
  color: #495057;
}

.btn-delete-project {
  cursor: pointer;
}

.todo-icon {
  width: 100px;
  height: 100px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,0CAA0C;EAC1C,+CAA+C;AACjD;;AAEA;EACE,WAAW;EACX,aAAa;;EAEb,SAAS;EACT,yBAAyB;;EAEzB,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;;EAE9B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,eAAe;AACf;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;;EAE9B,cAAc;EACd,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;;EAEvB,WAAW;EACX,WAAW;;EAEX,eAAe;EACf,WAAW;AACb;;AAEA;;EAEE,gBAAgB;EAChB,cAAc;;EAEd,UAAU;AACZ;;AAEA;;EAEE,UAAU;EACV,WAAW;;EAEX,kBAAkB;EAClB,yBAAyB;;EAEzB,gBAAgB;EAChB,iCAAiC;EACjC,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,YAAY;EACZ,kBAAkB;;EAElB,WAAW;;EAEX,2BAA2B;AAC7B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;;EAIE,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB,OAAO;;EAEP,2BAA2B;AAC7B;;AAEA;;;EAGE,aAAa;;EAEb,WAAW;EACX,WAAW;;EAEX,kBAAkB;;EAElB,kBAAkB;EAClB,YAAY;;EAEZ,UAAU;AACZ;;AAEA;;;;EAIE,UAAU;EACV,WAAW;;EAEX,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB,OAAO;AACT;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;;EAEX,kBAAkB;AACpB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,UAAU;;EAEV,UAAU;;EAEV,aAAa;EACb,mBAAmB;EACnB,8BAA8B;;EAE9B,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;;EAEvB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;;EAE3B,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kCAAkC;;EAElC,cAAc;EACd,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kCAAkC;EAClC,gBAAgB;;EAEhB,YAAY;EACZ,cAAc;AAChB;;AAEA,uBAAuB;AACvB;EACE,UAAU;EACV,WAAW;;EAEX,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,SAAS;;EAET,iCAAiC;AACnC;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;;EAEnB,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;;EAEf,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;;AAEA,0BAA0B;AAC1B;EACE,WAAW;EACX,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,OAAO;EACP,WAAW;EACX,UAAU;;EAEV,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,eAAe;;EAEf,kCAAkC;EAClC,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":[":root {\n  --text-primary: \"Jaro\", sans-serif;\n  --text-secondary: \"Lilita One\", sans-serif;\n  --text-tertiary: \"Roboto Condensed\", sans-serif;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n\n  margin: 0;\n  background-color: #212529;\n\n  display: grid;\n  grid-template-rows: 1fr 9fr;\n  grid-template-columns: 1fr 4fr;\n\n  font-family: var(--text-primary);\n}\n\nnav {\n  grid-row: 1/2;\n  grid-column: 1/3;\n}\n\n#todos {\n  grid-row: 2/3;\n  grid-column: 2/3;\n\n  width: 100%;\n  background-color: #dee2e6;\n}\n\n#sidebar {\n  grid-row: 2/3;\n  grid-column: 1/2;\n\n  width: 100%;\n  background-color: #e9ecef;\n}\n\nbutton {\n  border: none;\n  background-color: #ced4da;\n}\n\n/* index page */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  color: #adb5bd;\n  height: 10vh;\n}\n\nnav p:nth-child(1) {\n  margin-left: 2%;\n  font-size: 2.7em;\n}\n\nnav p:nth-child(2) {\n  margin-right: 2%;\n  font-size: 1.3em;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.daily-todo,\n.projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  width: 100%;\n  height: 15%;\n\n  margin-left: 8%;\n  padding: 2%;\n}\n\n.daily-todo p,\n.projects p {\n  font-size: 2.2em;\n  color: #212529;\n\n  margin: 5%;\n}\n\n.daily-todo button,\n.projects button {\n  width: 90%;\n  height: 35%;\n\n  border-radius: 8px;\n  background-color: #f8f9fa;\n\n  font-size: 0.9em;\n  font-family: var(--text-tertiary);\n  font-weight: bold;\n  color: #495057;\n  cursor: pointer;\n}\n\n/* dialog styling */\ndialog {\n  border: none;\n  border-radius: 8px;\n\n  height: 40%;\n\n  background-color: lightgrey;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.todo-container,\n.todo-form,\n.project-todo-container,\n.project-todo-form {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 3%;\n\n  background-color: lightgrey;\n}\n\ninput,\ntextarea,\nselect {\n  outline: none;\n\n  width: 100%;\n  height: 12%;\n\n  text-align: center;\n\n  border-radius: 8px;\n  border: none;\n\n  margin: 3%;\n}\n\n.btn-make-todo,\n.btn-close-todo,\n.btn-make-project-todo,\n.btn-close-project-todo {\n  width: 90%;\n  height: 10%;\n\n  border-radius: 8px;\n}\n\n.project-dialog {\n  height: 15%;\n}\n\n.project-container,\n.project-form {\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 3%;\n}\n\n.project-form input {\n  height: 30%;\n}\n\n.project-container button {\n  width: 90%;\n  height: 20%;\n\n  border-radius: 8px;\n}\n\n/* styling todos */\n.todo-card {\n  padding: 12px;\n  margin: 2%;\n\n  width: 95%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  border-radius: 8px;\n  background-color: #f8f9fa;\n}\n\n.todo-card p {\n  margin: 0;\n}\n\n.todo-actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  width: 3%;\n  margin-right: 2%;\n}\n\n.todo-priority {\n  padding: 6px;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.btn-delete-todo {\n  width: 100%;\n  padding: 4px;\n  cursor: pointer;\n}\n\n.btn-expand-todo {\n  width: 100%;\n  padding: 6px;\n  cursor: pointer;\n}\n\n.todo-priority {\n  border-radius: 50%;\n  width: auto;\n}\n\n.heading {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  gap: 12px;\n}\n\n.todo-title {\n  font-size: 1.5em;\n  font-weight: 600;\n  font-family: var(--text-secondary);\n\n  color: #495057;\n  padding: 8px;\n}\n\n.todo-dueDate {\n  font-size: 0.9em;\n  font-family: var(--text-secondary);\n  font-weight: 100;\n\n  padding: 8px;\n  color: #adb5bd;\n}\n\n/* styling info modal */\n.info-dialog {\n  width: 30%;\n  height: 30%;\n\n  background-color: #edf2f4;\n  border: none;\n}\n\n.info-dialog p {\n  margin: 0;\n\n  font-family: var(--text-tertiary);\n}\n\n.info-container {\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: self-start;\n}\n\n.info-heading {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  gap: 3%;\n}\n\n.info-heading p {\n  font-size: 2.4em;\n  font-weight: 800;\n  padding: 4px;\n  color: #343a40;\n}\n\n.info-heading button {\n  outline: none;\n  padding: 4px;\n}\n\n.info-container p:nth-child(2) {\n  font-size: 1.4em;\n  font-weight: 400;\n  color: #495057;\n  padding: 4px;\n}\n\n.info-container p:nth-child(3) {\n  font-size: 1.2em;\n  font-weight: 300;\n  color: #6c757d;\n  padding: 4px;\n}\n\n.btn-info-close {\n  padding: 4px;\n  margin-left: 4px;\n  margin-top: 4px;\n\n  width: 20%;\n  height: 15%;\n  border-radius: 8px;\n  font-family: var(--text-tertiary);\n  font-size: 0.8em;\n  font-weight: 400;\n  color: #343a40;\n}\n\n/* project names styling */\n.project-names {\n  width: 100%;\n  margin-left: 8%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  justify-content: center;\n}\n\n.project-names-container {\n  width: 16.5vw;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4%;\n  padding: 4%;\n  margin: 3%;\n\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n\n.project-title {\n  background-color: #f8f9fa;\n  cursor: pointer;\n\n  font-family: var(--text-secondary);\n  font-size: 1.3em;\n  color: #495057;\n}\n\n.btn-delete-project {\n  cursor: pointer;\n}\n\n.todo-icon {\n  width: 100px;\n  height: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/images/delete-icon-2.svg":
/*!**************************************!*\
  !*** ./src/images/delete-icon-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/delete-icon-2.svg");

/***/ }),

/***/ "./src/images/expand.svg":
/*!*******************************!*\
  !*** ./src/images/expand.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/expand.svg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearMainContent)
/* harmony export */ });
function clearMainContent() {
    const todoContainer = document.querySelector("#todos");

    todoContainer.innerHTML = " ";
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeProject)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _images_delete_icon_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/delete-icon-2.svg */ "./src/images/delete-icon-2.svg");



class Project {
    constructor(name) {
        this.name = name;
    }

    static newProject(name) {
        const proj = new Project(name);

        return proj;
    }

    static displayProject({ name }, id) {
        const projectNameContainer = document.querySelector(".project-names");
        const projectContainer = document.createElement("div");

        projectContainer.innerHTML = `
            <div class="project-names-container">
                <button data-name=${name} class="project-title">${name}</button>
                <img src="${_images_delete_icon_2_svg__WEBPACK_IMPORTED_MODULE_0__["default"]}" alt="delete button" data-namefordeletion=${name} data-id="${id}" class="btn-delete-project">
            </div>
        `

        projectNameContainer.appendChild(projectContainer);
    }

    static populateProject() {
        const ids = Object.keys(localStorage);
        const projectIds = ids.filter(id => id.includes("project"));

        for (let key of projectIds) {
            const lsProjectItem = JSON.parse(localStorage.getItem(key));

            this.displayProject(lsProjectItem, key);
        }
    }

    static deleteProject(id, name) {
        const projectKey = Object.keys(localStorage);
        const filteredProjectKeys = projectKey.filter(keys => keys.includes(`${name}`));

        for (let keys of filteredProjectKeys) {
            localStorage.removeItem(keys);
        }

        localStorage.removeItem(id);

        const projectToDelete = document.querySelector(`[data-id="${id}]"`);
        if (projectToDelete) {
            projectToDelete.closest("div").remove();
        }
        
        Window.location.reload();
        this.reloadProject();
    }

    static reloadProject() {
        const projectNameContainer = document.querySelector(".project-names");

        projectNameContainer.innerHTML = " ";

        this.populateProject();
    }
}

function makeProject() {
    Project.populateProject();

    const makeProjectButton = document.querySelector(".projects button");
    const projectDialog = document.querySelector(".project-dialog");
    const btnCloseProject = document.querySelector(".btn-close-project");
    const projectForm = document.querySelector(".project-form");

    makeProjectButton.addEventListener("click", () => {
        projectDialog.showModal();
    });

    btnCloseProject.addEventListener("click", () => {
        projectDialog.close();
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const projectName = document.querySelector("#name");

        let id = `project-${(0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])()}`;
        let projectItem = new Project(projectName.value);
        let projectItemJSON = JSON.stringify(projectItem);

        Project.displayProject(projectItem, id);
        localStorage.setItem(id, projectItemJSON);

        projectName.value = "";
        projectDialog.close();
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-project")) {
            const projectId = e.target.dataset.id;
            const projectName = e.target.dataset.namefordeletion;

            Project.deleteProject(projectId, projectName);
        }
    });
}

/***/ }),

/***/ "./src/projectTodo.js":
/*!****************************!*\
  !*** ./src/projectTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectTodo)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear */ "./src/clear.js");



let projectName;

class ProjectTodo {
    constructor(name) {
        this.name = name;
    }

    static display(projectName) {
        const formContainer = document.querySelector(".daily-todo");
        formContainer.innerHTML = `
            <p>${projectName} todos</p>
            <button class="btn-project-todo">add todo</button>
        `;
    }

    static displayTodos(projectName) {
        const keys = Object.keys(localStorage);
        const filteredKey = keys.filter(key => key.includes(`${projectName}`));``

        for (let key of filteredKey) {
            let ptItem = JSON.parse(localStorage.getItem(key));

            _todo__WEBPACK_IMPORTED_MODULE_0__.Todos.displayTodo(ptItem, key);
        }
    }

    static handleForms() {
        const makeProjectToDoBtn = document.querySelector(".btn-project-todo");
        const btnCloseProjectTodo = document.querySelector(".btn-close-project-todo");
        const projectTodoDialog = document.querySelector(".project-todo-dialog");
        const projectTodoForm = document.querySelector(".project-todo-form");

        makeProjectToDoBtn.addEventListener("click", () => {
            projectTodoDialog.showModal();
        });

        btnCloseProjectTodo.addEventListener("click", () => {
            projectTodoDialog.close();
        });

        projectTodoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const projectTodoTitle = document.querySelector("#project-todo-title");
            const projectTodoDueDate = document.querySelector("#project-todo-dueDate");
            const projectTodoDescription = document.querySelector("#project-todo-description");
            const projectTodoPriority = document.querySelector("#project-todo-priority");

            let id = `${projectName}-${(0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()}`;
            let projectTodoItem = _todo__WEBPACK_IMPORTED_MODULE_0__.Todos.newTodo(projectTodoTitle.value, projectTodoDescription.value, projectTodoDueDate.value, projectTodoPriority.value, projectName);
            let projectTodoJSON = JSON.stringify(projectTodoItem);

            projectTodoTitle.value = "";
            projectTodoDescription.value = "";
            projectTodoDueDate.value = "";
            projectTodoPriority.value = "";

            projectTodoDialog.close();
            _todo__WEBPACK_IMPORTED_MODULE_0__.Todos.displayTodo(projectTodoItem, id);
            localStorage.setItem(id, projectTodoJSON);
        });
    }
}

function projectTodo() {
    const projectTitleContainer = document.querySelector(".project-names");

    projectTitleContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("project-title")) {
            e.stopImmediatePropagation();

            projectName = e.target.dataset.name;

            (0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])();

            ProjectTodo.display(projectName);
            ProjectTodo.displayTodos(projectName);
            ProjectTodo.handleForms();
        }
    });
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todos: () => (/* binding */ Todos),
/* harmony export */   "default": () => (/* binding */ makeToDo)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _images_delete_icon_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/delete-icon-2.svg */ "./src/images/delete-icon-2.svg");
/* harmony import */ var _images_expand_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/expand.svg */ "./src/images/expand.svg");




class Todos {
    constructor(title, description, dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
    }

    static newTodo(title, description, dueDate, priority, projectName) {
        const todo = new Todos(title, description, dueDate, priority, projectName);

        return todo;
    }

    static displayTodo(todoObj, id) {
        const todoContainer = document.querySelector("#todos");
        const newTodoContainer = document.createElement("div");
        const style = getPriorityColor(todoObj.priority);

        newTodoContainer.innerHTML = `
        <div class="todo-card">
            <div class="todo-headings">  
                <div class="heading">
                <p class="todo-title">${todoObj.title}</p>
                <button class="todo-priority" style="background-color:${style}"></button>
                </div>
                <p class="todo-dueDate">${todoObj.dueDate}</p>
            </div>
            
            <div class="todo-actions">
                <img src="${_images_delete_icon_2_svg__WEBPACK_IMPORTED_MODULE_0__["default"]}" alt="delete button" data-id="${id}" class="btn-delete-todo">
                <img src="${_images_expand_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}" data-infoId="${id}" class="btn-expand-todo">
            </div>
        </div>
        `
        todoContainer.appendChild(newTodoContainer);
    }

    static displayTodoInfo(id) {
        const lsItem = JSON.parse(localStorage.getItem(id));
        const infoDialog = document.createElement("dialog");
        const body = document.querySelector("body");
        const style = getPriorityColor(lsItem.priority);

        infoDialog.classList.add("info-dialog");
        infoDialog.innerHTML = `
        <div class="info-container">
            <div class="info-heading">
                <p>${lsItem.title}</p>
                <button class="todo-priority" style="background-color:${style}"></button>
            </div>
        
            <p>${lsItem.dueDate}</p>
            <p>${lsItem.description}</p>
            <button class="btn-info-close">close</button>
        </div>
        `;

        body.appendChild(infoDialog);
        infoDialog.showModal();

        const closeInfoBtn = infoDialog.querySelector(".btn-info-close");
        closeInfoBtn.addEventListener("click", () => {
            infoDialog.close();
            infoDialog.remove();
        });
    }

    static populateTodos() {
        for (let key in localStorage) {
            if ((0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
                const lsItem = JSON.parse(localStorage.getItem(key));

                this.displayTodo(lsItem, key);
            }
        }
    }

    static populateProjectTodos(projectName) {
        const keys = Object.keys(localStorage);
        const filteredKey = keys.filter(key => key.includes(`${projectName}`));

        for (let key of filteredKey) {
            let ptItem = JSON.parse(localStorage.getItem(key));

            this.displayTodo(ptItem, key);
        }
    }

    static deleteTodo(id) {
        const item = JSON.parse(localStorage.getItem(id));

        if (item.projectName != 0) {
            localStorage.removeItem(id);
            const todoToDelete = document.querySelector(`[data-id="${id}]"`);

            if (todoToDelete) {
                todoToDelete.closest("div").remove();
            }

            this.reloadProjectTodos(item.projectName);
        } else {
            localStorage.removeItem(id);
            const todoToDelete = document.querySelector(`[data-id="${id}]"`);

            if (todoToDelete) {
                todoToDelete.closest("div").remove();
            }

            this.reloadTodos();
        }
    }

    static reloadProjectTodos(projectName) {
        const todoContainer = document.querySelector("#todos");
        todoContainer.innerHTML = " ";

        this.populateProjectTodos(projectName);
    }

    static reloadTodos() {
        const todoContainer = document.querySelector("#todos");
        todoContainer.innerHTML = " ";

        this.populateTodos();
    }
}

function getPriorityColor(priority) {
    switch (priority) {
        case "high":
            return "#d00000";
        case "medium":
            return "#FFA500";
        default:
            return "#aacc00";
    }
}

function makeToDo() {
    Todos.populateTodos();

    const makeToDoButton = document.querySelector(".daily-todo button");
    const btnCloseTodo = document.querySelector(".btn-close-todo");
    const todoDialog = document.querySelector(".todo-dialog");
    const todoForm = document.querySelector(".todo-form");

    makeToDoButton.addEventListener("click", () => {
        todoDialog.showModal();
    });

    btnCloseTodo.addEventListener("click", () => {
        todoDialog.close();
    });

    // submitting form and storing data local storage
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoTitle = document.querySelector("#todo-title");
        const todoDueDate = document.querySelector("#todo-dueDate");
        const todoDescription = document.querySelector("#todo-description");
        const todoPriority = document.querySelector("#todo-priority");

        let id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
        let item = Todos.newTodo(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value, 0);
        let itemJSON = JSON.stringify(item);

        Todos.displayTodo(item, id);
        localStorage.setItem(`${id}`, itemJSON);

        todoTitle.value = "";
        todoDescription.value = "";
        todoDueDate.value = "";
        todoPriority.value = "";
        todoDialog.close();
    });

    // listening for delete button & expand view click
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete-todo")) {
            const todoId = e.target.dataset.id;

            Todos.deleteTodo(todoId);
        } else if (e.target.classList.contains("btn-expand-todo")) {
            const todoId = e.target.dataset.infoid;

            Todos.displayTodoInfo(todoId);
        }
    });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectTodo */ "./src/projectTodo.js");





(0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_projectTodo__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksWUFBWSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxPQUFPLFlBQVksTUFB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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUztBQUNNO0FBQ0k7O0FBRXhDLGlEQUFRO0FBQ1Isb0RBQVc7QUFDWCx3REFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2RlbGV0ZS1pY29uLTIuc3ZnIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2V4cGFuZC5zdmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXRleHQtcHJpbWFyeTogXCJKYXJvXCIsIHNhbnMtc2VyaWY7XG4gIC0tdGV4dC1zZWNvbmRhcnk6IFwiTGlsaXRhIE9uZVwiLCBzYW5zLXNlcmlmO1xuICAtLXRleHQtdGVydGlhcnk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LXByaW1hcnkpO1xufVxuXG5uYXYge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4jdG9kb3Mge1xuICBncmlkLXJvdzogMi8zO1xuICBncmlkLWNvbHVtbjogMi8zO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4jc2lkZWJhciB7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZDRkYTtcbn1cblxuLyogaW5kZXggcGFnZSAqL1xubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGNvbG9yOiAjYWRiNWJkO1xuICBoZWlnaHQ6IDEwdmg7XG59XG5cbm5hdiBwOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZm9udC1zaXplOiAyLjdlbTtcbn1cblxubmF2IHA6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuI3NpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYWlseS10b2RvLFxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1JTtcblxuICBtYXJnaW4tbGVmdDogOCU7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4uZGFpbHktdG9kbyBwLFxuLnByb2plY3RzIHAge1xuICBmb250LXNpemU6IDIuMmVtO1xuICBjb2xvcjogIzIxMjUyOTtcblxuICBtYXJnaW46IDUlO1xufVxuXG4uZGFpbHktdG9kbyBidXR0b24sXG4ucHJvamVjdHMgYnV0dG9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAzNSU7XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuXG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGRpYWxvZyBzdHlsaW5nICovXG5kaWFsb2cge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICBoZWlnaHQ6IDQwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi50b2RvLWNvbnRhaW5lcixcbi50b2RvLWZvcm0sXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lcixcbi5wcm9qZWN0LXRvZG8tZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAzJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyJTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG5cbiAgbWFyZ2luOiAzJTtcbn1cblxuLmJ0bi1tYWtlLXRvZG8sXG4uYnRuLWNsb3NlLXRvZG8sXG4uYnRuLW1ha2UtcHJvamVjdC10b2RvLFxuLmJ0bi1jbG9zZS1wcm9qZWN0LXRvZG8ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwJTtcblxuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5wcm9qZWN0LWRpYWxvZyB7XG4gIGhlaWdodDogMTUlO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIsXG4ucHJvamVjdC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdhcDogMyU7XG59XG5cbi5wcm9qZWN0LWZvcm0gaW5wdXQge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjAlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLyogc3R5bGluZyB0b2RvcyAqL1xuLnRvZG8tY2FyZCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMiU7XG5cbiAgd2lkdGg6IDk1JTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4udG9kby1jYXJkIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi50b2RvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICB3aWR0aDogMyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi50b2RvLXByaW9yaXR5IHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWRlbGV0ZS10b2RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWV4cGFuZC10b2RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1wcmlvcml0eSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIGdhcDogMTJweDtcbn1cblxuLnRvZG8tdGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi50b2RvLWR1ZURhdGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogMTAwO1xuXG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNhZGI1YmQ7XG59XG5cbi8qIHN0eWxpbmcgaW5mbyBtb2RhbCAqL1xuLmluZm8tZGlhbG9nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjJmNDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5mby1kaWFsb2cgcCB7XG4gIG1hcmdpbjogMDtcblxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XG59XG5cbi5pbmZvLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZ2FwOiAzJTtcbn1cblxuLmluZm8taGVhZGluZyBwIHtcbiAgZm9udC1zaXplOiAyLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLmluZm8taGVhZGluZyBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5pbmZvLWNvbnRhaW5lciBwOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5pbmZvLWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5idG4taW5mby1jbG9zZSB7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuXG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTUlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG5cbi8qIHByb2plY3QgbmFtZXMgc3R5bGluZyAqL1xuLnByb2plY3QtbmFtZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtbmFtZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE2LjV2dztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNCU7XG4gIHBhZGRpbmc6IDQlO1xuICBtYXJnaW46IDMlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5idG4tZGVsZXRlLXByb2plY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLWljb24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0VBQzFDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFdBQVc7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ZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS10ZXh0LXByaW1hcnk6IFxcXCJKYXJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tdGV4dC1zZWNvbmRhcnk6IFxcXCJMaWxpdGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tdGV4dC10ZXJ0aWFyeTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3RvZG9zIHtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWQ0ZGE7XFxufVxcblxcbi8qIGluZGV4IHBhZ2UgKi9cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBjb2xvcjogI2FkYjViZDtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxuXFxubmF2IHA6bnRoLWNoaWxkKDEpIHtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIGZvbnQtc2l6ZTogMi43ZW07XFxufVxcblxcbm5hdiBwOm50aC1jaGlsZCgyKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHktdG9kbyxcXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1JTtcXG5cXG4gIG1hcmdpbi1sZWZ0OiA4JTtcXG4gIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uZGFpbHktdG9kbyBwLFxcbi5wcm9qZWN0cyBwIHtcXG4gIGZvbnQtc2l6ZTogMi4yZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG5cXG4gIG1hcmdpbjogNSU7XFxufVxcblxcbi5kYWlseS10b2RvIGJ1dHRvbixcXG4ucHJvamVjdHMgYnV0dG9uIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDM1JTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuXFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtdGVydGlhcnkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzQ5NTA1NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogZGlhbG9nIHN0eWxpbmcgKi9cXG5kaWFsb2cge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcblxcbiAgaGVpZ2h0OiA0MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIsXFxuLnRvZG8tZm9ybSxcXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lcixcXG4ucHJvamVjdC10b2RvLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMyU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBvdXRsaW5lOiBub25lO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyJTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIG1hcmdpbjogMyU7XFxufVxcblxcbi5idG4tbWFrZS10b2RvLFxcbi5idG4tY2xvc2UtdG9kbyxcXG4uYnRuLW1ha2UtcHJvamVjdC10b2RvLFxcbi5idG4tY2xvc2UtcHJvamVjdC10b2RvIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDEwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnByb2plY3QtZGlhbG9nIHtcXG4gIGhlaWdodDogMTUlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIsXFxuLnByb2plY3QtZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMyU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4vKiBzdHlsaW5nIHRvZG9zICovXFxuLnRvZG8tY2FyZCB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luOiAyJTtcXG5cXG4gIHdpZHRoOiA5NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbi50b2RvLWNhcmQgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiAzJTtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZS10b2RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWV4cGFuZC10b2RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICBnYXA6IDEycHg7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG5cXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udG9kby1kdWVEYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiAjYWRiNWJkO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGluZm8gbW9kYWwgKi9cXG4uaW5mby1kaWFsb2cge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMzAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjJmNDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmluZm8tZGlhbG9nIHAge1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtdGVydGlhcnkpO1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xcbn1cXG5cXG4uaW5mby1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAzJTtcXG59XFxuXFxuLmluZm8taGVhZGluZyBwIHtcXG4gIGZvbnQtc2l6ZTogMi40ZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY29sb3I6ICMzNDNhNDA7XFxufVxcblxcbi5pbmZvLWhlYWRpbmcgYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIgcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzZjNzU3ZDtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmJ0bi1pbmZvLWNsb3NlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuXFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMzQzYTQwO1xcbn1cXG5cXG4vKiBwcm9qZWN0IG5hbWVzIHN0eWxpbmcgKi9cXG4ucHJvamVjdC1uYW1lcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiA4JTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZXMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxNi41dnc7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNCU7XFxuICBwYWRkaW5nOiA0JTtcXG4gIG1hcmdpbjogMyU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb2xvcjogIzQ5NTA1NztcXG59XFxuXFxuLmJ0bi1kZWxldGUtcHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWljb24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9kZWxldGUtaWNvbi0yLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2V4cGFuZC5zdmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG5sZXQgX25vZGVJZDtcblxubGV0IF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxubGV0IF9sYXN0TVNlY3MgPSAwO1xubGV0IF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBsZXQgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgY29uc3QgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgbGV0IGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgY29uc3Qgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIGxldCBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgbGV0IG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgY29uc3QgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICBjb25zdCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICBjb25zdCB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHVuc2FmZVN0cmluZ2lmeShiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcblxuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCIgXCI7XG59IiwiaW1wb3J0IHsgdjEgYXMgdXVpZHYxLCB2YWxpZGF0ZSBhcyB1dWlkVmFsaWRhdGUgfSBmcm9tICd1dWlkJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL2RlbGV0ZS1pY29uLTIuc3ZnJztcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBuZXdQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuXG4gICAgICAgIHJldHVybiBwcm9qO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNwbGF5UHJvamVjdCh7IG5hbWUgfSwgaWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZXNcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbmFtZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW5hbWU9JHtuYW1lfSBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke25hbWV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RlbGV0ZUljb259XCIgYWx0PVwiZGVsZXRlIGJ1dHRvblwiIGRhdGEtbmFtZWZvcmRlbGV0aW9uPSR7bmFtZX0gZGF0YS1pZD1cIiR7aWR9XCIgY2xhc3M9XCJidG4tZGVsZXRlLXByb2plY3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgc3RhdGljIHBvcHVsYXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgaWRzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElkcyA9IGlkcy5maWx0ZXIoaWQgPT4gaWQuaW5jbHVkZXMoXCJwcm9qZWN0XCIpKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgcHJvamVjdElkcykge1xuICAgICAgICAgICAgY29uc3QgbHNQcm9qZWN0SXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVByb2plY3QobHNQcm9qZWN0SXRlbSwga2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KGlkLCBuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RLZXkgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RLZXlzID0gcHJvamVjdEtleS5maWx0ZXIoa2V5cyA9PiBrZXlzLmluY2x1ZGVzKGAke25hbWV9YCkpO1xuXG4gICAgICAgIGZvciAobGV0IGtleXMgb2YgZmlsdGVyZWRQcm9qZWN0S2V5cykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpZCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfV1cImApO1xuICAgICAgICBpZiAocHJvamVjdFRvRGVsZXRlKSB7XG4gICAgICAgICAgICBwcm9qZWN0VG9EZWxldGUuY2xvc2VzdChcImRpdlwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgV2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB0aGlzLnJlbG9hZFByb2plY3QoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVsb2FkUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZXNcIik7XG5cbiAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIuaW5uZXJIVE1MID0gXCIgXCI7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZVByb2plY3QoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VQcm9qZWN0KCkge1xuICAgIFByb2plY3QucG9wdWxhdGVQcm9qZWN0KCk7XG5cbiAgICBjb25zdCBtYWtlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMgYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGlhbG9nXCIpO1xuICAgIGNvbnN0IGJ0bkNsb3NlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlLXByb2plY3RcIik7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcblxuICAgIG1ha2VQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBidG5DbG9zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG5cbiAgICAgICAgbGV0IGlkID0gYHByb2plY3QtJHt1dWlkdjEoKX1gO1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIGxldCBwcm9qZWN0SXRlbUpTT04gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0SXRlbSk7XG5cbiAgICAgICAgUHJvamVjdC5kaXNwbGF5UHJvamVjdChwcm9qZWN0SXRlbSwgaWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgcHJvamVjdEl0ZW1KU09OKTtcblxuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWRlbGV0ZS1wcm9qZWN0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVmb3JkZWxldGlvbjtcblxuICAgICAgICAgICAgUHJvamVjdC5kZWxldGVQcm9qZWN0KHByb2plY3RJZCwgcHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBjbGVhck1haW5Db250ZW50IGZyb20gXCIuL2NsZWFyXCI7XG5sZXQgcHJvamVjdE5hbWU7XG5cbmNsYXNzIFByb2plY3RUb2RvIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXkocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktdG9kb1wiKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cD4ke3Byb2plY3ROYW1lfSB0b2RvczwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdC10b2RvXCI+YWRkIHRvZG88L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzcGxheVRvZG9zKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEtleSA9IGtleXMuZmlsdGVyKGtleSA9PiBrZXkuaW5jbHVkZXMoYCR7cHJvamVjdE5hbWV9YCkpO2BgXG5cbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGZpbHRlcmVkS2V5KSB7XG4gICAgICAgICAgICBsZXQgcHRJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgICAgICAgICAgVG9kb3MuZGlzcGxheVRvZG8ocHRJdGVtLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUZvcm1zKCkge1xuICAgICAgICBjb25zdCBtYWtlUHJvamVjdFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1wcm9qZWN0LXRvZG9cIik7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlUHJvamVjdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZS1wcm9qZWN0LXRvZG9cIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRvZG8tZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdG9kby1mb3JtXCIpO1xuXG4gICAgICAgIG1ha2VQcm9qZWN0VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFRvZG9EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ0bkNsb3NlUHJvamVjdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RUb2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRvZG8tdGl0bGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdG9kby1kdWVEYXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10b2RvLXByaW9yaXR5XCIpO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSBgJHtwcm9qZWN0TmFtZX0tJHt1dWlkdjEoKX1gO1xuICAgICAgICAgICAgbGV0IHByb2plY3RUb2RvSXRlbSA9IFRvZG9zLm5ld1RvZG8ocHJvamVjdFRvZG9UaXRsZS52YWx1ZSwgcHJvamVjdFRvZG9EZXNjcmlwdGlvbi52YWx1ZSwgcHJvamVjdFRvZG9EdWVEYXRlLnZhbHVlLCBwcm9qZWN0VG9kb1ByaW9yaXR5LnZhbHVlLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRvZG9KU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdFRvZG9JdGVtKTtcblxuICAgICAgICAgICAgcHJvamVjdFRvZG9UaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBwcm9qZWN0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHByb2plY3RUb2RvRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBwcm9qZWN0VG9kb1ByaW9yaXR5LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgcHJvamVjdFRvZG9EaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIFRvZG9zLmRpc3BsYXlUb2RvKHByb2plY3RUb2RvSXRlbSwgaWQpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIHByb2plY3RUb2RvSlNPTik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdFRvZG8oKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVzXCIpO1xuXG4gICAgcHJvamVjdFRpdGxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC10aXRsZVwiKSkge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWU7XG5cbiAgICAgICAgICAgIGNsZWFyTWFpbkNvbnRlbnQoKTtcblxuICAgICAgICAgICAgUHJvamVjdFRvZG8uZGlzcGxheShwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBQcm9qZWN0VG9kby5kaXNwbGF5VG9kb3MocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgUHJvamVjdFRvZG8uaGFuZGxlRm9ybXMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCB7IHYxIGFzIHV1aWR2MSwgdmFsaWRhdGUgYXMgdXVpZFZhbGlkYXRlIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltYWdlcy9kZWxldGUtaWNvbi0yLnN2Zyc7XG5pbXBvcnQgZXhwYW5kSWNvbiBmcm9tICcuL2ltYWdlcy9leHBhbmQuc3ZnJztcblxuZXhwb3J0IGNsYXNzIFRvZG9zIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIG5ld1RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlUb2RvKHRvZG9PYmosIGlkKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICAgICAgICBjb25zdCBuZXdUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRQcmlvcml0eUNvbG9yKHRvZG9PYmoucHJpb3JpdHkpO1xuXG4gICAgICAgIG5ld1RvZG9Db250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1oZWFkaW5nc1wiPiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvZG8tdGl0bGVcIj4ke3RvZG9PYmoudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RvLXByaW9yaXR5XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7c3R5bGV9XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLWR1ZURhdGVcIj4ke3RvZG9PYmouZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkZWxldGVJY29ufVwiIGFsdD1cImRlbGV0ZSBidXR0b25cIiBkYXRhLWlkPVwiJHtpZH1cIiBjbGFzcz1cImJ0bi1kZWxldGUtdG9kb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtleHBhbmRJY29ufVwiIGRhdGEtaW5mb0lkPVwiJHtpZH1cIiBjbGFzcz1cImJ0bi1leHBhbmQtdG9kb1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlUb2RvSW5mbyhpZCkge1xuICAgICAgICBjb25zdCBsc0l0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKSk7XG4gICAgICAgIGNvbnN0IGluZm9EaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0UHJpb3JpdHlDb2xvcihsc0l0ZW0ucHJpb3JpdHkpO1xuXG4gICAgICAgIGluZm9EaWFsb2cuY2xhc3NMaXN0LmFkZChcImluZm8tZGlhbG9nXCIpO1xuICAgICAgICBpbmZvRGlhbG9nLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgPHA+JHtsc0l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RvLXByaW9yaXR5XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7c3R5bGV9XCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICA8cD4ke2xzSXRlbS5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgIDxwPiR7bHNJdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4taW5mby1jbG9zZVwiPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5mb0RpYWxvZyk7XG4gICAgICAgIGluZm9EaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VJbmZvQnRuID0gaW5mb0RpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1pbmZvLWNsb3NlXCIpO1xuICAgICAgICBjbG9zZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGluZm9EaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIGluZm9EaWFsb2cucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBwb3B1bGF0ZVRvZG9zKCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAodXVpZFZhbGlkYXRlKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsc0l0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9kbyhsc0l0ZW0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcG9wdWxhdGVQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkS2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IGtleS5pbmNsdWRlcyhgJHtwcm9qZWN0TmFtZX1gKSk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGZpbHRlcmVkS2V5KSB7XG4gICAgICAgICAgICBsZXQgcHRJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9kbyhwdEl0ZW0sIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVG9kbyhpZCkge1xuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkpO1xuXG4gICAgICAgIGlmIChpdGVtLnByb2plY3ROYW1lICE9IDApIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1dXCJgKTtcblxuICAgICAgICAgICAgaWYgKHRvZG9Ub0RlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRvZG9Ub0RlbGV0ZS5jbG9zZXN0KFwiZGl2XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbG9hZFByb2plY3RUb2RvcyhpdGVtLnByb2plY3ROYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1dXCJgKTtcblxuICAgICAgICAgICAgaWYgKHRvZG9Ub0RlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRvZG9Ub0RlbGV0ZS5jbG9zZXN0KFwiZGl2XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbG9hZFRvZG9zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVsb2FkUHJvamVjdFRvZG9zKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiIFwiO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWxvYWRUb2RvcygpIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3NcIik7XG4gICAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCIgXCI7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZVRvZG9zKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcmlvcml0eUNvbG9yKHByaW9yaXR5KSB7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI2QwMDAwMFwiO1xuICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjRkZBNTAwXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCIjYWFjYzAwXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlVG9EbygpIHtcbiAgICBUb2Rvcy5wb3B1bGF0ZVRvZG9zKCk7XG5cbiAgICBjb25zdCBtYWtlVG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktdG9kbyBidXR0b25cIik7XG4gICAgY29uc3QgYnRuQ2xvc2VUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2xvc2UtdG9kb1wiKTtcbiAgICBjb25zdCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRpYWxvZ1wiKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtXCIpO1xuXG4gICAgbWFrZVRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9kb0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGJ0bkNsb3NlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBzdWJtaXR0aW5nIGZvcm0gYW5kIHN0b3JpbmcgZGF0YSBsb2NhbCBzdG9yYWdlXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kdWVEYXRlXCIpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcblxuICAgICAgICBsZXQgaWQgPSB1dWlkdjEoKTtcbiAgICAgICAgbGV0IGl0ZW0gPSBUb2Rvcy5uZXdUb2RvKHRvZG9UaXRsZS52YWx1ZSwgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlLCB0b2RvRHVlRGF0ZS52YWx1ZSwgdG9kb1ByaW9yaXR5LnZhbHVlLCAwKTtcbiAgICAgICAgbGV0IGl0ZW1KU09OID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG5cbiAgICAgICAgVG9kb3MuZGlzcGxheVRvZG8oaXRlbSwgaWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpZH1gLCBpdGVtSlNPTik7XG5cbiAgICAgICAgdG9kb1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdG9kb0R1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSBcIlwiO1xuICAgICAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW5pbmcgZm9yIGRlbGV0ZSBidXR0b24gJiBleHBhbmQgdmlldyBjbGlja1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWRlbGV0ZS10b2RvXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuXG4gICAgICAgICAgICBUb2Rvcy5kZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWV4cGFuZC10b2RvXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5kYXRhc2V0LmluZm9pZDtcblxuICAgICAgICAgICAgVG9kb3MuZGlzcGxheVRvZG9JbmZvKHRvZG9JZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IG1ha2VUb0RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBtYWtlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdFRvZG8gZnJvbSBcIi4vcHJvamVjdFRvZG9cIjtcblxubWFrZVRvRG8oKTtcbm1ha2VQcm9qZWN0KCk7XG5wcm9qZWN0VG9kbygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==