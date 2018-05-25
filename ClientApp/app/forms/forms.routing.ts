import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { UeditorComponent } from './ueditor/ueditor.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },
  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'ueditor',
    component: UeditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
