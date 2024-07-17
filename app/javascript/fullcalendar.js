import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Rails from '@rails/ujs';

document.addEventListener('turbolinks:load', () => {
  let calendarEl = document.getElementById('calendar');
  const events = JSON.parse(calendarEl.dataset.event);

  if (calendarEl) {
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: events,
      selectable: true,
      select: function(info) {
        let title = prompt('Enter Event Title:');
        let eventData;
        if (title) {
          eventData = {
            title: title,
            start: info.startStr,
            end: info.endStr
          };
          calendar.addEvent(eventData);

        }
        calendar.unselect();
      },
    });
    calendar.render();
  }
});