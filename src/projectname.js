var d = window.document;
var inp = document.querySelector(".inp")
const ololo = document.querySelector("#abtn");
ololo.addEventListener("click", function(){
    var txt = inp.value;
    print(txt);
    localStorage.setItem("currentCreatedPro",txt)
})
const print = (a) => {
    console.log(a)
}
