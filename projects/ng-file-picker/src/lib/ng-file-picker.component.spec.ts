import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFilePickerComponent } from './ng-file-picker.component';

describe('NgFilePickerComponent', () => {
  let component: NgFilePickerComponent;
  let fixture: ComponentFixture<NgFilePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFilePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFilePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
