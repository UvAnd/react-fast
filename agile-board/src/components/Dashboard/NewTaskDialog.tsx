import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import {
  Select,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Box,
  InputLabel,
  FormControl,
} from '@mui/material/';
import useStore from '../../hooks/useStore';

interface INewTaskDialogProps {
  open: any;
  sectionId: any;
  handleClose: any;
}

export default function NewTaskDialog({
  open,
  sectionId,
  handleClose,
}: INewTaskDialogProps): JSX.Element {
  const [taskState, setTaskState] = useState<any>();
  const { users, boards } = useStore();

  const updateTaskState = (event: any): any => {
    const { value, name } = event.target;

    setTaskState((prevTaskState: any) => ({
      ...prevTaskState,
      [name]: value,
    }));
  };

  const createTask = useCallback(
    (event: any): any => {
      event.preventDefault();

      boards.active.addTask(sectionId, taskState);

      handleClose();
    },
    [taskState, boards, handleClose, sectionId],
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Creating A New Task:</DialogTitle>
      <form onSubmit={createTask}>
        <DialogContent style={{ minWidth: 500 }}>
          <Box p={1}>
            <TextField
              fullWidth
              required
              type="text"
              name="title"
              label="Title"
              onChange={updateTaskState}
              value={taskState?.title || ''}
            />
          </Box>
          <Box p={1}>
            <TextField
              required
              fullWidth
              type="text"
              multiline
              name="description"
              label="Description"
              onChange={updateTaskState}
              value={taskState?.description || ''}
            />
          </Box>
          <Box p={1}>
            <FormControl fullWidth>
              <InputLabel shrink>Assignee</InputLabel>
              <Select
                required
                style={{
                  width: '100%',
                }}
                native
                name="assignee"
                value={taskState?.assignee || ''}
                onChange={updateTaskState}
              >
                <option value="" disabled>
                  –
                </option>
                {users?.users?.map((user: any): any => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
