// const inputText = document.querySelector("input");
// const without = document.querySelector(".without");
// const withdelay = document.querySelector(".with");




// console.log(without.textContent);

// function handleDelay(e) {
//      inputText.addEventListener("input", () => {
//           without.textContent = e.target.value
//      })

//      setTimeout(() =>inputText.addEventListener("input", () =>
//           withdelay.textContent = e.target.value
//      ), 3000);
// }





// console.log(withdelay.textContent);

// Selecting elements
const inputText = document.querySelector("input");
const without = document.querySelector(".without");
const withdelay = document.querySelector(".with");
const throttling = document.querySelector(".withThrottling");


// Immediate update (no delay)
inputText.addEventListener("input", (e) => {
     without.textContent = e.target.value; // Update immediately
});

// Delayed update (with 0.9-second delay)
let timer;
let flag = false;
function updateWithDelay(value) {
     if (timer) clearTimeout(timer)
     timer = setTimeout(() => {
          withdelay.textContent = value; // Update with delay
     }, 900);
}

function updateThrottle(value) {
     if (flag) return
     throttling.textContent = value;
     flag = true;
     setTimeout(() => {
          flag = false
     }, 900)
}

// Listen to the input and call the delay function
inputText.addEventListener("input", (e) => {
     updateWithDelay(e.target.value);
     updateThrottle(e.target.value);
});






