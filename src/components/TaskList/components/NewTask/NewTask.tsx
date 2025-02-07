import { useState } from "react";
import { Task } from "@customTypes/task";
import { useDates } from "../../../../hooks/useDates";
import { Container, NewTaskField } from "./styles";
import Checkbox from "@components/Checkbox";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({
  onTaskCreation,
}: {
  onTaskCreation: (task: Task) => void;
}) => {
  const [task, setTask] = useState("");
  const { currentDate } = useDates();

  const handleAddTask = () => {
    onTaskCreation({
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
    });
    setTask("");
  };

  return (
    <Container>
      <Checkbox />
      <NewTaskField
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
        placeholder="Nova task"
      />
    </Container>
  );
};

export default NewTask;
