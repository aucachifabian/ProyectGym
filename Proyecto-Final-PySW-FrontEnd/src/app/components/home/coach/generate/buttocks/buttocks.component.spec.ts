import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtocksComponent } from './buttocks.component';

describe('ButtocksComponent', () => {
  let component: ButtocksComponent;
  let fixture: ComponentFixture<ButtocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
