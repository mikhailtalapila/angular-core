import { Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';
@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course: Course;
  @Input({
    required: true
  })
  index: number;
}
