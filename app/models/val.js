export default class Val {
  constructor(data) {
    this.to = data.to
    this.from = data.from
    this.message = data.message
  }
  getTemplate() {
    return `      
    <div class="col-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">To: ${this.to}</h5>
        <h6 class="card-subtitle mb-2 text-muted">From: ${this.from}</h6>
        <p class="card-text">Message: ${this.message}</p>
      </div>
    </div>
  </div>`
  }
}