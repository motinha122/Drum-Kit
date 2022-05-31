let numbersDrum = document.getElementById("drum-set").getElementsByTagName("button").length;

for (let i = 0; i < numbersDrum; i++) {
    document.querySelectorAll("Button")[i].addEventListener("click",handleClick);
}

function handleClick(){
    console.log(this);
}

