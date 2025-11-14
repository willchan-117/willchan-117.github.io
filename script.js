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