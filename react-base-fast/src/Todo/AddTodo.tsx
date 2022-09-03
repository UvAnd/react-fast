import { useState } from 'react';

interface IAddTodoProps {
  onCreate(value: string): void
}

function AddTodo({ onCreate }: IAddTodoProps): JSX.Element {
  const styles = {
    form: {
      marginBottom: '1rem',
    }
  }

  const [value, setValue] = useState('');

  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  console.log(value);

  return (
    <form style={styles.form} onSubmit={(e) => submitHandler(e)}>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button type='submit'>Add todo</button>
    </form>
  );
}

export default AddTodo;