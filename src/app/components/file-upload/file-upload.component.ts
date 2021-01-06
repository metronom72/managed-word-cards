import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public file: File | null = null;

  public constructor() { }

  @Output() public selectFile: EventEmitter<any> = new EventEmitter<any>();
  @Output() public removeFile: EventEmitter<any> = new EventEmitter<any>();

  public ngOnInit(): void { }

  public onSelect = (file) => {
    this.file = file.addedFiles[0];
    this.selectFile.emit(file.addedFiles[0]);
  };

  public onRemove = (event) => {
    this.file = null;
    this.removeFile.emit(event);
  };
}
