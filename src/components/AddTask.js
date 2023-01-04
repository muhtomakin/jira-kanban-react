import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddTaskModal from './Modal';

function AddTask() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
  return (
    <div style={{
      width: '360px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: '-50px 0 0 -50px',
    }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AddCircleOutlineIcon onClick={handleOpen}/>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            divider={true}
            disableGutters={true}
            secondaryAction={
              <IconButton aria-label="comment">
                {/* <CommentIcon /> */}
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
      <AddTaskModal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default AddTask;