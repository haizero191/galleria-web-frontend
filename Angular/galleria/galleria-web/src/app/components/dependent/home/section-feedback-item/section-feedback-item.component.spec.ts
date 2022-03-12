import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeedbackItemComponent } from './section-feedback-item.component';

describe('SectionFeedbackItemComponent', () => {
  let component: SectionFeedbackItemComponent;
  let fixture: ComponentFixture<SectionFeedbackItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFeedbackItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeedbackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
