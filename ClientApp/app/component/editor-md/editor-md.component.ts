import { Component, OnInit, OnDestroy, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer2, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { EditorConfig } from './editor-md.config';
import * as _ from 'lodash';
import * as $ from 'jquery';

declare var editormd: any;

import '../../../assets/editor.md/css/editormd.css';
import '../../../assets/editor.md/editormd.min.js';

export const EDITOR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorMdComponent),
    multi: true
};

@Component({
    selector: 'editor-md',
    templateUrl: './editor-md.component.html',
    styleUrls: ['./editor-md.component.scss'],
    providers: [EDITOR_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorMdComponent implements ControlValueAccessor, OnInit, OnDestroy {

    @Input() option: EditorConfig; // 配置选项
    @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();
    editor: any; // editormd编辑器
    isBowser: boolean;
    elementRef: ElementRef;
    text: string;

    constructor(elementRef: ElementRef, render: Renderer2) {

        this.isBowser = isPlatformBrowser ? true : false;

        if (!this.isBowser)
            return;

        this.elementRef = elementRef;
        render.listen(this.elementRef.nativeElement, 'click', () => { }); // 当数据变化时通过调用click事件触发数据检测，保证视图已更新
    }

    ngOnInit() {

        if (!this.isBowser)
            return;

        var id = 'editor-md-' + new Date().getUTCMilliseconds();
        this.elementRef.nativeElement.id = id;

        this.editor = editormd(id, this.option); // 创建编辑器
        const out = this.onEditorChange;
        const textarea = $('#' + id + ' :first'); // 获取textarea元素
        // 当编辑器内容改变时，触发textarea的change事件
        this.editor.on('change', function () {
            out.emit(textarea.val());
        });
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

    // 以下实现ControlValueAccessor接口的方法
    writeValue(value: string): void {
        if (value) {
            this.text = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onEditorChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onEditorChange = fn;
    }
}
