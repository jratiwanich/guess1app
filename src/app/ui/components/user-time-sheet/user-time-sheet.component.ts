import { Component, OnInit, Input} from '@angular/core';
import {Student} from '../../../service/student';

@Component({
  selector: 'app-user-time-sheet',
  templateUrl: './user-time-sheet.component.html',
  styleUrls: ['./user-time-sheet.component.css']
})
export class UserTimeSheetComponent implements OnInit {
  //student = "Summer Rati";
  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
