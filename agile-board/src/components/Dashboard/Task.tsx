import React from 'react';
import { observer } from 'mobx-react-lite';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import User from '../common/User';

interface ITaskProps {
  task: any;
}

function Task({ task }: ITaskProps): JSX.Element {
  return (
    <CardContent>
      <Typography color="textPrimary" gutterBottom style={{ fontSize: 18 }}>
        {task.title}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {task.description}
      </Typography>
      <User user={task.assignee} />
    </CardContent>
  );
}

export default observer(Task);
