/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import {
  Component,
  Output,
  Input,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'shriek-calendar-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {
  @Input() displayDates;
  @Output() monthChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  OnPrev() {
    this.monthChange.emit(-1);
  }

  OnNext() {
    this.monthChange.emit(1);
  }
}
