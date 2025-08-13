import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, PersonalInfo } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
  }
}
