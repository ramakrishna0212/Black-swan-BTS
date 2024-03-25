
let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function generateCalendar(month, year) {
    let calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";
    let date = new Date(year, month, 1);
    let firstDay = date.getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    document.getElementById("monthAndYear").innerText = months[month] + ' ' + year;

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (dayCount > daysInMonth) {
          break;
        } else {
          let cell = document.createElement("td");
          let cellText = document.createTextNode(dayCount);
          if (dayCount === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add("highlight");
          }
          cell.appendChild(cellText);
          row.appendChild(cell);
          dayCount++;
        }
      }
      calendarBody.appendChild(row);
    }
  }

  generateCalendar(currentMonth, currentYear);

  function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    generateCalendar(currentMonth, currentYear);
  }

  function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    generateCalendar(currentMonth, currentYear);
  }