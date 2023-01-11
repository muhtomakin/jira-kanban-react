// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { Button } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { editTodosAsync } from '../redux/services';
// import { editInitialState, priority, situation, style } from './utils';
// import { changeActiveStep } from '../redux/slice';

// function EditTaskModal({open, setOpen, id}) {
//     const dispatch = useDispatch();
//     const handleClose = () => {
//         setQuery(editInitialState);
//         setOpen(false);
//     };
//     const [query, setQuery] = React.useState(editInitialState);
    
//     const handleSubmit = async () => {
//         if(!query.title) return;
//         dispatch(editTodosAsync({ id, data: { query } }));        
//         setQuery(editInitialState);
//         setOpen(false);
//         // dispatch(changeActiveStep(1))
//     } 
//     console.log(query)

//     return (
//         <div>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <TextField 
//                         id="task"
//                         label="Task Title"
//                         aria-describedby="my-helper-text"
//                         value={query.title}
//                         onChange={(e) => setQuery({...query, title: e.target.value})}
//                     />
//                     <TextField
//                         id="outlined-select-currency"
//                         select
//                         label="Priority"
//                         defaultValue={query.priority}
//                         value={query.priority}
//                         onChange={(e) => setQuery({...query, priority: e.target.value})}
//                     >
//                         {priority.map((option) => (
//                             <MenuItem 
//                                 key={option.id} 
//                                 value={option.pr}
//                             >
//                                 {option.pr}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                     <TextField
//                         id="outlined-select-currency"
//                         select
//                         label="Situation"
//                         defaultValue={query.situation}
//                         value={query.situation}
//                         onChange={(e) => setQuery({...query, situation: e.target.value})}
//                     >
//                         {situation.map((option) => (
//                             <MenuItem 
//                                 key={option.id} 
//                                 value={option.st}
//                             >
//                                 {option.st}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                     <Button 
//                         variant='contained'
//                         onClick={handleSubmit}
//                     >Confirm</Button>
//                     <Button 
//                         variant='outlined'
//                         onClick={handleClose}
//                     >Cancel</Button>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }

// export default EditTaskModal;