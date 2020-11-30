import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailsHomeComponent } from './currency-details-home.component';

describe('CurrencyDetailsHomeComponent', () => {
  let component: CurrencyDetailsHomeComponent;
  let fixture: ComponentFixture<CurrencyDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDetailsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
