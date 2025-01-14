document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // Initialize AOS animations
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Initialize Ripple Effect
        document.querySelectorAll('.buttons a').forEach(button => {
            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const diameter = Math.max(button.clientWidth, button.clientHeight);
                const radius = diameter / 2;
                ripple.style.width = ripple.style.height = `${diameter}px`;
                ripple.style.left = `${e.clientX - button.offsetLeft - radius}px`;
                ripple.style.top = `${e.clientY - button.offsetTop - radius}px`;
                ripple.classList.add('ripple');
                const rippleElement = button.getElementsByClassName('ripple')[0];
                if (rippleElement) {
                    rippleElement.remove();
                }
                button.appendChild(ripple);
            });
        });
    }
});