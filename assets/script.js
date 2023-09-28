const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const banner = document.querySelector(".banner-img");
const p = document.querySelector("#banner > p");
const dots = document.querySelector("#banner .dots ");

let showSlide = 0; //Slide qui part de 0 pour incrementer
// const slideActive = slides[showSlide];

//mon uptadecarousel va permettre : si la shoslide est inferieur a 0 alors la longeur des slides -1 et quand il arrive au bout des slides il se remets a 0..

function updateCarousel() {
  if (showSlide < 0) {
    showSlide = slides.length - 1; //length commence a 1 et pas 0 comme l'index
  } else if (showSlide >= slides.length) {
    showSlide = 0;
  }

  //remplacement des images/tagline dans le array

  banner.src = `./assets/images/slideshow/${slides[showSlide].image}`;
  p.innerHTML = slides[showSlide].tagLine;
  updateDot();
}

//creation des dots avec boucle for pour chaque images.

function creationDots() {
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
  }
}
creationDots();

function updateDot() {
  const allDots = document.querySelectorAll(".dot");
  for (let index = 0; index < allDots.length; index++) {
    const dot = allDots[index];
    if (index === showSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

const handleArrowClick = (direction) => {
  if (direction === "left") {
    showSlide--;
  } else if (direction === "right") {
    showSlide++;
  }
  updateCarousel();
};

arrowLeft.addEventListener("click", () => {
  handleArrowClick("left");
});
arrowRight.addEventListener("click", () => {
  handleArrowClick("right");
});

const initializeCarousel = () => {
  showSlide = 0;
  updateCarousel();
};

initializeCarousel();

// definition de orienté objet : La programmation orientée objet est un modèle de langage de programmation qui s'articule autour d'objets et de données, plutôt que d'actions et de logique

// arrowLeft.addEventListener("click", () => {
//   showSlide--;
//   updateCarousel();
//   //updateDot();
// });

// arrowRight.addEventListener("click", () => {
//   showSlide++;
//   updateCarousel();
//   //updateDot();
// });
