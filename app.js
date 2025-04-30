// Loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// Smooth scrolling for cards
let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
    cards.scrollBy({
        left: -140,
        behavior: 'smooth'
    });
});

right.addEventListener('click', () => {
    cards.scrollBy({
        left: 140,
        behavior: 'smooth'
    });
});

// Food card interaction
let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price_cont = document.getElementById('price_cont');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        // Add click animation
        ele.style.transform = 'scale(0.95)';
        setTimeout(() => {
            ele.style.transform = 'scale(1)';
        }, 200);

        // Update content with fade effect
        poster.style.opacity = '0';
        setTimeout(() => {
            poster.src = ele.getElementsByTagName('img')[0].src;
            title.innerText = ele.getElementsByTagName('h5')[0].innerText;
            price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText;
            poster.style.opacity = '1';
        }, 200);
    });
});