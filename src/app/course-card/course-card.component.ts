import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Course } from "../model/course";
import { COURSES } from "src/db-data";
import { CommonModule, NgIf } from "@angular/common";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent  {

  @Input()
  course: Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();



  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
