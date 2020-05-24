import { http } from '../http/http';
import { Investor } from './investor.model';
import { AxiosError, AxiosResponse } from 'axios';

class InvestorRegistrationService {
  async getInvestors(): Promise<AxiosResponse<Investor[]> | any> {
    try {
      const investors = await http.get<Investor[]>('/investor-registration');
      return investors.data;
    } catch (error) {
      if (error && error.response) {
        const axiosError = error as AxiosError;
        throw axiosError.response;
      }
    }
  }
}

export const investorRegistrationService = new InvestorRegistrationService();
