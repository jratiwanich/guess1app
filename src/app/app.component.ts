import { Component,OnInit} from '@angular/core';
import { Student } from './service/student';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  selectedDate;
  title = 'GUESS works!';
  students: Student[];
  selectedStudent: Student;

  constructor(private heroService: StudentService) { }

  getHeroes(): void {
    this.heroService.getStudents().then(students => this.students = students);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Student): void {
    this.selectedStudent = hero;
  }
}
