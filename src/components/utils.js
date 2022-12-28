import AddTask from "./AddTask";
import TaskManagement from "./TaskManagement";

export const steps = [
    {
        id: 1,
        label: 'Add Task',
        page: <AddTask />
    },
    {
        id: 2,
        label: 'Task Management',
        page: <TaskManagement />
    }, 
];