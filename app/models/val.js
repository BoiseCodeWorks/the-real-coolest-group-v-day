export default class Val {
  constructor(data) {
    this.to = data.to
    this.from = data.from
    this.message = data.message
  }
  getTemplate() {
    return `      
    <div class="col-4">
    <div class="card bg-danger text-white mt-4" tabindex="0">
      <div class="card-body">
        <h5 class="card-title">To: ${this.to}</h5>
        <h6 class="card-subtitle mb-2">From: ${this.from}</h6>
        <p class="card-text v-message">Message: ${this.message}</p>
      </div>
    </div>
  </div>`
  }
}