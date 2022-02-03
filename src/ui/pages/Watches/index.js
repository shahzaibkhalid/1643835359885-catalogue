import React from 'react';
import DeviceList from '../../containers/DeviceList';
import { routes } from '../../routes';
import PageLevelHeading from '../../components/PageLevelHeading';

const Watches = () => (
  <>
    <PageLevelHeading level="h1">Watches</PageLevelHeading>
    <DeviceList type={routes.WATCHES} />
  </>
);

export default Watches;
