import React from 'react';
import DeviceList from '../../containers/DeviceList';
import { routes } from '../../routes';
import PageLevelHeading from '../../components/PageLevelHeading';

const IPhones = () => (
  <>
    <PageLevelHeading level="h1">iPhones</PageLevelHeading>
    <DeviceList type={routes.IPHONES} />
  </>
);

export default IPhones;
