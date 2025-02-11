import { useEffect, useRef, useState } from "react";
import { Task } from "@customTypes/task";
import { useDates } from "@hooks/useDates";
import { Container, NewTaskField } from "./styles";
import Checkbox from "@components/Checkbox";
import { v4 as uuidv4 } from "uuid";
import { useTasks } from "@hooks/useTasks";

type NewTaskProps = {
  onTaskCreation?: (task: Task) => void;
  onFocusOut?: () => void;
  insertAfter?: Task["id"];
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  parent?: Task["id"] | null;
  level?: number;
  subtasks?: Task["id"][];
};

const NewTask = ({
  onTaskCreation,
  onFocusOut,
  onKeyDown,
  insertAfter,
  parent = null,
  level = 0,
  subtasks,
}: NewTaskProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { addTask } = useTasks();
  const [task, setTask] = useState("");
  const { currentDate } = useDates();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleAddTask = () => {
    const newTask: Task = {
      id: uuidv4(),
      parent: parent,
      status: "TO-DO",
      archived: false,
      priority: false,
      note: null,
      title: task,
      addedAt: currentDate,
      initiatedAt: null,
      finishedAt: null,
      category: "",
    };

    addTask(newTask, { insertAfter, transferParents: subtasks });
    setTask("");

    return newTask;
  };

  return (
    <Container level={level}>
      <Checkbox />
      <NewTaskField
        ref={ref}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onBlur={() => {
          if (task) {
            handleAddTask();
          }
          onFocusOut?.();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && task) {
            const newtask = handleAddTask();
            onTaskCreation?.(newtask);
          } else if (e.key === "Escape") {
            onFocusOut?.();
          }

          onKeyDown?.(e);
        }}
        placeholder="Nova tarefa"
      />
    </Container>
  );
};

export default NewTask;
