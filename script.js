const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
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
