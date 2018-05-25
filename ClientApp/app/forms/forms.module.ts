import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { FormsRoutingModule } from './forms.routing';
import { FormsComponent } from './forms.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { UeditorComponent } from './ueditor/ueditor.component';

import { UEditorModule } from '../component';

@NgModule({
  imports: [SharedModule, FormsRoutingModule, ReactiveFormsModule, UEditorModule],
  declarations: [
    FormsComponent,
    ElementsComponent,
    ValidationComponent,
    UeditorComponent
  ]
})
export class FormModule { }
