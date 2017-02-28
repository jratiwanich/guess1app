import { Injectable } from '@angular/core';

import {TimeEntry} from './timeentry';
import { Student,Attendance } from './student';
import { TIMEENTRIES, STUDENTS, ATTENDANCES} from './mock.students';

@Injectable()
export class StudentService {

  //get everything - 1
  getAttendances(): Promise<Attendance[]>{
    return Promise.resolve(ATTENDANCES);
  }

  //get only student data and time - 2
  getStudents(): Promise<Student[]> {
    return Promise.resolve(STUDENTS);
  }

 //get only time entries - 3
  getTimeEntries(): Promise<TimeEntry[]>{
    return Promise.resolve(TIMEENTRIES);
  }

  // testing the "Take it slow" appendix
  getStudentsSlowly(): Promise<Student[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStudents()), 2000);
    });
  }
}
