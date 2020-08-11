import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ng-file-picker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  file: any;
  form: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      file: ['']
    })
  }

  submit() {
    console.log("form", this.form)
  }

  getFile(event: any) {
    console.log("event", this.file);
  }
}
