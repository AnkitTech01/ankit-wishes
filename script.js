// script.js

function submitName() {
    const username = document.getElementById('username').value.trim();
    const inputSection = document.getElementById('inputSection');
    const wishSection = document.getElementById('wishSection');
    const diwaliWish = document.getElementById('diwaliWish');

    // Validate name (only letters, no numbers or special characters)
    if (/^[A-Za-z\s]+$/.test(username)) { // Allow spaces for names
        // Set up the Diwali wish message
        diwaliWish.innerText = `Happy Diwali, ${username}! 🎉✨`;
        inputSection.classList.add('hidden');
        wishSection.classList.remove('hidden');
        createSparkles(); // Call to create sparkles
    } else {
        alert("Please enter a valid name without numbers or special characters.");
    }
}

// Confetti and Sparkles
function createSparkles() {
    const sparkleCount = 60;
    for (let i = 0; i < sparkleCount; i++) {
        let sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh"; // Random position
        sparkle.style.animationDuration = Math.random() * 2 + 3 + "s";
        sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(sparkle);
    }
}

// Generate diya elements
for (let i = 1; i <= 7; i++) {
    let diya = document.createElement("div");
    diya.classList.add("diya");
    diya.style.left = `${(i - 1) * 15 + 5}vw`; // Positioning the diyas
    document.body.appendChild(diya);
}

  // Confetti and Sparkles
  const sparkleCount = 60;
  for (let i = 0; i < sparkleCount; i++) {
      let sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.animationDuration = Math.random() * 2 + 3 + "s";
      sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      document.body.appendChild(sparkle);
  }