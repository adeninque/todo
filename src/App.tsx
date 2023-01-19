import React, {useState, useEffect, useRef, useMemo} from 'react';
import { Todos } from './components/Todos';
import { TodosProvider } from './contexts/TodosContext';
import { Form } from './components/Form';
import './css/App.css'

function App() {
  return (
    <>
      <div className="container">
        <TodosProvider>
          <Form/>
          <Todos />
        </TodosProvider>
      </div>
    </>
  );
}

export default App;
