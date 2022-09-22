var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.querySelector("#grad");

function gradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = "background:linear-gradient(to right," + color1.value + "," + color2.value + ");";
}

function change(value) {
    body.style.background = "linear-gradient(to " + value + "," + color1.value + "," + color2.value + ")";
    css.textContent = "background:linear-gradient(to " + value + "," + color1.value + "," + color2.value + ");";

}

function reset() {
    body.style.background = "linear-gradient(to right, green, red)";
    css.textContent = "background: linear-gradient(to right, green, red);"
    document.getElementById("color1").value = '#00ff00';
    document.getElementById("color2").value = '#ff0000';
}

if (document.getElementById("color1").value == '#000000' && document.getElementById("color2").value == '#000000') {
    function change_color() {
        document.getElementById("color1").value = '#00ff00';
        document.getElementById("color2").value = '#ff0000';
        document.getElementById("adjst-clr").innerHTML = '<h1></h1>';
    }
}