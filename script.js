const slides = [
  {
    src: "images/mountains.svg",
    alt: "Горное озеро на рассвете",
    title: "Тихий рассвет",
    place: "Алтайские горы",
  },
  {
    src: "images/coast.svg",
    alt: "Скалистый берег и синее море",
    title: "Солёный ветер",
    place: "Северное побережье",
  },
  {
    src: "images/desert.svg",
    alt: "Песчаные дюны в лучах заката",
    title: "Золотой час",
    place: "Песчаные дюны",
  },
  {
    src: "images/forest.svg",
    alt: "Туман в густом хвойном лесу",
    title: "Утро в лесу",
    place: "Северная тайга",
  },
  {
    src: "images/night.svg",
    alt: "Ночное небо над спокойным озером",
    title: "После полуночи",
    place: "Озёрный край",
  },
];

const image = document.querySelector(".slide-image");
const title = document.querySelector(".slide-title");
const place = document.querySelector(".slide-place");
const number = document.querySelector(".slide-number");
const counter = document.querySelector(".counter");
const progressBar = document.querySelector(".progress-bar");
const previousButton = document.querySelector(".nav-button--prev");
const nextButton = document.querySelector(".nav-button--next");

let currentIndex = 0;

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  const slide = slides[currentIndex];
  const visibleNumber = currentIndex + 1;

  image.src = slide.src;
  image.alt = slide.alt;
  title.textContent = slide.title;
  place.textContent = slide.place;
  number.textContent = String(visibleNumber).padStart(2, "0");
  counter.textContent = `Изображение ${visibleNumber} из ${slides.length}`;
  progressBar.style.width = `${(visibleNumber / slides.length) * 100}%`;

  image.classList.remove("is-changing");
  void image.offsetWidth;
  image.classList.add("is-changing");
}

nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
previousButton.addEventListener("click", () => showSlide(currentIndex - 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showSlide(currentIndex + 1);
  }

  if (event.key === "ArrowLeft") {
    showSlide(currentIndex - 1);
  }
});
