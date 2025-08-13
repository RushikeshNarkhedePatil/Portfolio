import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Project } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  academicProjects: Project[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.projects = this.portfolioDataService.getProjects();
    this.academicProjects = this.portfolioDataService.getAcademicProjects();
    
    // Debug: Log the projects to see what's happening
    console.log('Professional Projects:', this.projects);
    console.log('Academic Projects:', this.academicProjects);
    
    // Debug: Check image URLs
    this.academicProjects.forEach(project => {
      console.log(`Project: ${project.name}, Image URL: ${project.imageUrl}`);
    });
  }

  onImageError(event: any, projectName: string): void {
    console.log(`Image failed to load for project: ${projectName}`);
    // Set fallback image
    event.target.src = `https://via.placeholder.com/400x250/764ba2/ffffff?text=${encodeURIComponent(projectName)}`;
  }

  onImageLoad(event: any, projectName: string): void {
    console.log(`Image loaded successfully for project: ${projectName}`);
  }
}
