import { Injectable } from '@angular/core';

import { Student } from './student';
import { STUDENTS } from './mock.students';

@Injectable()
export class StudentService {
  
    getStudents(): Promise<Student[]> {
    return Promise.resolve(STUDENTS);
  }

  // See the "Take it slow" appendix
  getStudentsSlowly(): Promise<Student[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStudents()), 2000);
    });
  }
}
