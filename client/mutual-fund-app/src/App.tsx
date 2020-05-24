import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';

import { InvestorContainer } from './investor-registration/investor-registration-container';
import { Topbar } from './topbar/topbar';

export function MutualFundApp() {
  return (
    <Container>
      <Topbar></Topbar>
      <InvestorContainer></InvestorContainer>
    </Container>
  );
}
