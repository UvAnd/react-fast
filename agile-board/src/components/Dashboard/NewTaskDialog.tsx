import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import {
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Box,
  InputLabel,
  FormControl,
} from '@mui/material/';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStore from '../../hooks/useStore';
import { IUser } from '../../interfaces/data.interfaces';

interface INewTaskDialogProps {
  isOpen: boolean;
  sectionId: string | null;
  handleClose(): void;
}

interface INewTask {
  title?: string;
  description?: string;
  assignee?: string;
}

type TUpdateTaskStateEvent =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | SelectChangeEvent;

export default function NewTaskDialog({
  isOpen,
  sectionId,
  handleClose,
}: INewTaskDialogProps): JSX.Element {
  const [taskState, setTaskState] = useState<INewTask>();
  const { users, boards } = useStore();

  const updateTaskState = (event: TUpdateTaskStateEvent): void => {
    const { value, name } = event.target;

    setTaskState((prevTaskState: INewTask | undefined) => ({
      ...prevTaskState,
      [name]: value,
    }));
  };

  const createTask = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>): void => {
      event.preventDefault();

      boards.active.addTask(sectionId, taskState);

      handleClose();
    },
    [taskState, boards, handleClose, sectionId],
  );

  return (
    <Dialog open={isOpen} onClose={handleClose}>
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
                {users?.users?.map(
                  (user: IUser): JSX.Element => {
                    return (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    );
                  },
                )}
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
