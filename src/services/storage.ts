import { Task } from "@customTypes/task";

const saveTasks = async (tasks: Task[]) => {
  const stringifiedTasks = JSON.stringify(tasks);

  localStorage.setItem("tasks", stringifiedTasks);
};

const getTasks = async (): Promise<Task[]> => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    return JSON.parse(tasks) as Task[];
  }

  return [];
};

export { saveTasks, getTasks };
