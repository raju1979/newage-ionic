import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'mail'
    },
    {
      title: 'Sales',
      url: '/sales',
      icon: 'paper-plane'
    },
    {
      title: 'Calls',
      url: '/calls-list',
      icon: 'heart'
    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private route: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    if(this.platform.is("mobile")) {
      this.nativeStorage.clear()
      .then(
        () => this.route.navigateByUrl('/'),
        error => console.error('Error storing item', error)
      );
    } else {
      localStorage.clear();
      this.route.navigateByUrl('/');
    }

  }

}
