export interface CapacitorApplePasskitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
