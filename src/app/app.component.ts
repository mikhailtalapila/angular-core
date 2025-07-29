import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards) => console.log(cards));
  }
  courses = [...COURSES];
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  onCourseSelected(course: Course) {}
  onCoursesEdited() {
    this.courses.push({
      id: 2,
      description: "RxJs In Practice Course",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
      longDescription:
        "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
      category: "BEGINNER",
      lessonsCount: 10,
    });
  }
}
