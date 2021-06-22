export default class finishGame {
    constructor() {
        this.container = document.querySelector(".container");
        this.newGameButton = document.createElement("div");
        this.newGameButton.classList.add("newGame");
        this.newGameButton.innerHTML = "New Game";
    }

    removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }


    failGame(count) {
        this.removeAllChildNodes(this.container);
        this.lose = document.createElement("div");
        this.lose.classList.add("loseMessage");
        this.container.append(this.lose);
        this.lose.innerHTML = "Нажаль, вы не выгралі, паспрабуйце згуляць зноў";
        this.container.append(this.errorAmount);
        this.errorAmount = document.createElement("div");
        this.errorAmount.classList.add("errorAmount");
        this.errorAmount.innerHTML = `Колькасьць памылак: ${count}`;
        this.resetGame();
    }

    winGame() {
        this.removeAllChildNodes(this.container);
        this.win = document.createElement("div");
        this.win.classList.add("winMessage");
        this.container.append(this.win);
        this.win.innerHTML = "Віншую! Вы выгралі!";
        this.resetGame();
    }

    resetGame() {
        this.container.append(this.newGameButton);
        this.newGameButton.addEventListener("click", () => {
            window.location.reload();
        })
    }
}