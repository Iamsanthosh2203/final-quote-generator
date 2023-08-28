import { generateTextAndImage } from "./utils.js";

// 1. Change the value of the variable to your name

const nameDOM = document.getElementById("myName");
const favoriteActivityDOM = document.getElementById("myHobbie");
const favoritePlaceDOM = document.getElementById("myPlace");

const quoteDOM = document.querySelector(".quote-span");
const namespanDOM = document.querySelector(".name-span");

const resetBtn = document.querySelector("#reload");

// 2. Change the value of the variable to your favorite activity

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0;

// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

// generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  let name = document.getElementById("myName").value;
  let favoriteActivity = document.getElementById("myHobbie").value;
  let favoritePlace = document.getElementById("myPlace").value;
  console.log(name, favoriteActivity, favoritePlace);

  if (!name || !favoriteActivity || !favoritePlace) {
    alert("Please fill all the forms!!!");
  } else {
    generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
    nameDOM.classList.add("none");
    favoriteActivityDOM.classList.add("none");
    favoritePlaceDOM.classList.add("none");

    quoteDOM.classList.remove("none");
    namespanDOM.classList.remove("none");

    btn.classList.add("none");

    resetBtn.classList.remove("none");
  }
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
