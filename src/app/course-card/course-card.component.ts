import { Component, Input } from '@angular/core';
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
  @Input({
    required: true
  })
  index: number;
  isImageAvailable() {
    return this.course && this.course.iconUrl
  }
  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner'
    }
  }
  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    }
  }
}
