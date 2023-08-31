//Create a 16 x 16 grid of div boxes using JS DOM manipulation

//set the container to flex-wrap. May need to research how flex-wrap works
//find the container width, divide by 16
//Create a line of 256 divs, set each to 1/16th the width of container

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

  container.appendChild(pixel);
}

//I thought it would be best to create each pixel div individually rather than trying to group them by row or something
for (i = 0; i < boxNumber; i++) {
  createPixel();
}