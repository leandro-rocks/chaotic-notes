import Checkbox from "@components/Checkbox";
import { Task } from "@customTypes/task";
import { useTasks } from "@hooks/useTasks";
import { Container, TaskTitle, Wrapper } from "./styles";

const TaskItem = ({
  id,
  parent,
  title,
  status,
  onInsertNewTask,
  previousParentTask,
}: Task & {
  previousParentTask?: Task["id"] | null;
  onInsertNewTask?: (id: Task["id"], parent?: Task["id"] | null) => void;
}) => {
  const { setTaskStatus, editTask, removeTask } = useTasks();

  const handleCheckboxChange = () => {
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
      onInsertNewTask?.(id, parent);
    }

    if (event.key === "Tab") {
      if (event.shiftKey) {
        editTask(id, { parent: null });
      } else {
        editTask(id, { parent: previousParentTask });
      }

      event.preventDefault();
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    editTask(id, { title: event.target.value });
  };

  const handleFocusOut = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      removeTask(id);
    } else {
      editTask(id, { title: event.target.value });
    }
  };

  return (
    <Wrapper level={parent ? 1 : 0}>
      <Container>
        <Checkbox
          checked={status === "FINISHED"}
          onChange={handleCheckboxChange}
        />
        <TaskTitle
          finished={status === "FINISHED"}
          value={title}
          onKeyDown={handleTitleKeyDown}
          onChange={handleTitleChange}
          onBlur={handleFocusOut}
        />
      </Container>
    </Wrapper>
  );
};

export default TaskItem;
