import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { IUser } from '../../interfaces/data.interfaces';

interface IUserProps {
  user: IUser | null;
}

function User({ user }: IUserProps): JSX.Element {
  return (
    <Box display="flex" alignItems="center">
      <Avatar alt={user?.name} src={user?.avatar} />
      <span style={{ padding: 5 }}>{user?.name}</span>
    </Box>
  );
}

export default User;
