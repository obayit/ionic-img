import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'
import { auth } from 'firebase/app';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Location, LocationsService } from '../../services/locations.service'
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

export interface TestDocument{
  name: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  email = 'obayit@gmail.com';
  password = 'ra34dfWER#DFr.';
  private testDocument: AngularFirestoreDocument<TestDocument>;

  constructor(public afAuth: AngularFireAuth, public userService: UserService,
    public router: Router,
    public locationService: LocationsService,
    public platform: Platform,
    public httpClient: HttpClient,
    public afStore: AngularFirestore) {
      this.testDocument = afStore.doc<TestDocument>('/testDocument/0');
    }

  ngOnInit() {
  }
  async login(){
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log(res);
      if(res.user){
        this.userService.setUser({
          email: this.email,
          uid: res.user.uid
        });
        var tmp: Location = {
          position: new firebase.firestore.GeoPoint(32.5, 15),
          battery: 0,
          datetime: firebase.firestore.Timestamp.now()
        }
        this.testDocument.set({name: this.email});

        // this.afStore.doc(`/testDocument/${this.email}`).set({
        //   name: this.email
        // });
        // this.locationService.addTestLocation(32.5, 15);
        this.router.navigate(['/map-page'])
        // this.locationService.addTestLocation(32.6, 15);
      }
    }catch(err){
      console.log(err);
      if(err.code === 'auth/user-not-found'){
        console.log('user not found');
      }
    }
  }
  startGeoLocations(){
    this.locationService.startService();
  }
  stopGeoLocations(){
    this.locationService.stopService();
  }

}
