var projectsselect = document.querySelector(".custom-select");
var option = document.createElement("option");
var elmts = ["HTML", "CSS", "JS", "PHP", "jQuery"];
for (var i = 0; i < elmts.length; i++) {
    var optn = elmts[i];
    var el = document.createElement("option");
    el.textContent = optn;
    document.getElementById("io").appendChild(el);
}
