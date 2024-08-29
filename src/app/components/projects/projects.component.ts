import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faAndroid,faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  faArrowUpRightFromSquare=faArrowUpRightFromSquare
  faAndroid=faAndroid
  faFirefoxBrowser=faFirefoxBrowser

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }
}
