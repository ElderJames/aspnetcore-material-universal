/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { ViewContainerRef, InjectionToken } from '@angular/core';

export const SHRIEK_AMAP_DATA = new InjectionToken<any>('ShriekAmapData');

export class AmapConfig {
  apiKey?: string;
  apiVersion?: string = '1.4.5';
  urlPath?: string = '//webapi.amap.com/maps';
}
