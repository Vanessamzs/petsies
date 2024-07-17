import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="pet-action-display"
let informationsActive = false;
let modificationActive = false;
let addEventActive = false;

export default class extends Controller {
  static targets = ["petInformationsContainer", "petModificationContainer", "petAddEventContainer"];

  toggleInformations() {
    if (!informationsActive) {
      if (modificationActive) {
        this.petModificationContainerTarget.classList.remove('card-pet-modification-display');
        modificationActive = false;
      }
      if (addEventActive) {
        this.petAddEventContainerTarget.classList.remove('card-pet-add-event-display');
        addEventActive = false;
      }
      this.petInformationsContainerTarget.classList.add('card-pet-informations-display');
      informationsActive = true;
    } else {
      this.petInformationsContainerTarget.classList.remove('card-pet-informations-display');
      informationsActive = false;
    }
  }

  toggleModification() {
    if (!modificationActive) {
      if (informationsActive) {
        this.petInformationsContainerTarget.classList.remove('card-pet-informations-display');
        informationsActive = false;
      }
      if (addEventActive) {
        this.petAddEventContainerTarget.classList.remove('card-pet-add-event-display');
        addEventActive = false;
      }
      this.petModificationContainerTarget.classList.add('card-pet-modification-display');
      modificationActive = true;
    } else {
      this.petModificationContainerTarget.classList.remove('card-pet-modification-display');
      modificationActive = false;
    }
  }

  toggleAddEvent() {
    if (!addEventActive) {
      if (informationsActive) {
        this.petInformationsContainerTarget.classList.remove('card-pet-informations-display');
        informationsActive = false;
      }
      if (modificationActive) {
        this.petModificationContainerTarget.classList.remove('card-pet-modification-display');
        modificationActive = false;
      }
      this.petAddEventContainerTarget.classList.add('card-pet-add-event-display');
      addEventActive = true;
    } else {
      this.petAddEventContainerTarget.classList.remove('card-pet-add-event-display');
      addEventActive = false;
    }
  }
}
