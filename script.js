// Wait for DOM content to finish loading
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all view sections and interaction buttons
    const views = document.querySelectorAll('.view-section');
    const clickabdocument.addEventListener("DOMContentLoaded", function () {
    
    // Select view elements
    const views = document.querySelectorAll(".view-section");
    const navHomeBtn = document.getElementById("nav-home-btn");
    const navMoviesBtn = document.getElementById("nav-movies-btn");
    const clickableCards = document.querySelectorAll(".clickable");
    const backButtons = document.querySelectorAll(".back-btn");

    // Helper function to switch active views
    function switchView(targetViewId) {
        views.forEach(function (view) {
            view.classList.remove("active-view");
        });

        const targetView = document.getElementById(targetViewId);
        if (targetView) {
            targetView.classList.add("active-view");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    // Nav Bar Button Click Listeners
    if (navHomeBtn) {
        navHomeBtn.addEventListener("click", function () {
            switchView("main-view");
        });
    }

    if (navMoviesBtn) {
        navMoviesBtn.addEventListener("click", function () {
            switchView("movies-view");
        });
    }

    // Project Card Click Listeners
    clickableCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const targetViewId = card.getAttribute("data-target");
            if (targetViewId) {
                switchView(targetViewId);
            }
        });
    });

    // Back Button Click Listeners
    backButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            switchView("main-view");
        });
    });

});leCards = document.querySelectorAll('.clickable');
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

    // Event listener: Click on project cards to open dedicated view
    clickableCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            if (targetId) {
                showView(targetId);
            }
        });
    });

    // Event listener: Click back buttons to return to main dashboard
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showView('main-view');
        });
    });

    // Event listener: Header navigation buttons
    if (navHomeBtn) {
        navHomeBtn.addEventListener('click', () => {
            showView('main-view');
        });
    }

    if (navMoviesBtn) {
        navMoviesBtn.addEventListener('click', () => {
            showView('movies-view');
        });
    }
});
