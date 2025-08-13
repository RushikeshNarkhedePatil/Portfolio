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

  ngOnInit() {
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

  

  private setupScrollEffect() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
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
