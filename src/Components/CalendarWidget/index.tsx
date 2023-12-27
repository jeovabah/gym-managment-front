// CalendarWidget.js

function CalendarWidget() {
  // Substitua esta função pelo seu método preferido para gerar os dias do mês
  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // Janeiro é 0!
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Calendário</h2>
      <div className="grid grid-cols-7 gap-1">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`text-center p-2 ${
              day === today.getDate() ? "bg-blue-200 rounded-full" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWidget;
