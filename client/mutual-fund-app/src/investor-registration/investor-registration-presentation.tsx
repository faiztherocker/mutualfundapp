import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Investor } from './investor.model';

class InvestorPresentationProps {
  investors: Investor[];

  constructor() {
    this.investors = [];
  }
}

export class InvestorPresentation extends React.Component<
  InvestorPresentationProps,
  {}
> {
  render() {
    return (
      <Row className='mt-3'>
        <Col xs={12}>
          <Table striped bordered hover size='sm'>
            <thead className="text-center font-weight-bold">
              <tr>
                <td>Name</td>
                <td>Email Id</td>
                <td>Pancard Number</td>
                <td>DateOFBirth</td>
                <td>Terms Acceptance</td>
              </tr>
            </thead>
            <tbody>
              {this.props.investors &&
                this.props.investors.map(investor => (
                  <tr key={investor.id}>
                    <td>{investor.name}</td>
                    <td>{investor.emailId}</td>
                    <td>{investor.pancardNumber}</td>
                    <td>
                      {investor.dateOfBirth.day}/{investor.dateOfBirth.month}/
                      {investor.dateOfBirth.year}
                    </td>
                    <td>
                      {investor.termsAndConditionAcceptanceStatus
                        ? 'Yes'
                        : 'No'}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
