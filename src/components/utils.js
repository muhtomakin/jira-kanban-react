import AddTask from "./AddTask";
import TaskManagement from "./TaskManagement";

export const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    gap: '15px'
};

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

export const initialState = {
    title: '',
    priority: 'BUG',
}

export const editInitialState = {
    title: '',
    priority: 'BUG',
    situation: 'OPEN',
}

export const priority = [
    {
        id: 1,
        pr: 'BUG',
    },
    {
        id: 2,
        pr: 'LIGHT',
    },
    {
        id: 3,
        pr: 'URGENT',
    },
];

export const situation = [
    {
        id: 1,
        st: 'OPEN',
    },
    {
        id: 2,
        st: 'TODO',
    },
    {
        id: 3,
        st: 'DONE',
    },
];

export const sections = [
    {
        id: 1,
        title: 'Open',
        section: 'OPEN',
    },
    {
        id: 2,
        title: 'To-Do',
        section: 'TODO',
    },
    {
        id: 3,
        title: 'Done',
        section: 'DONE',
    },
]