import React, { Suspense } from 'react';
import Spinner from '@tds/core-spinner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getRoutes } from '../../routes';
import RootErrorBoundary from '../RootErrorBoundary';

const Router = () => (
  <BrowserRouter>
    <RootErrorBoundary>
      <Suspense fallback={
        <Spinner fullScreen spinning label="Loading page" />
      }>
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
    </RootErrorBoundary>
  </BrowserRouter>
  );

export default Router;
