import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsVehicleFormComponent } from './parts-vehicle-form.component';

describe('PartsVehicleFormComponent', () => {
  let component: PartsVehicleFormComponent;
  let fixture: ComponentFixture<PartsVehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsVehicleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
