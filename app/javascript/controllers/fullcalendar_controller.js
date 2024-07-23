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
        fixedWeekCount: false,
        plugins: [dayGridPlugin, listPlugin, interactionPlugin],
        events: events,
        headerToolbar: {
          center: 'dayGridMonth,listWeek,today',
          end: 'prev,next',
        },

        buttonText: {
          //Here I make the button show French date instead of a text.
          today: 'Aujourd\'hui'
        },

        dayMaxEventRows: true,

        views: {
          listWeek: {
            buttonText: 'Semaine',
            noEventsContent: 'Aucun évènement cette semaine.',

            eventTimeFormat: {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
              meridiem: false,
            },
            allDayText: 'Toute la journée',
          },
          dayGridMonth: {
            buttonText: 'Mois',
            dayMaxEventRows: 0,
          },
        },

        eventColor: '#48ADA9',

        moreLinkContent: function(args) {
          // return args.num;
          return "";
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
    // const today = document.querySelector('.fc-today-button');
    // today.innerHTML = 'Aujourd\'hui';
  }
}
