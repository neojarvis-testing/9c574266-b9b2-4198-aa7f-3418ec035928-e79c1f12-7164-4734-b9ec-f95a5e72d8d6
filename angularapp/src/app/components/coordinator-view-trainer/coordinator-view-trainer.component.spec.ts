import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorViewTrainerComponent } from './coordinator-view-trainer.component';

describe('CoordinatorViewTrainerComponent', () => {
  let component: CoordinatorViewTrainerComponent;
  let fixture: ComponentFixture<CoordinatorViewTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorViewTrainerComponent]
    });
    fixture = TestBed.createComponent(CoordinatorViewTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
