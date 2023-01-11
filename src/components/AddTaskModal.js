import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodosAsync } from '../redux/services';
import { initialState, priority, style } from './utils';

function AddTaskModal({open, setOpen}) {
    const dispatch = useDispatch();
    const handleClose = () => {
        setQuery(initialState);
        setOpen(false);
    };
    const [query, setQuery] = React.useState(initialState);
    
    const handleSubmit = async () => {
        if(!query.title) return;
        dispatch(addTodosAsync({ query }));
        setQuery(initialState);
        setOpen(false);
    } 

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                        <TextField 
                            id="task"
                            label="Task Title"
                            value={query.title}
                            onChange={(e) => setQuery({...query, title: e.target.value})}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Priority"
                            defaultValue={query.priority}
                            value={query.priority}
                            onChange={(e) => setQuery({...query, priority: e.target.value})}
                        >
                            {priority.map((option) => (
                                <MenuItem 
                                    key={option.id} 
                                    value={option.pr}
                                >
                                    {option.pr}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button 
                            variant='contained'
                            onClick={handleSubmit}
                        >Add</Button>
                        <Button 
                            variant='outlined'
                            onClick={handleClose}
                        >Cancel</Button>                     
                </Box>
            </Modal>
        </div>
    );
}

export default AddTaskModal;