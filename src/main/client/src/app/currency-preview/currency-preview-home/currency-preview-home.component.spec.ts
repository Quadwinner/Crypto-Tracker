import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPreviewHomeComponent } from './currency-preview-home.component';

describe('CurrencyPreviewHomeComponent', () => {
  let component: CurrencyPreviewHomeComponent;
  let fixture: ComponentFixture<CurrencyPreviewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPreviewHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPreviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
