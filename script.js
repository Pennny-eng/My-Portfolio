 const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });
        document.getElementById('contactBtn').addEventListener('click', function () {
  const contactSection = document.getElementById('contactSection');
  contactSection.classList.toggle('show');
    // Add/remove .show class
});
function showAbout() {
            const aboutText = document.querySelector('.about-me');
            const button = document.querySelector('button');
            const intro = document.querySelector('.intro');
            
            aboutText.classList.add('show');
            button.classList.add('button-clicked');
            
            // Adjust layout to show text beside image
            intro.style.justifyContent = 'space-between';
        }
