import { Shield, textResult, jsonResult, HTTP_STATUS_CODE } from 'fortjs';

export class AuthenticationShield extends Shield {
  async protect() {
    // this.logger.error(`An unauthenticated user tried logging in !!`);
    // return textResult("You're not logged in");
    // return jsonResult("xxx",HTTP_STATUS_CODE.BadRequest);
    return null;
  }
}
