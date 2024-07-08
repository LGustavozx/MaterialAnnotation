import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  public startDate = moment();
  public minDate = moment([1930, 1, 1]);
  public maxDate = moment([2050, 1, 1]);

  constructor(private platform: Platform) {}

  ngOnInit(): void {
    this.startDate = moment(); // seta a data atual
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }
  // platform usado para verificar se o dispositivo é mobile
}
