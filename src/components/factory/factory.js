import RenderCards from "../rendercards/rendercards"
import playGame from "../playgame/playGame"
import Menu from "../menu/menu"
// import renderTrain from "../renderTrain/renderTrain"

export default class Factory {
    constructor() {
        this.menu = new Menu()
            // this.renderTrain = new renderTrain()

    }
    init() {
        this.menu.init()
            // this.renderTrain.init()
    }
}