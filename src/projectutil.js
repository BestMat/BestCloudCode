var pname = localStorage.getItem("currentCreatedPro")
var para = document.querySelector(".pnamr");
para.innerHTML = pname
if(para.textContent == "" ){
    alert("make sure if you have created a project.")
    location.replace('index.html')
}
var kl = document.querySelector(".btnonclickthatsomethingbtnphew")
var fg = document.querySelector("btnonclickthatsomethingbtnphew2")
var tarea = document.querySelector(".editcodetarea")
var id = ""
var t = ""
var uio = ""
var firebaseConfig = {
    apiKey: "AIzaSyBRDdQVMqKMx-9cxdcQT5_R4P9AA7FrwUQ",
    authDomain: "cloudcode-bestmat.firebaseapp.com",
    projectId: "cloudcode-bestmat",
    storageBucket: "cloudcode-bestmat.appspot.com",
    messagingSenderId: "255418280017",
    appId: "1:255418280017:web:b8caaec4451ad7a5acf070",
    measurementId: "G-SP42HZ5MCY"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
kl.addEventListener("click", function(){
   var txt = tarea.value;
   var j = document.querySelector(".inputFilename").value
   t = j
   console.log(txt,)
   if(j.includes(".js")){
    uio = "js"
   }else if (j.includes(".py")){
       jok = prompt("Do you want to use PythonScript or Brython for web? If you are writing this code for Terminal-based or System-based, just simpily press 'OK'")
       if(!jok){
           uio = "py"
       }else{
           jol = jok.toLowerCase()
           if(jol == "brython"){
            uio = "bry"
           }else if(jol == "pythonscript"){
               uio = "bestps"
           }
       }
   }else if(j.includes(".html")){
     uio = "html"
   } else if(j.includes(".php")){
       alert("PHP is not supported. Please raise an issue at https://github.com/BestMat/bestdeveloper-issues/issues")
   } else if(j.includes(".java") || j.includes(".jar") || j.includes(".class")){
    alert("Java is not supported. It will be supported very soon. Please raise an issue at https://github.com/BestMat/bestdeveloper-issues/issues")
}
   addToDatabase(txt);
})

const addToDatabase = (a) => {
    var code = a;
    localStorage.setItem("editCodeForCurrentProject",code)
    
      db.collection(pname).add({
        code: code,
        lang: uio
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        id = docRef.id
        alert("Craedted File! :)")
        alert(`File ID: ${id}`)
        localStorage.setItem("latestFileID", id)
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert(`Error: ${error}`)
    });
}

// w stuff
var w = document.querySelector(".input2plie")
w.addEventListener("click", function(){
    db.collection(localStorage.getItem("currentCreatedPro")).get().then(s=>{
        s.docs.forEach(a => {
            const print = (j) => {
                console.log(j)
            }
            let b = a.data();
            let obj = b;
            var lang = obj.lang;
            var code_from_db = obj.code;
            print(lang)
            if(lang == "js"){
              localStorage.setItem("codeAfterGetDatabase",code_from_db)
              localStorage.setItem("projecTlangCode",lang)
              print(code_from_db)
              location.replace("runCode.html")
            }
        })
      }).catch(err=>{
        console.error(err)
      })
})