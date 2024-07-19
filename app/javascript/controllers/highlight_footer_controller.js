import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="highlight-footer"
export default class extends Controller {
  static targets = ["profile"]
  connect() {
    this.highlightActiveLink();
  }

  highlightActiveLink() {
    const path = window.location.pathname;
    const iconLinks = document.querySelectorAll('.icon-link');

    iconLinks.forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightProfileLink(){
    this.profileTarget.classList.toggle('active');
  }
}
