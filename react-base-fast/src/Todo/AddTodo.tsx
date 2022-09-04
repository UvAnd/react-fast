import { useState } from 'react';

interface IAddTodoProps {
  onCreate(value: string): void
}

interface IUseInputValue {
  bind: {value: string, onChange(e: React.ChangeEvent<HTMLInputElement>): void},
  clear: () => void,
  value: () => string,
}

function useInputValue(defaultValue = ''): IUseInputValue {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  }
}

function AddTodo({ onCreate }: IAddTodoProps): JSX.Element {
  const input = useInputValue('');

  const styles = {
    form: {
      marginBottom: '1rem',
    }
  }

  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  console.log(input.value);

  return (
    <form style={styles.form} onSubmit={(e) => submitHandler(e)}>
      <input {...input.bind}></input>
      <button type='submit'>Add todo</button>
    </form>
  );
}

export default AddTodo;