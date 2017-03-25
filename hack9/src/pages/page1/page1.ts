
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  following = false;
    user = {
      name: 'Asim Zaidi',
      profileImage: 'assets/avatar.jpg',
      coverImage: 'assets/background.jpg',
      occupation: 'Creator',
      location: 'Chicago, IL',
      description: 'A wise man once said: The more you do something, the better you will become at it.',
      followers: 456,
      following: 1052,
      posts: 35
    }
 //place opportunity cards here!!
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }
}
