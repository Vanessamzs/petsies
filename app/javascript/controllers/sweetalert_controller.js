import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"

export default class extends Controller {
  static targets = ["button"]

  connect() {
  }

  delete(event) {
    event.preventDefault()

    Swal.fire({
      title: `Êtes-vous sûr de vouloir supprimer cet évènement`,
      text: "Vous ne pourrez pas revenir en arrière",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, supprimer!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEvent(),
        Swal.fire({
          title: "Supprimé!",
          text: "Votre évènement a été supprimé",
          icon: "success"
        });
      }
    });
  }

  deleteEvent() {
    console.log("hello")
  }
}