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

let showSlide = 0; //Slide qui part de 0 pour incrementer
// const slideActive = slides[showSlide];

function updateCarousel() {
  if (showSlide < 0) {
    showSlide = slides.length - 1;
  } else if (showSlide >= slides.length) {
    showSlide = 0;
  }

  //mon uptadecarousel va permettre : si la shoslide est inferieur a 0 alors la longeur des slides -1 et quand il arrive au bout des slides il se remets a 0..

  console.log(showSlide);

  banner.src = "./assets/images/slideshow/" + slides[showSlide].image;
  p.innerHTML = slides[showSlide].tagLine;
}

arrowLeft.addEventListener("click", () => {
  showSlide--;
  updateCarousel();
});

arrowRight.addEventListener("click", () => {
  showSlide++;
  updateCarousel();
});

// const slideActive = slides[showSlide]; // ma slide active c'est mon element 0 dans ma slide

// function updateCaroussel() {
//   banner.src = "./assets/images/slideshow/" + slideActive.image;
//   p.innerHTML = slideActive.tagLine;
// }

// console.log(p.innerHTML);
// console.log(banner.src);

// arrowRight.addEventListener("click", () => {
//   showSlide++;
//   updateCaroussel();
//   console.log(updateCaroussel);
// });

// arrowLeft.addEventListener("click", () => {
//   updateCaroussel();
//   console.log(arrowLeft);
// });

// console.log(banner);

// arrowLeft.addEventListener("click", () => {
//   console.log("Test bouton gauche");
//   document.banner.innerHTML += slides[i].image;
//   // banner = slides[1].image;
//   // console.log(banner);
//   // for (i = 0; i < slides.length; i++) {
//   //  document.body.innerHTML += `<h2> ${slides[i].image} </h2> `;
//   //   console.log(i);

//   // console.log(slides[i].image);
//   // console.log(slides[i].tagLine);
//   //   }
// });

// // let elementImage = slides[positionSlide].image;
// // console.log(elementImage);
// // const elementTag = slides[positionSlide].tagLine;
// // console.log(elementTag);

// // const img = document.querySelector(".banner-img");
// // console.log(img);

// //test du eventListener sur les boutons/fleches

// arrowRight.addEventListener("click", () => {
//   console.log("test bouton droit");
// });

// // //const arrowLeft = document.querySelector(".arrow_left");

// // // function messageLeft() {
// // //   console.log("Clique du bouton Gauche ! ");
// // // }

// // // arrowLeft.addEventListener("click", messageLeft);

// // // const arrowRight = document.querySelector(".arrow_right");

// // // function messageRight() {
// // //   console.log("clique du bouton Droit ! ");
// // // }
// // // arrowRight.addEventListener("click", messageRight);

// // // //-----------------------------------------------

// // // const currentSlide = 0;
// // // const dots = document.querySelector(".dot");

// // // const updateDot = () => {
// // //   if(
// // //     // si le dot est sur la page ative
// // //   ) {
// // //     //afficher le dot selected
// // //   } else {
// // //     //afficher le dot vide
// // //   }
// // // };

// // const updateSlideRight = () => {
// //   // afficher la photo 1
// //   //au click droit afficher la photo numero ++ et ajoute le le texte ++ => event ?
// // };

// // const updateSlideLeft = () => {
// //   // aficher la photo 1 au click gauche afficher la photo -- et ajoute le texte -- ==> event ?
// // };

// // //boucle for au click ? creation d'une variable pour la boucle for

// // const banner = document.querySelector(".banner-img");
// // console.log(banner);

// // // au click il faut que banner fasse ++

// // // Index
// // // ClassList.add => dot
// // // ClassList.remove => dot
// // // InnerHTML => tagLine
// // // QuerySelector
// // // Createelement =

// // // const bubble = document.createElement("span");
// // // bubble.classList.add("bubble");
// // // document.body.appendChild(bubble);
// // // ==> creation d'une span dans le body

// // //Voir pour le toggle ou add

// // for (index = 0; index < slides.length; index++) {
// //   console.log(slides[positionSlide].image);
// //   console.log(slides[positionSlide].tagLine);
// // }
