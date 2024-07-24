import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"

export default class extends Controller {
  static targets = ["pet"]
  static values = {
    id: Number
  }

  connect() {
    this.displayAlert();
  }

  displayAlert() {
    const alertMessage = this.data.get("alertMessage");
    if (alertMessage) {
      Swal.fire({
        icon: "success",
        title: alertMessage,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    }
  }

  delete(event) {
    event.preventDefault()

    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Il n'y a pas de retour en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !"
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `/pets/${this.idValue}`
        
        fetch(url, {
          method: "DELETE",
          headers: { 
            "Accept": "text/plain",
            "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
           }
        })
        .then(response => response.text())
        .then((data) => {
          Swal.fire({
            title: "Supprimé !",
            text: "Votre compagnon a été retiré",
            icon: "success"
          })
          .then((result) => {
            window.location.replace("/pets")
          })
        })
      }
    });
  }
}