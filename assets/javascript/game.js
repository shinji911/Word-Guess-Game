//start JS wrap


//store elements in variables.
let startscreen = document.getElementById("startscreen");

let mainscreen = document.getElementById("mainscreen");

let startbtn = document.getElementById("startbtn");

let wincount = document.getElementById("wincount");

let guesscount = document.getElementById("guesscount");

let missedletters = document.getElementById("missedletters");

let wordbox = document.getElementById("wordbox");


startbtn.onclick = function() {
    mainscreen.style.display = "inherit";
    startscreen.style.display = "none";
};

//end JS wrap