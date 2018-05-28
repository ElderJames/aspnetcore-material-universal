import { AfterViewInit, Attribute, Directive, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { EditorConfig } from './editor-md.config';

declare var editormd: any;

import * as $ from 'jquery'

import * as factory from '../../../assets/editor.md/editormd.js';



@Directive({
    selector: '[appEditorMd]',
})
export class EditorMdDirective implements AfterViewInit, OnInit {

    @Input() editormdConfig: EditorConfig; // 配置选项
    @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>(); // 发射器
    editor: any; // editormd编辑器


    constructor(@Attribute('id') private id: string) {
        window['jQuery'] = $;
        window['$'] = $;
    }

    ngOnInit(): void {
        let editormd = factory();
        if (!this.editormdConfig)
            this.editormdConfig = new EditorConfig();

        this.editor = editormd(this.id, this.editormdConfig); // 创建编辑器

        const out = this.onEditorChange;
        const textarea = $('#' + this.id + ' :first'); // 获取textarea元素

        // 当编辑器内容改变时，触发textarea的change事件
        this.editor.on('change', function () {
            out.emit(textarea.val());
        });
    }

    ngAfterViewInit(): void {

    }
}
