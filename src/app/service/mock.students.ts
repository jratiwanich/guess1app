import {Student,Attendance} from './student';
import {TimeEntry} from './timeentry';

export const TIMEENTRIES: TimeEntry[] = [
  {id: 0,inTime: {hour:9, minute:15, second:0}, outTime: {hour:10, minute:15, second:0}},
  {id: 1,inTime: {hour:13, minute:30, second:0}, outTime: null}
];

export const TIMEENTRIES2: TimeEntry[] = [
  {id: 0,inTime: {hour:9, minute:15, second:0}, outTime: {hour:10, minute:15, second:0}},
  {id: 1,inTime: {hour:14, minute:30, second:0}, outTime: {hour:16, minute:30, second:0}}
];
export const STUDENTS: Student[] = [
  {id: 11, name: 'Mr. Nice Guy', status: 'in', timeentry:TIMEENTRIES},
  {id: 12, name: 'Narco Taco', status: null, timeentry:[]},
  {id: 13, name: 'Bombasto Kook', status: 'out', timeentry:TIMEENTRIES2},
  {id: 14, name: 'Celeritas Cinco', status: null, timeentry:[]},
  {id: 15, name: 'Magneta Lee', status: null, timeentry:[]},
  {id: 16, name: 'RubberMan Power', status: null, timeentry:[]},
  {id: 17, name: 'Dynama Rocket', status: null, timeentry:[]},
  {id: 18, name: 'Dr IQ Brainy', status: null, timeentry:[]},
  {id: 19, name: 'Angelina Jolie', status: null, timeentry:[]},
  {id: 20, name: 'Tornado Turman', status: null, timeentry:[]}
];

export const ATTENDANCES: Attendance[] = [
  {attDate: '20170226', attStudents: STUDENTS},
  {attDate: '20170227', attStudents: STUDENTS},
  {attDate: '20170228', attStudents: STUDENTS},
];
