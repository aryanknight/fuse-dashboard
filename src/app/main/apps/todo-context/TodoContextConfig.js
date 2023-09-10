import { lazy } from 'react';

const TodoContext = lazy(() => import('./TodoContext'));

const TodoContextConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/todo-context',
      element: <TodoContext />,
    },
  ],
};

export default TodoContextConfig;