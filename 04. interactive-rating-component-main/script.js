"use strict";

// Elements
const card = document.querySelector(".card");
const selectedRating = document.querySelector(".selected-rating");
const ratingList = document.querySelector(".rating-list");
const ratingValues = ratingList.querySelectorAll(".rating-value");
const submitBtn = document.querySelector(".submit-button");

let rating;

function resetRatingStyles() {
  ratingValues.forEach(ratingValue => {
    ratingValue.style.backgroundColor = "";
    ratingValue.style.color = "";
  });
}

function setRatingStyles(element) {
  element.style.backgroundColor = "var(--orange)";
  element.style.color = "var(--white)";
}

ratingList.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating-value")) {
    resetRatingStyles(); // Reset styles for all
    rating = e.target.dataset.value; // Store rating value
    setRatingStyles(e.target); // Apply styles to the clicked element
  }
});

submitBtn.addEventListener("click", () => {
  selectedRating.textContent = rating; // Display selected rating
  card.classList.add("flip"); // Animate card
  
  setTimeout(() => {
    card.classList.remove("flip"); // Remove animation class
    resetRatingStyles(); // Reset styles after animation
  }, 4000); // Corresponds to the duration of the flip animation
});