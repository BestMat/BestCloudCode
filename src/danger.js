var x = confirm("Delete Project?")
if(x){
    var y = confirm("Deleted Project. Undo?")
    if(y){
        alert("Undone")
    }else{
    localStorage.removeItem("currentCreatedPro")
    localStorage.removeItem("latestFileID")
    localStorage.removeItem("editCodeForCurrentProject")
    localStorage.removeItem("editCodeForCurrentProject")
    localStorage.removeItem("projecTlangCode")
    }
}
