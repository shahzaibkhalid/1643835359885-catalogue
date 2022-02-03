import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getRoutes } from '../../routes';

//TODO: add a proper spinner component
const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>This page is loading</h1>}>
      <Switch>
        {getRoutes().map(({ path, component, ...rest }) => {
          const PageRootComponent = component;
          return (
            <Route
              path={path}
              key={path}
              {...rest}
            >
              <PageRootComponent />
            </Route>
          );
        })}
      </Switch>
    </Suspense>
  </BrowserRouter>
  );

export default Router;
