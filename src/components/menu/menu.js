import { createElement } from "../../helpers"

export default class Menu {
    constructor() {
        this.menuContainer = document.createElement("div");
        this.menuContainer.classList.add("menuContainer");
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

    init() {
        this.renderMenu();
    }

}