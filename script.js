const container = document.querySelector('.gridContainer')
const containerInfo = container.getBoundingClientRect();
const containerWidth = containerInfo.width - 4;

let rowNumber = 16;
let boxSize = (containerWidth/rowNumber) - 2;
let boxNumber = rowNumber * rowNumber;

function createPixel() {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`);
  pixel.addEventListener('mouseover', hoverEvent);

  container.appendChild(pixel);
}

function hoverEvent() {
  console.log('test');
}

//I thought it would be best to create each pixel div individually rather than trying to group them by row or something
for (i = 0; i < boxNumber; i++) {
  createPixel();
}