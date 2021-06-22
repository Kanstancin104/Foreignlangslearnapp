import cards from "../../data/cards";
import finishGame from "../finish_game/finish_game";

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
        this.errorCounter = 0;
        this.errorDiv = document.createElement("div");
        this.container.append(this.errorDiv);
        this.errorDiv.classList.add("errorCounter");
        this.errorDiv.innerHTML = `Errors:${this.errorCounter}`;
        this.finishGame = new finishGame()
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
            this.playButtonRepeat.addEventListener("click", () => {
                this.audio.play();
            })
        }
    }

    chooseCard() {
        this.picsContainer.forEach(item => {
            item.addEventListener("click", (event) => {
                this.currentTarget = event.target;
                if (this.audioArr[0].includes(item.alt)) {
                    this.correctAudio.src = 'src/data/audio/success.mp3'
                    this.correctAudio.play();
                    this.audioArr.shift();
                    item.classList.add("usedCard");
                    this.audio.src = this.audioArr[0];
                    setTimeout(() => {
                        this.audio.play();
                    }, 1000);
                } else {
                    this.wrongAudio.src = 'src/data/audio/fail.mp3'
                    this.wrongAudio.play();
                    this.errorDiv.innerHTML = `Errors:${this.errorCounter += 1}`;
                }
                this.onEndGame()
            })
        })
    }

    onEndGame() {
        if (!this.audioArr.length) {
            this.errorCounter ?
                this.finishGame.failGame(this.errorCounter) :
                this.finishGame.winGame();
        }
    }

    init() {
        this.onPlayGame()
        this.chooseCard()

    }
}