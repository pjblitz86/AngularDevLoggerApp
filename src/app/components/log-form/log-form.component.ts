import { Log } from './../../models/Log';
import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;


  constructor(private logService: LogService) { }

  ngOnInit() {
    // subscribe to the selected log observable
    this.logService.selectedLog
      .subscribe(log => {
        if (log.id !== null) {
          this.isNew = false;
          this.id = log.id;
          this.text = log.text;
          this.date = log.date;
        }
      });
  }

  onSubmit() {
    // check if new log
    if (this.isNew) {
      // create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      };
      // Add log
      this.logService.addLog(newLog);
    } else {
      // create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      // update log
    this.logService.updateLog(updLog);
    }
  }

  generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
