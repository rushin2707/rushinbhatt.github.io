# Rushin Bhatt - Portfolio Website

A modern, fully responsive portfolio website showcasing your professional experience, projects, publications, and achievements.

## Features

✨ **Modern Design**
- Sleek dark theme with gradient accents
- Smooth animations and transitions
- Fully responsive design (mobile, tablet, desktop)
- Interactive navigation with smooth scrolling

🎯 **Complete Sections**
- **Hero Section**: Eye-catching introduction with CTA buttons
- **About Section**: Professional bio and skills categorized by expertise
- **Experience Section**: Timeline view of all professional internships
- **Projects Section**: Featured projects with technology tags
- **Publications Section**: Research papers and publications
- **Achievements Section**: Milestones and interests
- **Contact Section**: Easy ways to get in touch

⚡ **Interactive Features**
- Smooth page scrolling
- Mobile-responsive hamburger menu
- Active navigation highlighting
- Scroll reveal animations
- Back-to-top button
- Hover effects on all interactive elements
- Keyboard navigation support

📱 **Responsive Design**
- Optimized for all screen sizes
- Mobile-first approach
- Touch-friendly navigation
- Tablet and desktop layouts

## Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Interactive features
└── assets/             # (For future images, icons, etc.)
```

## Getting Started

### Option 1: Local Server (Recommended)

1. **Using Python 3:**
   ```bash
   cd /Users/rushin/portfolio
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Using Node.js (http-server):**
   ```bash
   npm install -g http-server
   cd /Users/rushin/portfolio
   http-server
   ```

3. **Using PHP:**
   ```bash
   cd /Users/rushin/portfolio
   php -S localhost:8000
   ```

### Option 2: Direct File Opening
Simply double-click `index.html` to open in your default browser.

## Customization Guide

### 1. Update Contact Information
Edit `index.html` and find the contact section to update:
- Email: `rsb2213@columbia.edu`
- Phone: `+1-646-255-2839`
- Location: `New York, NY`
- Social links (GitHub, LinkedIn)

### 2. Modify Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #667eea;      /* Main blue */
    --secondary-color: #764ba2;    /* Purple */
    --accent-color: #f093fb;       /* Pink */
    --dark-bg: #0f0c29;           /* Dark background */
    /* ... more colors ... */
}
```

### 3. Update Experience
Find the experience section in `index.html` and update:
- Job titles
- Company names
- Dates
- Job descriptions and achievements

### 4. Add New Projects
In the projects section, duplicate a project card and update:
- Project name
- Description
- Technologies used
- Add links if available

### 5. Add Publications
Update the publications section with your latest papers:
- Title
- Journal/Conference name
- Status (Published/Under Review)
- Description

### 6. Customize Skills
In the About section, update skill tags:
- Add/remove programming languages
- Update ML & AI tools
- Modify data tools and frameworks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS and JavaScript
- Fast loading times
- Smooth animations without jank
- Lazy loading compatible (future enhancement)

## Hosting Options

### Free Hosting Platforms:
1. **GitHub Pages** - Perfect for portfolios
2. **Netlify** - Easy deployment from GitHub
3. **Vercel** - Great for modern web projects
4. **Firebase Hosting** - Google's hosting solution
5. **AWS S3** - Affordable static hosting

### To Deploy on GitHub Pages:
1. Create a GitHub repository named `username.github.io`
2. Push the portfolio files to the repository
3. Your site will be live at `https://username.github.io`

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast ratios meet WCAG standards
- Keyboard navigation support
- Focus indicators on interactive elements

## Future Enhancements

Consider adding:
- Blog section for articles
- Filter/search for projects
- Dark/light theme toggle
- Contact form with backend
- Project images and demos
- Resume PDF download
- Testimonials section
- Real-time analytics

## File Sizes

- `index.html`: ~30KB
- `css/style.css`: ~35KB
- `js/script.js`: ~8KB
- **Total**: ~73KB (very lightweight!)

## Tips for Best Results

1. **Update Social Links**: Make sure GitHub and LinkedIn URLs are correct
2. **Keep Content Fresh**: Update projects and experience regularly
3. **Add Images**: Create an `assets/images/` folder for project screenshots
4. **Mobile Testing**: Test on your phone before sharing
5. **SEO**: Update meta tags in `<head>` for better search visibility
6. **Analytics**: Consider adding Google Analytics for visitor insights

## Troubleshooting

**Mobile menu not working?**
- Ensure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Styles not loading?**
- Verify CSS file path in HTML
- Clear browser cache (Ctrl+Shift+Delete)

**Links not scrolling?**
- Ensure `script.js` is loaded properly
- Check that section IDs match href values

## License

Feel free to use this portfolio template for your own projects!

## Support

Need help customizing? Check the code comments in:
- `index.html` - HTML structure
- `css/style.css` - Styling with comments
- `js/script.js` - JavaScript functionality

Happy to help! Reach out if you have questions.

---

**Created**: 2025
**Last Updated**: January 1, 2025
