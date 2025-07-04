// FlowSync Landing Page JavaScript

class FlowSyncApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupFormHandlers();
        this.setupMobileMenu();
        this.setupModals();
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });

        // Button click handlers
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', this.handleButtonClick.bind(this));
        });

        // Newsletter signup
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', this.handleNewsletterSignup.bind(this));
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactForm.bind(this));
        }

        // Pricing toggle
        const pricingToggle = document.getElementById('pricing-toggle');
        if (pricingToggle) {
            pricingToggle.addEventListener('change', this.handlePricingToggle.bind(this));
        }

        // FAQ toggles
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', this.handleFaqToggle.bind(this));
        });

        // Window events
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    setupScrollEffects() {
        // Add scroll effect to navigation
        const nav = document.querySelector('nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    nav.classList.add('shadow-lg', 'nav-glass');
                } else {
                    nav.classList.remove('shadow-lg', 'nav-glass');
                }
            });
        }

        // Parallax effect
        this.setupParallax();

        // Reveal animations on scroll
        this.setupScrollReveal();
    }

    setupAnimations() {
        // Counter animations
        this.setupCounters();

        // Progress bars
        this.setupProgressBars();

        // Floating animations
        this.setupFloatingElements();
    }

    setupFormHandlers() {
        // Real-time form validation
        document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearFieldError.bind(this));
        });
    }

    setupMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('open');
                mobileMenu.classList.toggle('closed');
                document.body.classList.toggle('overflow-hidden');
            });

            if (mobileMenuOverlay) {
                mobileMenuOverlay.addEventListener('click', () => {
                    mobileMenu.classList.add('closed');
                    mobileMenu.classList.remove('open');
                    document.body.classList.remove('overflow-hidden');
                });
            }
        }
    }

    setupModals() {
        // Video modal
        const videoButtons = document.querySelectorAll('[data-video-url]');
        videoButtons.forEach(button => {
            button.addEventListener('click', this.openVideoModal.bind(this));
        });

        // Demo modal
        const demoButtons = document.querySelectorAll('[data-demo]');
        demoButtons.forEach(button => {
            button.addEventListener('click', this.openDemoModal.bind(this));
        });

        // Close modal handlers
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    handleButtonClick(e) {
        const button = e.target;
        const buttonText = button.textContent.trim();

        // Add loading state
        const originalText = buttonText;
        button.classList.add('loading');
        button.disabled = true;

        if (buttonText.includes('Start Free Trial') || buttonText.includes('Start Your Free Trial')) {
            this.handleFreeTrial(button, originalText);
        } else if (buttonText.includes('Watch Demo') || buttonText.includes('Schedule a Demo')) {
            this.handleDemo(button, originalText);
        } else if (buttonText.includes('Contact Sales')) {
            this.handleContactSales(button, originalText);
        } else if (buttonText.includes('Subscribe') || buttonText.includes('Join')) {
            this.handleNewsletter(button, originalText);
        }
    }

    handleFreeTrial(button, originalText) {
        // Simulate API call
        setTimeout(() => {
            this.showSuccessMessage('Welcome to FlowSync! Your free trial is starting...');
            this.openTrialModal();
            this.resetButton(button, originalText);
        }, 1500);
    }

    handleDemo(button, originalText) {
        setTimeout(() => {
            this.showSuccessMessage('Demo scheduled! We\'ll be in touch soon.');
            this.openDemoModal();
            this.resetButton(button, originalText);
        }, 1000);
    }

    handleContactSales(button, originalText) {
        setTimeout(() => {
            this.showSuccessMessage('Thanks for your interest! Our sales team will contact you within 24 hours.');
            this.openContactModal();
            this.resetButton(button, originalText);
        }, 1000);
    }

    handleNewsletter(button, originalText) {
        const email = document.getElementById('newsletter-email')?.value;
        if (!email || !this.validateEmail(email)) {
            this.showErrorMessage('Please enter a valid email address.');
            this.resetButton(button, originalText);
            return;
        }

        setTimeout(() => {
            this.showSuccessMessage('Thank you for subscribing! Check your email for confirmation.');
            document.getElementById('newsletter-email').value = '';
            this.resetButton(button, originalText);
        }, 1000);
    }

    resetButton(button, originalText) {
        button.classList.remove('loading');
        button.disabled = false;
        button.textContent = originalText;
    }

    handleNewsletterSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');

        if (!this.validateEmail(email)) {
            this.showErrorMessage('Please enter a valid email address.');
            return;
        }

        // Simulate API call
        this.showLoadingMessage('Subscribing...');
        setTimeout(() => {
            this.hideLoadingMessage();
            this.showSuccessMessage('Thank you for subscribing!');
            e.target.reset();
        }, 1500);
    }

    handleContactForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        // Validate form
        const isValid = this.validateContactForm(formData);
        if (!isValid) return;

        // Simulate API call
        this.showLoadingMessage('Sending message...');
        setTimeout(() => {
            this.hideLoadingMessage();
            this.showSuccessMessage('Message sent successfully! We\'ll get back to you soon.');
            e.target.reset();
            this.closeModal();
        }, 2000);
    }

    handlePricingToggle(e) {
        const isYearly = e.target.checked;
        const prices = document.querySelectorAll('[data-monthly-price]');
        
        prices.forEach(priceElement => {
            const monthlyPrice = parseInt(priceElement.dataset.monthlyPrice);
            const yearlyPrice = Math.floor(monthlyPrice * 12 * 0.8); // 20% discount
            
            if (isYearly) {
                priceElement.textContent = `$${Math.floor(yearlyPrice / 12)}`;
                priceElement.nextElementSibling.textContent = '/month (billed yearly)';
            } else {
                priceElement.textContent = `$${monthlyPrice}`;
                priceElement.nextElementSibling.textContent = '/month';
            }
        });

        // Update savings indicator
        const savingsIndicator = document.getElementById('savings-indicator');
        if (savingsIndicator) {
            savingsIndicator.style.display = isYearly ? 'block' : 'none';
        }
    }

    handleFaqToggle(e) {
        const question = e.currentTarget;
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        answer.classList.toggle('open');
        answer.classList.toggle('closed');
        
        if (icon) {
            icon.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }

    handleScroll() {
        // Update navigation active state
        this.updateActiveNavItem();
        
        // Trigger reveal animations
        this.triggerScrollReveal();
        
        // Update parallax elements
        this.updateParallax();
    }

    handleResize() {
        // Update mobile menu state
        if (window.innerWidth > 768) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('closed');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('overflow-hidden');
            }
        }

        // Recalculate parallax
        this.setupParallax();
    }

    // Utility Methods
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const fieldType = field.type;
        const isRequired = field.hasAttribute('required');

        let isValid = true;
        let errorMessage = '';

        if (isRequired && !value) {
            isValid = false;
            errorMessage = 'This field is required.';
        } else if (fieldType === 'email' && value && !this.validateEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        } else if (fieldType === 'tel' && value && !/^\+?[\d\s-()]+$/.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }

        this.showFieldError(field, isValid, errorMessage);
        return isValid;
    }

    showFieldError(field, isValid, message) {
        const errorElement = field.parentNode.querySelector('.field-error');
        
        if (!isValid) {
            field.classList.add('border-red-500');
            field.classList.remove('border-gray-300');
            
            if (!errorElement) {
                const error = document.createElement('div');
                error.className = 'field-error text-red-500 text-sm mt-1';
                error.textContent = message;
                field.parentNode.appendChild(error);
            } else {
                errorElement.textContent = message;
            }
        } else {
            field.classList.remove('border-red-500');
            field.classList.add('border-gray-300');
            
            if (errorElement) {
                errorElement.remove();
            }
        }
    }

    clearFieldError(e) {
        const field = e.target;
        field.classList.remove('border-red-500');
        field.classList.add('border-gray-300');
        
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    validateContactForm(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        let isValid = true;

        if (!name?.trim()) {
            this.showErrorMessage('Name is required.');
            isValid = false;
        }

        if (!email?.trim() || !this.validateEmail(email)) {
            this.showErrorMessage('Valid email is required.');
            isValid = false;
        }

        if (!message?.trim()) {
            this.showErrorMessage('Message is required.');
            isValid = false;
        }

        return isValid;
    }

    // Modal Methods
    openTrialModal() {
        const modalHTML = `
            <div class="modal-overlay" id="trial-modal">
                <div class="modal-content">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold">Start Your Free Trial</h3>
                        <button class="text-gray-500 hover:text-gray-700" onclick="window.flowSyncApp.closeModal()">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <form id="trial-form">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" name="name" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Work Email</label>
                            <input type="email" name="email" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Company Name</label>
                            <input type="text" name="company" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Team Size</label>
                            <select name="team_size" class="form-select" required>
                                <option value="">Select team size</option>
                                <option value="1-5">1-5 people</option>
                                <option value="6-25">6-25 people</option>
                                <option value="26-100">26-100 people</option>
                                <option value="100+">100+ people</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary w-full btn-glow">Start Free Trial</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.getElementById('trial-form').addEventListener('submit', this.handleTrialForm.bind(this));
    }

    openDemoModal() {
        const modalHTML = `
            <div class="modal-overlay" id="demo-modal">
                <div class="modal-content">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold">Schedule a Demo</h3>
                        <button class="text-gray-500 hover:text-gray-700" onclick="window.flowSyncApp.closeModal()">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="video-container mb-6">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
                    </div>
                    <form id="demo-form">
                        <div class="form-group">
                            <label class="form-label">Preferred Demo Date</label>
                            <input type="date" name="demo_date" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Preferred Time</label>
                            <select name="demo_time" class="form-select" required>
                                <option value="">Select time</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary w-full">Schedule Demo</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.getElementById('demo-form').addEventListener('submit', this.handleDemoForm.bind(this));
    }

    openContactModal() {
        const modalHTML = `
            <div class="modal-overlay" id="contact-modal">
                <div class="modal-content">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold">Contact Sales</h3>
                        <button class="text-gray-500 hover:text-gray-700" onclick="window.flowSyncApp.closeModal()">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <form id="contact-sales-form">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" name="name" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Work Email</label>
                            <input type="email" name="email" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" name="phone" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Company Name</label>
                            <input type="text" name="company" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Message</label>
                            <textarea name="message" class="form-textarea" placeholder="Tell us about your needs..."></textarea>
                        </div>
                        <button type="submit" class="btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.getElementById('contact-sales-form').addEventListener('submit', this.handleContactSalesForm.bind(this));
    }

    closeModal() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.remove();
        });
    }

    // Form handlers for modals
    handleTrialForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        this.showLoadingMessage('Setting up your trial...');
        setTimeout(() => {
            this.hideLoadingMessage();
            this.showSuccessMessage('Your free trial has been activated! Check your email for login details.');
            this.closeModal();
        }, 2000);
    }

    handleDemoForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        this.showLoadingMessage('Scheduling your demo...');
        setTimeout(() => {
            this.hideLoadingMessage();
            this.showSuccessMessage('Demo scheduled successfully! We\'ll send you a calendar invite.');
            this.closeModal();
        }, 1500);
    }

    handleContactSalesForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        this.showLoadingMessage('Sending your message...');
        setTimeout(() => {
            this.hideLoadingMessage();
            this.showSuccessMessage('Message sent! Our sales team will contact you within 24 hours.');
            this.closeModal();
        }, 1500);
    }

    // Message Methods
    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    showLoadingMessage(message) {
        this.showMessage(message, 'loading');
    }

    hideLoadingMessage() {
        const loadingMessage = document.querySelector('.loading-message');
        if (loadingMessage) {
            loadingMessage.remove();
        }
    }

    showMessage(message, type = 'success') {
        // Remove existing messages
        document.querySelectorAll('.toast-message').forEach(msg => msg.remove());

        const messageClass = type === 'error' ? 'error-message' : 
                           type === 'loading' ? 'loading-message bg-blue-500' : 'success-message';
        
        const messageHTML = `
            <div class="${messageClass} toast-message show">
                ${type === 'loading' ? '<div class="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>' : ''}
                ${message}
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', messageHTML);

        if (type !== 'loading') {
            setTimeout(() => {
                const msg = document.querySelector('.toast-message');
                if (msg) {
                    msg.classList.remove('show');
                    msg.classList.add('hide');
                    setTimeout(() => msg.remove(), 300);
                }
            }, 3000);
        }
    }

    // Animation Methods
    setupCounters() {
        const counters = document.querySelectorAll('.stat-counter');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const duration = parseInt(counter.dataset.duration || 2000);
                    
                    this.animateCounter(counter, target, duration);
                    observer.unobserve(counter);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element, target, duration) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }

    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const fill = progressBar.querySelector('.progress-fill');
                    const percentage = progressBar.dataset.percentage;
                    
                    setTimeout(() => {
                        fill.style.width = percentage + '%';
                    }, 500);
                    
                    observer.unobserve(progressBar);
                }
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    }

    setupFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        this.parallaxElements = Array.from(parallaxElements).map(element => ({
            element,
            speed: parseFloat(element.dataset.speed || 0.5),
            yPos: 0
        }));
    }

    updateParallax() {
        if (!this.parallaxElements) return;

        const scrollTop = window.pageYOffset;

        this.parallaxElements.forEach(item => {
            const { element, speed } = item;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }

    setupScrollReveal() {
        const revealElements = document.querySelectorAll('[data-reveal]');
        
        this.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            element.classList.add('reveal-element');
            this.revealObserver.observe(element);
        });
    }

    triggerScrollReveal() {
        // This method is called on scroll to trigger any additional reveal animations
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Custom reveal logic can go here
    }

    updateActiveNavItem() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.flowSyncApp = new FlowSyncApp();
});

// Add some utility functions to window for global access
window.FlowSyncUtils = {
    formatPrice: (price, currency = '$') => {
        return `${currency}${price.toLocaleString()}`;
    },
    
    formatDate: (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let lastFunc;
        let lastRan;
        return function executedFunction(...args) {
            if (!lastRan) {
                func(...args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if ((Date.now() - lastRan) >= limit) {
                        func(...args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }
};

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
