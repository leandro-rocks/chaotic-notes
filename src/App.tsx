import { TaskProvider } from "./hooks/useTasks";
import DateSelector from "./components/DateSelector";
import TaskList from "./components/TaskList";
import { DateProvider } from "./hooks/useDates";

import "./app.css";

function App() {
  return (
    <DateProvider>
      <TaskProvider>
        <DateSelector />
        <TaskList />
      </TaskProvider>
    </DateProvider>
  );
}

export default App;
