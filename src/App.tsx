import React , {useState, useEffect} from 'react';

// Components
import TodoInput from './components/TodoInput';

//Model
import { todoModel } from './model/model';

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>([]);

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;