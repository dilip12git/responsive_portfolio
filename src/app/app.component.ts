import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown,faLocationDot,faPhone,faCalendar,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faGithub,faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    FontAwesomeModule,
    RouterLinkActive,
    RouterLink,
     RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faChevronDown=faChevronDown;
  faLocation=faLocationDot;
  faPhone=faPhone;
  faCalendar=faCalendar;
  faEnvelope=faEnvelope;
  facebook=faFacebook;
  insta=faInstagram;
  github=faGithub;
  linkedin=faLinkedinIn
  title = 'portfolio';



  isSidebarActive: boolean = false; 

  toggleInfoVisibility() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
