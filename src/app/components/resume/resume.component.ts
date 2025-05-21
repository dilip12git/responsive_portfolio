import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {
  LucideAngularModule,
  CalendarDays,
  GraduationCap,
  Waypoints,
  BriefcaseBusiness,
} from 'lucide-angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookOpen,
  faDownload,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [FontAwesomeModule, LucideAngularModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('targetElement') targetElement!: ElementRef;

  ngAfterViewInit() {
    this.scrollToElement();
  }

  scrollToElement() {
    this.targetElement.nativeElement.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });
  }
  faBook = faBookOpen;
  faDownload = faDownload;
  readonly calender = CalendarDays;
  readonly graduationCap = GraduationCap;
  readonly experience = BriefcaseBusiness;
  readonly skill = Waypoints;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
