import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeedbackComponent } from './section-feedback.component';

describe('SectionFeedbackComponent', () => {
  let component: SectionFeedbackComponent;
  let fixture: ComponentFixture<SectionFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
