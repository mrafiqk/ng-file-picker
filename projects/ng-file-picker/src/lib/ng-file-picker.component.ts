import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'ng-file-picker',
  templateUrl: './ng-file-picker.component.html',
  styles: [],
  host : {
      "(change)" : "onChange($event.target.files)",
      "(blur)": "onTouched()"
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: NgFilePickerComponent, multi: true
  }]
})
export class NgFilePickerComponent implements OnInit, ControlValueAccessor {
  @Input() public id: string;
  @Input() public class: string;
  @Input() public name: string;
  @Input() public multiple: boolean;
  @Input() public ngModel: string;
  @Input() public disabled: boolean;
  @Output() ngModelChange: any = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if((this.multiple || "").toString() == 'true') {
      this.multiple = true
    } else {
      this.multiple = undefined;
    }
    if((this.disabled || "").toString() == 'true') {
      this.disabled = true
    } else {
      this.disabled = undefined;
    }
  }

  value: any;
  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value) {}
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}
