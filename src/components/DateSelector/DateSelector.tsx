import { useDates } from "@hooks/useDates";
import { useEffect, useState } from "react";
import {
  DateItemContainer,
  DateItem,
  Wrapper,
  IconButtonWrapper,
} from "./styles";
import Icon from "@components/Icon";

const DateSelector = () => {
  const { currentDate, setCurrentDate } = useDates();
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const endOfWeek = new Date(currentDate);
    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));

    const datList = [];

    for (let d = startOfWeek; d <= endOfWeek; d.setDate(d.getDate() + 1)) {
      datList.push(new Date(d));
    }

    setDates(datList);
  }, [currentDate]);

  const getFormattedDate = (date: Date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();

    return `${month.slice(0, -1)} | ${day}`;
  };

  const setPreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7);

    setCurrentDate(previousWeek.toISOString().split("T")[0]);
  };

  const setNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7);

    setCurrentDate(nextWeek.toISOString().split("T")[0]);
  };

  return (
    <Wrapper>
      <IconButtonWrapper onClick={setPreviousWeek}>
        <Icon name="chevron_left" size="xlarge" />
      </IconButtonWrapper>
      <DateItemContainer>
        {dates.map((date) => (
          <DateItem
            onClick={() => setCurrentDate(date.toISOString().split("T")[0])}
            selected={currentDate === date.toISOString().split("T")[0]}
            today={
              new Date().toISOString().split("T")[0] ===
              date.toISOString().split("T")[0]
            }
            data-weekday={date
              .toLocaleString("default", { weekday: "short" })
              .slice(0, -1)}
          >
            {getFormattedDate(date)}
          </DateItem>
        ))}
      </DateItemContainer>
      <IconButtonWrapper onClick={setNextWeek}>
        <Icon name="chevron_right" size="xlarge" />
      </IconButtonWrapper>
    </Wrapper>
  );
};

export default DateSelector;
