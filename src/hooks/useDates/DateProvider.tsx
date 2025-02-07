import React, { createContext, useState } from "react";
import { DateContextType } from "./types";

export const DateContext = createContext<DateContextType>({
  currentDate: new Date().toISOString().split("T")[0],
  setCurrentDate: () => {},
});

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  return (
    <DateContext.Provider value={{ currentDate, setCurrentDate }}>
      {children}
    </DateContext.Provider>
  );
};
