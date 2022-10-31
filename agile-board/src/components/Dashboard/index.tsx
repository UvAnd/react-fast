import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import useStore from '../../hooks/useStore';
import NewTaskDialog from './NewTaskDialog';

const getListStyle = (isDraggingOver: any): any => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 8,
  minHeight: 500,
});

function Dashboard(): JSX.Element {
  const { boards } = useStore();
  const [newTaskTo, setNewTask] = useState(null);

  const closeDialog = useCallback(() => {
    setNewTask(null);
  }, [setNewTask]);

  const onDragEnd = useCallback(
    (event: any) => {
      const { source, destination, draggableId: taskId } = event;

      boards.active.moveTask(taskId, source, destination);
    },
    [boards],
  );

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {boards?.active?.sections.map((section: any) => {
            return (
              <Grid item key={section.id} xs>
                <Paper>
                  <Box p={1} display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">{section.title}</Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        setNewTask(section.id);
                      }}
                    >
                      ADD
                    </Button>
                  </Box>
                  <Droppable droppableId={section.id} key={section.id}>
                    {(provided, snapshot) => (
                      <div
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                        <Column section={section} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>
      <NewTaskDialog open={!!newTaskTo} sectionId={newTaskTo} handleClose={closeDialog} />
    </Box>
  );
}

export default observer(Dashboard);
