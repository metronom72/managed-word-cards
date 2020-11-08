import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  constructor() { }

  public file: File | null = null;

  @Output() selectFile: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFile: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void { }

  onSelect = (file) => {
    this.file = file.addedFiles[0];
    this.selectFile.emit(file.addedFiles[0]);
  }

  onRemove = (event) => {
    this.file = null;
    this.removeFile.emit(event);
  }
}
