import Val from "../models/val.js";

let _state = {
  valentines: []
}

let _subscribers = {
  valentines: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}


export default class ValService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
  constructor() {
    console.log('services working')
  }
  addVal(val) {

  }
}