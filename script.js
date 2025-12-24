const adviceIdElement = document.getElementById('advice-id');
const adviceContentElement = document.getElementById('advice-content');
const diceButton = document.getElementById('dice-button');
const diceIcon = document.querySelector('.dice-icon');
const diceDots = document.getElementById('dice-dots');

const API_URL = 'https://api.adviceslip.com/advice';

// Dice face patterns (positions for dots on a 6-sided die)
const diceFaces = {
    1: [{ cx: 12, cy: 12 }], // Center
    2: [{ cx: 8, cy: 8 }, { cx: 16, cy: 16 }], // Diagonal
    3: [{ cx: 8, cy: 8 }, { cx: 12, cy: 12 }, { cx: 16, cy: 16 }], // Diagonal
    4: [{ cx: 8, cy: 8 }, { cx: 16, cy: 8 }, { cx: 8, cy: 16 }, { cx: 16, cy: 16 }], // Corners
    5: [{ cx: 8, cy: 8 }, { cx: 16, cy: 8 }, { cx: 12, cy: 12 }, { cx: 8, cy: 16 }, { cx: 16, cy: 16 }], // Corners + center
    6: [{ cx: 8, cy: 7 }, { cx: 16, cy: 7 }, { cx: 8, cy: 12 }, { cx: 16, cy: 12 }, { cx: 8, cy: 17 }, { cx: 16, cy: 17 }] // Two columns
};

let shuffleInterval = null;
let currentFace = 4; // Start with face 4

function renderDiceFace(face) {
    diceDots.innerHTML = '';
    const dots = diceFaces[face];
    dots.forEach(dot => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', dot.cx);
        circle.setAttribute('cy', dot.cy);
        circle.setAttribute('r', '1.5');
        circle.setAttribute('fill', 'currentColor');
        diceDots.appendChild(circle);
    });
}

function startShuffling() {
    let faceIndex = 1;
    shuffleInterval = setInterval(() => {
        faceIndex = (faceIndex % 6) + 1;
        renderDiceFace(faceIndex);
    }, 100); // Change face every 100ms
}

function stopShuffling() {
    if (shuffleInterval) {
        clearInterval(shuffleInterval);
        shuffleInterval = null;
    }
    // Stop at a random face
    currentFace = Math.floor(Math.random() * 6) + 1;
    renderDiceFace(currentFace);
}

// Initialize with face 4
renderDiceFace(currentFace);

// Fix viewport height for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial viewport height
setViewportHeight();

// Update on resize and orientation change
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

async function fetchAdvice() {
    try {
        diceButton.disabled = true;
        diceIcon.classList.add('shuffling');
        startShuffling();
        
        // Add cache busting to ensure we get a new advice each time
        const response = await fetch(`${API_URL}?t=${Date.now()}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch advice');
        }
        
        const data = await response.json();
        
        if (data.slip) {
            adviceIdElement.textContent = data.slip.id;
            adviceContentElement.textContent = `"${data.slip.advice}"`;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceContentElement.textContent = 'Failed to load advice. Please try again.';
    } finally {
        stopShuffling();
        diceIcon.classList.remove('shuffling');
        diceButton.disabled = false;
    }
}

// Fetch advice on page load
fetchAdvice();

// Fetch new advice when dice button is clicked
diceButton.addEventListener('click', fetchAdvice);

