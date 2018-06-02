import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { FormsRoutingModule } from './forms.routing';
import { FormsComponent } from './forms.component';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { UeditorComponent } from './ueditor/ueditor.component';
import { EditorMdComponent } from './editor-md/editor-md.component';

import { UEditorModule, EditorMdModule } from '../component';

@NgModule({
  imports: [SharedModule, FormsRoutingModule, ReactiveFormsModule, UEditorModule, EditorMdModule],
  declarations: [
    FormsComponent,
    ElementsComponent,
    ValidationComponent,
    UeditorComponent,
    EditorMdComponent
  ]
})
export class FormModule { }
