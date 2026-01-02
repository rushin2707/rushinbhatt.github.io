# Rushin Bhatt - Portfolio Website

A modern, fully responsive portfolio website showcasing Rushin Bhatt's journey as a Data Science graduate student at Columbia University, featuring his experience in Machine Learning, AI, and software development.

## 🚀 **Live Demo**
Visit the live portfolio at: [http://localhost:8000](http://localhost:8000) (when running locally)

## ✨ **Key Features**

### 🎨 **Modern Design**
- Sleek dark theme with cyan gradient accents
- Smooth animations and micro-interactions
- Fully responsive design (mobile, tablet, desktop)
- Interactive collapsible sections with arrow toggles
- Professional typography and spacing

### 📋 **Complete Portfolio Sections**
- **Hero Section**: Eye-catching introduction with social links and CTA buttons
- **About Section**: Professional bio, core competencies, and technical skills
- **Education Section**: Academic background (Columbia MS Data Science, PDEU BTech CS, Riverside IGCSE)
- **Experience Section**: Timeline view of 5 professional internships (Fynd, Dolcera, Visity, Source Pro, SciKnowTech)
- **Projects Section**: 12 featured projects including AI/ML applications, web development, and research
- **Publications Section**: Research papers and conference publications
- **Achievements Section**: Music performances, sports, certifications, and community leadership
- **Languages Section**: Language proficiencies table
- **Contact Section**: Direct contact information and social media links
- **Pitch Section**: Interactive message form for potential opportunities

### ⚡ **Interactive Features**
- Smooth page scrolling navigation
- Mobile-responsive hamburger menu
- Active navigation highlighting
- Collapsible sections (except Contact section)
- Hover effects and animations
- Keyboard navigation support
- Form submission with status feedback

## 🛠 **Technology Stack**

### **Frontend**
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: DOM manipulation, event handling
- **Font Awesome**: Icon library for visual elements

### **Key Technologies Featured**
- **Machine Learning & AI**: TensorFlow, PyTorch, Scikit-learn, LLMs, LangChain, CrewAI
- **Programming Languages**: Python, JavaScript, Java, C, R, SQL
- **Web Technologies**: React.js, Node.js, MERN Stack, FastAPI, Django/Flask
- **Cloud & Tools**: AWS, GCP, Kubernetes, Power BI, Tableau, Git

## 📁 **Project Structure**

```
portfolio/
├── index.html                    # Main HTML file (~45KB)
├── css/
│   └── style.css                # Complete styling (~40KB)
├── js/
│   └── script.js                # Interactive features (~10KB)
├── assets/                      # Profile images and media
│   └── profile.jpg
├── certificates.pdf             # Certifications PDF
├── internship.pdf               # Internship certificates
├── music.pdf                    # Music performance details
├── sports.pdf                   # Sports achievements
├── volunteering.pdf             # Community service
├── trinity.pdf                  # Music certifications
├── RUSHIN_RESUME.pdf            # Complete resume
├── headshot.png                 # Profile photo
├── columbia.png                 # Columbia University logo
├── pdpu.png                     # PDEU logo
├── riverside.jpeg               # Riverside School logo
└── logos/                       # Company logos
    ├── fynd.png
    ├── dolcera.png
    ├── visity.png
    ├── sourcepro.jpeg
    └── skt.jpeg
```

## 🚀 **Getting Started**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server for proper functionality

### **Quick Start**
1. **Clone or download** the portfolio files
2. **Navigate to project directory:**
   ```bash
   cd /Users/rushin/portfolio
   ```
3. **Start local server:**
   ```bash
   python3 -m http.server 8000
   ```
4. **Open in browser:** `http://localhost:8000`

### **Alternative Server Options**
```bash
# Node.js (install http-server first)
npm install -g http-server
http-server

# PHP
php -S localhost:8000
```

## 🎯 **Portfolio Highlights**

### **Professional Experience**
- **Machine Learning Intern** at Fynd (Shopsense Retail Technologies) - AI catalog enrichment
- **ML Research & Development** at Dolcera Corporation - LLM productivity optimization
- **Software Engineering** at Visity - Customer chatbot development
- **Full-Stack Development** at Source Pro Infotech - Enterprise chatbots
- **Data Analysis** at SciKnowTech - Student performance analytics

### **Academic Background**
- **MS Data Science** at Columbia University (2025-2027)
- **BTech Computer Science** at PDEU (2021-2025, GPA: 3.7/4.0)
- **IGCSE, AS & A Levels** at The Riverside School (2009-2021)

### **Technical Expertise**
- **AI/ML**: Advanced ML algorithms, LLMs, Agentic AI, Computer Vision
- **Data Science**: Statistical modeling, data visualization, big data analytics
- **Software Development**: Full-stack web development, API design, system architecture
- **Creative Skills**: Digital music production, audio engineering, performance

### **Research & Publications**
- **Published**: 3 papers in IEEE and Springer conferences
- **Under Review**: Computer Music Journal (MIT) publication
- **Research Areas**: Football analytics, music technology, security in education

## 📱 **Responsive Design**
- **Mobile-First**: Optimized for phones and tablets
- **Tablet Layout**: Adaptive grid systems and navigation
- **Desktop Experience**: Full feature set with enhanced interactions
- **Touch-Friendly**: All interactive elements sized for touch

## 🎨 **Customization Guide**

### **Color Scheme**
The portfolio uses CSS custom properties for easy theming:
```css
:root {
    --primary-color: #888888;     /* Main cyan */
    --secondary-color: #666666;   /* Darker cyan */
    --accent-color: #999999;      /* Light cyan */
    --dark-bg: #000000;          /* Pure black */
    --light-text: #d0d0d0;       /* Light gray */
}
```

### **Adding New Content**
1. **Projects**: Duplicate project cards in the Projects section
2. **Experience**: Add new timeline items in Experience section
3. **Publications**: Add publication entries with proper formatting
4. **Skills**: Update skill tags in the About section

### **Contact Information**
- **Email**: rsb2213@columbia.edu
- **Phone**: +1-646-255-2839
- **Location**: New York, NY
- **LinkedIn**: [linkedin.com/in/rushin-bhatt](https://linkedin.com/in/rushin-bhatt)
- **GitHub**: [github.com/rushin2707](https://github.com/rushin2707)

## 🌐 **Browser Support**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 **Performance**
- **Total Size**: ~95KB (lightweight and fast)
- **Load Time**: <1 second on modern connections
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Optimized Images**: Compressed logos and assets

## 🚀 **Deployment Options**

### **Free Hosting Platforms**
1. **GitHub Pages**: `username.github.io` repository
2. **Netlify**: Drag-and-drop deployment
3. **Vercel**: GitHub integration
4. **Firebase Hosting**: Google's hosting solution

### **Quick GitHub Pages Deployment**
```bash
# Create repository: rushin2707.github.io
git init
git add .
git commit -m "Initial portfolio deployment"
git remote add origin https://github.com/rushin2707/rushin2707.github.io.git
git push -u origin main
```

## ♿ **Accessibility**
- Semantic HTML5 structure
- WCAG color contrast compliance
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on all interactive elements

## 🔧 **Development Notes**

### **JavaScript Features**
- Section collapse/expand functionality
- Mobile menu toggle
- Form submission handling
- Smooth scrolling navigation
- Active link highlighting

### **CSS Architecture**
- CSS custom properties for theming
- Flexbox and CSS Grid layouts
- Responsive breakpoints
- Animation keyframes
- Dark theme optimized

### **File Organization**
- Modular CSS with clear sections
- Commented JavaScript functions
- Semantic HTML structure
- Optimized asset loading

## 📈 **Future Enhancements**
- [ ] Blog section for technical articles
- [ ] Project filtering/search functionality
- [ ] Dark/light theme toggle
- [ ] Backend contact form integration
- [ ] Project demo videos
- [ ] Real-time visitor analytics
- [ ] Progressive Web App (PWA) features

## 🐛 **Troubleshooting**

**Sections not collapsing?**
- Ensure JavaScript is enabled
- Check browser console for errors (F12 → Console)

**Styles not loading?**
- Verify file paths in HTML
- Clear browser cache (Ctrl+Shift+R)

**Mobile menu issues?**
- Test on actual mobile device
- Check viewport meta tag

**Form not submitting?**
- Ensure internet connection for Formspree
- Check form validation requirements

## 📞 **Support**
Need help customizing this portfolio?
- Check code comments in HTML, CSS, and JS files
- Review the customization guide above
- Contact: rsb2213@columbia.edu

## 📄 **License**
This portfolio is open source and available under the MIT License. Feel free to use it as a template for your own projects!

---

**👨‍💻 Created by**: Rushin Bhatt
**📅 Created**: January 2026
**🔄 Last Updated**: January 2026
**🌟 Version**: 2.0
