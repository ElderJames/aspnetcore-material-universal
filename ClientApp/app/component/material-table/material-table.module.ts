/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

import { MaterailTableComponent } from './material-table.component';

@NgModule({
    imports: [CommonModule, MatPaginatorModule, MatTableModule],
    declarations: [
        MaterailTableComponent
    ],
    exports: [MaterailTableComponent],
    entryComponents: [MaterailTableComponent]
})
export class MaterailTableModule { }
