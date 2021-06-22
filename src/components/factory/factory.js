import RenderCards from "../rendercards/rendercards"
import playGame from "../playgame/playGame"

export default class Factory {
    constructor() {
        this.rendercards = new RenderCards()
        this.playGame = new playGame()

    }

    init() {
        this.rendercards.init()
        this.playGame.init()
    }
}