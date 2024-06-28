
const nav = document.getElementById('nav');

// Add event listener to window scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Add event listener to nav item hover event
nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.add('hovered');
    }
});

nav.addEventListener('mouseout', () => {
    nav.classList.remove('hovered');
});