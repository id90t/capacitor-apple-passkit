import { registerPlugin } from '@capacitor/core';

import type { CapacitorApplePasskitPlugin } from './definitions';

const CapacitorApplePasskit = registerPlugin<CapacitorApplePasskitPlugin>(
  'CapacitorApplePasskit',
  {
    web: () => import('./web').then(m => new m.CapacitorApplePasskitWeb()),
  },
);

export * from './definitions';
export { CapacitorApplePasskit };
