var gbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var rbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var ybs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var bbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var btnIDs = ["greenBtn", "redBtn", "yellowBtn", "blueBtn"];
var btnProps = {"greenBtn": {"light": "#4caf50", "dark": "#388e3c", "audio": gbs}, "yellowBtn": {"light": "#ffeb3b", "dark":"#fbc02d", "audio": ybs}, "redBtn": {"light": "#f44336", "dark": "#d32f2f", "audio": rbs}, "blueBtn": {"light": "#2196f3", "dark": "#1976d2", "audio": bbs}};
var colorsToShow = ["redBtn"];
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
                alert("You won!");
                var rand = Math.floor(Math.random() * 4);
                colorsToShow.push(btnIDs[rand]);
                console.log(colorsToShow);
                playerEmulate = [];
            }
            else{
                alert("You lose!");
                playerEmulate = [];
            }
        }
        var id = this.id;
        setTimeout(function(){
            $("#" + id).css("background", btnProps[id]["dark"]);
        }, 500);
    }
    else if(this.id === "play"){
        var index = 0;
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