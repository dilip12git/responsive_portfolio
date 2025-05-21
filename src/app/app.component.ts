import { Component, OnInit ,HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  LucideAngularModule,
  Download,
  UserRound,
  FileText,
  FolderClosed,
  ContactRound,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  ChevronDown
} from 'lucide-angular';

export class AppModule {}
import {
  faChevronDown,
  faLocationDot,
  faPhone,
  faCalendar,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    LucideAngularModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  faChevronDown = faChevronDown;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faCalendar = faCalendar;
  faEnvelope = faEnvelope;
  facebook = faFacebook;
  insta = faInstagram;
  github = faGithub;
  linkedin = faLinkedinIn;
  title = 'portfolio';

  readonly resume = FileText;
  readonly userIcon = UserRound;
  readonly contactIcon = ContactRound;
  readonly projectIcon = FolderClosed;
  readonly email = Mail;
  readonly phone = Phone;
  readonly calender = CalendarDays;
  readonly location = MapPin;
  readonly download = Download;
  readonly angle=ChevronDown

  isSidebarActive: boolean = false;
  stars: {
    id: number;
    left: number;
    duration: number;
    delay: number;
    drift: number;
  }[] = [];
  lights: any[] = [];
  private starId = 0;
 isSidebarOpen = false;
  windowWidth: number = window.innerWidth;

  ngOnInit(): void {
    this.generateStars(30); // initial burst
    this.generateLights(10);
      this.onResize();
  }

  generateStars(count: number) {
    for (let i = 0; i < count; i++) {
      const star = this.createStar();
      this.stars.push(star);
      this.scheduleRemove(star);
    }
  }

  createStar() {
    return {
      id: this.starId++,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 3,
      drift: Math.random() * 100 - 50,
    };
  }

  scheduleRemove(star: { id: number; duration: number; delay: number }) {
    const totalTime = (star.delay + star.duration) * 1000;

    setTimeout(() => {
      this.stars = this.stars.filter((s) => s.id !== star.id);
      const newStar = this.createStar();
      this.stars.push(newStar);
      this.scheduleRemove(newStar); // continue loop
    }, totalTime);
  }

    generateLights(count: number) {
    for (let i = 0; i < count; i++) {
      this.lights.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 100 + Math.random() * 150,
        color: this.getRandomColor(),
        floatDuration: 6 + Math.random() * 4,
        pulseDuration: 3 + Math.random() * 2,
        delay: Math.random() * 5
      });
    }
  }

  getRandomColor(): string {
    const colors = [
      'rgba(133, 62, 235, 0.4)',
      'rgba(60, 62, 212, 0.4)',
      'rgba(255, 255, 255, 0.3)',
      'rgba(128, 0, 128, 0.4)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }


  openEmail() {
    const email = 'dilipg44u@gmail.com';
    const mailtoLink = `mailto:${email}?subject=Inquiry%20from%20Your%20Portfolio&body=Hello%20Dilip,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work%20in%20web%20and%20mobile%20app%20development.%0D%0A%0D%0AI%E2%80%99d%20love%20to%20discuss%20potential%20collaboration%20opportunities%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20when%20you%E2%80%99d%20be%20available%20to%20connect.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Info]`;
    window.location.href = mailtoLink;
  }

  makeCall() {
    const phoneNumber = '+917991907185';
    window.location.href = `tel:${phoneNumber}`;
  }
    @HostListener('window:resize', [])
  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 767) {
      this.isSidebarOpen = true; 
      
    } else {
      this.isSidebarOpen = false; 
      
    }
  }
}
