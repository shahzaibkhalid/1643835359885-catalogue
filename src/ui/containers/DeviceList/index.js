import React, { useState, useEffect } from 'react';
import FlexGrid from '@tds/core-flex-grid';
import DeviceCard from '../../components/DeviceCard';
import { getDevicesByType } from '../../api';
import { getDeviceImgByType } from '../../misc';

const DeviceList = ({
  type
}) => {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchDeviceData = async () => {
      try {
        setDevices(await getDevicesByType(type, abortController));
      } catch(err) {
        throw new Error(err);
      }
    }
    fetchDeviceData();
    return () => abortController.abort();
  }, []);
  return (
    <>
      <FlexGrid>
        <FlexGrid.Row data-testid='device-card-list'>
          {devices?.map(device => (
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
