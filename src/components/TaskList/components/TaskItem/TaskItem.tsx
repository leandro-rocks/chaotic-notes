import Checkbox from "@components/Checkbox";
import { Task } from "@customTypes/task";
import { useTasks } from "@hooks/useTasks";
import { Container, TaskTitle } from "./styles";

const TaskItem = ({ id, title, status }: Task) => {
  const { setTaskStatus } = useTasks();

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

  return (
    <Container>
      <Checkbox
        checked={status === "FINISHED"}
        onChange={handleCheckboxChange}
      />
      <TaskTitle finished={status === "FINISHED"}>{title}</TaskTitle>
    </Container>
  );
};

export default TaskItem;
