
// ==========================================================================
// NAVIGATION FUNCTIONALITY
// ==========================================================================

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================================================
// THEME SWITCHING
// ==========================================================================
// Theme Toggle Elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Set default theme to dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update theme icon
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
});

// Load saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
} else {
    // Default to dark theme if no preference saved
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fas fa-sun';
}

// ==========================================================================
// NAVIGATION EFFECTS
// ==========================================================================
// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update active navigation link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================================================
// ANIMATIONS & VISUAL EFFECTS
// ==========================================================================

// Skills Progress Animation
const skillProgress = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillProgress.forEach((skill, index) => {
        setTimeout(() => {
            const targetWidth = skill.getAttribute('data-width');
            skill.style.width = targetWidth + '%';
        }, index * 100);
    });
};

// Simple Scroll-triggered Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate section headers when visible
            const sectionHeader = entry.target.querySelector('.section-header');
            if (sectionHeader) {
                sectionHeader.classList.add('animate');
            }
            
            // Animate skills when visible
            if (entry.target.id === 'skills') {
                animateSkills();
            }
            
            // Animate certifications when visible
            if (entry.target.id === 'certifications') {
                const certCards = document.querySelectorAll('.cert-card');
                certCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, index * 150);
                });
            }
        }
    });
}, { threshold: 0.3 });

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Prepare cert cards for animation
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.style.transform = 'translateY(30px)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
});

// Hero Title Animation
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
});

// ==========================================================================
// CONTACT FORM FUNCTIONALITY
// ==========================================================================
// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend)
        setTimeout(() => {
            alert('Message sent successfully! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ==========================================================================
// SCROLL TO TOP BUTTON
// ==========================================================================
// Simple Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    color: #000;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    z-index: 1000;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

// Show/Hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.transform = 'scale(1)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.transform = 'scale(0)';
    }
});

// Scroll to top when clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ==========================================================================
   END OF SCRIPT
   ========================================================================== */
