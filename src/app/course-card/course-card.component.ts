import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    CommonModule
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
