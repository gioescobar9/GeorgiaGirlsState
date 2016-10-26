System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AuxiliaryNavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuxiliaryNavBarComponent = (function () {
                function AuxiliaryNavBarComponent() {
                }
                AuxiliaryNavBarComponent = __decorate([
                    core_1.Component({
                        selector: 'auxiliary-nav-bar',
                        template: "\n    <header>\n<!-- create nav bar design, not complete yet just here for layout image-->\n<nav class=\"navigation\">\n<div class=\"nav\">\n<ul class=\"topnav\" id=\"myTopnav\">\n  <li><a class=\"active\" href=\"initiateStudentAccount.html\">Initiate Student Account</a></li>\n  <li><a href=\"#info\">My Students</a></li>\n  <!--<li><img src=\"images/emblem.jpg\" id=\"logo\" style=\"width:75px;height:75px;\" /></li>-->\n  <li><a class=\"#auxiliaryInfo\" href=\"AuxiliaryInfo.html\">Auxiliary Information Form</a></li>\n  <li><a href=\"#about\">About</a></li>\n  <li class=\"icon\">\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" onclick=\"myFunction()\">\u2630</a>\n  </li>\n  <div class=\"logo\"></div>\n</ul>\n</div>\n</nav>\n</header>\n    ",
                        styleUrls: ['app/auxiliary/create-auxiliary-account.component.css', 'app/student/student-application.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuxiliaryNavBarComponent);
                return AuxiliaryNavBarComponent;
            }());
            exports_1("AuxiliaryNavBarComponent", AuxiliaryNavBarComponent);
        }
    }
});
//# sourceMappingURL=auxiliary-nav-bar.component.js.map