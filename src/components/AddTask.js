import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddTaskModal from './AddTaskModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodosAsync, removeTodosAsync } from '../redux/services';
import { ListItemSecondaryAction } from '@mui/material';

function AddTask() {
  const dispatch = useDispatch();
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const items = useSelector(state => state.todos.items);
  const handleAddOpen = () => setAddOpen(true);
  // const handleEditOpen = (id) => {
  //   setId(id)
  //   setEditOpen(true)
  // };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await dispatch(removeTodosAsync(id));
    }
  };

  React.useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  
  return (
    <div style={{
      width: '600px',
      position: 'absolute',
      left: '50%',
      margin: '0 0 0 -160px',
    }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AddCircleOutlineIcon onClick={handleAddOpen}/>
        {items?.map((value) => (
          <ListItem
            key={value}
            divider={true}
            disableGutters={true}
            secondaryAction={
              <ListItemSecondaryAction 
                sx={{
                  display: 'flex',
                }}
              >
                <IconButton aria-label="delete">
                  <DeleteForeverIcon 
                    sx={{ color: 'red' }} 
                    onClick={() => handleDelete(value.id)}
                  />
              </IconButton>
              {/* <IconButton aria-label="edit">
                <EditIcon onClick={() => handleEditOpen(value.id)}/>
              </IconButton> */}
              </ListItemSecondaryAction>
              
            }
          >
            <ListItemText primary={`${value.title}`} />
          </ListItem>
        ))}
      </List>
      <AddTaskModal open={addOpen} setOpen={setAddOpen}/>
    </div>
  );
}

export default AddTask;