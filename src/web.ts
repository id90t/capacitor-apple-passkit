import { WebPlugin } from '@capacitor/core';

import type { CapacitorApplePasskitPlugin } from './definitions';

export class CapacitorApplePasskitWeb
  extends WebPlugin
  implements CapacitorApplePasskitPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
