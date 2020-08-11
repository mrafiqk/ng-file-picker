# Ng File Picker  
This is a configurable file picker build for Angular applications.  
Supports (Angular 2+) versions.

## Installation:  
1. Download from npm:  
`npm install ng-file-picker --save`
2. Import the `NgFilePickerModule` module:    
 `import { NgFilePickerModule } from 'ng-file-picker';`
 3. Add `NgFilePickerModule` to your module imports:    

## Usage  
Put the `ng-file-picker` component wherever you need it.  


### Attributes (Input):   
| Name                 | Type                                | Default            | Description                                                                                                                                                                                                                                        |  
|----------------------|:-----------------------------------:|:------------------:|:-------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| id                 | `String` | `undefined`                       | Uniq identifier of your input filed.                                                                                                                                                                                     |  
| name				| `String`	| `undefined`	| Uniq name of your input
| multiple			| `Boolean`	| `false`		| If true, the file picker allows to upload multiple files	else it alows only one file at a time.
| disabled		| `Boolean`	| `false`		| Tracks whether the control is disabled
| formControlName	| `String`	| `undefined`	| Form control name of your field which is specified in the FormGroup.
| ngModel			| `Variable`	| `undefined`	| Tracks the value bound to this directive.

### Methods (Output):

   | Name	| Description                                                                                                                                                                                                                                        |  
|-----------------------|:-----------------------------------:|  
| change				| Event bound to classical input change event
| ngModelChange			| Event emitter for producing the `ngModelChange` event after the view model update


### API:   
Container component:  
```ts
import {Component, ViewChild} from '@angular/core';  

@Component({  
selector: 'my-container',  
template: `  
<ng-file-picker id="test" name="file" [(ngModel)]="file" (ngModelChange)="getFile($event)" multiple="false"></ng-file-picker>  
`  
});
export class MyContainerComponent implements OnInit {
  file: any;

  getFile(event: any) {
    console.log("event", event, this.file);
    ....
  }
}
```
Container Module:
```ts
import { NgFilePickerModule } from 'ng-file-picker';
import { MyContainerComponent } from './my-container.component';

@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    ...,
    NgFilePickerModule
  ]
})

export class MyContainerModule { }
```
