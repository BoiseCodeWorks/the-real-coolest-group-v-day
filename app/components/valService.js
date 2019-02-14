import Val from "../models/val.js";

let _state = {
  /**
   * @type {Array<Val>}
   */
  valentines: [new Val({ to: 'you', from: 'devteam', message: 'something nice' })]
}


let _subscribers = {
  /**
   * @type {Array<() => {}>}
   */
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
  addVal(rawVal) {
    let valentine = new Val(rawVal)
    let updatedArr = [..._state.valentines, valentine]
    setState('valentines', updatedArr)
  }
  get Valentines() {
    return _state.valentines
  }
}