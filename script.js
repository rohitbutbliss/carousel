const carouselImgs = document.getElementsByClassName("carousel-img");
const carouselDots = document.getElementsByClassName("dot");
const time = 3000;

let currentImgIdx = 0;

Array.from(carouselDots).forEach((element, index) =>
  element.addEventListener("click", () => {
    changeCarouselOnClick(index);
  })
);

document
  .getElementById("right-btn")
  .addEventListener("click", changeCarouselImgRight);

document
  .getElementById("left-btn")
  .addEventListener("click", changeCarouselImgLeft);

let interval = setInterval(() => {
  changeCarouselImgRight();
}, time);

// this function changes carousel image when you click on right arrow
function changeCarouselImgRight() {
  resetInterval();

  let currentImg = carouselImgs[currentImgIdx];
  removeOtherClasses(currentImg);

  if (currentImgIdx == carouselImgs.length - 1) currentImgIdx = -1;

  currentImg.classList.toggle("slide-left");
  currentImgIdx++;
  currentImg = carouselImgs[currentImgIdx];

  removeOtherClasses(currentImg);
  changeDots(currentImgIdx);

  currentImg.classList.toggle("slide-left-current");
}

// this function changes carousel image when you click on left arrow
function changeCarouselImgLeft() {
  resetInterval();

  let currentImg = carouselImgs[currentImgIdx];
  removeOtherClasses(currentImg);

  if (currentImgIdx == 0) currentImgIdx = carouselImgs.length;

  currentImg.classList.toggle("slide-right");
  currentImgIdx--;
  currentImg = carouselImgs[currentImgIdx];

  removeOtherClasses(currentImg);
  changeDots(currentImgIdx);

  currentImg.classList.toggle("slide-right-current");
}

// this function makes dots active & inactive
function changeDots(idx) {
  Array.from(carouselDots).forEach((dot) => dot.classList.remove("active"));
  carouselDots[idx].classList.add("active");
}

// this function makes changes in carousel image & dots according to the dot clicked
function changeCarouselOnClick(idx) {
  resetInterval();
  changeDots(idx);
  let currentImg = carouselImgs[currentImgIdx];
  removeOtherClasses(currentImg);
  currentImgIdx = idx;
  currentImg = carouselImgs[currentImgIdx];
  removeOtherClasses(currentImg);
  currentImg.classList.add("first-img");
}

// this fucntion resets interval
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    changeCarouselImgRight();
  }, time);
}

// this function removes all classes to prevent clashes in toggle
function removeOtherClasses(currentImg) {
  if (currentImg.classList.contains("slide-right-current"))
    currentImg.classList.remove("slide-right-current");

  if (currentImg.classList.contains("slide-left-current"))
    currentImg.classList.remove("slide-left-current");

  if (currentImg.classList.contains("first-img"))
    currentImg.classList.remove("first-img");

  if (currentImg.classList.contains("slide-left"))
    currentImg.classList.remove("slide-left");
  currentImg.classList.remove("slide-left");

  if (currentImg.classList.contains("slide-right"))
    currentImg.classList.remove("slide-right");
}
