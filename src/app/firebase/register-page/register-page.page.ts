import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  email = 'obayit@gmail.com';
  password = 'ra34dfWER#DFr.';
  confirmPassword = 'ra34dfWER#DFr.';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async register(){
    if(this.password !== this.confirmPassword){
      return console.error("Passwords don't match");
    }
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      console.log(res);
    }catch(err){
      console.dir(err);
    }
  }
}
