import { Component } from '@angular/core';

@Component({
    selector: 'blog-home',
    templateUrl: 'app/blog-home/blog-home.component.html'
})

export class BlogHomeComponent {
    title: string = "Carter's Blog";
    posts: any[] = [
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