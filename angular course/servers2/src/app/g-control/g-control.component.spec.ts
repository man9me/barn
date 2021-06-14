import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GControlComponent } from './g-control.component';

describe('GControlComponent', () => {
  let component: GControlComponent;
  let fixture: ComponentFixture<GControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
