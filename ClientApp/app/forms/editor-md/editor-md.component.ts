import { Component, ViewChild } from '@angular/core';
import { EditorMdComponent as md } from '../../component'


@Component({
    selector: 'app-editor-md',
    templateUrl: './editor-md.component.html',
    styleUrls: ['./editor-md.component.scss'],
})
export class EditorMdComponent {

    @ViewChild(md) editor: md;

    model_text: string = '<span style="color: red;">测试文本！</span>';

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
        this.model_text = '<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2 (已修改)</a></p>';
    }
}