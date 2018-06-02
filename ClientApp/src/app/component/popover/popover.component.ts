/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import {
  Component,
  ElementRef,
  ViewChild,
  TemplateRef,
  AfterContentInit
} from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';

@Component({
  moduleId: module.id,
  selector: 'shriek-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  exportAs: 'shriekPopover'
})
export class PopoverComponent implements AfterContentInit {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @ViewChild('focusTrapElement') private _focusTrapElement: ElementRef;

  constructor(private _elementRef: ElementRef) { }

  ngAfterContentInit() { }

  open() { }

  close() { }

  toggle() {
    console.log('toggle');
  }
}
