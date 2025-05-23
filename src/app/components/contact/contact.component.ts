import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
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
  userName: string = '';
  userEmail: string = '';
  message: string = '';
  success: boolean = false;
  error: boolean = false;
  showErrors: boolean = false; 

<<<<<<< HEAD
  onSubmit(form: NgForm) {
    this.showErrors = true; 

    if (form.invalid) return; 

    const mailtoLink = `mailto:dilipg44u@gmail.com?subject=Inquiry from Portfolio&body=Hello Dilip,%0D%0A%0D%0A %0D%0A%0D%0A${encodeURIComponent(this.message)}`;

    window.location.href = mailtoLink;

    this.success = true;
    this.error = false;

    form.resetForm();
    this.showErrors = false; 
=======
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
>>>>>>> 07360584accc4511333d45a94b2bbdd27ceb1f37
  }
}
