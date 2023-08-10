import { WebPlugin } from '@capacitor/core';

import type { CapacitorApplePasskitPlugin } from './definitions';

export class CapacitorApplePasskitWeb
  extends WebPlugin
  implements CapacitorApplePasskitPlugin
{
  addToWallet(options: { base64: string }): Promise<{ message: string; }> {
    console.log(options.base64, 'Method not implemente on web.');
    throw new Error('Method not implemented on web.');
  }
  isWalletAppAvailable(): Promise<{ message: string; }> {
    console.log('Method not implemente on web.');
    throw new Error('Method not implemented on web.');
  }
}
