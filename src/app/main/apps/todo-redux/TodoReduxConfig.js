import { lazy } from 'react';

const TodoRedux = lazy(() => import('./TodoRedux'));

const TodoReduxConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/todo-redux',
      element: <TodoRedux />,
    },
  ],
};

export default TodoReduxConfig;