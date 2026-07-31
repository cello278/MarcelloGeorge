// Wait for the HTML elements to load before running code
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button and the message element from HTML using their IDs
    const magicBtn = document.getElementById('magic-btn');
    const magicText = document.getElementById('magic-text');

    // List of fun motivational messages
    const messages = [
        "🚀 You are officially a web developer!",
        "🎨 Clean code makes great websites!",
        "💡 Small steps every day lead to big results.",
        "🌟 Keep building and experimenting!"
    ];

    // Add a click event listener to the button
    magicBtn.addEventListener('click', () => {
        // Pick a random message from the array
        const randomIndex = Math.floor(Math.random() * messages.length);
        
        // Display the random message inside our paragraph tag
        magicText.textContent = messages[randomIndex];
    });
});
