/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { ViewContainerRef, InjectionToken } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';

export const SHRIEK_NOTIFICATION_DATA = new InjectionToken<any>('ShriekNonticationData');

export type HorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export type VerticalPosition = 'top' | 'bottom';

export class NotificationConfig<D = any> {
  viewContainerRef?: ViewContainerRef;
  duration?: number = 2000;
  direction?: Direction;
  data?: D | null = null;

  horizontalPosition?: HorizontalPosition = 'right';
  verticalPosition?: VerticalPosition = 'top';
}
