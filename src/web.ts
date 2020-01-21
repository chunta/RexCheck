import { WebPlugin } from '@capacitor/core';
import { RexCheckPlugin } from './definitions';

export class RexCheckWeb extends WebPlugin implements RexCheckPlugin {
  constructor() {
    super({
      name: 'RexCheck',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const RexCheck = new RexCheckWeb();

export { RexCheck };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(RexCheck);
