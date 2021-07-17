import RenderCards from "../rendercards/rendercards"
import playGame from "../playgame/playGame"
import Menu from "../menu/menu"

export default class Factory {
    constructor() {
        // this.rendercards = new RenderCards()
        // this.playGame = new playGame()
        this.menu = new Menu()

    }
    init() {
        // this.rendercards.init()
        // this.playGame.init()
        this.menu.init()
    }
}