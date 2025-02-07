import { useState } from "react";
import { Task } from "@customTypes/task";
import { useDates } from "../../../../hooks/useDates";

const NewTask = ({
  onTaskCreation,
}: {
  onTaskCreation: (task: Task) => void;
}) => {
  const [task, setTask] = useState("");
  const { currentDate } = useDates();

  const handleAddTask = () => {
    onTaskCreation({
      id: "",
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
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default NewTask;
