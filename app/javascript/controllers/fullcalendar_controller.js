import { Controller } from "@hotwired/stimulus"
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import Rails from '@rails/ujs';

export default class extends Controller {
  static values = {
    event: Array
  }

  connect() {
    const events = this.eventValue

    if (this.element) {
      let calendar = new Calendar(this.element, {
        firstDay: 1,
        locale: 'fr',
        height: 500,
        plugins: [dayGridPlugin, listPlugin],
        events: events,
        headerToolbar: {
          center: 'dayGridMonth,listWeek'
        },
        views: {
          listWeek: {
            buttonText: 'Semaine'
          },
          dayGridMonth: {
            buttonText: 'Mois'
          }
        }
      });
      calendar.render();
    }
  }
}
