var btnIDs = ["greenBtn", "redBtn", "yellowBtn", "blueBtn"];
var lightIDs = {"greenBtn": "#4caf50", "yellowBtn": "#ffeb3b", "redBtn": "#f44336", "blueBtn": "#2196f3"};
var darkIDs = {"greenBtn": "#388e3c", "yellowBtn": "#fbc02d", "redBtn": "#d32f2f", "blueBtn": "#1976d2"};

$(document).ready(function(){
  $("button").click(function(){
    if(btnIDs.includes(this.id)){
        $("#" + this.id).css("background", lightIDs[this.id]);
        var id = this.id;
        setTimeout(function(){
            console.log(id + " " + darkIDs[id]);
            $("#" + id).css("background", darkIDs[id]);
        }, 500);
    }
  });
});