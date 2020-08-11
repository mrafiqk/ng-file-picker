import { NgModule } from '@angular/core';
import { NgFilePickerComponent } from './ng-file-picker.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NgFilePickerComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgFilePickerComponent]
})
export class NgFilePickerModule { }
