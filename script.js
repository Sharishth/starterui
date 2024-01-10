function dropdown(button) {
  const options = button.nextElementSibling;

  if (options.style.display !== "flex") {
    options.style.display = "flex";
  } else {
    options.style.display = "none";
  }
}

function setOptionValue(button, value) {
  const dropdownValue = button.closest('.dropdown').querySelector('.dropdownValue');

  if (dropdownValue) {
    dropdownValue.innerText = value;
    dropdownValue.setAttribute('aria-valuetext', String(value));
    button.closest('.options').style.display = "none";
    console.log(value); // optional
    document.getElementById("showoutputtext").value = value + ' selected'; // optional
  }
}

// checkbox function
function changeCheckboxValue(checkbox) {
  // Get or set the value using the dataset property
  const CariaValueText = checkbox.ariaValueText;

  if (CariaValueText === 'off') {
    checkbox.ariaValueText = 'on';
    checkbox.style.backgroundColor = '#5fec6b';
    checkbox.style.backgroundImage = 'url("icons8-tick.svg")';
  } else {
    checkbox.ariaValueText = 'off';
    checkbox.style.backgroundColor = '#eee';
    checkbox.style.backgroundImage = 'none';
  }
}

// accordian function
function accexpand(button) {
  const accordionContent = button.nextElementSibling;

  if (accordionContent.style.display !== "block") {
    accordionContent.style.display = "block";
  } else {
    accordionContent.style.display = "none";
  }
}
