function timeFunction() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let time = `${hours}:${minutes}:${seconds}`;
  let date = now.toString().slice(0,15);
  document.querySelector(".time").textContent = time;
  document.querySelector(".date").textContent = date;
}

timeFunction();

setInterval(timeFunction, 1000);