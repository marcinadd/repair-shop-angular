import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddRepairableComponent} from './add-repairable.component';

describe('AddRepairableComponent', () => {
  let component: AddRepairableComponent;
  let fixture: ComponentFixture<AddRepairableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRepairableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepairableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
