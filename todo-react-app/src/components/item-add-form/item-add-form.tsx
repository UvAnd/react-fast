

import { useState } from 'react';
import './item-add-form.css';

interface IItemAddFormProps {
  onAddTodo(label: string): void;
}

const ItemAddForm = ({onAddTodo}: IItemAddFormProps): JSX.Element => {

  const [labelValue, setLaelValue] = useState('');

  const onLabelChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setLaelValue(e.currentTarget.value);
  }
  const onSubmitBtn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onAddTodo(labelValue);
    setLaelValue('');
  }

  return (
    <form className="item-add-form d-flex" onSubmit={(e) => onSubmitBtn(e)}>
      <input type="text" className="form-control" value={labelValue} onChange={(e) => onLabelChange(e)} placeholder="Add label name"></input>
      <button className="btn btn-outline-secondary">Add TODO</button>
    </form>
  )
}

export default ItemAddForm;