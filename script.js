
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveMessage = document.getElementById("loveMessage");

// YES BUTTON
yesBtn.addEventListener("click", function () {

    loveMessage.classList.remove("hidden");

    loveMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

// NO BUTTON MOVEMENT
function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(
        10,
        Math.random() * maxX
    );

    const randomY = Math.max(
        10,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}

// DESKTOP
noBtn.addEventListener("mouseenter", moveNoButton);

// MOBILE
noBtn.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
}, { passive: false });
