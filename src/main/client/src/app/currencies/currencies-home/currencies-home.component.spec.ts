import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesHomeComponent } from './currencies-home.component';

describe('CurrenciesHomeComponent', () => {
  let component: CurrenciesHomeComponent;
  let fixture: ComponentFixture<CurrenciesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});