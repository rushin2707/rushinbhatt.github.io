// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.project-card, .education-card, .achievement-card, .publication-item, .experience-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// TYPEWRITER EFFECT (Optional - for hero subtitle)
// ==========================================
function typewriterEffect(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==========================================
// COUNTER ANIMATION (if you want to add statistics)
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==========================================
// SMOOTH SCROLL BEHAVIOR ENHANCEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==========================================
// BACK TO TOP BUTTON (Optional Enhancement)
// ==========================================
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'scale(1.1)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'scale(1)';
    });
}

// Create back to top button on page load
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ==========================================
// PITCH FORM HANDLING
// ==========================================
const pitchForm = document.getElementById('pitch-form');
const pitchStatus = document.getElementById('pitch-status');

if (pitchForm) {
    pitchForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(pitchForm);
        const submitBtn = pitchForm.querySelector('.pitch-submit');
        const originalIcon = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        pitchStatus.textContent = 'Sending...';
        pitchStatus.className = '';
        
        try {
            const response = await fetch(pitchForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                pitchStatus.textContent = 'Sent! I\'ll get back to you soon!';
                pitchStatus.className = 'success';
                pitchForm.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            pitchStatus.textContent = 'Something went wrong. Please try again.';
            pitchStatus.className = 'error';
        }
        
        submitBtn.innerHTML = originalIcon;
        submitBtn.disabled = false;
        
        // Clear status after 5 seconds
        setTimeout(() => {
            pitchStatus.textContent = '';
            pitchStatus.className = '';
        }, 5000);
    });
}

// ==========================================
// CONTACT FORM VALIDATION (Optional)
// ==========================================
function setupFormValidation() {
    const form = document.querySelector('form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            // Show success message
            alert('Thanks for your message! I\'ll get back to you soon.');
            form.reset();
        }
    });
}

document.addEventListener('DOMContentLoaded', setupFormValidation);

// ==========================================
// PARALLAX EFFECT (Optional - subtle)
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero::before');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==========================================
// ADD LOADING STATE TO LINKS
// ==========================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add optional loading feedback
        const originalText = this.textContent;
        
        // Could add loading state here if desired
        // this.textContent = 'Opening...';
        // setTimeout(() => {
        //     this.textContent = originalText;
        // }, 500);
    });
});

// ==========================================
// HANDLE VISIBILITY CHANGE
// ==========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden
        document.title = 'Come back! 👋 - Rushin Bhatt';
    } else {
        // Page is visible
        document.title = 'Rushin Bhatt - Portfolio';
    }
});

console.log('Portfolio loaded successfully! 🚀');
