import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoManagerComponent } from './crypto-manager.component';

describe('CryptoManagerComponent', () => {
  let component: CryptoManagerComponent;
  let fixture: ComponentFixture<CryptoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
