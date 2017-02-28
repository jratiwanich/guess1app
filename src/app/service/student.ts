import { Injectable } from '@angular/core';
import {TimeEntry} from './timeentry';


@Injectable()
export class Student {
  id: number;
  name: string;
  status: string;
  timeentry:Array<TimeEntry>;
}

export class Attendance{
  attDate: string;
  attStudents: Array<Student>;
}
