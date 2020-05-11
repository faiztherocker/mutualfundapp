import { Shield, textResult } from 'fortjs';

export class AuthenticationShield extends Shield {
  async protect() {
    this.logger.error(`Unauthenticated user tried logging in !!`);
    return textResult("You're not logged in");
  }
}
