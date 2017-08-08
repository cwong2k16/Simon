var btnIDs = ["greenBtn", "redBtn", "yellowBtn", "blueBtn"];
var brightness = {"greenBtn": {"light": "#4caf50", "dark": "#388e3c"}, "yellowBtn": {"light": "#ffeb3b", "dark":"#fbc02d"}, "redBtn": {"light": "#f44336", "dark": "#d32f2f"}, "blueBtn": {"light": "#2196f3", "dark": "#1976d2"}};
$(document).ready(function(){
  $("button").click(function(){
    if(btnIDs.includes(this.id)){
        $("#" + this.id).css("background", brightness[this.id]["light"]);
        var id = this.id;
        setTimeout(function(){
            $("#" + id).css("background", brightness[id]["dark"]);
        }, 500);
    }
  });
});