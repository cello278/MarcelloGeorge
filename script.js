document.addEventListener('DOMContentLoaded', () => {
    
    // Select all view sections
    const views = document.querySelectorAll('.view-section');
    const clickableCards = document.querySelectorAll('.clickable');
    const backButtons = document.querySelectorAll('.back-btn');
    const navHomeBtn = document.getElementById('nav-home-btn');
    const navMoviesBtn = document.getElementById('nav-movies-btn');

    // Function to switch visible section
    function showView(targetViewId) {
        views.forEach(view => {
            if (view.id === targetViewId) {
                view.classList.add('active-view');
            } else {
                view.classList.remove('active-view');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Click on Project Cards to open dedicated view
    clickableCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            if (targetId) {
                showView(targetId);
            }
        });
    });

    // Click Back Buttons to return to main dashboard
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showView('main-view');
        });
    });

    // Header Nav Buttons
    navHomeBtn.addEventListener('click', () => {
        showView('main-view');
    });

    navMoviesBtn.addEventListener('click', () => {
        showView('movies-view');
    });
});
