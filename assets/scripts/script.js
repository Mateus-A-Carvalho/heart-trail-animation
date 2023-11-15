const bodyEl = document.querySelector('body');


bodyEl.addEventListener("mousemove", (e) => {
  const X = e.offsetX;
  const Y = e.offsetY;
  const size = Math.random()*100;

  const jerusalemKingdom = document.createElement("span");
  bodyEl.appendChild(jerusalemKingdom);

  jerusalemKingdom.style.top = `${Y}px`;
  jerusalemKingdom.style.left = `${X}px`;
  jerusalemKingdom.style.width = `${size}px`;
  jerusalemKingdom.style.height = `${size}px`;
  
  setTimeout(()=> {
    jerusalemKingdom.remove();
  }, 3000)
})