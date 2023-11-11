const spanEl = document.querySelector('#spanEl')
const bodyEl = document.querySelector('body');


document.addEventListener("mousemove", (e) => {
  let X = e.clientX;
  let Y = e.clientY;

  spanEl.style.width = "5rem"
  spanEl.style.height = "5rem"
  spanEl.style.setProperty("--Xposition", `${X}px`)  
  spanEl.style.setProperty("--Yposition", `${Y}px`)  

  console.log(X, Y);
})

function createElement() {
  const newElement = document.createElement('div');
  bodyEl.appendChild(newElement);
  
}

createElement()