const btnsOpenModel = document.querySelectorAll(".btn--open-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

//////////////////////////////////////////////////////////////////
// LEC 2) PROJECT: "Bankist" Website

// [SHOW PROJECT]
// This code comes from the modal window we already built earlier. Let's just do 2 quick modifications here!

const openModal = function (e) {
  // 1.
  // Prevent link from jumping to top of page. We used this before, and it always works the same: it prevents whatever would happen normally. And normally, a link with a # jumps to the section which has an ID with the same name [show in HTML]
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 2.
btnsOpenModel.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});




const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  section1.scrollIntoView({behavior:'smooth'});
});