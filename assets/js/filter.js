document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('project-search');
  const noResultsDiv = document.getElementById('no-results');

  let activeCategory = 'all';
  let searchQuery = '';

  // Filter & Search Logic
  function updateProjects() {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const titleText = card.querySelector('.project-title').textContent.toLowerCase();
      const descText = card.querySelector('.project-desc').textContent.toLowerCase();
      
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = (titleText.includes(searchQuery) || descText.includes(searchQuery));

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.classList.add('hidden');
        // Delay display:none slightly to allow fade out animation to finish,
        // or just set it to hide layout immediately after fade-out transition.
        card.style.display = 'none';
      }
    });

    // Toggle No Results Message
    if (visibleCount === 0) {
      noResultsDiv.style.display = 'block';
      noResultsDiv.classList.add('fade-in', 'visible');
    } else {
      noResultsDiv.style.display = 'none';
    }
  }

  // Category Buttons Clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Set active category
      activeCategory = btn.getAttribute('data-category');
      
      updateProjects();
    });
  });

  // Search Input Keyup
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      updateProjects();
    });
  }
});
