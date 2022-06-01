// let card1 = document.querySelector(".card-1");
// let card2 = document.querySelector(".card-2");
// let card3 = document.querySelector(".card-1");
// let card4 = document.querySelector(".card-1");
// let card5 = document.querySelector(".card-1");
// let card6 = document.querySelector(".card-1");
// let card7 = document.querySelector(".card-1");
// let card8 = document.querySelector(".card-1");
// let card9 = document.querySelector(".card-1");
// let card10 = document.querySelector(".card-1");
// let card11 = document.querySelector(".card-1");
// let card12 = document.querySelector(".card-1");
// let card13 = document.querySelector(".card-1");
// let card14 = document.querySelector(".card-1");
// let card15 = document.querySelector(".card-1");
// let card16 = document.querySelector(".card-1");
// let card17 = document.querySelector(".card-1");
// let card18 = document.querySelector(".card-1");


// const allCards = [
//     card1, card2, card3, card4, card5, card6,
//     card7, card8, card9, card10, card11, card12,
//     card13, card14, card15, card16, card17, card18,
// ]

const getAllCard = [
    ".card-1", ".card-2", ".card-3", ".card-4", ".card-5", ".card-6",
    ".card-7", ".card-8", ".card-9", ".card-10", ".card-11", ".card-12",
    ".card-13", ".card-14", ".card-15", ".card-16", ".card-17", ".card-18"
]


for (let i = 0; i < getAllCard.length; i++) {
    document.querySelector(getAllCard[i]).addEventListener("click", function () {
        document.querySelector(getAllCard[i]).classList.toggle("is-flipped");
    });
}

console.log(getAllCard)


// card.addEventListener("click", function () {
//     card.classList.toggle("is-flipped");
// });


// let card2 = document.querySelector(".card-2");

// card2.addEventListener("click", function () {
//     card2.classList.toggle("is-flipped");
// });

// const card3D = document.querySelector(".boxes");
// const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
// const THRESHOLD = 15;


// let selectAllElements = document.querySelectorAll('.main-feature-container .boxes')


// /*
//  * Read the blog post here:
//  * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
//  */


// function handleHover(e) {
//     const { clientX, clientY, currentTarget } = e;
//     const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

//     const horizontal = (clientX - offsetLeft) / clientWidth;
//     const vertical = (clientY - offsetTop) / clientHeight;
//     const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
//     const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

//     card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
// }

// function resetStyles(e) {
//     card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
// }

// if (!motionMatchMedia.matches) {
//     card3D.addEventListener("mousemove", handleHover);
//     card3D.addEventListener("mouseleave", resetStyles);
// }
