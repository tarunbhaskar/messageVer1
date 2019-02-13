(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\" >\n    <ion-title>\n      Message of the day\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-grid>\n\t <ion-row class=\"imageMargin\">\n      <!--ion-col col-12 class=\"table-row-even getImage\"   [ngStyle]=\"{ 'background-image': 'url(' + url + ')'}\">\n      </ion-col-->\n          <ion-col col-12>\n            <img src={{url}} imageViewer />\n          </ion-col>\n      \n    </ion-row>\n</ion-grid>\n <ion-card >\n  <ion-card-content class=\"card-day\">\n    Date : {{myDate | date}}\n  </ion-card-content>\n  <ion-card-content class=\"card-message\">\n  \t Message : {{message}}\n  </ion-card-content>\n  </ion-card>\n<button ion-button large class=\"button-display\" (click)=\"refresh()\">Refresh</button>\t\n\n\n\n\n<ion-spinner class=\"spinner\"  *ngIf=\"showSpinner\"></ion-spinner>\n\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin-left: 50%;\n  margin-top: 50%; }\n\n.card-day {\n  background-color: #33FFFF;\n  color: black;\n  font-weight: bold; }\n\n.card-message {\n  background-color: #33D4FF;\n  color: black;\n  font-weight: bold; }\n\n.content-background {\n  background-color: green; }\n\n.imageMargin {\n  margin-top: 10px; }\n\n.button-display {\n  width: 100%;\n  height: 42px;\n  border-radius: 5px;\n  background-color: blue;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcUmVhZGluZ01lc3NhZ2VBcHBcXHJlYWRNZXNzYWdlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFlO0VBQ2YsZ0JBQWMsRUFDZDs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osa0JBQWdCLEVBQ2pCOztBQUVEO0VBQ0MsMEJBQXlCO0VBQ3hCLGFBQVk7RUFDWixrQkFBZ0IsRUFDakI7O0FBRUQ7RUFDQyx3QkFBdUIsRUFDdkI7O0FBRUQ7RUFDQyxpQkFBZSxFQUNmOztBQUVEO0VBQ0ssWUFBVztFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zcGlubmVye1xuXHRtYXJnaW4tbGVmdDo1MCU7XG5cdG1hcmdpbi10b3A6NTAlO1xufVxuXG4uY2FyZC1kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNGRkZGO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi5jYXJkLW1lc3NhZ2V7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzM0Q0RkY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLmNvbnRlbnQtYmFja2dyb3VuZHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5pbWFnZU1hcmdpbntcblx0bWFyZ2luLXRvcDoxMHB4O1xufVxuXG4uYnV0dG9uLWRpc3BsYXl7XG5cdCAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(messageService, storage) {
        this.messageService = messageService;
        this.storage = storage;
        this.index = 11;
        this.myDate = new Date();
        this.showSpinner = false;
        this.message = '';
        this.url = '';
        this.random = 11;
        this.clicked = false;
        this.day = '';
        this.showSpinner = true;
    }
    HomePage.prototype.ngOnInit = function () {
        this.url = 'assets/images/guru.jpg';
        this.loadAll();
    };
    HomePage.prototype.refresh = function () {
        this.showSpinner = true;
        alert("You have already generated the message for today");
    };
    HomePage.prototype.loadAll = function () {
        var _this = this;
        var rand = (Math.floor(Math.random() * 108));
        var today = new Date();
        var d = today.getDate();
        var m = today.getMonth() + 1; //January is 0!
        var y = today.getFullYear();
        var todayString = m + '/' + d + '/' + y;
        this.storage.get('day').then(function (val) {
            if (val != todayString) {
                _this.messageService.getData().subscribe(function (result) {
                    _this.storage.set('day', todayString);
                    _this.message = result[rand][""];
                    _this.storage.set('number', rand);
                });
            }
            else {
                _this.messageService.getData().subscribe(function (result) {
                    _this.storage.get('number').then(function (num) {
                        _this.message = result[num][""];
                    });
                });
            }
        });
        this.showSpinner = false;
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map