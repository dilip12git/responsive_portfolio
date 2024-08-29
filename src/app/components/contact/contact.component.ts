import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FontAwesomeModule,
    FormsModule,
    CommonModule

  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }
  faLocationArrow = faLocationArrow;
  userEmail: string = '';
  subject: string = '';
  message: string = '';
  userName: string = '';
  success:boolean=false;
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.sendEmail();
      setTimeout(() => {
        form.reset();
      }, 3000);
     
    } else {
    }
  }
  sendEmail() {
    const templateParams = {
      user_email: this.userEmail,
      from_name: this.userName,
      to_name: 'Dilip Gupta',
      message: this.message,
      reply_to: this.userEmail
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'PUBLIC_API_KEY')
      .then(response => {
        this.success=true;
        setTimeout(() => {
          this.success=false
        }, 3000);
      })
      .catch(error => {
        this.success=false;
      });
  }
}
