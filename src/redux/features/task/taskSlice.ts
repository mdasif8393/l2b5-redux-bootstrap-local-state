import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  ],
  filter: "all",
};

export type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority"
>;

const createTask = (taskData: DraftTask) => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});

// export const selectTasks = (state: RootState) => {
//   return state.todo.tasks;
// };

export const selectTasks = (state: RootState) => state.todo.tasks;

export const selectFilter = (state: RootState) => state.todo.filter;

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
