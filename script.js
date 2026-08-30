// ==========================
// COOL TYPING EFFECT
// ==========================

const words = [
    "CODER",
    "GAMER",
    "CREATOR"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const typing = document.getElementById("typing");
    const word = words[wordIndex];

    if (!deleting) {

        charIndex++;

        typing.textContent =
            "" + word.substring(0, charIndex) + "_";

        if (charIndex === word.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }

    } else {

        charIndex--;

        typing.textContent =
            "" + word.substring(0, charIndex) + "_";

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            setTimeout(type, 400);
            return;
        }
    }

    setTimeout(type, deleting ? 60 : 110);
}

type();


// ==========================
// SCREEN NAVIGATION
// ==========================

let current = 1;

function nextScreen() {

    if (current >= 4) return;

    document
        .getElementById("screen" + current)
        .classList.remove("active");

    current++;

    document
        .getElementById("screen" + current)
        .classList.add("active");
}


function prevScreen() {

    if (current <= 1) return;

    document
        .getElementById("screen" + current)
        .classList.remove("active");

    current--;

    document
        .getElementById("screen" + current)
        .classList.add("active");
}

// ==========================
// SECRET MESSAGE
// ==========================

function showSecret() {

    const button = document.querySelector("#screen3 button");

    button.style.opacity = "0";
    button.style.transform = "scale(0.7)";

    setTimeout(() => {

        button.style.display = "none";

        const heading = document.querySelector("#screen3 h2");

        heading.textContent = "OH... YOU CLICKED IT! 😳";

        heading.style.animation = "revealText 0.8s ease";

        setTimeout(() => {

            document.getElementById("screen3").classList.remove("active");

            current = 4;

            document.getElementById("screen4").classList.add("active");

        }, 1300);

    }, 400);
}
 // ==========================
// CLICK ANYWHERE TO CONTINUE
// ==========================

document.addEventListener("click", function(event) {

    // Agar button click hua hai to kuch mat karo
    if (event.target.closest("button")) {
        return;
    }

    // Screen 4 par aage nahi jana
    if (current < 4) {
        nextScreen();
    }

});