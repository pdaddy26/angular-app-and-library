import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLibraryComponent } from './mobile-library.component';

describe('MobileLibraryComponent', () => {
  let component: MobileLibraryComponent;
  let fixture: ComponentFixture<MobileLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
