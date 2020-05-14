import { Wall, textResult } from 'fortjs';
import { xssFilter, hsts } from 'helmet';

export class HelmetWall extends Wall {
  async onIncoming() {
    await this.callMiddleWare(xssFilter());
    return await this.callMiddleWare(hsts({force:true}));
  }

  callMiddleWare(middleWare) {
    return new Promise<any>((res, rej) => {
      middleWare(this.request, this.response, res);
    });
  }
}
