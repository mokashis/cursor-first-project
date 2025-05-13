// Matrix rain effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Draw Matrix rain
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Animation loop for Matrix
function animateMatrix() {
    drawMatrix();
    requestAnimationFrame(animateMatrix);
}
animateMatrix();

// Add some retro cursor effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);

    // Remove the cursor trail after animation
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Add styles for cursor trail
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: fixed;
        width: 10px;
        height: 10px;
        background: #ff00ff;
        border-radius: 50%;
        pointer-events: none;
        animation: fadeOut 1s forwards;
        z-index: 9999;
    }

    @keyframes fadeOut {
        from { 
            transform: scale(1);
            opacity: 0.5;
        }
        to { 
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some random star effects
function createStars() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// Add styles for stars
const starStyle = document.createElement('style');
starStyle.textContent = `
    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: #ffffff;
        animation: twinkle 3s infinite;
    }

    @keyframes twinkle {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(starStyle);

// Initialize stars
createStars();

// Add some menu hover effects
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
        audio.volume = 0.2;
        audio.play().catch(() => {}); // Ignore autoplay restrictions
    });
});

// Add a visitor counter effect
let count = 1;
setInterval(() => {
    count++;
    document.querySelector('.counter').textContent = `Visitors: ${count.toString().padStart(6, '0')}`;
}, 5000);

// Add some random "under construction" gifs
const constructionGifs = [
    'https://web.archive.org/web/20090830195459/http://geocities.com/Area51/Corridor/5177/construction.gif',
    'https://web.archive.org/web/20090830195459/http://geocities.com/Area51/Corridor/5177/construction2.gif',
    'https://web.archive.org/web/20090830195459/http://geocities.com/Area51/Corridor/5177/construction3.gif'
];

setInterval(() => {
    const constructionImg = document.querySelector('.construction');
    constructionImg.src = constructionGifs[Math.floor(Math.random() * constructionGifs.length)];
}, 5000); 