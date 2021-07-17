import RenderCards from "../rendercards/rendercards"
import playGame from "../playgame/playGame"
<<<<<<< HEAD
// import Menu from "../menu/menu"
import renderTrain from "../renderTrain/renderTrain"

export default class Factory {
    constructor() {
        // this.menu = new Menu()
        this.renderTrain = new renderTrain()

    }
    init() {
        // this.menu.init()
        this.renderTrain.init()
=======
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
>>>>>>> 8bb7f6d98f16b4c8af8a34b6e72e90eb1bd9ce01
    }
}