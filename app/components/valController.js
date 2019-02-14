import ValService from "./valService.js";

let _valService = new ValService

function draw() {

}


export default class ValController {
  constructor() {
    console.log('controller working')
    _valService.addSubscriber("valentines", draw)
  }
  addVal(event) {
    event.preventDefault()
    let form = event.target
    let val = {
      to: form.to.value,
      from: form.from.value,
      message: form.message.value
    }
    _valService.addVal(val)
    form.reset()
  }
}