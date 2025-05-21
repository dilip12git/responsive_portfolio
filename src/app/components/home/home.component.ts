import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { LucideAngularModule, Download, ArrowUpRight } from 'lucide-angular';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, LucideAngularModule, RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faWhatsapp = faWhatsapp;
  readonly download = Download;
  readonly arrow = ArrowUpRight;

  constructor() {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
