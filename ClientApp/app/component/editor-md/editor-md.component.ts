import { Component, OnInit, OnDestroy, ElementRef, Input, Output, ViewEncapsulation, EventEmitter, forwardRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { EditorConfig } from './editor-md.config';
import * as _ from 'lodash';

import * as $ from 'jquery'
import * as factory from '../../../assets/editor.md/editormd.js';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class EditorMdComponent implements ControlValueAccessor, OnInit, OnDestroy {

    @Input() config: EditorConfig; // 配置选项

    editor: any; // editormd编辑器
    isBowser: boolean;
    elementRef: ElementRef;
    defaultConfig = {

    }

    id: string;
    editor_text: string;
    isReady: boolean;
    editorChange: any = (_: any) => { };

    constructor(elementRef: ElementRef, render: Renderer2) {

        this.isBowser = isPlatformBrowser ? true : false;

        if (!this.isBowser)
            return;

        window['jQuery'] = $;
        window['$'] = $;

        this.elementRef = elementRef;
        render.listen(this.elementRef.nativeElement, 'click', () => { }); // 当数据变化时通过调用click事件触发数据检测，保证视图已更新

        this.id = 'editor-md-' + new Date().getUTCMilliseconds();
        this.elementRef.nativeElement.id = this.id;
        this.elementRef.nativeElement.style = "display: block;";
    }

    ngOnInit() {

        if (!this.isBowser)
            return;

        var editormd = factory();
        window['editormd'] = editormd;

        $(document).ready(() => {

            let con: any = _.merge({}, this.defaultConfig, this.config);
            this.editor = editormd(this.id, con); // 创建编辑器

            // 当编辑器内容改变时，触发textarea的change事件
            this.editor.on('change', (editor: any) => {
                this.viewAndModelChange();
                this.contentChange.emit(this.editor_text);
            });

            this.editor.on('load', (editor: any) => {
                this.isReady = true;
                this.setContent(this.editor_text);
                this.ready.emit(this);
            })
        });
    }

    ngOnDestroy(): void {
        if (!this.isBowser || !this.isReady)
            return;

        this.editor && this.editor.editor.remove();
        this.editor = null;
        this.destroy.emit(this);
        this.isReady = false;
    }

    @Input()
    set option(config: any) {
        this.config = config;
    }

    get option(): any {
        return this.config;
    }

    get text() {
        return this.editor_text;
    }

    set text(value: string) {
        this.editor_text = value;
        if (this.isReady) {
            this.setContent(value);
        }
    }

    setContent(text: string): void {
        this.editor && this.editor.config('value', text);
    }

    getMarkdown(): any {
        return this.editor && this.editor.getMarkdown();
    }

    getHTML(): any {
        return this.editor && this.editor.getHTML();
    }

    /**
     * 更新视图和模型及有关值
     */
    viewAndModelChange(): void {
        this.editor_text = this.getMarkdown();
        this.editorChange(this.editor_text); // 更新ngModel
        this.elementRef.nativeElement.click(); // 触发数据检测，保证视图已更新
    }

    // 以下实现ControlValueAccessor接口的方法
    writeValue(value: string): void {
        if (value) {
            this.text = value;
        }
    }

    registerOnChange(fn: any): void {
        this.editorChange = fn;
    }

    registerOnTouched(fn: any): void {

    }

    // 编辑器准备就绪后会触发该事件
    @Output()
    ready: EventEmitter<any> = new EventEmitter<any>(false);

    // 执行destroy方法,会触发该事件
    @Output()
    destroy: EventEmitter<any> = new EventEmitter<any>(false);

    @Output()
    contentChange: EventEmitter<string> = new EventEmitter<string>();
}
