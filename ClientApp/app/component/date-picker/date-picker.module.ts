/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatRippleModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { DatePickerComponent } from './date-picker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerPipe } from './date-picker.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  imports: [CommonModule, MatRippleModule, MatButtonModule, MatIconModule],
  declarations: [
    DatePickerComponent,
    CalendarComponent,
    DatePickerPipe,
    ToolbarComponent,
    DateDisplayComponent,
    MonthComponent
  ],
  exports: [DatePickerComponent],
  entryComponents: [DatePickerComponent]
})
export class DatePickerModule {}
