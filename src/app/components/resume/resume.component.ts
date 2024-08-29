import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookOpen,faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [

    FontAwesomeModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  faBook=faBookOpen;
  faDownload=faDownload;

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }
}
