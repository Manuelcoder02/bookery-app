"use strict";

// storing elements in variable

// navigation bar elements
const btnOpenNav = document.querySelector(".btn-opennav");
const btnCloseNav = document.querySelector(".btn-closenav");

const navigationBar = document.querySelector(".menu_navbar");

// cart elements
const cartEL = document.querySelector(".cart");
const whiteCartEL = document.querySelector(".white-cart");
const colorCartEL = document.querySelector(".color-cart");

// bestseller elements
const booksEL = document.querySelectorAll(".book");
const bookImageEL = document.querySelectorAll(".book-image");
const shoppingInfoEL = document.querySelectorAll(".shopping-info");
const bookTitleEL = document.querySelectorAll(".book-title");
const bookAuthorEL = document.querySelectorAll(".book-author");
const overlayEL = document.querySelectorAll(".overlay");

// destructuring the elements
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

// -- BOOKS CATEGORIES ELEMENTS --
const bcOne = document.querySelector(".bc-one");
const bcTwo = document.querySelector(".bc-two");
const bcThree = document.querySelector(".bc-three");
const bcFour = document.querySelector(".bc-four");
const infoEL = docuement.querySelectorAll(".info");
const bcTitle = document.querySelectorAll(".bc-title");
const btnSeeAll = document.querySelectorAll(".btn-see-all");

const overlayCTOne = document.querySelector(".ct-one");

const [infoOne, infoTwo, infoThree, infoFour] = infoEL;
const [bcTitleOne, bcTitleTwo, bcTitleThree, bcTitleFour] = bcTitle;
const [btnOne, btnTwo, btnThree, btnFour] = btnSeeAll;

// -- REUSABLE FUNCTIONS ---
// const bookHover = function () {};

// const bookNotHover = function () {};

// when the menu bar is clicked
btnOpenNav.addEventListener("click", function () {
  navigationBar.classList.remove("hidden");
  btnOpenNav.style.visibility = "hidden";
  btnCloseNav.classList.remove("hidden");
});

// when the close bar is clicked
btnCloseNav.addEventListener("click", function () {
  navigationBar.classList.add("hidden");
  btnOpenNav.style.visibility = "visible";
  btnCloseNav.classList.add("hidden");
});

// cart hovering
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
  overlayCTOne.classList.remove("hidden");
});
