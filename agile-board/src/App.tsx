import React from 'react';
import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App(): JSX.Element {
  const { users, boards } = useStore();

  return (
    <>
      <Header />
      <main className="App">
        <Dashboard />
      </main>
    </>
  );
}

export default observer(App);
