import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private user : FormGroup;

  constructor(private formBuilder: FormBuilder, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.user = formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    }, {validator: SignupPage.passwordsMatch});
  }

  static passwordsMatch(cg: FormGroup): {[err: string]: any} {
    let password = cg.get('password');
    let password2 = cg.get('password2');
    let rv: {[error: string]: any} = {};
    if ((password.touched || password2.touched) && password.value !== password2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  welcome() {
    this.navCtrl.push(WelcomePage, {
      user: this.user 
    });
  }

  signupFacebook() {
    this.fire.auth.signInWithPopup (new firebase.auth.FacebookAuthProvider)
    .then( user => {
      this.navCtrl.push(WelcomePage, user);
    });
  }
  
  signupTwitter() {
    this.fire.auth.signInWithPopup (new firebase.auth.TwitterAuthProvider)
    .then( user => {
      this.navCtrl.push(WelcomePage, user);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
