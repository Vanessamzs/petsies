import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "button"]

  connect() {
  }
  
  activateButton(event) {
    if (event.currentTarget.value !== "") {
      this.buttonTarget.disabled = false
    } else {
      this.buttonTarget.disabled = true
    }
  }
}
