/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NotificationComponent } from './notification.component';
import { NotificationContainer } from './notification-container';
import { NotificationService, SHRIEK_NOTIFICATION_DEFAULT_OPTIONS } from './notification.service';
import { NotificationConfig } from './notification.config';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export function SHRIEK_NOTIFICATION_DEFAULT_OPTIONS_PROVIDER_FACTORY() {
  return new NotificationConfig();
}

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [NotificationContainer],
  declarations: [NotificationContainer, NotificationComponent],
  entryComponents: [NotificationContainer, NotificationComponent],
  providers: [NotificationService, {
    provide: SHRIEK_NOTIFICATION_DEFAULT_OPTIONS,
    useFactory: SHRIEK_NOTIFICATION_DEFAULT_OPTIONS_PROVIDER_FACTORY
  }]
})
export class NotificaitonModule {
}
