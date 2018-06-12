/**
 * @license
 * Copyright shriek All Rights Reserved.
 */

import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Injector
} from '@angular/core';

@Component({
  selector: 'shriek-base-layout, shriek-base-layout-container',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'layout-container',
    '[class.layout-strategy]': 'scrollStrategy === "strategy"'
  }
})
export class BaseLayoutComponent implements OnInit {
  @Input() scrollStrategy;
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'shriek-base-layout-header',
  template: '<ng-content></ng-content>',
  host: {
    class: 'base-layout-header'
  }
})
export class BaseLayoutHeaderComponent implements OnInit {
  constructor(private injector: Injector) {
    injector.get(BaseLayoutComponent);
  }

  ngOnInit() { }
}

@Component({
  selector: 'shriek-base-layout-toolbar',
  template: '<ng-content></ng-content>',
  host: {
    class: 'base-layout-toolbar'
  }
})
export class BaseLayoutToolbarComponent implements OnInit {
  constructor(private injector: Injector) {
    injector.get(BaseLayoutComponent);
  }

  ngOnInit() { }
}

@Component({
  selector: 'shriek-base-layout-content',
  template: '<ng-content></ng-content>',
  host: {
    class: 'base-layout-content'
  }
})
export class BaseLayoutContentComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
