import { useContext } from "react";
import { DateContextType } from "./types";
import { DateContext } from "./DateProvider";

export const useDates = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDate must be used within a DateProvider");
  }
  return context;
};
