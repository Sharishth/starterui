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

// checkbox function
function changeCheckboxValue() {
 if(document.getElementById("checkbox-mock").ariaValueText == "off") {
   document.getElementById("checkbox-mock").ariaValueText = "on"
   // #5fece1
   document.getElementById("checkbox-mock").style.backgroundColor = "#5fec6b"
   document.getElementById("checkbox-mock").style.backgroundImage = 'url("icons8-tick.svg")'
 } else {
   document.getElementById("checkbox-mock").ariaValueText = "off"
   document.getElementById("checkbox-mock").style.backgroundColor = "#eee"
   document.getElementById("checkbox-mock").style.backgroundImage = 'none'
 }
}

// accordian function
function accexpand() {
  const accvar = document.getElementById('accordian1')
  if (accvar.style.display != "block") {
    accvar.style.display = "block"
  } else {
    accvar.style.display = "none"
  }
}
