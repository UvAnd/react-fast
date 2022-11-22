/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import Card from '@mui/material/Card';
import Task from './Task';
import { IBoardSection, ITask } from '../../interfaces/data.interfaces';

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
): React.CSSProperties => {
  return {
    padding: 8,
    marginBottom: 8,
    ...draggableStyle,
  };
};

interface IColumnProps {
  section: IBoardSection;
}

const Column = ({ section }: IColumnProps): JSX.Element => {
  return (
    <div>
      {section.tasks.map((task: ITask, index: number) => {
        return (
          <Draggable draggableId={task.id} key={task.id} index={index}>
            {(provided, snapshot): JSX.Element => (
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
