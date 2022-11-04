import React from 'react';
import { observer } from 'mobx-react-lite';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import User from '../common/User';
import { ITask } from '../../interfaces/data.interfaces';

interface ITaskProps {
  task: ITask;
}

function Task({ task }: ITaskProps): JSX.Element {
  const user = task?.assignee || null;
  return (
    <CardContent>
      <Typography color="textPrimary" gutterBottom style={{ fontSize: 18 }}>
        {task.title}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {task.description}
      </Typography>
      <User user={user} />
    </CardContent>
  );
}

export default observer(Task);
