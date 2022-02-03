import React from 'react';
import Box from '@tds/core-box';
import Paragraph from '@tds/core-paragraph';
import PageLevelHeading from '../../components/PageLevelHeading';
import Link from '../../components/LinkWrapper';
import { routes } from '../../routes';

const Home = () => (
  <>
    <PageLevelHeading level="h1">Device Catalogue</PageLevelHeading>
    <Box horizontal={4}>
      <Paragraph size="medium">
        <Link to={routes.IPHONES}>Browse iPhones</Link>
      </Paragraph>
      <Paragraph size="medium">
        <Link to={routes.WATCHES}>Browse Watches</Link>
      </Paragraph>
    </Box>
  </>
);

export default Home;
