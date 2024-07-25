
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="highlight-footer"
export default class extends Controller {
  static targets = ["profile", "search"]

  connect() {
    this.highlightActiveLink();


    const offcanvasProfile = document.getElementById('offcanvasFooterProfile');
    const offcanvasSearch = document.getElementById('offcanvasFooterSearch');

    offcanvasProfile.addEventListener('hidden.bs.offcanvas', () => {
      this.removeHighlight(this.profileTarget);
    });

    offcanvasSearch.addEventListener('hidden.bs.offcanvas', () => {
      this.removeHighlight(this.searchTarget);
    });
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

  highlightSearchLink(){
    this.searchTarget.classList.toggle('active');
  }

  removeHighlight(target) {
    target.classList.remove('active');
  }
}
