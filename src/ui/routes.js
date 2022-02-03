import { lazy } from 'react';

const routes = {
  HOME: '/',
  WATCHES: '/watches',
  IPHONES: '/iphones'
};

const Home = lazy(() =>
  import(
    /* webpackChunkName: 'Home' */
    './pages/Home'
  )
);

const IPhones = lazy(() =>
import(
  /* webpackChunkName: 'IPhones' */
  /* webpackPrefetch: true */
  './pages/IPhones'
  )
);

const Watches = lazy(() =>
  import(
    /* webpackChunkName: 'Watches' */
    /* webpackPrefetch: true */
    './pages/Watches'
  )
);

const NotFound = lazy(() =>
  import(
    /* webpackChunkName: 'NotFound' */
    './pages/NotFound'
  )
);

const getRoutes = () => [
  {
    component: Home,
    path: routes.HOME,
    exact: true,
  },
  {
    component: IPhones,
    path: routes.IPHONES,
  },
  {
    component: Watches,
    path: routes.WATCHES,
  },
  {
    component: NotFound,
    path: '*',
  },
];

export { routes, getRoutes };
