import NewTask from "./NewTask.jsx";
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteTask } from "./handelSlice.jsx";
export default function Tasks() {
  const dispatch = useDispatch();
  const { tasks, selectedProjectId } = useSelector((store) => store.HandelApp);
  let result = tasks.filter((a) => a.projectId === selectedProjectId);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {result.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {result.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {result.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => dispatch(handleDeleteTask(task.id))}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
