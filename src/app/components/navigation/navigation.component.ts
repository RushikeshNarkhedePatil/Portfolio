import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  isMenuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    this.loadTheme();
    this.setupScrollEffect();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
      }
    }
  }

  private loadTheme() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
          const icon = themeToggle.querySelector('i');
          if (icon) {
            icon.className = 'fas fa-sun';
          }
        }
      }
    }
  }

  private setupScrollEffect() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (this.isDarkMode) {
              navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            }
          } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (this.isDarkMode) {
              navbar.style.background = 'rgba(26, 32, 44, 0.95)';
            }
          }
        }
      });
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }
}
