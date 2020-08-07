import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocationsService, Location } from 'src/app/services/locations.service';
import { Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';

declare var google;
declare var L;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
})
export class MapPagePage implements OnInit {
  @ViewChild('mapElement') mapElement: ElementRef;
  map: any;
  zoomLevel = 13;
  isTracking = true;

  constructor(
    public locationService: LocationsService,
    private plt: Platform,
    // private geolocation: Geolocation,
    ) { }

  ngOnInit() {
    // this.loadMap();
  }
  ionViewDidEnter(){
    this.initializeLeafletMap();
    this.putMarkers();
  }
  initializeLeafletMap(){
    var khartoumL = [15.5007, 32.5599];
    var londonL = [51.505, -0.09]
    if(!this.mapElement.nativeElement){
      console.log('welp, this sucks');
    }
    this.map = L.map(this.mapElement.nativeElement).setView(khartoumL, this.zoomLevel);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidWJheS1hYmRlbGdhZGlyIiwiYSI6ImNqeXZuZnVjcTBlc2ozaXJyaGw1NWt5cGkifQ.QN_JvTCCKwteXQCRY6ybvQ'
    }).addTo(this.map);

  }
  addMarker(point: Location){
    return L.circleMarker([point.position.latitude, point.position.longitude]).addTo(this.map);
  }
  putMarkers(){
    // this.locationService.getSavedLocations().subscribe(locations => {
    //   console.log('adding markers for', locations);
    //   locations.map(this.addMarker);
    // });
    this.locationService.getSavedLocations()
    .pipe(
      map(snapshot => {
          let items = [];
          snapshot.docs.map(a => {
              const data = a.data();
              const id = a.id;
              items.push({ id, ...data })
          })
          console.log('adding markers for', items);
          items.map(point => {
            this.addMarker(point);
          });
          let centerPoint = [
            items[items.length-1].position.latitude,
            items[items.length-1].position.longitude];
          this.map.panTo(centerPoint);
      }),
    ).subscribe();

  }
  initializeGoogleMap(){
    console.log('we are in the beam');
    var khartoum = new google.maps.LatLng(15.5007, 32.5599);
    let mapOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      center: khartoum,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    console.log(this.map);
  }
  startGeoLocations(){
    // this.locationService.startService();
  }
  stopGeoLocations(){
    // this.locationService.stopService();
  }
}
