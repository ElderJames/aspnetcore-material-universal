import { Component, ViewChild } from '@angular/core';
import { EditorMdComponent as md, EditorConfig } from '../../component'


@Component({
    selector: 'app-editor-md',
    templateUrl: './editor-md.component.html',
    styleUrls: ['./editor-md.component.scss'],
})
export class EditorMdComponent  {

    @ViewChild(md) editor: md;

    markdown: string = '## Hello World!';
    option = new EditorConfig();

    constructor() {

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
        this.markdown = '# Bigger than bigger';
    }
}