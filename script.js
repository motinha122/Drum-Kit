let numbersDrum = document.getElementById("drum-set").getElementsByTagName("button").length;

for (let i = 0; i < numbersDrum; i++) {
    document.querySelectorAll("Button")[i].addEventListener("click",clickDrum);
}

document.addEventListener("keydown",(e) =>{
    playDrum(e.key);
});

function playDrum(input){
    input = input.toLowerCase();
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

function clickDrum(){
    let click = this.innerText;
    playDrum(click);
}
