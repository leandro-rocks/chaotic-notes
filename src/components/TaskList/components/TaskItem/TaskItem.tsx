import Checkbox from "@components/Checkbox";
import { Task } from "@customTypes/task";
import { useTasks } from "@hooks/useTasks";
import { Container, TaskTitle, Wrapper } from "./styles";
import { useRef, useState, useEffect } from "react";
import NewTask from "@components/NewTask";

const TaskItem = ({ id, title, status }: Task) => {
  const { setTaskStatus, editTask } = useTasks();
  const [showNewTask, setShowNewTask] = useState(false);
  const newTaskRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showNewTask) {
      newTaskRef.current?.focus();
    }
  }, [showNewTask]);

  const handleCheckboxChange = () => {
    console.log("handleCheckboxChange", status);
    switch (status) {
      case "TO-DO":
        setTaskStatus(id, "FINISHED");
        break;
      case "FINISHED":
        setTaskStatus(id, "TO-DO");
        break;
      default:
        break;
    }
  };

  const handleTitleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowNewTask(true);

      return;
    }

    editTask(id, { title: (event.target as HTMLInputElement).value });
  };

  const handleTaskCreation = () => setShowNewTask(false);

  return (
    <Wrapper>
      <Container>
        <Checkbox
          checked={status === "FINISHED"}
          onChange={handleCheckboxChange}
        />
        <TaskTitle
          finished={status === "FINISHED"}
          value={title}
          onKeyDown={handleTitleKeyDown}
        />
      </Container>
      {showNewTask && (
        <NewTask
          onTaskCreation={handleTaskCreation}
          onFocusOut={() => setShowNewTask(false)}
          insertAfter={id}
          ref={newTaskRef}
        />
      )}
    </Wrapper>
  );
};

export default TaskItem;
