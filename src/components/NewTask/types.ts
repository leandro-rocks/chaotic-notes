import { Task } from "@customTypes/task";

export interface NewTaskProps {
  onTaskCreation: (task: Task) => void;
}
