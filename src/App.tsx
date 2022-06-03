import React , {useState, useEffect} from 'react';

// Components
import TodoInput from './components/TodoInput';

//Model
import { todoModel } from './model/model';

const App = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;