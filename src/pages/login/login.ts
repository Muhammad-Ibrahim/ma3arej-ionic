import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { WelcomePage } from '../welcome/welcome';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user : FormGroup;
  
  constructor(private formBuilder: FormBuilder, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.user = formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  welcome() {
    this.navCtrl.push(WelcomePage, {
      user: this.user 
    });
  }

  loginFacebook() {
    this.fire.auth.signInWithPopup (new firebase.auth.FacebookAuthProvider)
    .then( user => {
      this.navCtrl.push(WelcomePage, user);
    });
  }

  loginTwitter() {
    this.fire.auth.signInWithPopup (new firebase.auth.TwitterAuthProvider)
    .then( user => {
      this.navCtrl.push(WelcomePage, user);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
