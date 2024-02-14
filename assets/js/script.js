
document.addEventListener("DOMContentLoaded", function(){
    let buttonBox = document.getElementsByTagName("button");
    buttonBox.addEventListener("click", function() {
        document.getElementById('btnBox').value = '';
    })
})