import {Component, Input, OnInit} from '@angular/core';
import { Word } from '../../core/word';
import { v4 as uuid } from 'uuid';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-managed-table',
  templateUrl: './managed-table.component.html',
  styleUrls: ['./managed-table.component.scss']
})
export class ManagedTableComponent implements OnInit {
  @Input() words: FormArray = new FormArray([], []);

  constructor() { }

  ngOnInit(): void { }

  removeWord = (id: string) => {
    this.words.setValue(this.words.getRawValue().filter((word) => word.id !== id));
  }

  addWord = () => {
    this.words.push(new FormGroup({
      original: new FormControl('', [Validators.required]),
      target: new FormControl('', [Validators.required]),
      id: new FormControl(uuid(), []),
      index: new FormControl(this.words.length, []),
    }));
  }
}
