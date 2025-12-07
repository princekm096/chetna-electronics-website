// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling (backup for browsers that don't support CSS scroll-behavior)
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

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// EmailJS Initialization
// Credentials are loaded from config.js (which is gitignored)
(function() {
    emailjs.init(EMAIL_CONFIG.publicKey);
})();

// Form Submission Handler with EmailJS
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disable submit button and show loading state
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Prepare template parameters
    const templateParams = {
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        phone: contactForm.phone.value,
        service: contactForm.service.options[contactForm.service.selectedIndex].text,
        message: contactForm.message.value,
        to_email: 'info@chetnaelectronics.com'
    };

    // Send email using EmailJS
    // Credentials are loaded from config.js (which is gitignored)
    emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            alert('✅ Thank you for your message! We will contact you soon at ' + templateParams.from_email);

            // Reset form
            contactForm.reset();

            // Re-enable submit button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        })
        .catch((error) => {
            console.error('FAILED...', error);

            // Show error message
            alert('❌ Sorry, there was an error sending your message. Please try again or contact us directly at info@chetnaelectronics.com');

            // Re-enable submit button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(26, 43, 74, 0.95)';
    } else {
        navbar.style.background = 'var(--primary-color)';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll('.service-card, .why-card, .about-content, .contact-content');
elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat h4');

const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
        if (current < target) {
            current += increment;
            element.textContent = Math.ceil(current) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = element.textContent;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});