# GitHub Pages Deployment Guide

This guide will help you deploy your Angular portfolio to GitHub Pages.

## Prerequisites

1. Make sure your repository is pushed to GitHub
2. Ensure you have the necessary permissions to enable GitHub Pages

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### Manual Trigger

You can also manually trigger the deployment:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Manual Deployment

If you prefer to deploy manually:

### Using PowerShell Script

```powershell
# Run the deployment script
.\deploy.ps1
```

### Using NPM Scripts

```bash
# Build for GitHub Pages
npm run build:gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Direct Command

```bash
# Build and deploy in one command
npx angular-cli-ghpages --dir=dist/portfolio-angular
```

## Configuration

The app is configured with:
- Base href: `/Portfolio/` (matches your repository name)
- Production build optimization
- Asset optimization for production

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure the base href matches your repository name
2. **Assets not loading**: Check that all assets are properly included in the build
3. **Routing issues**: Ensure your Angular router is configured for the base href

### Check Build Output

```bash
# Verify the build output
npm run build:gh-pages
# Check the dist/portfolio-angular folder
```

### Update Base Href

If your repository name changes, update the base href in:
- `package.json` (build:gh-pages script)
- `angular.json` if needed

## Repository Structure

```
portfolio-angular/
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── deploy.ps1                    # PowerShell deployment script
├── package.json                  # NPM scripts and dependencies
└── src/                         # Angular source code
```

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all dependencies are properly installed
