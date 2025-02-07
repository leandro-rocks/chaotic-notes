import { Task } from "@customTypes/task";
import { useTasks } from "@hooks/useTasks";

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
    <div>
      <input
        type="checkbox"
        checked={status === "FINISHED"}
        onChange={handleCheckboxChange}
      />
      <span>{title}</span>
    </div>
  );
};

export default TaskItem;
