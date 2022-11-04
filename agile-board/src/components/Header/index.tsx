import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import FormControl from '@mui/material/FormControl';
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import User from '../common/User';
import { IBoardSection } from '../../interfaces/data.interfaces';

function Header(): JSX.Element {
  const { boards, users } = useStore();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center" p={1}>
              <Typography variant="h6" color="inherit">
                Dashboard:
              </Typography>
              <FormControl variant="outlined">
                <Select
                  style={{
                    backgroundColor: '#ffffff',
                    marginLeft: 10,
                  }}
                  id="active"
                  native
                  value={boards?.active?.id || ''}
                  onChange={(event) => {
                    const { value } = event.target;

                    boards.selectBoard(value);
                  }}
                >
                  <option value="" disabled>
                    –
                  </option>
                  {boards?.boards.map(
                    (board: IBoardSection): JSX.Element => {
                      return (
                        <option key={board?.id} value={board?.id}>
                          {board?.title}
                        </option>
                      );
                    },
                  )}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <User user={users?.me} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default observer(Header);
