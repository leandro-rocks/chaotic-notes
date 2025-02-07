export type Task = {
  id: string;
  status: "TO-DO" | "INITIATED" | "FINISHED";
  archived: boolean;
  priority: boolean;
  title: string;
  note: string | null;
  addedAt: string;
  initiatedAt: string | null;
  finishedAt: string | null;
  subtasks: Task[];
  category: string | null;
};
