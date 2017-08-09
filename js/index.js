var gbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var rbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var ybs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var bbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var index = 0;
var score = 1;
var btnIDs = ["greenBtn", "redBtn", "yellowBtn", "blueBtn"];
var btnProps = {"greenBtn": {"light": "#4caf50", "dark": "#388e3c", "audio": gbs}, "yellowBtn": {"light": "#ffeb3b", "dark":"#fbc02d", "audio": ybs}, "redBtn": {"light": "#f44336", "dark": "#d32f2f", "audio": rbs}, "blueBtn": {"light": "#2196f3", "dark": "#1976d2", "audio": bbs}};
var randIndex = Math.floor(Math.random()*4);
var colorsToShow = [btnIDs[randIndex]];
var playerEmulate = [];
$(document).ready(function(){
  $("button").click(function(){
    if(btnIDs.includes(this.id)){
        $("#" + this.id).css("background", btnProps[this.id]["light"]);
        btnProps[this.id]["audio"].play();
        playerEmulate.push(this.id);
        var a = check();
        if(a !== "aaa"){
            if(a){
                index = 0;
                $("#correct").html("correct!!");
                score++;
                $("#steps").html(score);
                console.log("Correct! Current score: " + score + ".");
                var rand = Math.floor(Math.random() * 4);
                colorsToShow.push(btnIDs[rand]);
                playerEmulate = [];
            }
            else{
                index = 0;
                $("#correct").html("incorrect!!");
                console.log("You lose!");
                playerEmulate = [];
            }
        }
        var id = this.id;
        setTimeout(function(){
            $("#" + id).css("background", btnProps[id]["dark"]);
        }, 500);
    }
    else if(this.id === "play"){
        setInterval(function(){
        if(index < colorsToShow.length){
            $("#" + colorsToShow[index]).css("background", btnProps[colorsToShow[index]]["light"]);
            btnProps[colorsToShow[index]]["audio"].play();
            var id = colorsToShow[index];
            var thisBtn = btnProps[id];
            setTimeout(function(){            
                $("#" + id).css("background", btnProps[id]["dark"]);
            }, 500);
        index++;    
        }   
       }, 1000);
    }
  });
});

function check(){
    for(var i = 0; i < playerEmulate.length; i++){
        if(playerEmulate[i] !== colorsToShow[i]){
            return false;
        }
    }
    if(playerEmulate.length === colorsToShow.length){
        return true;
    }
    return "aaa";
}