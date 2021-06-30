import cards from "../../data/cards"

export default class RenderCards {
    constructor() {
        this.cardsContainer = document.createElement("div");
        this.cardsContainer.classList.add("containercards");
        this.container = document.querySelector(".container");
        this.container.append(this.cardsContainer);
    }

    onRenderCards() {
        for (let i = 0; i < cards[0].length; i++) {
            this.image = document.createElement("img");
            this.image.classList.add("cardImage");
            this.image.src = cards[0][i].img;
            // this.belText = document.createElement("p");
            // this.belText.innerHTML = cards[0][i].translation;
            // this.belText.classList.add("translationClass");
            this.cardSection = document.createElement("div");
            this.cardSection.classList.add("sectionClass");
            this.cardSection.append(this.image);
            this.cardsContainer.append(this.cardSection);
            // this.cardSection.append(this.belText);
            this.image.alt = cards[0][i].audio;
        }
    }

    init() {
        this.onRenderCards();
    }

}