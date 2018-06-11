import { Log } from './../models/Log';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:44:24')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 09:33:24')},
      {id: '3', text: 'Added logs component', date: new Date('12/27/2017 12:04:04')}
    ];
   }

   getLogs() {
     return this.logs;
   }
}
