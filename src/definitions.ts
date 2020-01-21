declare module "@capacitor/core" {
  interface PluginRegistry {
    RexCheck: RexCheckPlugin;
  }
}

export interface RexCheckPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
