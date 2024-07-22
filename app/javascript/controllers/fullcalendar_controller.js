import { Controller } from "@hotwired/stimulus"
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
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
        contentHeight: "auto",
        plugins: [dayGridPlugin, listPlugin, interactionPlugin],
        events: events,
        headerToolbar: {
          center: 'dayGridMonth,listWeek,today',
          end: 'prev,next',
        },

        dayMaxEventRows: true,

        views: {
          listWeek: {
            buttonText: 'Semaine'
          },
          dayGridMonth: {
            buttonText: 'Mois',
            dayMaxEventRows: 1,
          },
        },

        eventColor: '#48ADA9',

        moreLinkContent: function(args) {
          return args.num + ' Évènements';
        },

        eventClick: function(info) {
          alert(info.event.title + "\n"
            + 'Début : ' + Intl.DateTimeFormat('fr-FR', {dateStyle: 'full', timeStyle: 'medium'}).format(info.event.start) + "\n"
            + 'Fin : ' + Intl.DateTimeFormat('fr-FR', {dateStyle: 'full', timeStyle: 'medium'}).format(info.event.end) + "\n"
            + 'Description : ' + info.event.extendedProps.description
          );
        },

        dateClick: function(info) {
          alert('Date: ' + info.dateStr);
          alert('Resource ID: ' + info.resource.id);
        }

      });
      calendar.render();

    };
    const today = document.querySelector('.fc-today-button');
    today.innerHTML = 'Aujourd\'hui';
  }
}
