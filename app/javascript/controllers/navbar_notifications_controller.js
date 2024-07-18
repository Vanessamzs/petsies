import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar-notifications"
export default class extends Controller {
  static targets = ["notificationsDisplay", "toggleButton"]

  toggle() {
    const bellIconHTML = '<i class="fa-solid fa-bell fa-xl fa-rotate-by" style="color: #fffbf4; --fa-rotate-angle: 25deg;"></i>';
    const closeIconHTML = '<i class="fa-solid fa-x fa-xl" style="color: #fffbf4;"></i>';

    this.notificationsDisplayTarget.classList.toggle('transition');

    if (this.toggleButtonTarget.innerHTML.trim() === bellIconHTML.trim()) {
      this.toggleButtonTarget.innerHTML = closeIconHTML;
      this.notificationsDisplayTarget.classList.toggle('show-notifications');
    } else if (this.toggleButtonTarget.innerHTML.trim() === closeIconHTML.trim()) {
      this.toggleButtonTarget.innerHTML = bellIconHTML;
      this.notificationsDisplayTarget.classList.toggle('show-notifications');
    }
  }
}
