import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export class Topbar extends React.PureComponent {
  render() {
    return (
      <Navbar bg='light' expand='sm'>
        <Navbar.Brand href='#home'>Mutual Fund Application</Navbar.Brand>
      </Navbar>
    );
  }
}
