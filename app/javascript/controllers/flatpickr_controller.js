import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"; // You need to import this to use new flatpickr()
import { French } from "flatpickr/dist/l10n/fr.js";

export default class extends Controller {
  static targets = [ "birth_date" ]
  connect() {
    console.log("Flatpickr controller connected!");
    console.log("Initializing flatpickr on:", this.element);
    flatpickr(this.element, {
      enableTime: true,
      dateFormat: "Y-m-d",
      disableMobile: "true",
      "locale": French
    });
}};
