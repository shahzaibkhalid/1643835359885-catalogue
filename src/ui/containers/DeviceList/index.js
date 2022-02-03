import React, { useState, useEffect } from 'react';
import FlexGrid from '@tds/core-flex-grid';
import DeviceCard from '../../components/DeviceCard';
import { getDeviceImgByType, SERVER_URL } from '../../misc';
import useFetch from '../../hooks/useFetch';

const DeviceList = ({
  type
}) => {
  const { response, error } = useFetch(SERVER_URL + type);
  if (!response?.data) {
    return null;
  }
  if (error) {
    throw new Error(error);
  }
  return (
    <>
      <FlexGrid>
        <FlexGrid.Row data-testid='device-card-list'>
          {response?.data?.map(device => (
            <FlexGrid.Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={device.name}
            >
              <DeviceCard
                imgSrc={getDeviceImgByType(type)}
                {...device}
              />
            </FlexGrid.Col>
          ))}
        </FlexGrid.Row>
      </FlexGrid>
    </>
)};

export default DeviceList;
