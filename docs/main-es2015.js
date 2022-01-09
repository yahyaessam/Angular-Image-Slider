(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n  <images-slider [width]=\"700\" [images]=\"images\"></images-slider>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images-slider/images-slider/images-slider.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images-slider/images-slider/images-slider.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"seImagesSlider\" class=\"se-images-slider\" [style.width]=\"width +'px'\" [style.height]=\"height +'px'\">\r\n    <div class=\"images-container\" [style.width]=\"width * images.length + 'px'\" [style.left]=\"'-' + sliderPosition + 'px'\">\r\n        <div *ngFor=\"let image of images\" class=\"single-image\" [style.width]=\"width +'px'\" [style.height]=\"height +'px'\">\r\n            <img [style.max-height]=\"'100%'\" [style.max-width]=\"'100%'\" [src]=\"image\" alt=\"\">\r\n        </div>\r\n    </div>\r\n    <div class=\"images-thumbs\">\r\n        <div class=\"slider-btn-container back\" (click)=\"moveSlider('back')\">\r\n            <svg id=\"back-chev\" enable-background=\"new 0 0 551.13 551.13\" height=\"15\" viewBox=\"0 0 551.13 551.13\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" d=\"m189.451 275.565 223.897-223.897v-51.668l-275.565 275.565 275.565 275.565v-51.668z\"/></svg>\r\n        </div>\r\n        <div class=\"slider-btn-container next\" (click)=\"moveSlider('next')\">\r\n            <svg id=\"next-chev\" enable-background=\"new 0 0 551.13 551.13\" height=\"15\" viewBox=\"0 0 551.13 551.13\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" d=\"m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z\"/></svg>\r\n        </div>\r\n        <div #wrapper class=\"thumbs-wrapper\">\r\n            <div class=\"thumbs-container\" [style.width]=\"100 * images.length + 'px'\" [style.left]=\"thumbsLeft(wrapper.offsetWidth)\">\r\n                <div *ngFor=\"let image of images; let i = index\" class=\"single-thumb\" (click)=\"selectThumb(i + 1)\" [ngClass]=\"{'selected': ( (i + 1) == counter)}\">\r\n                        <img [style.max-height]=\"'90%'\" [style.max-width]=\"'100%'\" [src]=\"image\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "swiper {\r\n  height: 300px;\r\n  width: 400px;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3dpcGVyIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.images = [];
        this.title = 'Angular Slider';
        this.images = [
            'https://images.unsplash.com/photo-1639402479720-276ae330c5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479530-c1d0b49cfa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402476713-223f144f917b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479478-f5e7881c0ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479720-fb4464582470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479551-85c60c489dfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80',
            'https://images.unsplash.com/photo-1639402477646-e88e811eef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479609-037b274454d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479706-06201fa2f824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402478840-1f531c8cd989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402479438-d74dc22cca28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402476132-77c147aa2078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
            'https://images.unsplash.com/photo-1639403169804-318fcb1d23ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            'https://images.unsplash.com/photo-1639402478527-615f5eaf4112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        ];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _images_slider_images_slider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images-slider/images-slider.module */ "./src/app/images-slider/images-slider.module.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _images_slider_images_slider_module__WEBPACK_IMPORTED_MODULE_4__["ImagesSliderModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/images-slider/images-slider.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/images-slider/images-slider.module.ts ***!
  \*******************************************************/
/*! exports provided: ImagesSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSliderModule", function() { return ImagesSliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _images_slider_images_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images-slider/images-slider.component */ "./src/app/images-slider/images-slider/images-slider.component.ts");




let ImagesSliderModule = class ImagesSliderModule {
};
ImagesSliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_images_slider_images_slider_component__WEBPACK_IMPORTED_MODULE_3__["ImagesSliderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_images_slider_images_slider_component__WEBPACK_IMPORTED_MODULE_3__["ImagesSliderComponent"]]
    })
], ImagesSliderModule);



/***/ }),

/***/ "./src/app/images-slider/images-slider/images-slider.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/images-slider/images-slider/images-slider.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#seImagesSlider {\r\n    box-sizing: border-box;\r\n    position:relative;\r\n    display:inline-block;\r\n    padding:10px;\r\n    overflow:hidden;\r\n}\r\n#seImagesSlider:hover .images-thumbs {\r\n    visibility: visible\r\n}\r\n#seImagesSlider .images-container {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    height:100%;\r\n    transition:all .4s ease-in-out;\r\n}\r\n#seImagesSlider .images-container .single-image {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 700px;\r\n    height: 400px;\r\n    margin: auto;\r\n    text-align: center;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n#seImagesSlider .images-container .single-image .example-image {\r\n    box-sizing: border-box;\r\n    background-color:#333;\r\n    position: absolute;\r\n    width:100%;\r\n    height:100%;\r\n    left:0;\r\n    top:0;\r\n}\r\n#seImagesSlider #back-chev,\r\n#seImagesSlider #next-chev {\r\n    position: absolute;\r\n    z-index:5;\r\n    cursor:pointer;\r\n}\r\n#seImagesSlider .images-thumbs {\r\n    position: absolute;\r\n    bottom:0;\r\n    left:0;\r\n    width:100%;\r\n    height:20%;\r\n    background-color:rgba(0,0,0,.4);\r\n    transition:all .3s ease-in-out;\r\n    visibility: hidden;\r\n}\r\n#seImagesSlider .images-thumbs .slider-btn-container {\r\n    position: absolute;\r\n    height:100%;\r\n    width:20px;\r\n    width: 33px;\r\n}\r\n#seImagesSlider .images-thumbs .slider-btn-container.next {\r\n    right:0;\r\n}\r\n#seImagesSlider .images-thumbs .slider-btn-container:hover {\r\n    background-color:rgba(0,0,0,.45);\r\n    cursor: pointer;\r\n}\r\n#seImagesSlider #back-chev {\r\n    bottom:calc(50% - 7.5px);\r\n    left:10px;\r\n}\r\n#seImagesSlider #next-chev {\r\n    bottom:calc(50% - 7.5px);\r\n    right:10px;\r\n}\r\n#seImagesSlider .images-thumbs .thumbs-wrapper {\r\n    position: absolute;\r\n    width:calc(100% - 66px);\r\n    left:33px;\r\n    overflow:hidden;\r\n    height:100%;\r\n\r\n}\r\n#seImagesSlider .images-thumbs .thumbs-wrapper .thumbs-container {\r\n    position: absolute;\r\n    height:100%;\r\n    left:0;\r\n    top:0;\r\n    transition:left .4s ease-in-out;\r\n}\r\n#seImagesSlider .images-thumbs .thumbs-wrapper .thumbs-container .single-thumb {\r\n    box-sizing:border-box;\r\n    width:100px;\r\n    height:100%;\r\n    padding:10px;\r\n    padding-top: 14px;\r\n    display:inline-block;\r\n    text-align:center;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n}\r\n#seImagesSlider .images-thumbs .thumbs-wrapper .thumbs-container .single-thumb.selected {\r\n    background-color:rgba(0,0,0,.45);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2VzLXNsaWRlci9pbWFnZXMtc2xpZGVyL2ltYWdlcy1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsTUFBTTtJQUNOLEtBQUs7QUFDVDtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtJQUNWLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sS0FBSztJQUNMLCtCQUErQjtBQUNuQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2VzLXNsaWRlci9pbWFnZXMtc2xpZGVyL2ltYWdlcy1zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZUltYWdlc1NsaWRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXI6aG92ZXIgLmltYWdlcy10aHVtYnMge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZVxyXG59XHJcbiNzZUltYWdlc1NsaWRlciAuaW1hZ2VzLWNvbnRhaW5lciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHRyYW5zaXRpb246YWxsIC40cyBlYXNlLWluLW91dDtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXIgLmltYWdlcy1jb250YWluZXIgLnNpbmdsZS1pbWFnZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuI3NlSW1hZ2VzU2xpZGVyIC5pbWFnZXMtY29udGFpbmVyIC5zaW5nbGUtaW1hZ2UgLmV4YW1wbGUtaW1hZ2Uge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG59XHJcbiNzZUltYWdlc1NsaWRlciAjYmFjay1jaGV2LFxyXG4jc2VJbWFnZXNTbGlkZXIgI25leHQtY2hldiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OjU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXIgLmltYWdlcy10aHVtYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuI3NlSW1hZ2VzU2xpZGVyIC5pbWFnZXMtdGh1bWJzIC5zbGlkZXItYnRuLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICB3aWR0aDogMzNweDtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXIgLmltYWdlcy10aHVtYnMgLnNsaWRlci1idG4tY29udGFpbmVyLm5leHQge1xyXG4gICAgcmlnaHQ6MDtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXIgLmltYWdlcy10aHVtYnMgLnNsaWRlci1idG4tY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNzZUltYWdlc1NsaWRlciAjYmFjay1jaGV2IHtcclxuICAgIGJvdHRvbTpjYWxjKDUwJSAtIDcuNXB4KTtcclxuICAgIGxlZnQ6MTBweDtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXIgI25leHQtY2hldiB7XHJcbiAgICBib3R0b206Y2FsYyg1MCUgLSA3LjVweCk7XHJcbiAgICByaWdodDoxMHB4O1xyXG59XHJcbiNzZUltYWdlc1NsaWRlciAuaW1hZ2VzLXRodW1icyAudGh1bWJzLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gNjZweCk7XHJcbiAgICBsZWZ0OjMzcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuI3NlSW1hZ2VzU2xpZGVyIC5pbWFnZXMtdGh1bWJzIC50aHVtYnMtd3JhcHBlciAudGh1bWJzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgdHJhbnNpdGlvbjpsZWZ0IC40cyBlYXNlLWluLW91dDtcclxufVxyXG4jc2VJbWFnZXNTbGlkZXIgLmltYWdlcy10aHVtYnMgLnRodW1icy13cmFwcGVyIC50aHVtYnMtY29udGFpbmVyIC5zaW5nbGUtdGh1bWIge1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3NlSW1hZ2VzU2xpZGVyIC5pbWFnZXMtdGh1bWJzIC50aHVtYnMtd3JhcHBlciAudGh1bWJzLWNvbnRhaW5lciAuc2luZ2xlLXRodW1iLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/images-slider/images-slider/images-slider.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/images-slider/images-slider/images-slider.component.ts ***!
  \************************************************************************/
/*! exports provided: ImagesSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSliderComponent", function() { return ImagesSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImagesSliderComponent = class ImagesSliderComponent {
    constructor() {
        this.images = [];
        this.counter = 1;
        this.nextActive = true;
        this.backActive = true;
        this.sliderPosition = 0;
    }
    ngOnInit() {
        if (this.width === undefined || this.width === '') {
            this.width = '700';
        }
        else {
            return;
        }
        this.height = (this.width / 2) + 50;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.height = (this.width / 2) + 50;
        }, 1);
    }
    moveSlider(dir) {
        if (dir === 'next' && this.counter !== this.images.length) {
            this.sliderPosition = this.counter * this.width;
            this.counter++;
        }
        else if (dir === 'back' && this.counter !== 1) {
            this.counter--;
            this.sliderPosition = (this.counter - 1) * this.width;
        }
    }
    thumbsLeft(wrapperWidth) {
        const extra = ((((wrapperWidth / 100) % 1) * 100).toFixed(0));
        const moveTime = ((wrapperWidth / 100).toFixed(0));
        const loops = (this.images.length / moveTime).toFixed(0);
        if (this.counter <= Number(moveTime)) {
            return 0 + 'px';
        }
        else {
            for (let i = 1; i < loops; i++) {
                if (this.counter > (Number(moveTime) * i) && this.counter <= Number(moveTime) * (i + 1)) {
                    return '-' + ((wrapperWidth - extra)) * i + 'px';
                }
            }
        }
    }
    selectThumb(index) {
        const dir = index > this.counter ? 'next' : 'back';
        this.counter = dir === 'next' ? (index - 1) : (index + 1);
        this.moveSlider(dir);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImagesSliderComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImagesSliderComponent.prototype, "images", void 0);
ImagesSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-slider',
        template: __webpack_require__(/*! raw-loader!./images-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/images-slider/images-slider/images-slider.component.html"),
        styles: [__webpack_require__(/*! ./images-slider.component.css */ "./src/app/images-slider/images-slider/images-slider.component.css")]
    })
], ImagesSliderComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yahia_essam\Desktop\New folder (10)\Simple-angular-Slider\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map