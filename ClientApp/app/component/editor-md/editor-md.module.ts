import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditorMdComponent } from './editor-md.component';
import { EditorMdDirective } from './editor-md.directive';

@NgModule({
    declarations: [
        EditorMdComponent,
        EditorMdDirective
    ],
    imports: [FormsModule],
    exports: [EditorMdComponent]
})
export class EditorMdModule { }
