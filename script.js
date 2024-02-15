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
// Carousel div function
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

// Carousel Auto Div
function updateAutoCarouselDiv(elements, currentIndex) {
 elements.forEach((el, index) => {
  el.style.display = index === currentIndex ? 'block' : 'none';
 });
}

function carouselAutoPrevElementDiv(button) {
 const carousel = button.closest('.carouselAuto');
 let currentIndex = carousel.currentIndex || 0;
 let elements = carousel.elements;

 if (!elements) {
  elements = Array.from(carousel.querySelectorAll('.carouselContentContainer .carouselDiv'));
  carousel.elements = elements; // Store elements array in carousel object
 }

 currentIndex = (currentIndex - 1 + elements.length) % elements.length;
 carousel.currentIndex = currentIndex; // Update currentIndex in the carousel object
 updateAutoCarouselDiv(elements, currentIndex);
}

function carouselAutoNextElementDiv(button) {
 const carousel = button.closest('.carouselAuto');
 let currentIndex = carousel.currentIndex || 0;
 let elements = carousel.elements;

 if (!elements) {
  elements = Array.from(carousel.querySelectorAll('.carouselContentContainer .carouselDiv'));
  carousel.elements = elements; // Store elements array in carousel object
 }

 currentIndex = (currentIndex + 1) % elements.length;
 carousel.currentIndex = currentIndex; // Update currentIndex in the carousel object
 updateAutoCarouselDiv(elements, currentIndex);
}

function startAutoSlide(carousel) {
 carousel.autoSlideInterval = setInterval(() => {
  carouselAutoNextElementDiv(carousel.querySelector('.img-slide-next button'));
 }, typeof CarouselInterval !== 'undefined' ? CarouselInterval : 500); // Use CarouselInterval or default to 5000 milliseconds
}

// Start auto sliding when the page loads
document.addEventListener('DOMContentLoaded', function () {
 const autoCarousel = document.querySelector('.carouselAuto');
 startAutoSlide(autoCarousel);
});

// auto interupt for carousel is disabled or commented below


function stopAutoSlide(carousel) {
 clearInterval(carousel.autoSlideInterval);
}

// Optionally, you can stop auto sliding when the user interacts with the carousel
document.querySelector('.carouselAuto').addEventListener('mouseover', function () {
 stopAutoSlide(this);
});

document.querySelector('.carouselAuto').addEventListener('mouseout', function () {
 startAutoSlide(this);
});
//

// Nav function for window responsive
function showNavItems(button) {
 const hiddenNavList = button.nextElementSibling;
 hiddenNavList.style.display = hiddenNavList.style.display === 'block' ? 'none' : 'block';
 button.innerText = button.innerText === '☰' ? '⨯' : '☰';
}

function resetButtonTexts() {
 const buttons = document.querySelectorAll('.NavResponsive .navActions button');
 buttons.forEach(button => button.innerText = '☰');
}

function handleScreenWidth() {
 // Get the screen width
 const screenWidth = window.innerWidth || document.documentElement.clientWidth;

 // Get all elements with class "hiddenNavList"
 const hiddenNavLists = document.querySelectorAll('.hiddenNavList');

 // Iterate through each hiddenNavList and handle display property
 hiddenNavLists.forEach(hiddenNavList => {
  if (screenWidth > 1200) {
   hiddenNavList.style.display = 'none';
  } else {
   hiddenNavList.style.display = '';
  }
 });

 // Reset the innerText of buttons
 resetButtonTexts();
}

// Initial call to set the display property based on the initial screen width
handleScreenWidth();

// Add event listener for the resize event
window.addEventListener('resize', handleScreenWidth);
//
// Tab functions
// JavaScript function to show/hide tab content
function showTab(event) {
 const tabBar = event.currentTarget; // Get the clicked tab bar container
 const tabButtons = tabBar.querySelectorAll(".tab");
 const tabContents = tabBar.nextElementSibling.querySelectorAll(".tabContent");
 const clickedButton = event.target;
 const index = Array.from(tabButtons).indexOf(clickedButton);

 // Hide all tab contents within the same container
 tabContents.forEach(content => {
   content.style.display = "none";
 });

 // Show the corresponding tab content
 tabContents[index].style.display = "block";

 // Reset active state for all tab buttons within the same container
 tabButtons.forEach(btn => {
   btn.classList.remove("tabActive");
 });

 // Set active state for the clicked tab button
 clickedButton.classList.add("tabActive");
}
// Tab functions end
