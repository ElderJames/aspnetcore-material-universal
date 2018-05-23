/**
 * @license
 * Copyright Shriek All Rights Reserved.
 */

import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { Upload } from './file-upload.model';

@Directive({
  selector: '[shriekFileDrop], [stbFileDrop]'
})
export class FileUploadDropDirective {
  @Output() dropped = new EventEmitter();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
  }
}

@Directive({
  selector: '[stbFileUpload],[shriekFileUpload]'
})
export class FileUploadDirective {
  public currentUpload: Upload;
  private selectedFiles: FileList;

  @Output() uploader: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('change', ['$event'])
  onChange(event: Event) {
    this.detectFiles(event);
    this.uploadSingle();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: Event) {
    this.stopEvent(event);
    this.dataTransfer(event);
    this.uploadSingle();
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {
    this.stopEvent(event);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    this.stopEvent(event);
  }

  constructor(private service: FileUploadService) { }

  stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  dataTransfer(event) {
    this.selectedFiles = event.dataTransfer.files;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    // this.service.startUpload(this.currentUpload);
    this.uploader.emit(this.currentUpload);
  }
}
