const p = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
const decrementBtn = document.getElementById("decrement-btn");

let counter = 0;

p.innerHTML = counter;

incrementBtn.addEventListener("click", () => {
  p.innerHTML = ++counter;
});

resetBtn.addEventListener("click", () => {
  p.innerHTML = counter = 0;
});

decrementBtn.addEventListener("click", () => {
  p.innerHTML = --counter;
});
