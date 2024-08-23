const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonthIndex = 10;

document.addEventListener("DOMContentLoaded", function () {
    updateCalendar(currentMonthIndex);
});

function updateCalendar(monthIndex) {
    const currentMonth = months[monthIndex];
    document.getElementById("currentMonth").innerText = currentMonth;

    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    const firstDay = new Date(2023, monthIndex, 1).getDay();
    const daysInMonth = new Date(2023, monthIndex + 1, 0).getDate();

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.innerText = "";
            } else if (dayCount <= daysInMonth) {
                cell.innerText = dayCount;
                cell.addEventListener("click", () => {
                    alert(`Clicked on ${currentMonth} ${dayCount}`);
                });
                dayCount++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function changeMonth(delta) {
    currentMonthIndex += delta;
    if (currentMonthIndex < 0) {
        currentMonthIndex = 11;
    } else if (currentMonthIndex > 11) {
        currentMonthIndex = 0;
    }
    updateCalendar(currentMonthIndex);
}
