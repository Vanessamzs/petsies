import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pet-action-display"
let informationsActive = false;
let modificationActive = false;

export default class extends Controller {

  static targets = ["petInformationsContainer", "petModificationContainer"];

  toggleInformations() {
    this.petInformationsContainerTarget.classList.toggle('card-pet-informations-display');
    informationsActive = !informationsActive;

    if (modificationActive) {
      this.petModificationContainerTarget.classList.toggle('card-pet-modification-display');
      modificationActive = false;
    }
  }

  toggleModification() {
    this.petModificationContainerTarget.classList.toggle('card-pet-modification-display');
    modificationActive = !modificationActive;

    if(informationsActive) {
      this.petInformationsContainerTarget.classList.toggle('card-pet-informations-display');
      informationsActive = false;
    }
  }
}
