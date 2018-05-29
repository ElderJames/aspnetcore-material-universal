import { Component, ViewChild } from '@angular/core';
import { EditorMdComponent as md, EditorConfig } from '../../component'


@Component({
    selector: 'app-editor-md',
    templateUrl: './editor-md.component.html',
    styleUrls: ['./editor-md.component.scss'],
})
export class EditorMdComponent {

    @ViewChild(md) editor: md;

    markdown: string = '## Hello World!';
    option = new EditorConfig();
    html: string;

    constructor() {
        this.option.height = 528;
    }

    contentChange($event) {
        console.log('contentChange：', $event);
        this.html = this.editor.getHTML();
    }

    editorReady($event) {
        console.log('ready：', $event);
        this.html = this.editor.getHTML();
    }

    setContent(): void {
        this.markdown = '# Bigger than bigger';
    }
}