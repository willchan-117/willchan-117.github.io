const categories = document.querySelectorAll('.skill-category');
const skillGroups = document.querySelectorAll('.skills-group');

categories.forEach(category => {
  category.addEventListener('mouseenter', () => {
    
    // Remove active class from all categories
    categories.forEach(cat => cat.classList.remove('active'));
    
    // Add active class to the hovered category
    category.classList.add('active');

    // Hide all skill groups
    skillGroups.forEach(group => group.style.display = 'none');

    // Show the corresponding skill group
    const skillId = category.dataset.skill;
    document.getElementById('skills-' + skillId).style.display = 'flex';
  });
});


const wheel = document.querySelector('.interest-wheel');
const images = document.querySelectorAll('.wheel-img');
const centerX = wheel.offsetWidth / 2;
const centerY = wheel.offsetHeight / 2;
const radius = 200; // distance from center
const totalImages = images.length;

// Initialize each image at equal angle
images.forEach((img, i) => {
  img.dataset.angle = (360 / totalImages) * i; // starting angle
});

function animateOrbit() {
  images.forEach(img => {
    // increase angle
    let angle = parseFloat(img.dataset.angle);
    angle += 0.2; // speed
    if(angle >= 360) angle -= 360;

    // convert to radians
    const rad = angle * (Math.PI / 180);

    // calculate position on circle
    const x = centerX + radius * Math.cos(rad) - img.width / 2;
    const y = centerY + radius * Math.sin(rad) - img.height / 2;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    // rotate image so bottom faces center
    img.style.transform = `rotate(${angle + 180}deg)`; 

    // save updated angle
    img.dataset.angle = angle;
  });

  requestAnimationFrame(animateOrbit);
}

// Start animation
animateOrbit();