import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private menuCtrl: MenuController, private route: Router, private nativeStorage: NativeStorage, private platform: Platform) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  loginSuccess() {
    if(this.platform.is("mobile")) {
      this.nativeStorage.setItem('user', {name: 'Rajesh', token: 'ansdnf8mxhdckid8'})
      .then(
        () => this.route.navigateByUrl('/sales'),
        error => console.error('Error storing item', error)
      );
    } else {
      localStorage.setItem('user', JSON.stringify({name: 'Rajesh', token: 'ansdnf8mxhdckid8'}));
      this.route.navigateByUrl('/sales')
    }
    
    
  }

}
