let numbersOfDrums = document.getElementById("drum-set").getElementsByTagName("button").length;

for (let i = 0; i < numbersOfDrums; i++) {
    document.getElementById("drum-set").querySelectorAll("button")[i].addEventListener("click", function () {
        playDrum(this.innerText);
    });
}

document.addEventListener("keydown", (e) => {
    playDrum(e.key);
});

function playDrum(input) {

    let tom1 = new Audio("sounds/tom-1.mp3");
    let tom2 = new Audio("sounds/tom-2.mp3");
    let tom3 = new Audio("sounds/tom-3.mp3");
    let crash = new Audio("sounds/crash.mp3");
    let bass = new Audio("sounds/kick-bass.mp3");
    let snare = new Audio("sounds/snare.mp3");
    let tom4 = new Audio("sounds/tom-4.mp3");

    input = input.toLowerCase();
    animationKeyPressed(input);

    switch (input) {
        case "a":
            tom1.play(); break; 
        case "s":
            tom2.play(); break;
        case "d":
            tom3.play(); break;
        case "f":
            crash.play(); break;
        case "j":
            bass.play(); break;
        case "k":
            snare.play(); break;
        case "l":
            tom4.play(); break;

        default:
    }
}

function animationKeyPressed(keyPressed) {
    let activeButton = document.getElementById("part-" + keyPressed);
    if (activeButton != undefined) {
        activeButton.style.transform = "scale(0.9)";
        setTimeout(() => {
            activeButton.style.transform = "scale(1.0)";
        }, 100)
    }
}
