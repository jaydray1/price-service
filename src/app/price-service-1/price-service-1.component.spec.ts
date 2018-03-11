import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceService1Component } from './price-service-1.component';

describe('PriceService1Component', () => {
  let component: PriceService1Component;
  let fixture: ComponentFixture<PriceService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
