# Portfolio Website

A modern, responsive portfolio website inspired by professional designs. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated progress bars
- **Contact Form**: Functional contact form with validation
- **Loading Animation**: Professional preloader
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Social Media Integration**: Links to social platforms
- **SEO Friendly**: Proper HTML structure and meta tags

## Sections

1. **Hero/Home**: Introduction with profile image and social links
2. **About**: Personal information and statistics
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Portfolio showcase with project cards
5. **Contact**: Contact information and contact form
6. **Footer**: Copyright and additional links

## Getting Started

1. Clone or download the files to your computer
2. Open `index.html` in your web browser
3. Customize the content to match your personal information

## Customization

### Personal Information
- Replace "Your Name" with your actual name in `index.html`
- Update the hero description and about section text
- Add your real contact information (email, phone, location)
- Replace social media links with your actual profiles

### Images
- Replace placeholder images with your actual photos
- Recommended sizes:
  - Profile image: 400x400px
  - About image: 500x600px
  - Project images: 400x250px

### Colors
You can customize the color scheme by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;     /* Main brand color */
    --secondary-color: #764ba2;   /* Secondary brand color */
    --accent-color: #f093fb;      /* Accent color */
    /* ... other color variables ... */
}
```

### Skills
Update the skills section in `index.html`:
- Change skill names
- Modify progress percentages using `data-width` attribute
- Add or remove skill categories

### Projects
Customize the projects section:
- Replace project images
- Update project titles and descriptions
- Modify technology tags
- Add real project links

### Contact Form
The contact form includes:
- Client-side validation
- Success/error notifications
- Responsive design

To make it functional with a backend:
1. Add a form action URL
2. Implement server-side processing
3. Connect to your email service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (partial support)

## Performance Features

- Optimized CSS animations
- Lazy loading effects
- Compressed images recommended
- Minimal JavaScript for fast loading

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Additional Enhancements

You can further enhance the website by:

1. **Adding a Blog Section**: For sharing articles or tutorials
2. **Implementing Dark/Light Theme**: Toggle between themes
3. **Adding More Animations**: Using libraries like AOS or GSAP
4. **Integrating Analytics**: Google Analytics for visitor tracking
5. **Adding More Projects**: Expand the portfolio section
6. **Creating Subpages**: Detailed project pages
7. **Adding Testimonials**: Client feedback section

## Deployment

You can deploy this website to:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Free with custom domain support
- **Vercel**: Free hosting with great performance
- **Your own web server**: Upload files via FTP

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `username.github.io/repository-name`

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing the website or encounter any issues:

1. Check the browser console for errors
2. Ensure all file paths are correct
3. Validate your HTML and CSS
4. Test on different devices and browsers

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Placeholder images from placeholder.com

---

**Note**: Remember to replace all placeholder content with your actual information and images before deploying your portfolio website.
