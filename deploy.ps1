# PowerShell script to deploy Angular app to GitHub Pages
Write-Host "Building Angular app for GitHub Pages..." -ForegroundColor Green
npm run build:gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Deploying to GitHub Pages..." -ForegroundColor Green
    npx angular-cli-ghpages --dir=dist/portfolio-angular
} else {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}
