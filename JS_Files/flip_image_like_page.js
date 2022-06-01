const getAllCard = [
    ".likes-card-1"
]


for (let i = 0; i < getAllCard.length; i++) {
    document.querySelector(getAllCard[i]).addEventListener("click", function () {
        document.querySelector(getAllCard[i]).classList.toggle("is-flipped");
    });
}

console.log(getAllCard)
