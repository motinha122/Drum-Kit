/* Total Number Of Drums*/

let numbersDrum = document.getElementById("drum-set").getElementsByTagName("button").length;

/* Adds Clickable Event */

for (let i = 0; i < numbersDrum; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",clickDrum);
}

/* Detect Keyboard Buttons*/

document.addEventListener("keydown",(e) =>{
    playDrum(e.key);
});

/* Detect Clicked Button */

function clickDrum(){
    let click = this.innerText;
    playDrum(click);
}

/* Match Key/Click To Buttons */

function playDrum(input){
    input = input.toLowerCase();
    animation(input);
    switch(input) {
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); break;
        case "d":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); break;
        case "f":
            let crash = new Audio("sounds/crash.mp3");
            crash.play(); break;
        case "j":
            let bass = new Audio("sounds/kick-bass.mp3");
            bass.play(); break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play(); break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); break;

        default : 
    }
}

/* Button Pressed/Clicked Animation */

function animation(keyPressed){
    let activeButton = document.getElementById("part-"+keyPressed);
    if (activeButton != undefined){
        activeButton.style.transform = "scale(0.9)";
    setTimeout(()=>{
        activeButton.style.transform = "scale(1.0)";
    },100)
    }
}
