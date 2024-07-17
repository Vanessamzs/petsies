import { Controller } from "@hotwired/stimulus"
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import Rails from '@rails/ujs';

export default class extends Controller {
  static values = {
    event: Array
  }

  connect() {
    const events = this.eventValue

    if (this.element) {
      let calendar = new Calendar(this.element, {
        plugins: [dayGridPlugin],
        initalView: "dayGridMonth",
        events: events
      });
      calendar.render();
    }
  }
}
