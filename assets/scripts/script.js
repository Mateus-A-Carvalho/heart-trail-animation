const spanEl = document.querySelector('#spanEl')

document.addEventListener("click", (e) => {
  let X = e.pageX;
  let Y = e.pageY;

  spanEl.style.width = "10rem"
  spanEl.style.height = "10rem"
  spanEl.style.setProperty("--Xposition", `${X}px`)  
  spanEl.style.setProperty("--Yposition", `${Y}px`)  
})

