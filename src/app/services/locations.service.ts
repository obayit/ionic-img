import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { BatteryStatus } from '@ionic-native/battery-status/ngx';

export interface Location{
  // uid: number;
  position: firebase.firestore.GeoPoint;
  battery: number;
  datetime: firebase.firestore.Timestamp;
}

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public locations: Location[] = [];
  constructor(private backgroundGeolocation: BackgroundGeolocation,
    public afStore: AngularFirestore,
    private localNotifications: LocalNotifications,
    // private batteryStatus: BatteryStatus
    ) { 
    const config: BackgroundGeolocationConfig = {
                desiredAccuracy: 10,
                stationaryRadius: 20,
                distanceFilter: 30,
                debug: false, //  enable this hear sounds for background-geolocation life-cycle.
                stopOnTerminate: false, // enable this to clear background location settings when the app terminates
        };

    this.backgroundGeolocation.configure(config)
      .then(() => {

        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          var tmp: Location = {
            position: new firebase.firestore.GeoPoint(location.latitude, location.longitude),
            battery: 0,
            datetime: firebase.firestore.Timestamp.now()
          }
          console.log('location xd');
          console.log(tmp);
          var locationCollection = this.afStore.collection<Location>(`/location`);
          this.locations.push(tmp);
          locationCollection.add(tmp).then((docRef) => {
            this.localNotifications.schedule({
              id: 1,
              text: `${docRef.id}`,
              // text: `${tmp.position.longitude}, ${locationDocument}, ${locationDocument.get()._isScalar}`,
              sound: 'file://sound.mp3',
            });
            // this.backgroundGeolocation.finish(); // FOR IOS ONLY

          }).catch((err) => {
            this.localNotifications.schedule({
              id: 1,
              text: `${err}`,
              // text: `${tmp.position.longitude}, ${locationDocument}, ${locationDocument.get()._isScalar}`,
              sound: 'file://sound.mp3',
            });
          });
        });

      });
    }
  create(value: Location){

  }
  addTestLocation(long, lat){
    this.locations.push({
      position: new firebase.firestore.GeoPoint(lat, long),
      battery: 0,
      datetime: firebase.firestore.Timestamp.now(),
    });
  }
  public startService(){
    // start recording location
    this.backgroundGeolocation.start();
  }
  stopService(){
    // If you wish to turn OFF background-tracking, call the #stop method.
    this.backgroundGeolocation.stop();
  }
  getSavedLocations(){
    return this.afStore.collection<Location>(`/location`).get();
  }
}
