import { Task } from "@customTypes/task";

export type TaskContextType = {
  taskList: Task[];
  addTask: (task: Task, config?: AddTaskConfig) => void;
  setTaskStatus: (id: string, status: Task["status"]) => void;
  editTask: (id: string, task: Partial<Task>) => void;
};

export type AddTaskConfig = {
  insertAfter?: Task["id"];
};
