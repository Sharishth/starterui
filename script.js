//options show and hide
function dropdown() {
 if (document.getElementById("options").style.display != "flex") {
  document.getElementById("options").style.display = "flex"
 } else {
  document.getElementById("options").style.display = "none"
 }
}

function setOptionValue(x) {
 // alert(x)
 document.getElementById("dropdownValue").innerText = x
 document.getElementById("dropdownValue").ariaValueText = String(x)
 document.getElementById("options").style.display = "none"
 console.log(x) //optional
 document.getElementById("showoutputtext").value = x + ' selected' //optional
}
