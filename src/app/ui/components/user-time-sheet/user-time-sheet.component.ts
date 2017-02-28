import { Component, OnInit, Input} from '@angular/core';

//services
import { StudentService } from '../../../service/student.service';
import { LocalStorageService } from '../../../service/storage.service';
//data model import
import { Attendance, Student } from '../../../service/student';
import {TimeEntry,TimeStructure} from '../../../service/timeentry';
import {CollapseDirective} from '../../directives/collapse.directive';

const now = new Date();
@Component({
  selector: 'app-user-time-sheet',
  templateUrl: './user-time-sheet.component.html',
  styleUrls: ['./user-time-sheet.component.css']
  //directives: [CollapseDirective]
})
export class UserTimeSheetComponent implements OnInit {

  @Input() student: Student;
  @Input() expand:boolean = false;
  //store = LocalStorageService;
  currentTime: TimeStructure;
  newEntry: TimeEntry;
  constructor(private stuService: StudentService,
              private storeService: LocalStorageService) { }

  ngOnInit() {
    if(this.student.timeentry!=null){
      console.debug("STUDENT=" + this.student.name +
                    "time="+JSON.stringify(this.student.timeentry));
    }
  }


  public removeTime(item){
    if(this.student.timeentry!=null){
      var index = this.student.timeentry.indexOf(item);
      this.student.timeentry.splice(index,1);
    }
      console.log("REMOVED");
  }
  onSelect(){
    console.log("On SELECT");
  }

  //Next In Time must be greater that previous OUT time
  //current time will higher
  addTime(){

    this.currentTime = new TimeStructure(now.getHours(),
                                         now.getMinutes(),
                                         now.getSeconds());
    if(this.student.timeentry!=null){
      if(this.student.timeentry.length>1){

        var lastItem = this.student.timeentry[this.student.timeentry.length-1];

        if(JSON.stringify(this.currentTime) > JSON.stringify(lastItem.outTime)){
          console.debug("currentTime >" + JSON.stringify(lastItem.outTime));
          this.createTime(this.student.timeentry.length+1);
       }else{
           console.debug("CANNOT ADD TIME - InTime must be greater that previous OUT time");
       }
     }else{
       //create the first time entry
       this.createTime(0);
     }
    }
  }//end addTime

  private createTime(id: number){
    this.newEntry = new TimeEntry(id,this.currentTime,this.currentTime );
    console.debug("Adding new time=" + JSON.stringify(this.newEntry));
    this.student.timeentry.push(this.newEntry);
  }

}
