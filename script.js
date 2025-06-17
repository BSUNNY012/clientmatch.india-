// Get the container
const starryBg = document.getElementById('starryBg');

// Create twinkling stars
function createStars(count = 100) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${1 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starryBg.appendChild(star);
  }
}

// Create shooting stars
function createShootingStars(count = 3) {
  for (let i = 0; i < count; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    resetShootingStar(shootingStar);
    starryBg.appendChild(shootingStar);
    animateShootingStar(shootingStar);
  }
}

// Reset position of shooting star
function resetShootingStar(star) {
  star.style.top = `${Math.random() * 50}%`;
  star.style.left = `-${Math.random() * 200 + 50}px`;
}

// Animate shooting stars periodically
function animateShootingStar(star) {
  setInterval(() => {
    resetShootingStar(star);
    star.style.animation = 'none';
    // Trigger reflow to restart animation
    void star.offsetWidth;
    star.style.animation = 'shoot 5s ease-in-out';
  }, 5000 + Math.random() * 5000); // Random interval between 5–10 sec
}

// Initialize
createStars(150);
createShootingStars(5);
