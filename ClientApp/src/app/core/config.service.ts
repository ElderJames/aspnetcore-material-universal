import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfigService {

  settings: any;
  defaultSettings: any;
  onSettingsChanged: BehaviorSubject<any>;

  constructor() {
    this.defaultSettings = {
      colorClasses: {
        header: 'shriek-background-pink',
        footer: 'shriek-background-pink',
        brand: 'shriek-background-pink',
        navigation: 'shriek-background-dark'
      },
      layout: {
        mode: 'fullwidth',
        navigation: 'left',
        header: 'below',
        footer: 'below'
      }
    };

    this.settings = Object.assign({}, this.defaultSettings);
    this.onSettingsChanged = new BehaviorSubject(this.settings);
  }

  setSettings(setting) {
    this.settings = Object.assign({}, this.settings, setting);
    this.onSettingsChanged.next(this.settings);
  }
}
