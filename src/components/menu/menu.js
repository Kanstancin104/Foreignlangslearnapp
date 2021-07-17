import { createElement } from "../../helpers"
import RenderCards from "../rendercards/rendercards"
import playGame from "../playgame/playGame"

export default class Menu {
    constructor() {
        this.menuContainer = createElement("div", "menuContainer");
        this.main = document.querySelector(".main");
        this.main.append(this.menuContainer);
    }

    renderMenu() {
        this.title = createElement("h3", "title");
        this.title.innerHTML = "Прыкладаньне для вывучэньня нямецкае мовы";
        this.menuContainer.append(this.title);
        this.linksContainer = createElement("div", "linksContainer");
        this.menuContainer.append(this.linksContainer);
        this.trainLink = createElement("div", "trainLink");
        this.gameLink = createElement("div", "gameLink");
        this.linksContainer.append(this.trainLink);
        this.linksContainer.append(this.gameLink);
        this.trainLink.innerHTML = "Трэнавальны рэжым";
        this.gameLink.innerHTML = "Рэжым гульні";
    }

    startGameMode() {
        this.gameLink.addEventListener("click", () => {
            this.menuContainer.remove();
            this.rendercards = new RenderCards();
            this.playGame = new playGame();
            this.rendercards.init();
            this.playGame.init();
        })
    }

    init() {
        this.renderMenu();
        this.startGameMode();
    }

}