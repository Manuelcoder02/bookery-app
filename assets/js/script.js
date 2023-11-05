"use strict";

// # STORING ELEMENTS IN A VARIABLE

// ## NAVIGATION BAR ELEMENTTS
const btnOpenNav = document.querySelector(".btn-opennav");
const btnCloseNav = document.querySelector(".btn-closenav");

const navigationBar = document.querySelector(".menu_navbar");

// ## CART ELEMENTS
const cartEL = document.querySelector(".cart");
const whiteCartEL = document.querySelector(".white-cart");
const colorCartEL = document.querySelector(".color-cart");

// ## BESTSELLER ELEMENTS
const booksEL = document.querySelectorAll(".book");
const bookImageEL = document.querySelectorAll(".book-image");
const shoppingInfoEL = document.querySelectorAll(".shopping-info");
const bookTitleEL = document.querySelectorAll(".book-title");
const bookAuthorEL = document.querySelectorAll(".book-author");
const overlayEL = document.querySelectorAll(".overlay");

// ### DESTRUCTURING THE BESTSELLER ELEMENTS
const [bookOne, bookTwo, bookThree, bookFour] = booksEL;
const [bookImageOneEL, bookImageTwoEL, bookImageThreeEL, bookImageFourEL] =
  bookImageEL;
const [
  shoppingInfoOneEL,
  shoppingInfoTwoEL,
  shoppingInfoThreeEL,
  shoppingInfoFourEL,
] = shoppingInfoEL;
const [bookTitleOneEL, bookTitleTwoEL, bookTitleThreeEL, bookTitleFourEL] =
  bookTitleEL;
const [bookAuthorOneEL, bookAuthorTwoEL, bookAuthorThreeEL, bookAuthorFourEL] =
  bookAuthorEL;
const [overlayOneEL, overlayTwoEL, overlayThreeEL, overlayFourEL] = overlayEL;
console.log(overlayOneEL, overlayThreeEL);

// ## BOOKS CATEGORIES ELEMENTS --
const bcOne = document.querySelector(".bc-one");
const bcTwo = document.querySelector(".bc-two");
const bcThree = document.querySelector(".bc-three");
const bcFour = document.querySelector(".bc-four");
const infoEL = document.querySelectorAll(".info");
const bcTitle = document.querySelectorAll(".bc-title");
const btnSeeAll = document.querySelectorAll(".btn-see-all");

const overlayCtOne = document.querySelector(".ct-one");
const overlayCtTwo = document.querySelector(".ct-two");
const overlayCtThree = document.querySelector(".ct-three");
const overlayCtFour = document.querySelector(".ct-four");

// ### DESTRUCTURING THE CATEGORIES ELEMENTS
const [infoOne, infoTwo, infoThree, infoFour] = infoEL;
const [bcTitleOne, bcTitleTwo, bcTitleThree, bcTitleFour] = bcTitle;
const [btnOne, btnTwo, btnThree, btnFour] = btnSeeAll;

// ## TESTIMONIAL ELEMENT
const testimonialsEL = document.querySelectorAll(".testimonial");
const testName = document.querySelectorAll(".test-name");

// ### DESTRUCTURING THE TESTIMONIAL ELEMENTS
const [testimonialOne, testimonialTwo, testimonialThree] = testimonialsEL;
const [testNameOne, testNameTwo, testNameThree] = testName;
console.log(testimonialOne);

// ## SOCIAL MEDIA HANDLES ELEMENTS
const facebookEL = document.querySelector(".facebook");
const outlineFacebook = document.querySelector(".outline-facebook");
const coloredFacebook = document.querySelector(".colored-facebook");

const instagramEL = document.querySelector(".instagram");
const outlineInstagram = document.querySelector(".outline-instagram");
const coloredInstagram = document.querySelector(".colored-instagram");

const twitterEL = document.querySelector(".twitter");
const outlineTwitter = document.querySelector(".outline-twitter");
const coloredTwitter = document.querySelector(".colored-twitter");
// -- SABLE FUNCTIONS ---
// const bookHover = function () {};

// const bookNotHover = function () {};REU

// FUNCTIONALITY FOR OPENING THE NAVIGATION BAR
btnOpenNav.addEventListener("click", function () {
  navigationBar.classList.remove("hidden");
  btnOpenNav.style.visibility = "hidden";
  btnCloseNav.classList.remove("hidden");
});

// FUNCTIONALITY FOR CLOSING THE NAVIGATION BAR
btnCloseNav.addEventListener("click", function () {
  navigationBar.classList.add("hidden");
  btnOpenNav.style.visibility = "visible";
  btnCloseNav.classList.add("hidden");
});

// HOVERING OVER THE CART FUNCTIONALITY
cartEL.addEventListener("mouseenter", function () {
  whiteCartEL.style.visibility = "hidden";
  colorCartEL.style.visibility = "visible";
});
cartEL.addEventListener("mouseleave", function () {
  whiteCartEL.style.visibility = "visible";
  colorCartEL.style.visibility = "hidden";
});

// -- WHEN THE BOOKS ARE HOVERED ---
// -- BOOK ONE --
bookOne.addEventListener("mouseenter", function () {
  overlayOneEL.classList.remove("hidden");
  bookOne.classList.add("background-color");
  bookTitleOneEL.classList.add("color");
  bookAuthorOneEL.classList.add("color");
  shoppingInfoOneEL.style.visibility = "visible";
});
bookOne.addEventListener("mouseleave", function () {
  overlayOneEL.classList.add("hidden");
  bookOne.classList.remove("background-color");
  bookTitleOneEL.classList.remove("color");
  bookAuthorOneEL.classList.remove("color");
  shoppingInfoOneEL.style.visibility = "hidden";
});

// --BOOK TWO --
bookTwo.addEventListener("mouseenter", function () {
  overlayTwoEL.classList.remove("hidden");
  bookTwo.classList.add("background-color");
  bookTitleTwoEL.classList.add("color");
  bookAuthorTwoEL.classList.add("color");
  shoppingInfoTwoEL.style.visibility = "visible";
});
bookTwo.addEventListener("mouseleave", function () {
  overlayTwoEL.classList.add("hidden");
  bookTwo.classList.remove("background-color");
  bookTitleTwoEL.classList.remove("color");
  bookAuthorTwoEL.classList.remove("color");
  shoppingInfoTwoEL.style.visibility = "hidden";
});

// --BOOK THREE --
bookThree.addEventListener("mouseenter", function () {
  overlayThreeEL.classList.remove("hidden");
  bookThree.classList.add("background-color");
  bookTitleThreeEL.classList.add("color");
  bookAuthorThreeEL.classList.add("color");
  shoppingInfoThreeEL.style.visibility = "visible";
});
bookThree.addEventListener("mouseleave", function () {
  overlayThreeEL.classList.add("hidden");
  bookThree.classList.remove("background-color");
  bookTitleThreeEL.classList.remove("color");
  bookAuthorThreeEL.classList.remove("color");
  shoppingInfoThreeEL.style.visibility = "hidden";
});

// --BOOK FOUR --
bookFour.addEventListener("mouseenter", function () {
  overlayFourEL.classList.remove("hidden");
  bookFour.classList.add("background-color");
  bookTitleFourEL.classList.add("color");
  bookAuthorFourEL.classList.add("color");
  shoppingInfoFourEL.style.visibility = "visible";
});
bookFour.addEventListener("mouseleave", function () {
  overlayFourEL.classList.add("hidden");
  bookFour.classList.remove("background-color");
  bookTitleFourEL.classList.remove("color");
  bookAuthorFourEL.classList.remove("color");
  shoppingInfoFourEL.style.visibility = "hidden";
});

// -- BOOK CATEGORIES --
// -- CATEGORY ONE --
bcOne.addEventListener("mouseenter", function () {
  overlayCtOne.classList.remove("hidden");
  infoOne.style.visibility = "visible";
});
bcOne.addEventListener("mouseleave", function () {
  overlayCtOne.classList.add("hidden");
  infoOne.style.visibility = "hidden";
});

// -- CATEGORY TWO --
bcTwo.addEventListener("mouseenter", function () {
  overlayCtTwo.classList.remove("hidden");
  infoTwo.style.visibility = "visible";
});
bcTwo.addEventListener("mouseleave", function () {
  overlayCtTwo.classList.add("hidden");
  infoTwo.style.visibility = "hidden";
});

// -- CATEGORY THREE --
bcThree.addEventListener("mouseenter", function () {
  overlayCtThree.classList.remove("hidden");
  infoThree.style.visibility = "visible";
});
bcThree.addEventListener("mouseleave", function () {
  overlayCtThree.classList.add("hidden");
  infoThree.style.visibility = "hidden";
});

// -- CATEGORY FOUR --
bcFour.addEventListener("mouseenter", function () {
  overlayCtFour.classList.remove("hidden");
  infoFour.style.visibility = "visible";
});
bcFour.addEventListener("mouseleave", function () {
  overlayCtFour.classList.add("hidden");
  infoFour.style.visibility = "hidden";
});

// -- TESTIMONIAL FUNCTIONALITY
// ## TESTIMONIAL ONE
testimonialOne.addEventListener("mouseenter", function () {
  testimonialOne.classList.add("background-color");
  testNameOne.classList.add("color");
});
testimonialOne.addEventListener("mouseleave", function () {
  testimonialOne.classList.remove("background-color");
  testNameOne.classList.remove("color");
});

// ## TESTIMONIAL TWO
testimonialTwo.addEventListener("mouseenter", function () {
  testimonialTwo.classList.add("background-color");
  testNameTwo.classList.add("color");
});
testimonialTwo.addEventListener("mouseleave", function () {
  testimonialTwo.classList.remove("background-color");
  testNameTwo.classList.remove("color");
});

// ## TESTIMONIAL THREE
testimonialThree.addEventListener("mouseenter", function () {
  testimonialThree.classList.add("background-color");
  testNameThree.classList.add("color");
});
testimonialThree.addEventListener("mouseleave", function () {
  testimonialThree.classList.remove("background-color");
  testNameThree.classList.remove("color");
});

// -- HANDLES HOVERING FUNCTIONALITY --
// ## FACEBOOK
facebookEL.addEventListener("mouseenter", function () {
  outlineFacebook.style.visibility = "hidden";
  coloredFacebook.style.visibility = "visible";
});
facebookEL.addEventListener("mouseleave", function () {
  outlineFacebook.style.visibility = "visible";
  coloredFacebook.style.visibility = "hidden";
});

// ## INSTAGRAM
instagramEL.addEventListener("mouseenter", function () {
  outlineInstagram.style.visibility = "hidden";
  coloredInstagram.style.visibility = "visible";
});
instagramEL.addEventListener("mouseleave", function () {
  outlineInstagram.style.visibility = "visible";
  coloredInstagram.style.visibility = "hidden";
});

// ## TWITTER
twitterEL.addEventListener("mouseenter", function () {
  outlineTwitter.style.visibility = "hidden";
  coloredTwitter.style.visibility = "visible";
});
twitterEL.addEventListener("mouseleave", function () {
  outlineTwitter.style.visibility = "visible";
  coloredTwitter.style.visibility = "hidden";
});
