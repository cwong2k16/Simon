var gbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var rbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var ybs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var bbs = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var btnIDs = ["greenBtn", "redBtn", "yellowBtn", "blueBtn"];
var btnProps = {"greenBtn": {"light": "#4caf50", "dark": "#388e3c", "audio": gbs}, "yellowBtn": {"light": "#ffeb3b", "dark":"#fbc02d", "audio": ybs}, "redBtn": {"light": "#f44336", "dark": "#d32f2f", "audio": rbs}, "blueBtn": {"light": "#2196f3", "dark": "#1976d2", "audio": bbs}};
$(document).ready(function(){
  $("button").click(function(){
    if(btnIDs.includes(this.id)){
        console.log(this.id);
        $("#" + this.id).css("background", btnProps[this.id]["light"]);
        btnProps[this.id]["audio"].play();
        var id = this.id;
        setTimeout(function(){
            $("#" + id).css("background", btnProps[id]["dark"]);
        }, 500);
    }
  });
});