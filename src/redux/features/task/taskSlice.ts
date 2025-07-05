import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium";
}

const initialState: initialState = {
  tasks: [
    {
      id: "asdadaf",
      title: "Initialize Frontend",
      description: "Create Home Page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdada45345f",
      title: "Init Git repo",
      description: "Create git",
      dueDate: "2023-01",
      isCompleted: true,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

// export const selectTasks = (state: RootState) => {
//   return state.todo.tasks;
// };

export const selectTasks = (state: RootState) => state.todo.tasks;

export const selectFilter = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
