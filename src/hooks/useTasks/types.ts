import { Task } from "@customTypes/task";

export type TaskContextType = {
  taskList: Task[];
  addTask: (task: Task) => void;
  setTaskStatus: (id: string, status: Task["status"]) => void;
};
