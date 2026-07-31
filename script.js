// Wait for the HTML elements to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the interactive button and time display text
    const deloreanBtn = document.getElementById('delorean-btn');
    const circuitOutput = document.getElementById('circuit-output');

    // Time circuit logs straight out of the movies!
    const timeCircuitDestinations = [
        "🔴 DESTINATION TIME: NOV 05 1955 06:00 AM (Where it all began)",
        "🟢 PRESENT TIME: OCT 26 1985 01:21 PM (Twin Pines Mall)",
        "🟡 LAST TIME DEPARTED: OCT 21 2015 04:29 PM (Hoverboards & Flying Cars)",
        "⚡ STATUS: Flux Capacitor Fluxing... 1.21 Gigawatts Ready!"
    ];

    let timeIndex = 0;

    // Trigger time travel jump on click
    deloreanBtn.addEventListener('click', () => {
        // Display destination string
        circuitOutput.textContent = timeCircuitDestinations[timeIndex];
        
        // Cycle to the next time destination
        timeIndex = (timeIndex + 1) % timeCircuitDestinations.length;
    });
});
