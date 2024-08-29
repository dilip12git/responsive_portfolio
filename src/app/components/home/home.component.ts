import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
faWhatsapp=faWhatsapp
ngOnInit(): void {
  window.scrollTo(0, 0); 
}
}
