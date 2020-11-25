import { WebPlugin } from '@capacitor/core';
import { MLKitBarcodePlugin } from './definitions';

export class MLKitBarcodeWeb extends WebPlugin implements MLKitBarcodePlugin {
  constructor() {
    super({
      name: 'MLKitBarcode',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const MLKitBarcode = new MLKitBarcodeWeb();

export { MLKitBarcode };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MLKitBarcode);
