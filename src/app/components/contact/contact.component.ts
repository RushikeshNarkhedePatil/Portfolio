import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.formData);
      
      // For now, just show an alert
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset the form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
