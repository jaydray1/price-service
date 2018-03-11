import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceServiceInterfaceComponent } from './price-service-interface.component';

describe('PriceServiceInterfaceComponent', () => {
  let component: PriceServiceInterfaceComponent;
  let fixture: ComponentFixture<PriceServiceInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceServiceInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceServiceInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
