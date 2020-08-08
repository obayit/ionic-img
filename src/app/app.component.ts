import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocationsService } from './services/locations.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Imgur Subreddit',
      url: '/imgur',
      icon: 'mail'
    },
    {
      title: 'Imgur Search',
      url: '/imgur-search',
      icon: 'star'
    },
    {
      title: 'Imgur Flex',
      url: '/imgur-flex',
      icon: 'apps'
    },
    {
      title: 'Firestore Login',
      url: '/login-page',
      icon: 'enter'
    },
    {
      title: 'Map Page',
      url: '/map-page',
      icon: 'map'
    },
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private locationService: LocationsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit(){
  }
}
