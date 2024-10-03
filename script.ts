// GSAP Animations
gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".header-content h1", { duration: 1, opacity: 0, x: -100 });
gsap.from(".header-content p", { duration: 1, opacity: 0, x: 100, delay: 0.5 });
gsap.from(".cta", { duration: 1, opacity: 0, scale: 0, delay: 1 });

// Scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
  scrollTrigger: "#about",
  duration: 1,
  opacity: 0,
  y: 50
});

gsap.from("#projects .project-card", {
  scrollTrigger: "#projects",
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  y: 50
});

gsap.from("#skills .skill", {
  scrollTrigger: "#skills",
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  y: 50
});

gsap.from("footer", {
  scrollTrigger: "footer",
  duration: 1,
  opacity: 0,
  y: 50
});
