import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calls-list',
  templateUrl: './calls-list.page.html',
  styleUrls: ['./calls-list.page.scss'],
})
export class CallsListPage implements OnInit {

  items:any;
constructor(public navCtrl: NavController) {
    this.items = [
        {title: 'Slide item1'},
        {title: 'Slide item2'},
        {title: 'Slide item3'},
        {title: 'Slide item4'},
        {title: 'Slide item5'},
        {title: 'Slide item6'}
    ];
  }
  removeItem(item){
    for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){       
        this.items.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

}
