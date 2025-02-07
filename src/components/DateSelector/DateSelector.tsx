import { useDates } from "../../hooks/useDates";
import { useEffect, useState } from "react";

const DateSelector = () => {
  const { currentDate, setCurrentDate } = useDates();
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    const datList = [];

    for (let i = -3; i < 4; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      datList.push(date);
    }

    setDates(datList);
  }, [currentDate]);

  return (
    <ul>
      {dates.map((date) => (
        <li
          onClick={() => setCurrentDate(date.toISOString().split("T")[0])}
          style={{
            backgroundColor:
              currentDate === date.toISOString().split("T")[0]
                ? "lightblue"
                : "white",
          }}
        >
          {date.toDateString()}
        </li>
      ))}
    </ul>
  );
};

export default DateSelector;
