import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissonFormComponent } from './submisson-form.component';

describe('SubmissonFormComponent', () => {
  let component: SubmissonFormComponent;
  let fixture: ComponentFixture<SubmissonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
