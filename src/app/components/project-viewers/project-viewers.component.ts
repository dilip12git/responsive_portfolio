import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink,faArrowLeft,faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { ProjectDataService } from '../../services/project-data.service';
import {
  faAndroid,
  faFirefoxBrowser,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-project-viewers',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './project-viewers.component.html',
  styleUrl: './project-viewers.component.css',
})
export class ProjectViewersComponent  {
  @ViewChild('targetElement') targetElement!: ElementRef;

  ngAfterViewInit() {
    this.scrollToElement();
  }

  scrollToElement() {
    this.targetElement.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  constructor(
    private projectData: ProjectDataService,
    private router: Router
  ) {}
  faLink = faLink;
  faAndroid = faAndroid;
  faFirefoxBrowser = faFirefoxBrowser;
  faGithub = faGithub;
  faArrowLeft = faArrowLeft;
  project: any;
  faShare=faShareNodes;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.project = this.projectData.getData();
    if (!this.project) {
      this.router.navigate(['/projects']);
    }
  }


  liveDemo(link: any) {
    window.open(link, '_blank');
  }
  openCode(link: any) {
    window.open(link, '_blank');
  }

  goBack() {
    this.router.navigate(["/projects"]);
  }
  shareProjectLink() {
    if (navigator.share) {
      navigator.share({
         url: window.location.href
      }).then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Sharing failed:', error));
    } else {
      alert('Web Share API is not supported in this browser.');
    }
  } 
}
