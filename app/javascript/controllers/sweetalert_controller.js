import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"

export default class extends Controller {
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
}