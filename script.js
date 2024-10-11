










// GSAP Animations
gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from(".hero-content h1", { duration: 1, opacity: 0, y: 100, ease: "power2.out" });
gsap.from(".hero-content p", { duration: 1, opacity: 0, y: 100, delay: 0.5, ease: "power2.out" });
gsap.from(".btn-primary", { duration: 1, opacity: 0, scale: 0.8, delay: 1, ease: "power2.out" });

gsap.from(".about-text", {
    scrollTrigger: ".about",
    duration: 1,
    opacity: 0,
    x: -50
});
gsap.from(".profile-pic", {
    scrollTrigger: ".about",
    duration: 1,
    opacity: 0,
    x: 50
});

gsap.from(".project-card", {
    scrollTrigger: ".projects",
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out"
});

gsap.from("footer", {
    scrollTrigger: "footer",
    duration: 1,
    opacity: 0,
    y: 50
});

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.toggle('dark-theme', currentTheme === 'dark');
}

// Switch themes when the button is clicked
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Save the user's preference in local storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Navbar Toggle Functionality
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle active class to show/hide links
});

















