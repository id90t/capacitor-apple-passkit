export interface CapacitorApplePasskitPlugin {
  addToWallet(options: { base64: string }): Promise<{ message: string }>;
  isWalletAppAvailable(): Promise<{ message: string }>;
}
