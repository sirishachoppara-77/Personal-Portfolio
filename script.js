// Scroll-to-Section functionality for smooth scrolling
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section id
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Offset to avoid overlap with header
            behavior: 'smooth'
        });
    });
});

// Form validation for the Contact form
const form = document.querySelector('.contact form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    // Basic validation
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill out all fields!');
        return; // Don't submit if any field is empty
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        alert('Please enter a valid email address!');
        return;
    }

    // If validation is successful, show a success message
    alert('Thank you for your message! I will get back to you soon.');
    form.reset(); // Reset the form after submission
});

// Project hover effect (Optional: Can add a simple effect to change the card background on hover)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#dfe6e9'; // Change the background on hover
        card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#ecf0f1'; // Restore the original background
        card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
});
