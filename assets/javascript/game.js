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
let wincount = 0;
let guesscount = 0;
let matchletter = false;
let missedlettersarray = [];
let missedletters = "";


//store words to be chosen here.
wordbank = [
    "rick",
    "morty",
    "birdperson",
    "jerry",
    "beth",
    "snowball",
    "terry",
    "summer",
    "poopybutthole",
    "slowmobius",
    "unity",
    "squanchy",
    "gearhead",
    "jellybean"
];

//store elements in variables.
let bod = document.getElementById("bod");

let startscreen = document.getElementById("startscreen");

let mainscreen = document.getElementById("mainscreen");

let startbtn = document.getElementById("startbtn");

let gameoverdiv = document.getElementById("gameover");

let youdiedbtn = document.getElementById("youdied");

let wincountdiv = document.getElementById("wincount");

let guesscountdiv = document.getElementById("guesscount");

let missedlettersdiv = document.getElementById("missedletters");

let wordboxdiv = document.getElementById("wordbox");

let me6no1 = document.getElementById("me6no1");

let me6no2 = document.getElementById("me6no2");

let me6no3 = document.getElementById("me6no3");

let me6unsure = document.getElementById("me6unsure");

let me6wannadie = document.getElementById("me6wannadie");

let me6chaos = document.getElementById("me6chaos");

let me6angry = document.getElementById("me6angry");

//function to randomly choose from an array
function randchoose(iptarray) {
    return iptarray[Math.floor(Math.random() * iptarray.length)];
};

//function to reset game for every new word
function setgame() {
    gamewordarray = [];
    guesswordarray = [];
    //randomly choose a word from the bank
    gameword = randchoose(wordbank);
    //make an array with each letter of the chosen word
    for (gamewordi = 0; gamewordi < gameword.length; gamewordi++) {
        gamewordarray[gamewordi] = gameword.charAt(gamewordi);
    };
    //display blanks for every letter in the chosen word
    for (guesswordi = 0; guesswordi < gameword.length; guesswordi++) {
        guesswordarray[guesswordi] = "_";
    };
    //reset guess count left
    guesscount = 7;
    //reset missed letters
    missedlettersarray = [];
    //reset pictures
    me6no1.style.display = "inherit";
    me6no2.style.display = "none";
    me6no3.style.display = "none";
    me6unsure.style.display = "none";
    me6wannadie.style.display = "none";
    me6chaos.style.display = "none";
    me6angry.style.display = "none";

    currentstat();
};

//function to display current status of the game
function currentstat() {
    wincountdiv.innerHTML = wincount;
    wordboxdiv.innerHTML = guessword;
    guesscountdiv.innerHTML = guesscount;
    missedletters = missedlettersarray.join(" ");
    missedlettersdiv.innerHTML = missedletters;
    guessword = '" ' + guesswordarray.join(" ") + ' "';
    wordboxdiv.innerHTML = guessword;
};

//function for when game is over;
function rungameover() {
    gamestart = false;
    mainscreen.style.display = "none";
    gameoverdiv.style.display = "inherit";
    bod.style.background = "black";
}

//function to get to main screen and start game
function startgame() {
    bod.style.background = "skyblue";
    mainscreen.style.display = "inherit";
    startscreen.style.display = "none";
    gameoverdiv.style.display = "none";
    gamestart = true;
    wincount = 0;
    setgame();
    randchoose(startsound).play();
};

//clicking start button sets up the game.
startbtn.onclick = function () {
    startgame();
};

//clicking youdied button resets the game.
youdiedbtn.onclick = function () {
    startgame();
}

//keypress to run the game loops after game start
document.onkeyup = function (event) {
    matchletter = false;
    guesskey = event.key;
    guesskey = guesskey.toLowerCase();
    if (typeof guesskey === "string" && gamestart === true) {
        //compare guessed letter with every letter in gameword and fill in respective blank if match
        for (guesswordi = 0; guesswordi < gamewordarray.length; guesswordi++) {
            if (guesskey === gamewordarray[guesswordi]) {
                guesswordarray[guesswordi] = guesskey;
                matchletter = true;
                //if guessword matchs gameword, add 1 to wincount and reset game
                if (guesswordarray.toString() === gamewordarray.toString()) {
                    wincount = wincount + 1;
                    randchoose(winsound).play();
                    setgame();
                };
            };
        };
        //if guesskey was not a match, subtract 1 from guesscount and add the guesskey to the missedletters array. if guesscount is 0, game over
        if (matchletter === false) {
            guesscount = guesscount - 1;
            missedlettersarray.push(guesskey);
            if (guesscount === 0) {
                rungameover();
            };
            //change picture at bot depending on guesscount status
            if (guesscount === 6) {
                me6no2.style.display = "inherit";
            };
            if (guesscount === 5) {
                me6no3.style.display = "inherit";
            };
            if (guesscount === 4) {
                me6unsure.style.display = "inherit";
                me6no1.style.display = "none";
                me6no2.style.display = "none";
                me6no3.style.display = "none";
                randchoose(losingsound).play();
            };
            if (guesscount === 3) {
                me6wannadie.style.display = "inherit";
                me6unsure.style.display = "none";
                cantTake.play()
            };
            if (guesscount === 2) {
                me6chaos.style.display = "inherit";
                me6wannadie.style.display = "none";
            };
            if (guesscount === 1) {
                me6angry.style.display = "inherit";
                me6chaos.style.display = "none";
            };
        };
        //update the divs with the results.
        currentstat();        
    };
};

//object constructor to handle sound objects
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

//create and store sound objects in variables
let ohhYeah = new sound("./assets/sound/ohhYeah.mp3");

let ohhNice = new sound("./assets/sound/ohhNice.mp3");

let cantTake = new sound("./assets/sound/cantTake.mp3");

let iSuck = new sound("./assets/sound/iSuck.mp3");

let stickler = new sound("./assets/sound/stickler.mp3");

let lookAtMe = new sound("./assets/sound/lookAtMe.mp3");

let thatsOk = new sound("./assets/sound/thatsOk.mp3");

let yesSir = new sound("./assets/sound/yesSir.mp3");

//store some of the sound variables in array for random generation
let startsound = [lookAtMe, yesSir];

let winsound = [ohhNice, ohhYeah, stickler];

let losingsound = [iSuck, thatsOk];

