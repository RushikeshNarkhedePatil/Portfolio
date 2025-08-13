import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService, PersonalInfo } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
