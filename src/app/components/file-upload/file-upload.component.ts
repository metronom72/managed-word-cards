import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public file: File | null = null;

  constructor() { }

  ngOnInit(): void { }

  onSelect = (event) => {
    console.log(event);
  }

  onRemove = (event) => {
    console.log(event);
  }

}
