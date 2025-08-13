import { Injectable } from '@angular/core';

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveDemo?: string;
  sourceCode?: string;
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  percentage: string;
  year: string;
  description?: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon: string;
  category: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getPersonalInfo(): PersonalInfo {
    return {
      name: 'Rushikesh Dilip Narkhede',
      title: 'Software Developer | Computer Vision Engineer',
      description: 'Accomplished Software Developer with 3 years of experience in full-cycle application development, including design, coding, debugging, testing, and maintenance. Proficient in leading programming tools, with strong mathematical skills and expertise in both frontend and backend technologies.',
      email: 'rushikeshnarkhede4@gmail.com',
      phone: '+91 9637727548',
      address: 'Jijamata Chowk, Walekar wadi, Chinchwad Pune',
      linkedin: 'linkedin.com/in/rushikeshnarkhede',
      github: 'https://github.com/RushikeshNarkhedePatil'
    };
  }

  getWorkExperience(): WorkExperience[] {
    return [
      {
        title: 'Junior Software Developer',
        company: 'Varad Automation & Robotics Automations Pvt. Ltd., Pune',
        period: 'September 2022 – Present',
        description: 'Working on Product Visimaster Desktop Application specializing in delivering high-quality, automized camera-based Vision Inspection Machines and Measuring Systems. These machines can inspect more than 25 dimensions in a fraction of a second, and they offer automatic and manual data saving capabilities with Batch Wise Reports.',
        achievements: [
          'Developed and maintained the core Visimaster product application',
          'Created multiple customized projects based on client requirements',
          'Implemented advanced image processing algorithms using Halcon libraries',
          'Enhanced problem-solving skills and technical issue resolution',
          'Worked with databases including MySQL and SQLite',
          'Developed counting machine functionality using deep learning'
        ],
        technologies: ['C#', 'WPF', 'WinForms', 'Halcon', 'Prism', 'Infragistics', 'MySQL', 'SQLite']
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'Visimaster Core Product',
        description: 'Main product application for Vision Inspection Machines and Measuring Systems. Features real-time object detection, quality inspection, and dimensional measurement capabilities.',
        technologies: ['WPF', 'C#', 'Halcon', 'Prism', 'Infragistics', 'MySQL'],
        imageUrl: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Visimaster+Core+Product'
      },
      {
        name: 'VisiCounting Module',
        description: 'Advanced counting machine module using Halcon\'s deep counting functionality. Provides accurate object counting with high precision and speed.',
        technologies: ['WinForms', 'C#', 'SQLite', 'Halcon'],
        imageUrl: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=VisiCounting+Module'
      },
      {
        name: 'Customized Visimaster Projects',
        description: 'Multiple customized versions of Visimaster software adapted for various industrial applications including bearing inspection, cutting tools, and precision parts.',
        technologies: ['WPF', 'C#', 'Halcon', 'Infragistics', 'MySQL'],
        imageUrl: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Customized+Projects'
      },
      {
        name: 'Burr Inspection System',
        description: 'Specialized image processing application for detecting and analyzing burrs and surface defects in manufactured parts.',
        technologies: ['WinForms', 'C#', 'SQLite', 'Halcon'],
        imageUrl: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Burr+Inspection'
      },
      {
        name: 'Quality Control Dashboard',
        description: 'Comprehensive dashboard for monitoring quality control processes, generating reports, and analyzing inspection data.',
        technologies: ['WPF', 'C#', 'Infragistics', 'MySQL', 'Chart Controls'],
        imageUrl: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Quality+Dashboard'
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'D. Y. Patil Institute of Computer Applications and Management, Chinchwad Pune',
        university: 'Savitribai Phule Pune University',
        percentage: '84.43%',
        year: '2022',
        description: 'Specialized in software engineering and computer applications with focus on algorithm design and research'
      },
      {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'ATSS College of Business Studies & Computer Application Chinchwad Pune',
        university: 'Savitribai Phule Pune University',
        percentage: '50.00%',
        year: '2019',
        description: 'Foundation in computer science and business applications'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      // Programming Languages
      { name: 'C#', level: '90%', icon: 'fab fa-microsoft', category: 'Programming Languages' },
      { name: 'C++', level: '85%', icon: 'fas fa-code', category: 'Programming Languages' },
      { name: 'Java', level: '80%', icon: 'fab fa-java', category: 'Programming Languages' },
      { name: 'Python', level: '75%', icon: 'fab fa-python', category: 'Programming Languages' },
      { name: 'JavaScript', level: '70%', icon: 'fab fa-js', category: 'Programming Languages' },
      
      // Frameworks & Technologies
      { name: 'WPF', level: '95%', icon: 'fas fa-desktop', category: 'Frameworks & Technologies' },
      { name: 'Halcon', level: '90%', icon: 'fas fa-eye', category: 'Frameworks & Technologies' },
      { name: 'Angular', level: '75%', icon: 'fab fa-angular', category: 'Frameworks & Technologies' },
      { name: 'Prism', level: '80%', icon: 'fas fa-cube', category: 'Frameworks & Technologies' },
      { name: 'Infragistics', level: '75%', icon: 'fas fa-chart-bar', category: 'Frameworks & Technologies' },
      
      // Tools & Platforms
      { name: 'Visual Studio', level: '90%', icon: 'fas fa-tools', category: 'Tools & Platforms' },
      { name: 'Git', level: '80%', icon: 'fab fa-git', category: 'Tools & Platforms' },
      { name: 'MySQL', level: '85%', icon: 'fas fa-database', category: 'Tools & Platforms' },
      { name: 'SQLite', level: '80%', icon: 'fas fa-database', category: 'Tools & Platforms' },
      { name: 'SVN', level: '75%', icon: 'fas fa-code-branch', category: 'Tools & Platforms' }
    ];
  }

  getCertificates(): Certificate[] {
    return [
      {
        name: 'Pre-Placement Training',
        issuer: 'Marvellous Infosystem',
        year: '2020',
        description: 'Learned C, C++, and Java from basic to advanced levels'
      },
      {
        name: 'Logic Building Training',
        issuer: 'Marvellous Infosystem',
        year: '2020',
        description: 'Gained expertise in writing efficient programming logic using different approaches'
      },
      {
        name: 'Angular Full Stack Training',
        issuer: 'Training Institute',
        year: '2023',
        description: 'Completed a comprehensive training program on Angular Full Stack Development'
      },
      {
        name: 'HackerRank Certification – Competitive Coding',
        issuer: 'HackerRank',
        year: '2021',
        description: 'Earned certification for competitive coding proficiency in C programming'
      }
    ];
  }

  getAcademicProjects(): Project[] {
    return [
      {
        name: 'Online Grocery and Veggies Store',
        description: 'A web-based application developed using HTML, CSS, and JavaScript for the frontend, with PHP as the backend technology and MySQL as the database.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        imageUrl: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Grocery+Store'
      },
      {
        name: 'Ayurcare',
        description: 'A web-based application built using the Django framework (Python) for backend development. The frontend was designed with HTML, CSS, and JavaScript, while MySQL was used for database.',
        technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
        imageUrl: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Ayurcare'
      }
    ];
  }
}
