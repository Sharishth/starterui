// Dropdown Function
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
//Dropdown Function

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

 // Check if the clicked element is a tab button
 if (!clickedButton.classList.contains("tab")) {
  return; // Do nothing if the clicked element is not a tab button
 }

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

// Vertical devider set height
window.addEventListener('DOMContentLoaded', function () {
 // Get the parent element
 var dividerParent = document.querySelector('.divider-vr').parentElement;

 // Calculate half of the parent's height including padding
 var computedStyles = window.getComputedStyle(dividerParent);
 var parentHeightWithPadding = dividerParent.offsetHeight +
  parseInt(computedStyles.getPropertyValue('padding-top')) +
  parseInt(computedStyles.getPropertyValue('padding-bottom'));
 var halfParentHeight = parentHeightWithPadding / 3.5;

 // Set the height of .divider-vr > div elements to half of the parent's height
 var dividerDivs = document.querySelectorAll('.divider-vr > div');
 dividerDivs.forEach(function (div) {
  div.style.height = halfParentHeight + 'px';
 });
});
// Vertical devider set height

// Drawer function
function openDrawer(x, a) {
 setDrawerDimensions()
 const y = document.getElementById(x);
 y.style.display = 'block';
 const b = document.getElementById(a);
 b.classList.add('slidedrawer');
}
function closeDrawer(x, a) {
 const y = document.getElementById(x);
 y.classList.remove('slidedrawer');
 y.style.display = 'none';
 const b = document.getElementById(a);
 b.classList.add('slidedrawer');
}

function setDrawerDimensions() {
 // Get the parent element of '.drawer-wrapper'
 var d_drawerParent = document.querySelector('.drawer-wrapper').parentElement;

 // Get the computed styles of the parent element
 var d_parentStyles = window.getComputedStyle(d_drawerParent);

 // Get the height and width of the parent element
 var d_parentHeight = parseFloat(d_parentStyles.getPropertyValue('height'));
 var d_parentWidth = parseFloat(d_parentStyles.getPropertyValue('width'));

 // Set the height and width of '.drawer-wrapper' to match the parent element
 var d_drawerWrapper = document.querySelector('.drawer-wrapper');
 var d_drawer = document.querySelector('.drawer');
 d_drawerWrapper.style.height = d_parentHeight + 'px';
 d_drawerWrapper.style.width = d_parentWidth + 'px';
 d_parentHeight = d_parentHeight - 32
 d_drawer.style.height = d_parentHeight + 'px';
}

window.addEventListener('DOMContentLoaded', function () {
 setDrawerDimensions()
})

window.addEventListener('resize', setDrawerDimensions());
// Drawer function
