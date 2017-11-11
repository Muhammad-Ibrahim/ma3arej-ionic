import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  user = this.navParams.get('user');

  ionViewDidLoad() {
    console.log(this.user);
    console.log('ionViewDidLoad WelcomePage');
  }

}
