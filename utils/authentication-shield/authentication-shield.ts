import { Shield } from 'fortjs';

export class AuthenticationShield extends Shield {
  async protect() {
    return null;
  }
}
