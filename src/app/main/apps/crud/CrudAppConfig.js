import { lazy } from 'react';

const CrudApp = lazy(() => import('./CrudApp'));

const CrudAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/crud',
      element: <CrudApp />,
    },
  ],
};

export default CrudAppConfig;
