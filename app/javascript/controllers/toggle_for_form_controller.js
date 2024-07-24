import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-for-form"
export default class extends Controller {
  static targets = ["title", "treatmentInput", "recurrenceInput"]
  static values = {
    showIf: String,
  }

  connect() {
    this.toggle();
  }

  toggle() {
    const selectedValue = this.titleTarget.querySelector('input:checked')?.value;
    if (selectedValue === this.showIfValue) {
      this.treatmentInputTarget.classList.remove('hidden');
      // this.recurrenceInputTarget.classList.remove('hidden');
    } else {
      this.treatmentInputTarget.classList.add('hidden');
      // this.recurrenceInputTarget.classList.add('hidden');
    }
  }

  // Listen for changes and call toggle
  toggleField(event) {
    this.toggle();
  }
}
