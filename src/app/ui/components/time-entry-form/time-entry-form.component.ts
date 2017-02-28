import { Component, Directive,OnChanges,
         SimpleChanges, Input,ViewChild,
         Attribute,Output, EventEmitter} from '@angular/core';
import {TimeEntry,TimeStructure} from '../../../service/timeentry';



@Directive({selector: 'on-changes'})
// @Component({selector: 'on-changes'})

export class OnChangesComponent implements OnChanges {
  @Input() logIn: TimeStructure;
  @Input() logOut: TimeStructure;

  //iTime = new TimeEntry(this.logIn,this.logOut);

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.debug("Starting OnChanges...");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.debug(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.debug("logOut time="+JSON.stringify(this.logIn));
      console.debug("logOut time="+JSON.stringify(this.logOut));
      // console.debug("my time="+JSON.stringify(this.iTime));
      // if(JSON.stringify(this.iTime.inTime) >= JSON.stringify(this.iTime.outTime)){
      //   console.log("THAT cannot be >= "+JSON.stringify(this.iTime.outTime));
      // }
    }
  }

  reset() { this.changeLog.length = 0; }
}

/**************************************************/
const now = new Date();
@Component({
  selector: 'app-time-entry-form',
  templateUrl: './time-entry-form.component.html',
  styleUrls: ['./time-entry-form.component.css']
})
export class TimeEntryFormComponent  {

  currentTime: TimeEntry;
  title = 'OnChanges';
  outNow: boolean = false;
  @Input() timelog: TimeEntry;
  @Output() timeUpdate = new EventEmitter();
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }
  // timeChange(){
  //   console.debug("time change");
  // }
  removeTime(item){
    console.debug("removing item"+JSON.stringify(item));
    this.timeUpdate.emit(item);

  }

  reset() {
      if (this.childView) { this.childView.reset(); }
    console.debug("resetting in constructor");
  }
}
