import { useContext } from "react";
import { TaskContextType } from "./types";
import { TaskContext } from "./TaskProvider";

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useDate must be used within a DateProvider");
  }

  return context;
};
