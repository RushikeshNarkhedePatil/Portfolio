# Rushikesh Narkhede - Portfolio

A modern, responsive portfolio website built with Angular 17, showcasing my skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **SEO Optimized**: Meta tags and structured content for better search visibility

## 🛠️ Technologies Used

- **Frontend**: Angular 17, TypeScript, SCSS
- **Styling**: CSS Variables, Flexbox, Grid, Animations
- **Icons**: Font Awesome 6
- **Fonts**: Inter, Poppins (Google Fonts)
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   ├── education/
│   │   │   ├── skills/
│   │   │   ├── contact/
│   │   │   └── navigation/
│   │   ├── services/
│   │   └── app.component.ts
│   ├── assets/
│   └── styles.scss
├── dist/
└── angular.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   ng serve
   ```
   Open `http://localhost:4200` in your browser.

4. **Build for production**
   ```bash
   ng build --configuration=production
   ```

## 🌐 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   ng build --configuration=production
   ```

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to Repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select `main` branch and `/docs` folder
   - Or use GitHub Actions for automatic deployment

3. **Alternative: Deploy from dist folder**
   - Copy contents of `dist/portfolio-angular/browser/` to your repository root
   - Push to GitHub
   - Enable GitHub Pages from the main branch

### Netlify

1. **Build the project**
   ```bash
   ng build --configuration=production
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist/portfolio-angular/browser/` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Vercel

1. **Build the project**
   ```bash
   ng build --configuration=production
   ```

2. **Deploy to Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory
   - Or connect your GitHub repository for automatic deployments

## 📱 Customization

### Personal Information
Update your information in `src/app/services/portfolio-data.service.ts`:
- Personal details
- Work experience
- Projects
- Skills
- Education
- Certificates

### Styling
Modify the design system in `src/styles.scss`:
- Color variables
- Typography
- Spacing
- Animations

### Components
Each component has its own SCSS file for specific styling:
- `src/app/components/*/component-name.component.scss`

## 🔧 Configuration

### Angular Configuration
- **Budget Limits**: Modified in `angular.json` for CSS file sizes
- **Assets**: Configured for proper image and file handling
- **Build Output**: Set to `dist/portfolio-angular`

### Routing
- **Base Href**: Set to `./` for relative paths
- **404 Handling**: Includes SPA routing support for GitHub Pages

## 📊 Performance

- **Bundle Size**: Optimized with production build
- **CSS**: Minified and optimized
- **Images**: Optimized and compressed
- **Lazy Loading**: Components loaded on demand

## 🌙 Dark Mode

The portfolio includes a dark mode toggle with:
- Persistent theme preference (localStorage)
- Smooth transitions between themes
- Optimized color schemes for both modes

## 📧 Contact

- **Email**: rushikeshnarkhede4@gmail.com
- **LinkedIn**: linkedin.com/in/rushikeshnarkhede
- **GitHub**: github.com/RushikeshNarkhedePatil

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Angular 17**
