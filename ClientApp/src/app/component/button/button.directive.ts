import { Directive } from '@angular/core';

@Directive({
  selector: 'button[shriek-button-large],button[stb-button-large],a[shriek-button-large],a[stb-button-large]',
  host: {'class': 'shriek-button-lg'}
})

export class ButtonDirective {
  constructor() {
  }
}
