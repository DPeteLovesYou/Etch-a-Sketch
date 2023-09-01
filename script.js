const container = document.querySelector('.gridContainer')
const containerInfo = container.getBoundingClientRect();
const containerWidth = containerInfo.width - 4; //border is 2px per side

let rowNumber = 16;
let boxSize = (containerWidth/rowNumber) - 2; //each has a border of 1px
let boxNumber = rowNumber * rowNumber;

for (i = 0; i < boxNumber; i++) {
  createPixel();
}

let pixels = document.querySelectorAll('.pixel');

function createPixel() {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`);
  pixel.addEventListener('mouseover', hoverEvent);

  container.appendChild(pixel);
}

function hoverEvent(e) {
  e.currentTarget.classList.add('active')
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
 for (const pixel of pixels)
  pixel.classList.remove('active');
})