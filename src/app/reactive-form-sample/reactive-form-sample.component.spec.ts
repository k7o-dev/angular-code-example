import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSampleComponent } from './reactive-form-sample.component';

describe('ReactiveFormSampleComponent', () => {
  let component: ReactiveFormSampleComponent;
  let fixture: ComponentFixture<ReactiveFormSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
