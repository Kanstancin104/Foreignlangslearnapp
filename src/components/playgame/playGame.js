import cards from "../../data/cards"

export default class playGame {
    constructor() {
        this.playButton = document.createElement("div");
        this.playButton.classList.add("playButtonClass");
        this.container = document.querySelector(".container");
        this.container.append(this.playButton);
        this.playButton.innerHTML = "Start game";
        this.picsContainer = document.querySelectorAll("cardImage");
        this.audio = new Audio()
        this.audioArr = []
        this.correctAudio = new Audio()
        this.wrongAudio = new Audio()
        this.playButtonRepeat = document.createElement("div");
        this.playButtonRepeat.classList.add("playButtonRepeatClass");
    }

    onPlayGame() {
        this.picsContainer = document.querySelectorAll(".cardImage");
        for (let i = 0; i < cards[0].length; i++) {
            this.playButton.addEventListener("click", () => {
                this.audioArr.push(cards[0][i].audio)
                this.audioArr.sort(() => Math.random() - 0.5)
                this.audio.src = this.audioArr[0];
                this.audio.play();
                this.container.append(this.playButtonRepeat);
                this.playButton.remove();
            })
        }
    }

    init() {
        this.onPlayGame()
    }
}