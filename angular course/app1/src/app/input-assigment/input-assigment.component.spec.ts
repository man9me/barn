import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAssigmentComponent } from './input-assigment.component';

describe('InputAssigmentComponent', () => {
  let component: InputAssigmentComponent;
  let fixture: ComponentFixture<InputAssigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAssigmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
