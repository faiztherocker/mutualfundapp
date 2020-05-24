import React from 'react';
import { InvestorPresentation } from './investor-registration-presentation';
import { Investor } from './investor.model';
import { investorRegistrationService } from './investor-registration.service';

class InvestorComponentState {
  investor: Investor[];

  constructor() {
    this.investor = [];
  }
}

export class InvestorContainer extends React.Component<
  {},
  InvestorComponentState
> {
  state: InvestorComponentState = new InvestorComponentState();

  async componentDidMount() {
    this.setState(this.state);
    investorRegistrationService
      .getInvestors()
      .then(investors => {
        this.setState({
          investor: investors
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <InvestorPresentation
        investors={this.state.investor}
      ></InvestorPresentation>
    );
  }
}
