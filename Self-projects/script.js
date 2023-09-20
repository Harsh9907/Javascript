let num = document.querySelector(".input");

document.querySelector(".btn").addEventListener("click", function () {
  console.log(typeof Number(num.value));
  console.log("button clicked!!!");
});

document.querySelector(".mouse").addEventListener("click", function () {
  console.log("mouse hovered");
});

// Get the input element
// const inputElement = document.querySelector("input");

// // Get the button element
// const buttonElement = document.querySelector("button");

// // Add an event listener to the button element
// buttonElement.addEventListener("click", function () {
//   // Get the value of the input element
//   const inputValue = Number(inputElement.value);
//   console.log(typeof inputValue);
//   // Log the input value to the console
//   console.log(inputValue);
// });
