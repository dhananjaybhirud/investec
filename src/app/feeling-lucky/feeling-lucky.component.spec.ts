import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingLuckyComponent } from './feeling-lucky.component';

describe('FeelingLuckyComponent', () => {
  let component: FeelingLuckyComponent;
  let fixture: ComponentFixture<FeelingLuckyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingLuckyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingLuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
