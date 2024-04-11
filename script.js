document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Clicked Login button');
});

document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Clicked Sign Up button');
});


window.addEventListener('scroll', function() {
    const parallaxSection = document.getElementById('parallaxSection');
    const scrollPosition = window.scrollY;

    const leftOffset = -scrollPosition * 0.5;
    const rightOffset = scrollPosition * 0.5;

    parallaxSection.querySelector('.left').style.transform = `translateX(${leftOffset}px)`;
    parallaxSection.querySelector('.right').style.transform = `translateX(${rightOffset}px)`;
});



// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animation for kurti types
function animateKurtiTypes() {
    const kurtiTypes = document.querySelectorAll('.kurti-type');
    kurtiTypes.forEach((kurtiType) => {
        if (isInViewport(kurtiType)) {
            kurtiType.classList.add('show');
        }
    });
}

// Event listener for scroll to trigger animations
window.addEventListener('scroll', animateKurtiTypes);




// Social icons hover effect
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., AJAX request)
    alert('Message sent successfully!');
    contactForm.reset();
});
