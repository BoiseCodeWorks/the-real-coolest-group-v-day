import ValController from "./components/valcontroller.js";


class App {
  constructor() {
    this.controllers = {
      valController: new ValController()
    }
    console.log('main here')
  }
}




window.app = new App()