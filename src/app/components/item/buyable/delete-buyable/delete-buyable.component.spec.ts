import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteBuyableComponent} from './delete-buyable.component';

describe('DeleteBuyableComponent', () => {
  let component: DeleteBuyableComponent;
  let fixture: ComponentFixture<DeleteBuyableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBuyableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBuyableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
