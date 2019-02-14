import ValService from "./valService.js";

let _valService = new ValService

function draw() {
  let template = ''
  let valentines = _valService.Valentines
  for (let i = 0; i < valentines.length; i++) {
    template += valentines[i].getTemplate()
  }
  document.getElementById('cards').innerHTML = template
}


export default class ValController {
  constructor() {
    console.log('controller working')
    _valService.addSubscriber("valentines", draw)
    draw()
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