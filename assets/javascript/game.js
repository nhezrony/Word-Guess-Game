var wordList = ["faded", "alone", "the spectre", "sing me to sleep", "force"];
var currentWord = wordList[Math.floor((Math.random() * 4))];
var placeHolder = [];

// create placeholder string
for(var i = 0; i < currentWord.length; i++) {
    if(currentWord[i] !== " ") {
        placeHolder[i] = "_ ";
    }
    else {
        placeHolder[i] = " &nbsp; ";
    }
};

var placeHolderStr = placeHolder.join('');
$(".word").html("<h1>" + placeHolderStr + "<H1>");

var usrGuess = "";
var tries = 0;
$('.btn').click(function() {
    if (tries < 8) {
        usrGuess = $(this).attr('value');
        if(currentWord.includes(usrGuess)) {
            for(var i = 0; i < currentWord.length; i++) {
                if(currentWord[i] === usrGuess) {
                    placeHolder[i] = usrGuess;
                }
            }
            $(".word").html("<h1>" + placeHolder.join('') + "<H1>");
            $(this).toggleClass('btn-light btn-success');
        }
        else if(usrGuess === "restart") {
            location.reload();
        }
        else {
            $(this).toggleClass('btn-light btn-danger');
            tries++;
            $("body").css("background-image", 'url("assets/images/try' + tries + '.png")');
        } 
        if (placeHolder.includes("_ ") === false) {
            var audio = new Audio('assets/audio/' + currentWord + '.mp3');
            audio.play();
            alert("You Win") 
        }
    }
    else {
        alert("sorry try again")
        $(this).toggleClass('btn-light btn-danger');
        $("body").css("background-image", 'url("assets/images/try9.png")');
        location.reload();
    }
});