import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProjectDataService } from '../../services/project-data.service';
import {
  faAndroid,
  faFirefoxBrowser,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements AfterViewInit {
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

  constructor(
    private router: Router,
    private projectData: ProjectDataService
  ) {}
  faLink = faLink;
  faAndroid = faAndroid;
  faFirefoxBrowser = faFirefoxBrowser;
  faGithub = faGithub;
  faTimes = faTimes;
  selectedDomain: string = 'All';
  isOpen: boolean = false;
  openProject: any;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  liveDemo(link: any) {
    window.open(link, '_blank');
  }
  openCode(link: any) {
    window.open(link, '_blank');
  }
  viewDetail(item: any) {
    if (!item) {
      console.log('no projet item founds !');
    }
    this.isOpen = true;
    this.openProject = item;
    this.projectData.setData(item);

    const projectName = item.title.replace(/\s+/g, '-');
    this.router.navigate(['/project', projectName]);
  }
  closeItemView() {
    this.isOpen = false;
  }
  items = [
    {
      posters: [
        '../../assets/poster/Gchat-poster.png',
        '../../assets/poster/gfeatures.png',
        '../../assets/poster/gchat.png',
        '../../assets/poster/tech.webp',
      ],
      title: 'Gchat-WhatsApp Clone',
      domain: 'Web Development',
      descriptions: [
        'GChat is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with additional support for audio and video calling.',
        'This app allows users to sign up and log in using their email addresses, instead of phone numbers, and engage in real-time messaging and calling.',
        'Profile Management: Users can set up their profile with a custom display name and photo.',
      ],
      features: [
        'Email-based Authentication: Users can sign up or log in using their email and password.',
        'Real-time Messaging: Chat with friends and family in real-time with messages instantly delivered.',
        'Audio and Video Calling: Make audio and video calls to your contacts.',
        'User Invitations: Send invitation links to new users via email.',
        'Responsive UI: The app is mobile-friendly and adapts well to different screen sizes.',
      ],
      techStack: [
        'Frontend: React.js',
        'Backend: Node.js with Express.js',
        'Database: MongoDB (using Mongoose for object data modeling)',
        'Authentication: JWT (JSON Web Tokens)',
        'Realtime Communication: Socket.io for real-time messaging and communication',
        'Audio/Video Calling: WebRTC (for peer-to-peer communication)',
      ],
      lang: [
        { name: 'React', icon: '../../assets/lang-icon/reactjs.png' },
        { name: 'Node.js', icon: '../../assets/lang-icon/nodejs.png' },
        { name: 'Express.js', icon: '../../assets/lang-icon/expressjs.png' },
        { name: 'MongoDB', icon: '../../assets/lang-icon/mgdb.png' },
        { name: 'CSS', icon: '../../assets/lang-icon/css.png' },

        // { name: 'JWT', icon: '../../assets/lang-icon/jwt.png' },
        // { name: 'Socket.io', icon: '../../assets/lang-icon/socketio.png' },
        // { name: 'WebRTC', icon: '../../assets/lang-icon/webrtc.png' },
      ],
      gitHublink: 'https://github.com/dilip12git/whatsapp-clone',
      liveLink: '',
    },
    {
      posters: [
        '../../assets/poster/tutdocs-p1.png',
        '../../assets/poster/tfeatures.png',
        '../../assets/poster/tutdocs-p0.png',
        '../../assets/poster/tutdocs-p3.jpg',
      ],
      title: 'Tutdocs-CampusLink',
      domain: 'Web development',
      descriptions: [
        'An engaging web application designed to exchange the study materials among different institutions students.',
        'Tutdocs is a web application designed to facilitate the exchange of study materials among students from different institutions. Built with AngularJS on the frontend and PHP on the backend, the platform allows users to upload, share, and download PDF and DOC files.',
        'It offers categorization, search, and filtering to make finding resources easier. The app ensures a smooth user experience with secure authentication and a responsive design.',
      ],
      features: [
        'Study Material Exchange: Allows students from different institutions to upload and share study materials. Supports PDF and DOC file formats for document exchange',
        'User Authentication: Secure login and registration system for students. Possibly supports Google or email-based authentication (if implemented)',
        'Categorized Materials: Materials can be categorized by subjects, courses, or institutions for easy access.',
        'Search and Filter: Users can search for specific study materials. Filters to sort documents based on institution, subject, or file type.',
        'Upload & Download: Students can upload documents directly from their device. Other users can download and use shared materials.',
      ],
      techStack: [
        'Frontend: Angular.Js',
        'Backend:PHP',
        'Database: SQL',
        'Authentication: JWT (JSON Web Tokens)',
      ],
      lang: [
        { name: 'AngularJS', icon: '../../assets/lang-icon/angular.png' },
        { name: 'HTML', icon: '../../assets/lang-icon/html.png' },
        { name: 'CSS', icon: '../../assets/lang-icon/css.png' },
        { name: 'PHP', icon: '../../assets/lang-icon/php.png' },
        { name: 'MySQL', icon: '../../assets/lang-icon/sql.png' },
      ],
      gitHublink: 'https://github.com/dilip12git/tutdocs',
      liveLink: '',
    },
    {
      posters: [
        '../../assets/poster/pick-p6.jpg',
        '../../assets/poster/pickup-p2.jpg',
        '../../assets/poster/pickup-p0.png',
        '../../assets/poster/pickup-p3.png',
      ],
      title: 'PickUp Lines',
      domain: 'Android App',
      descriptions: [
        'An android app where we acan explore multiple jokes, memes, chat and Shayari as well as motivational quotes',
        'This Android app, built with Java and Firebase, offers a fun and engaging platform to explore jokes, memes, Shayari, chat, and motivational quotes.',
        'It is completely free to use with no authentication required, allowing users to easily download and share content. The app provides a seamless experience for entertainment and inspiration.',
      ],
      features: [
        'Jokes & Memes: Browse a collection of funny jokes and memes. Easily share content on social media or messaging apps.',
        'Shayari Collection: Explore different categories of Shayari (romantic, sad, friendship, etc.). Copy or share Shayari directly.',
        'Motivational Quotes: Access a variety of inspirational quotes. Daily updates to keep users motivated.',
        'No Authentication Required: Open and use the app without logging in. No signup hassle, just browse and enjoy content.',
        'Download & Share: Save jokes, memes, and quotes to your device. One-click sharing on WhatsApp, Instagram, and other platforms.',
      ],
      techStack: [
        'Java: The primary programming language for Android development, offering stability and flexibility.',
        'XML: Used for designing the UI layouts, including buttons, text views, and other interactive components.',
        'Android SDK: Provides essential libraries and tools to build and test the application.',
        'Firebase Realtime Database: Stores and retrieves jokes, memes, Shayari, chats, and motivational quotes in real-time.',
        'Firebase Storage: Saves images, memes, and media files for fast access.',
      ],
      lang: [
        { name: 'Java', icon: '../../assets/lang-icon/java.png' },
        { name: 'XML', icon: '../../assets/lang-icon/xml.png' },
        { name: 'Android', icon: '../../assets/lang-icon/android.png' },
        { name: 'Firebase', icon: '../../assets/lang-icon/firebase.png' },
      ],
      gitHublink: '',
      liveLink:
        'https://drive.google.com/file/d/1f2fPvvjVyAb6wSOutGg90CqaWidpHJ9R/view?usp=sharing',
    },
    {
      posters: [
        '../../assets/poster/ex-p0.jpg',
        '../../assets/poster/ex-p1.jpg',
        '../../assets/poster/ex-p3.jpg',
        '../../assets/poster/tech.webp',
      ],
      title: 'EX2NEXT - Resale Marketplace',
      domain: 'Web development',
      descriptions: [
        'An e-commerce platform to buy and sell used goods. Seamlessly list, browse, and purchase secondhand items, supporting sustainable shopping while connecting people through a secure and efficient marketplace experience.',
        'Our platform connects sellers with buyers who are looking for quality secondhand items, promoting sustainable shopping and reducing waste.',
      ],
      features: [
        'User Authentication: Secure user registration and login.',
        'Product Listings: Users can create, edit, and delete their listings for used items.',
        'Search & Filter: Browse through products with advanced search and filtering options.',
        'Favorites: Mark and manage favorite listings for easy access.',
        'Responsive Design: Optimized for a seamless experience on both desktop and mobile.',
      ],
      techStack: [
        'Frontend: React, HTML, CSS',
        'Backend: Node.js, Express',
        'Database: MongoDB',
        'Authentication: JSON Web Tokens (JWT)',
      ],
      lang: [
        { name: 'React', icon: '../../assets/lang-icon/reactjs.png' },
        // { name: 'Next.js', icon: '../../assets/lang-icon/nextjs.png' },
        // { name: 'HTML', icon: '../../assets/lang-icon/html.png' },
        { name: 'CSS', icon: '../../assets/lang-icon/css.png' },
        { name: 'Node.js', icon: '../../assets/lang-icon/nodejs.png' },
        { name: 'Express', icon: '../../assets/lang-icon/expressjs.png' },
        { name: 'MongoDB', icon: '../../assets/lang-icon/mgdb.png' },
        // { name: 'JWT', icon: '../../assets/lang-icon/jwt.png' },
      ],
      gitHublink: 'https://github.com/dilip12git/EX2NEXT-resale-marketplace',
      liveLink: '',
    },
    {
      posters: [
        '../../assets/poster/mplayer-p0.jpg',
        '../../assets/poster/mplayer-p1.jpg',
        '../../assets/poster/mplayer-p2.png',
        '../../assets/poster/mplayer-p0.jpg',
        '../../assets/poster/mplayer-p0.jpg',
      ],
      title: 'MPlayer-Music Player',
      domain: 'Android App',
      descriptions: [
        'An Android-based music player app designed for smooth audio playback.',
        'Features include playlist management, offline playback, and media controls.',
        'Built with a user-friendly UI and optimized for performance.',
      ],
      features: [
        'Access Device Music: Automatically scans and loads all music files stored on the device.Supports multiple audio formats (MP3, WAV, AAC, etc.).',
        'Playlist Management: Create, edit, and manage custom playlists. Add or remove songs easily.',
        'Favorites Section: Mark favorite songs for quick access. Separate section to view all favorite tracks.',
        'Music Sharing: Share songs directly with friends via social media or messaging apps.',
        'Background Playback: Play music while using other apps or when the screen is off. Media controls in the notification bar for easy access.',
        'User-Friendly Interface: Simple and clean UI for smooth navigation. Dark mode and theme customization (if available).',
      ],
      techStack: [
        'React-Native: A cross-platform Android app built with React Native, leveraging JavaScript for mobile development. Ensures a responsive and smooth user experience across devices',
      ],
      lang: [
        { name: 'React Native', icon: '../../assets/lang-icon/reactjs.png' },
      ],
      gitHublink: 'https://github.com/dilip12git/music_player',
      liveLink:
        'https://drive.google.com/file/d/1vBA-9GPkU2zd6JckNcznvb73rTNKAVuY/view?usp=sharing',
    },
    {
      posters: [
        '../../assets/poster/ai-p2.jpg',
        '../../assets/poster/ch-p3.png',
        '../../assets/poster/ai-p3.jpg',
        '../../assets/poster/ai-p0.jpg',
      ],
      title: 'Chatbot Generative AI ',
      domain: 'Web development',
      descriptions: [
        'Introducing our intelligent and interactive chatbot, developed using the cutting-edge Genmi API and built with React.js!',
        'This powerful chatbot harnesses advanced generative AI to provide accurate and engaging responses to your queries, ensuring a seamless and intuitive user experience.',
      ],
      features: [
        'User Authentication: Secure user registration and login.',
        'Product Listings: Users can create, edit, and delete their listings for used items.',
        'Search & Filter: Browse through products with advanced search and filtering options.',
        'Favorites: Mark and manage favorite listings for easy access.',
        'Responsive Design: Optimized for a seamless experience on both desktop and mobile.',
      ],
      techStack: ['Frontend: ReactJS', 'JSON Web Tokens (JWT), Genmi APIs'],
      lang: [
        { name: 'React', icon: '../../assets/lang-icon/reactjs.png' },
        // { name: 'JWT', icon: '../../assets/lang-icon/jwt.png' },
        // { name: 'Genmi API', icon: '../../assets/lang-icon/api.png' },
      ],
      gitHublink: 'https://github.com/dilip12git/generative-chatbot-AI',
      liveLink: 'https://chatbot-ai-2.web.app/',
    },
    {
      posters: [
        '../../assets/poster/con-p1.jpg',
        '../../assets/poster/con-p2.jpg',
        '../../assets/poster/con-p3.png',
        '../../assets/poster/con-p4.jpg',
      ],
      title: 'Converter App',
      domain: 'Android App',
      descriptions: [
        'The Converter App is an Android application built using Java in Android Studio.',
        'This app offers a range of conversion tools, including unit conversion, currency conversion, BMI calculation, love calculation, CGPA/SGPA calculation, temperature conversion, and time conversion.',
        'It’s designed with a user-friendly interface and follows Material Design principles.',
      ],
      features: [
        'Unit Conversion: Convert between various units (e.g., length, weight, volume).',
        'Currency Conversion: Convert currencies with real-time exchange rates.',
        'BMI Calculator: Calculate Body Mass Index based on height and weight.',
        'Love Calculator: Simple fun feature to calculate compatibility.',
        'CGPA and SGPA Calculator: Calculate CGPA, SGPA, and percentage.',
        'Temperature Converter: Convert between Celsius, Fahrenheit, and Kelvin.',
        'Time Conversion: Convert between different time units (seconds, minutes, hours).',
      ],
      techStack: [
        'Java: The primary programming language for Android development, offering stability and flexibility.',
        'XML: Used for designing the UI layouts, including buttons, text views, and other interactive components.',
        'Android SDK: Provides essential libraries and tools to build and test the application.',
      ],
      lang: [
        { name: 'Java', icon: '../../assets/lang-icon/java.png' },
        { name: 'Android', icon: '../../assets/lang-icon/android.png' },
        { name: 'XML', icon: '../../assets/lang-icon/xml.png' },
      ],
      gitHublink: 'https://github.com/dilip12git/converter_android_app',
      liveLink:
        'https://drive.google.com/file/d/1fEdAwBcN1oDrJ5M2cm5qiggmqjsrW9pr/view?usp=sharing',
    },
  ];
}
