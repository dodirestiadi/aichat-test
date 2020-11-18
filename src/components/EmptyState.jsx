import React from 'react';

import Box from '../styled/StyledBox';
import Text from '../styled/StyledText';
import Image from '../styled/StyledImage';

export default function EmptyState({ message }) {
  return (
    <Box isCentered marginTop={5}>
      <Image alt="find movie" src="https://www.denmakers.in/img/no-results.png" height={200} />
      <Text isBlock fontSize={18}> {message || 'Search your favourite movies!'}</Text>
    </Box>
  );
}