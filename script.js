// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select elements
    const retroBtn = document.getElementById('retro-btn');
    const retroOutput = document.getElementById('retro-output');

    // Fun retro-flavored status lines
    const engineStatuses = [
        "🏎️ DeLorean Engine: Idle & Ready to roll.",
        "📻 Playing: 80s Synthwave Playlist.",
        "💻 Coding Mode: Activated.",
        "🚀 Destination: GitHub Pages live deployment!"
    ];

    let statusIndex = 0;

    // Add click listener
    retroBtn.addEventListener('click', () => {
        retroOutput.textContent = engineStatuses[statusIndex];
        
        // Cycle status lines
        statusIndex = (statusIndex + 1) % engineStatuses.length;
    });
});
