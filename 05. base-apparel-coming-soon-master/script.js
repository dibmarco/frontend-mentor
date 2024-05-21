"use strict";

// const emailInput = document.querySelector(".email-input");
// const submitBtn = document.querySelector(".submit-button");

// function containsInvalidCharacters(str) {
//   const re = /[^a-zA-Z.]/;
//   return re.test(str);
// }

// function checkEmail() {
//   const enteredEmail = String(emailInput.value).toLocaleLowerCase();
// //   console.log(enteredEmail);

//   if (
//     !enteredEmail ||
//     !enteredEmail.includes("@") ||
//     enteredEmail.includes(" ")
//   ) {
//     alert("invalid email");
//     return;
//   }

//   emailInput.value = "";

//   const atIndex = enteredEmail.indexOf("@");
//   const emailSlice = enteredEmail.slice(atIndex + 1);
//   // console.log(containsInvalidCharacters(emailSplit));

//   const testChar = containsInvalidCharacters(emailSlice);
//   console.log(testChar);

//   if (!testChar) {
//     const emailSplit = emailSlice.split(".");
//     // console.log(emailSplit);
//     if (emailSplit.length < 2 || emailSplit.length > 3) {
//         alert("invalid email");
//         return;
//     } else {
//         alert("success!");
//         return;
//     }
//   } else {
//     alert("invalid email");
//     return;
//   }
  
// }

// submitBtn.addEventListener("click", checkEmail);

const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-button");

function checkEmail() {
    const email = emailInput.value;
    const pattern = emailInput.getAttribute('pattern');
    const regex = new RegExp(pattern);

    emailInput.value = "";
    
    if (regex.test(email)) {
        alert('Success');
    } else {
        alert('Invalid email');
    }
}

submitBtn.addEventListener("click", checkEmail);
