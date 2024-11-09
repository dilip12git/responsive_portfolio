import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAndroid,faFirefoxBrowser,faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  faLink=faLink
  faAndroid=faAndroid
  faFirefoxBrowser=faFirefoxBrowser;
  faGithub=faGithub;
  faTimes=faTimes;
  selectedDomain: string = 'All';
  isOpen:boolean=false;
  openProject:any;

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }

  liveDemo(link:any) {
    window.open(link, '_blank'); 
  }
  openCode(link:any) {
    window.open(link, '_blank'); 
  }
  viewDetail(item:any){
     this.isOpen=true;
     this.openProject=item;
  }
  closeItemView(){
    this.isOpen=false;
  }
  items = [
    {
      poster: '../../assets/poster/tutdocs-p1.png',
      title: 'Tutdocs-CampusLink',
      domain: 'Web development',
      description: 'An engaging web application designed to exchange the study materials among different institutions students.',
      techStack: 'Frontend- AngularJs, Backend- PHP and Database- MySQL',
      gitHublink:'https://github.com/dilip12git/tutdocs',
      liveLink:''
    },
    {
      poster: '../../assets/poster/pick-p6.png',
      title: 'PickUp Lines',
      domain: 'Android App',
      description: 'An android app where we acan explore multiple jokes, memes, chat and Shayari as well as motivational quotes',
      techStack: 'Android Java and  Firebase',
      gitHublink:'',
      liveLink:''


    },
    {
      poster: '../../assets/poster/ex-p2.png',
      title: 'EX2NEXT e-commerce',
      domain: 'Web development',
      description: 'An e-commerce platform to buy and sell used goods. Seamlessly list, browse, and purchase secondhand items, supporting sustainable shopping while connecting people through a secure and efficient marketplace experience.',
      techStack: 'MERN Stack',
      gitHublink:'https://github.com/dilip12git/EX2NEXT-resale-marketplace',
      liveLink:''


    },
  
    {
      poster: '../../assets/poster/m-p4.png',
      title: 'mPlayer-Music Player',
      domain: 'Android App',
      description: 'MPlayer- A music player android app',
      techStack: 'React-Native',
      gitHublink:'https://github.com/dilip12git/music_player',
      liveLink:'https://drive.google.com/file/d/1vBA-9GPkU2zd6JckNcznvb73rTNKAVuY/view?usp=sharing'


    },
    {
      poster: '../../assets/poster/ch-p3.png',
      title: 'ChatBot-AI',
      domain: 'Web development',
      description: 'ChatBot Generative AI',
      techStack: 'ReactJs, Genmi APIs',
      gitHublink:'https://github.com/dilip12git/generative-chatbot-AI',
      liveLink:'https://chatbot-ai-2.web.app/'

    },
    {
      poster: '../../assets/poster/con-p5.png',
      title: 'Converter',
      domain: 'Android App',
      description: 'An Unit converter android app',
      techStack: 'Android Java',
      gitHublink:'https://github.com/dilip12git/tutdocs',
      liveLink:''

    },
 
  ];


}
