import { TestBed } from '@angular/core/testing';

import { MobileLibraryService } from './mobile-library.service';

describe('MobileLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileLibraryService = TestBed.get(MobileLibraryService);
    expect(service).toBeTruthy();
  });
});
