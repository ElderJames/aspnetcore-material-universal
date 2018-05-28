import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorMdComponent as md, EditorConfig } from '../../component'


@Component({
    selector: 'app-editor-md',
    templateUrl: './editor-md.component.html',
    styleUrls: ['./editor-md.component.scss'],
})
export class EditorMdComponent implements OnInit {

    @ViewChild(md) editor: md;

    model_text: string = '## Hello World!';

    constructor() {

    }

    ngOnInit() {

    }

    contentChange($event) {
        console.log('contentChange：', $event);
    }

    editorReady($event) {
        console.log('ready：', $event);
    }

    setHeight(height: number): void {

    }

    setContent(): void {
        this.model_text = '# Bigger than bigger';
    }
}