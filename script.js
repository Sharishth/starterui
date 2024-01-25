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

// Carousel function
function updateCarousel(images, currentIndex) {
  images.forEach((img, index) => {
   img.style.display = index === currentIndex ? 'block' : 'none';
  });
 }
 
 function carouselPrevImage(button) {
  const carousel = button.closest('.carousel');
  let currentIndex = carousel.currentIndex || 0;
  let images = carousel.images;
 
  if (!images) {
   images = carousel.querySelectorAll('.carouselContentContainer *');
   carousel.images = images; // Store images NodeList in carousel object
  }
 
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carousel.currentIndex = currentIndex; // Update currentIndex in the carousel object
  updateCarousel(images, currentIndex);
 }
 
 function carouselNextImage(button) {
  const carousel = button.closest('.carousel');
  let currentIndex = carousel.currentIndex || 0;
  let images = carousel.images;
 
  if (!images) {
   images = carousel.querySelectorAll('.carouselContentContainer *');
   carousel.images = images; // Store images NodeList in carousel object
  }
 
  currentIndex = (currentIndex + 1) % images.length;
  carousel.currentIndex = currentIndex; // Update currentIndex in the carousel object
  updateCarousel(images, currentIndex);
 }
 ////
 function updateCarouselDiv(elements, currentIndex) {
  elements.forEach((el, index) => {
   el.style.display = index === currentIndex ? 'block' : 'none';
  });
 }
 
 function carouselPrevElementDiv(button) {
  const carousel = button.closest('.carousel');
  let currentIndex = carousel.currentIndex || 0;
  let elements = carousel.elements;
 
  if (!elements) {
   elements = Array.from(carousel.querySelectorAll('.carouselContentContainer .carouselDiv'));
   carousel.elements = elements; // Store elements array in carousel object
  }
 
  currentIndex = (currentIndex - 1 + elements.length) % elements.length;
  carousel.currentIndex = currentIndex; // Update currentIndex in the carousel object
  updateCarouselDiv(elements, currentIndex);
 }
 
 function carouselNextElementDiv(button) {
  const carousel = button.closest('.carousel');
  let currentIndex = carousel.currentIndex || 0;
  let elements = carousel.elements;
 
  if (!elements) {
   elements = Array.from(carousel.querySelectorAll('.carouselContentContainer .carouselDiv'));
   carousel.elements = elements; // Store elements array in carousel object
  }
 
  currentIndex = (currentIndex + 1) % elements.length;
  carousel.currentIndex = currentIndex; // Update currentIndex in the carousel object
  updateCarouselDiv(elements, currentIndex);
 }
