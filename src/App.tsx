import { TaskProvider } from "@hooks/useTasks";
import TaskList from "@components/TaskList";
import { DateProvider } from "@hooks/useDates";
import Header from "@components/Header";

import "./app.css";

function App() {
  return (
    <DateProvider>
      <TaskProvider>
        <Header />
        <TaskList />
      </TaskProvider>
    </DateProvider>
  );
}

export default App;
