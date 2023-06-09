function open_table() {
    if (document.getElementById("Games_Table").style.display === "none")
        document.getElementById("Games_Table").style.display = "block";
    else document.getElementById("Games_Table").style.display = "none";
}


document.getElementById("toggleVisibilityButton").addEventListener("click", function(button) {    
    if (document.getElementById("displaytable").style.display === "none")             document.getElementById("displaytable").style.display = "block";
    else document.getElementById("displaytable").style.display = "none";
 });