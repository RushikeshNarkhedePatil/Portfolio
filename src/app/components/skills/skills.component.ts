import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.animateSkillBars();
  }

  private animateSkillBars() {
    if (typeof document !== 'undefined' && typeof IntersectionObserver !== 'undefined') {
      const skillBars = document.querySelectorAll('.skill-bar');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBar = entry.target as HTMLElement;
            const level = skillBar.getAttribute('data-level');
            if (level) {
              skillBar.style.width = level + '%';
            }
          }
        });
      }, { threshold: 0.5 });

      skillBars.forEach(bar => observer.observe(bar));
    }
  }
}
