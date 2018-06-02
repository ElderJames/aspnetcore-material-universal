/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule, MatCheckboxModule, MatSortModule } from '@angular/material';

import { MaterailTableComponent } from './material-table.component';

@NgModule({
    imports: [CommonModule, MatPaginatorModule, MatTableModule, MatCheckboxModule, MatSortModule],
    declarations: [
        MaterailTableComponent
    ],
    exports: [MaterailTableComponent],
    entryComponents: [MaterailTableComponent]
})
export class MaterailTableModule { }
