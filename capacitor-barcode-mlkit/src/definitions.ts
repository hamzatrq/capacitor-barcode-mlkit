declare module '@capacitor/core' {
  interface PluginRegistry {
    MLKitBarcode: MLKitBarcodePlugin;
  }
}

export interface MLKitBarcodePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
