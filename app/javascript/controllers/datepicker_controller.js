import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"; // You need to import this to use new flatpickr()
import { French } from "flatpickr/dist/l10n/fr.js";

// Connects to data-controller="datepicker"
export default class extends Controller {
  static targets = [ "start", "end" ]

  connect() {
    flatpickr(this.element, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      disableMobile: "true",
      "locale": French
    });
  }
};
