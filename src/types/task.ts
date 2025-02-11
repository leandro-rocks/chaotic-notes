export type Task = {
  id: string;
  parent: string | null;
  status: "TO-DO" | "INITIATED" | "FINISHED";
  archived: boolean;
  priority: boolean;
  title: string;
  note: string | null;
  addedAt: string;
  initiatedAt: string | null;
  finishedAt: string | null;
  category: string | null;
};
