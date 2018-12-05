//define all variables here
let wordbank = [];
let gameword = "";
let gamewordarray = [];
let gamewordi = 0;
let guesskey = "";
let gamestart = false;
let guesswordarray = [];
let guesswordi = 0;
let guessword = "";


//store words to be chosen here.
wordbank = [
    "rick",
    "morty",
    "birdman",
    "jerry",
    "beth",
    "snowball",
    "hide",
    "summer"
];

//store elements in variables.
let startscreen = document.getElementById("startscreen");

let mainscreen = document.getElementById("mainscreen");

let startbtn = document.getElementById("startbtn");

let wincount = document.getElementById("wincount");

let guesscount = document.getElementById("guesscount");

let missedletters = document.getElementById("missedletters");

let wordbox = document.getElementById("wordbox");

let me6picdiv = document.getElementById("me6picdiv");

let me6pic = document.getElementById("me6pic");


function setgame() {
    //randomly choose a word from the bank
    gameword = wordbank[Math.floor(Math.random() * wordbank.length)];
    //make an array with each letter of the chosen word
    for (gamewordi = 0; gamewordi < gameword.length; gamewordi++) {
        gamewordarray[gamewordi] = gameword.charAt(gamewordi); 
    };
    //display blanks for every letter in the chosen word
    guessword = '"';
    for (guesswordi = 0; guesswordi < gameword.length; guesswordi++) {
        guesswordarray[guesswordi] = "_";
        guessword = guessword + " _ ";
    };
    guessword = guessword + '"';
    wordbox.innerHTML = guessword;
};

//clicking start button sets up the game for first round.
startbtn.onclick = function() {
    mainscreen.style.display = "inherit";
    startscreen.style.display = "none";
    gamestart = true;
    setgame();
};

//keypress to run the game loops after game start
document.onkeyup = function(event) {
    guesskey = event.key;
    guesskey = guesskey.toLowerCase();
    if (typeof guesskey === "string" && gamestart === true) {
        
    };
};

