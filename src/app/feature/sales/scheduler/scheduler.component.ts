import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { format, formatISO, differenceInMilliseconds } from 'date-fns';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {

  minDate = new Date().toISOString();

  selectedDate: Date;
  selectedTime: any;

  schedulerForm:FormGroup;

  user  = {
    name:'',
    token: ''
  };

  constructor(private fb: FormBuilder, private localNotifications: LocalNotifications, private platform: Platform, private nativeStorage: NativeStorage) { }

  ngOnInit() {
    this.schedulerForm = this.fb.group({
      scheduleDate: new FormControl('', []),
      scheduleTime: new FormControl('', []),
      title: ['']
    });

  }

  ionViewWillEnter() {
    if(this.platform.is("mobile")) {
      this.nativeStorage.getItem('user')
      .then(
        data => {
          this.user = data;
        },
        error => console.error(error)
      );
    } else {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
   
  }

  getScheduleDate(event) {
    console.log(event.detail.value)
    this.selectedDate = new Date(event.detail.value);
    console.log(this.selectedDate)
    this.schedulerForm['controls']['scheduleDate'].setValue(format(this.selectedDate, 'yyyy-MM-dd'));
  }

  getScheduleTime(event) {
    console.log(event)
    console.log(event.detail.value)
    this.selectedTime = new Date(event.detail.value);
    console.log(this.selectedTime);
    console.log(this.selectedTime.getHours(), this.selectedTime.getMinutes())
    this.schedulerForm['controls']['scheduleTime'].setValue(this.selectedTime.getHours() + "," + this.selectedTime.getMinutes());
  }

  submit() {
    console.log('mmmmmmmmmmmmmmm', this.selectedDate.getFullYear())
    console.log(this.schedulerForm.value);
    let time = this.schedulerForm['controls']['scheduleTime'].value;
    time = time.split(',');
    const result = formatISO(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), time[0], time[1], 1))
    console.log(new Date(result), new Date());
    const timeToTriggerNotification = differenceInMilliseconds(new Date(result), new Date());
    console.log(timeToTriggerNotification);
    console.log(this.schedulerForm['controls']['title'].value)

    if(this.platform.is('mobile')) {
      this.localNotifications.schedule({
        text: this.schedulerForm['controls']['title'].value,
        trigger: {at: new Date(new Date().getTime() + timeToTriggerNotification)},
        led: 'FF0000',
        sound: null
     });
    }
    console.log(this.platform.is('mobile'));
    console.log(this.platform.is('desktop'));
  }

}
