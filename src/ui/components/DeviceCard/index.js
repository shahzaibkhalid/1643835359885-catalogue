import React from 'react';
import PropTypes from 'prop-types';
import Image from '@tds/core-image';
import Card from '@tds/core-card';
import Heading from '@tds/core-heading';
import PriceLockup from '@tds/core-price-lockup';
import Box from '@tds/core-box';

const DeviceCard = ({
  imageSrc,
  name,
  brand,
  price
}) => (
  <Card>
    <Box between={4}>
      <Image
        src={imageSrc}
        alt={name}
        width={160}
        height={202}
      />
      <Heading level="h4" tag="h3">{brand}</Heading>
    </Box>
    <Box between={1}>
      <Heading level="h2" tag="h4">{name}</Heading>
      <PriceLockup
        price={price}
        size="small"
        bottomText="TELUS Easy Payment and Bring-It-Back applied. Taxes due upfront."
      />
    </Box>
  </Card>
);

DeviceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default DeviceCard;
