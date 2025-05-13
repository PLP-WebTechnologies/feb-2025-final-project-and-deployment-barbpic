// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('show');
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // In a real app, you would send this to your server
        alert(`Thank you for subscribing with ${email}! You'll hear from us soon.`);
        newsletterForm.reset();
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const subject = contactForm.querySelector('#subject').value;
        const message = contactForm.querySelector('#message').value;
        
        // In a real app, you would send this data to your server
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
        contactForm.reset();
    });
}

// Comment Form Submission
const commentForm = document.getElementById('comment-form');
if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = commentForm.querySelector('#comment-name').value;
        const email = commentForm.querySelector('#comment-email').value;
        const message = commentForm.querySelector('#comment-message').value;
        
        // In a real app, you would send this data to your server
        // For now, we'll simulate adding a new comment
        const commentsSection = document.querySelector('.comments-section .container');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <img src="images/avatar.jpg" alt="User" class="comment-avatar">
            <div class="comment-content">
                <h4>${name} <span class="comment-date">Just now</span></h4>
                <p>${message}</p>
            </div>
        `;
        
        // Insert the new comment before the form
        commentsSection.insertBefore(newComment, commentForm);
        commentForm.reset();
        
        // Scroll to the new comment
        newComment.scrollIntoView({ behavior: 'smooth' });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to post cards when they come into view
const animateOnScroll = () => {
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
window.addEventListener('DOMContentLoaded', () => {
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on load for elements already in view
    animateOnScroll();
});

// Add scroll event listener for animation
window.addEventListener('scroll', animateOnScroll);