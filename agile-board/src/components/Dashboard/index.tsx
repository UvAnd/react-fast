import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DragDropContext, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';
import Column from './Column';
import useStore from '../../hooks/useStore';
import NewTaskDialog from './NewTaskDialog';
import { IBoardSection } from '../../interfaces/data.interfaces';

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 8,
  minHeight: 500,
});

function Dashboard(): JSX.Element {
  const { boards } = useStore();
  const [newTaskTo, setNewTask] = useState<string | null>(null);

  const closeDialog = useCallback(() => {
    setNewTask(null);
  }, [setNewTask]);

  const onDragEnd = useCallback<OnDragEndResponder>(
    (event) => {
      const { source, destination, draggableId: taskId } = event;

      boards.active.moveTask(taskId, source, destination);
    },
    [boards],
  );

  const isOpenModal = !!newTaskTo;

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {boards?.active?.sections.map((section: IBoardSection) => {
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
      <NewTaskDialog isOpen={isOpenModal} sectionId={newTaskTo} handleClose={closeDialog} />
    </Box>
  );
}

export default observer(Dashboard);
