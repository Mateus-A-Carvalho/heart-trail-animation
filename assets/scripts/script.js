const bodyEl = document.querySelector('body');


bodyEl.addEventListener("mousemove", (e) => {
  const X = e.offsetX;
  const Y = e.offsetY;

  const spanEl = document.createElement("span");
  bodyEl.appendChild(spanEl);

  spanEl.style.top = `${Y}px`;
  spanEl.style.left = `${X}px`;

  spanEl.style.width = "10rem"
  spanEl.style.height = "10rem"

})
