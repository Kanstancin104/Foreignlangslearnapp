import cards from "../../data/cards";
import Menu from "../menu/menu";
import { createElement } from "../../helpers";

export default class RenderCards {
    constructor() {
        this.cardsContainer = document.createElement("div");
        this.cardsContainer.classList.add("containercards");
        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.main = document.querySelector(".main");
        this.BackButton = createElement("div", "backButton");
        this.main.append(this.BackButton);
        this.main.append(this.container);
        this.container.append(this.cardsContainer);

    }

    onClickBackButton() {
        this.BackButton.addEventListener("click", () => {
            this.container.remove();
            this.BackButton.remove();
            this.menu = new Menu();
            this.menu.init();

        })
    }

    onRenderCards() {
        for (let i = 0; i < cards[0].length; i++) {
            this.image = document.createElement("img");
            this.image.classList.add("cardImage");
            this.image.src = cards[0][i].img;
            this.cardSection = document.createElement("div");
            this.cardSection.classList.add("sectionClass");
            this.cardSection.append(this.image);
            this.cardsContainer.append(this.cardSection);
            this.image.alt = cards[0][i].audio;
        }
    }

    init() {
        this.onRenderCards();
        this.onClickBackButton();
    }

}