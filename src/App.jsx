import { useSelector } from "react-redux";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import { useLocalStorageState } from "./useLocalStorageState.js";
import { useEffect } from "react";

function App() {
  // const bb = useSelector((store) => store.HandelApp);
  const { selectedProjectId } = useSelector((store) => store.HandelApp);

  // const [mytask] = useLocalStorageState("Task");

  let content = <SelectedProject />;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {content}
    </main>
  );
}

export default App;
