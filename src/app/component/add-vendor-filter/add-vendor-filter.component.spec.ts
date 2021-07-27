import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorFilterComponent } from './add-vendor-filter.component';

describe('AddVendorFilterComponent', () => {
  let component: AddVendorFilterComponent;
  let fixture: ComponentFixture<AddVendorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
