import { Ref, useState } from "react";
import { Task } from "@customTypes/task";
import { useDates } from "@hooks/useDates";
import { Container, NewTaskField } from "./styles";
import Checkbox from "@components/Checkbox";
import { v4 as uuidv4 } from "uuid";
import { forwardRef } from "react";
import { useTasks } from "@hooks/useTasks";

type NewTaskProps = {
  onTaskCreation?: (task: Task) => void;
  onFocusOut?: () => void;
  insertAfter?: Task["id"];
};

const NewTask = forwardRef(
  (
    { onTaskCreation, onFocusOut, insertAfter }: NewTaskProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { addTask } = useTasks();
    const [task, setTask] = useState("");
    const { currentDate } = useDates();

    const handleAddTask = () => {
      const newTask: Task = {
        id: uuidv4(),
        status: "TO-DO",
        archived: false,
        priority: false,
        note: null,
        title: task,
        addedAt: currentDate,
        initiatedAt: null,
        finishedAt: null,
        subtasks: [],
        category: "",
      };

      addTask(newTask, { insertAfter });
      onTaskCreation?.(newTask);

      setTask("");
    };

    return (
      <Container>
        <Checkbox />
        <NewTaskField
          ref={ref}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onBlur={() => {
            if (task) {
              handleAddTask();
            } else {
              onFocusOut?.();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && task) {
              handleAddTask();
            }
          }}
          placeholder="Nova tarefa"
        />
      </Container>
    );
  }
);

export default NewTask;
