/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Draggable } from 'react-beautiful-dnd';
import Card from '@mui/material/Card';
import Task from './Task';

const getItemStyle = (isDragging: any, draggableStyle: any): any => {
  return {
    padding: 8,
    marginBottom: 8,
    ...draggableStyle,
  };
};

interface IColumnProps {
  section: any;
}

const Column = ({ section }: IColumnProps): JSX.Element => {
  return (
    <div>
      {section.tasks.map((task: any, index: any) => {
        return (
          <Draggable draggableId={task.id} key={task.id} index={index}>
            {(provided: any, snapshot: any) => (
              <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
              >
                <Task task={task} />
              </Card>
            )}
          </Draggable>
        );
      })}
    </div>
  );
};

export default observer(Column);
