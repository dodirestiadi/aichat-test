import React from 'react';

import { Container } from 'reactstrap';
import Navigation from './Navigation';

export default function MainLayout({ children }) {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}