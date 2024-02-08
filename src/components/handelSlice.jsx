import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

const handelSlicee = createSlice({
  name: "ToDo",
  initialState,

  reducers: {
    handleStartAddProject(state, action) {
      state.selectedProjectId = null;
    },

    handleCancelAddProject(state, action) {
      state.selectedProjectId = undefined;
    },
    handleSelectProject(state, action) {
      state.selectedProjectId = action.payload;
    },
    handleAddProject(state, action) {
      const projectId = Math.random();

      const newProject = {
        ...action.payload,
        id: projectId,
      };

      (state.selectedProjectId = undefined),
        (state.projects = [...state.projects, newProject]);
    },
    handleDeleteProject(state, action) {
      return {
        ...state,
        selectedProjectId: undefined,
        projects: state.projects.filter(
          (project) => project.id !== state.selectedProjectId
        ),
      };
    },
    handleAddTask(state, action) {
      const taskId = Math.random();
      const newTask = {
        text: action.payload,
        projectId: state.selectedProjectId,
        id: taskId,
      };
      state.tasks = [newTask, ...state.tasks];
    },

    handleDeleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  handleStartAddProject,
  handleCancelAddProject,
  handleSelectProject,
  handleAddProject,
  handleDeleteProject,
  handleAddTask,
  handleDeleteTask,
} = handelSlicee.actions;

export default handelSlicee.reducer;
