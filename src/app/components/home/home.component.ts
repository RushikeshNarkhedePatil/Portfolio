import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, PersonalInfo } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
    this.checkImageExists();
  }

  checkImageExists(): void {
    const img = new Image();
    img.onload = () => {
      console.log('✅ Profile image exists and loaded successfully');
    };
    img.onerror = () => {
      console.log('❌ Profile image failed to load');
    };
    img.src = 'assets/profile-photo.jpg';
  }
}
