document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealElements = document.querySelectorAll('.animate-reveal');
    
    // Add logic to animate steps and cards
    const steps = document.querySelectorAll('.step');
    const cards = document.querySelectorAll('.course-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
    steps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(step);
    });
    cards.forEach(card => observer.observe(card));

    // Header Background on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.padding = '1rem 0';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.8)';
            header.style.padding = '1.5rem 0';
        }
    });

    // Simple Form Simulation
    const enrollBtn = document.querySelector('.form-placeholder .btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
            alert('Redirecting to Google Enrollment Form...');
            // window.location.href = 'YOUR_GOOGLE_FORM_URL';
        });
    }
});

// CSS Addition via JS for visible class (quick fix)
const style = document.createElement('style');
style.textContent = `
    .animate-reveal, .step, .course-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .animate-reveal.visible, .step.visible, .course-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
