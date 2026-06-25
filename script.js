const images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg",
  "images/slide5.jpg"
];

const image = document.getElementById("slider-image");
const counter = document.getElementById("counter");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentImage = 0;

function showImage() {
  image.src = images[currentImage];
  image.alt = "Изображение " + (currentImage + 1);
  counter.textContent = "Изображение " + (currentImage + 1) + " из " + images.length;
}

nextButton.addEventListener("click", function () {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  showImage();
});

prevButton.addEventListener("click", function () {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  showImage();
});
