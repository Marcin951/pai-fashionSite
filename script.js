new Glide('.glide').mount()

document.getElementById("button1").onclick = function() { myFunction("button1") };
document.getElementById("button2").onclick = function() { myFunction("button2") };
document.getElementById("button3").onclick = function() { myFunction("button3") };
document.getElementById("button4").onclick = function() { myFunction("button4") };
var lastClickedButton = document.getElementById("button1")
lastClickedButton.style.color = "red"

function myFunction(id) {
    if (lastClickedButton != null) {
        lastClickedButton.style.color = "grey"
    }
    lastClickedButton = document.getElementById(id)
    lastClickedButton.style.color = "red"
}