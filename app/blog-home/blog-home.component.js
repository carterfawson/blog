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
var core_1 = require('@angular/core');
var BlogHomeComponent = (function () {
    function BlogHomeComponent() {
        this.title = "Carter's Blog";
        this.admin = true;
        this.posts = [
            {
                "postId": 1,
                "author": {
                    "first_name": "Carter",
                    "last_name": "Fawson",
                    "blurb": "I'm just a normal guy that wants to make cool stuff"
                },
                "publish_date": "today",
                "title": "How to effectively communicate your ideas",
                "subtitle": "An idea is worthless if it isn't communicated well",
                "post_text": "I will just have to put something in here later about this. This is pretty cool though, I will just be pulling this text from my database. Which I will have running in a completely separate container. The api and the app will be separated! Woohoo microservices!",
                "likes": 20
            },
            {
                "postId": 2,
                "author": {
                    "first_name": "Carter",
                    "last_name": "Fawson",
                    "blurb": "I'm just a normal guy that wants to make cool stuff"
                },
                "publish_date": "today",
                "title": "Cool tutorial on something useful",
                "subtitle": "How to containerize your application or something",
                "post_text": "I will just have to put something in here later about this. This is pretty cool though, I will just be pulling this text from my database. Which I will have running in a completely separate container. The api and the app will be separated! Woohoo microservices!",
                "likes": 129
            }
        ];
    }
    BlogHomeComponent = __decorate([
        core_1.Component({
            selector: 'blog-home',
            templateUrl: 'app/blog-home/blog-home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BlogHomeComponent);
    return BlogHomeComponent;
}());
exports.BlogHomeComponent = BlogHomeComponent;
//# sourceMappingURL=blog-home.component.js.map