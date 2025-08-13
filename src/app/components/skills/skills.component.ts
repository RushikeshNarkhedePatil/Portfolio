import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Skill } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.skills = this.portfolioDataService.getSkills();
  }

  getSkillPercentage(level: string): number {
    // Extract percentage from string like "90%" -> 90
    const percentage = parseInt(level.replace('%', ''));
    return isNaN(percentage) ? 0 : percentage;
  }

  getSkillLevelClass(level: string): string {
    const percentage = this.getSkillPercentage(level);
    if (percentage >= 90) return 'expert';
    if (percentage >= 80) return 'advanced';
    if (percentage >= 70) return 'intermediate';
    return 'beginner';
  }
}
