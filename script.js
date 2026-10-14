//your JS code here. If required.
const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;
buttonsContainer.addEventListener("click", function(event) {
const clickedButton = event.target;
// Stop the currently playing sound
if (clickedButton.classList.contains("stop")) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    return;
}

// Play sound when a sound button is clicked
if (clickedButton.classList.contains("btn")) {
    const soundName = clickedButton.dataset.sound;

    // Stop the previous sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create and play the selected audio
    currentAudio = new Audio(`sounds/${soundName}.mp3`);

    currentAudio.play().catch(function(error) {
        console.error("Unable to play sound:", error);
    });
}


});
