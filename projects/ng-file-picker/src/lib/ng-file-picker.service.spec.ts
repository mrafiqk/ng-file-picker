import { TestBed } from '@angular/core/testing';

import { NgFilePickerService } from './ng-file-picker.service';

describe('NgFilePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFilePickerService = TestBed.get(NgFilePickerService);
    expect(service).toBeTruthy();
  });
});
