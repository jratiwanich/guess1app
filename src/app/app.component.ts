import { Component,OnInit, Input, Output, OnChanges,
         SimpleChanges, Directive,ViewChild,EventEmitter} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
//services
import { StudentService } from './service/student.service';
import { LocalStorageService } from './service/storage.service';
//data model import
import { Attendance, Student } from './service/student';
import {TimeEntry,TimeStructure} from './service/timeentry';
import {CollapseDirective} from './ui/directives/collapse.directive';


@Directive({selector: 'on-date-changes'})
export class OnDateChangesComponent implements OnChanges {
  @Input() newdate: NgbDateStruct;
  @Output() studentsStore:EventEmitter<any> = new EventEmitter();

   dateKey: string;
   students2: Student[];
   constructor(private storeService: LocalStorageService) {
         this.reset();
   }

   reset(){}

  ngOnChanges(changes: SimpleChanges) {
    console.debug("Starting OnDateChanges...");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.debug(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.debug("newdate="+JSON.stringify(this.newdate));
      this.studentsStore.emit(this.newdate);

    }
  }//end of ngOnChanges

  // getStudentData(dt: NgbDateStruct){
  //   this.dateKey = dt.year.toString() + dt.month.toString() + dt.day.toString();
  //   this.students2 = this.storeService.retrieve(this.dateKey);
  //   if(this.students2 !== undefined){
  //     //this.studentsStore = this.students2;
  //     this.studentsStore.emit(this.newdate);
  //   }


}

const now = new Date();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService,LocalStorageService]
})


export class AppComponent {
  public isCollapsedContent:boolean = false;
  @Input() selectedDate: NgbDateStruct;
  title = 'GUESS works!';
  students: Student[];
  attendances: Attendance[];
  selectedStudent: Student;
  selectAttendance;
  dateKey: string;

  @ViewChild(OnDateChangesComponent) childView: OnDateChangesComponent;

  constructor(private stuService: StudentService,
              private storeService: LocalStorageService) {
        this.reset();
  }

  getAttendanceMock(): void {
    this.stuService.getAttendances().then(attendances => this.attendances = attendances);
    console.debug("MOCK attances="+JSON.stringify(this.attendances));
  }

  getStudentsMock(): void {
      this.stuService.getStudents().then(students => this.students = students);

    }

  selectToday() {
    this.selectedDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    //this.selectAttendance = this.attendances.find('20170226');
    //angular.forEach(this.attendances,function(value,key){
    //this.dateKey = now.getFullYear().toString() +  (now.getMonth() + 1).toString() + now.getDate().toString();
    //this.selectAttendance = Object.keys(this.dateKey);

  }
  getDateKey(dt: NgbDateStruct){
    return dt.year.toString() + dt.month.toString() + dt.day.toString();
  }

  onSelectDateEvent(dt: NgbDateStruct){
    this.dateKey = this.getDateKey(dt);
    //this.storeService.store(this.dateKey,this.students);
    this.students = this.storeService.retrieve(this.dateKey);
    if(this.students !== undefined){
      //this.studentsStore = this.students2;
      console.debug("cache students="+JSON.stringify(this.students));
    }else{
      console.log("NO DATA FOUND ON "+   this.dateKey );
      //console.debug("attances="+JSON.stringify(this.attendances));
      //console.debug("students="+JSON.stringify(this.students));

      var yes = confirm("No data found on this date="+    this.dateKey +" Would you like to populate new data?");
      if(yes){
        this.getStudentsMock();
        this.saveStorage(dt);
      }
    }
  }


  saveStorage(dt: NgbDateStruct){
    this.dateKey = this.getDateKey(dt);
    this.storeService.store(this.dateKey,this.students);
  }

  showAll(){
    this.isCollapsedContent = !this.isCollapsedContent;
    //this.isCollapsedContent = true;
  }

  ngOnInit(): void {
    this.selectToday();
    this.getAttendanceMock();
    //console.debug("attances="+JSON.stringify(this.attendances));
    this.getStudentsMock();
    //console.debug("students="+JSON.stringify(this.students));
  }




  reset() {
    if (this.childView) { this.childView.reset(); }
    console.debug("resetting in constructor");
  }
}
