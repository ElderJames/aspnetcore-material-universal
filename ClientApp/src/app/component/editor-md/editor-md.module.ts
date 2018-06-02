import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditorMdComponent } from './editor-md.component';

@NgModule({
    declarations: [
        EditorMdComponent
    ],
    imports: [FormsModule],
    exports: [EditorMdComponent]
})
export class EditorMdModule { }
