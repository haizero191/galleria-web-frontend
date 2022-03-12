import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AweSectionComponent } from './awe-section.component';

describe('AweSectionComponent', () => {
  let component: AweSectionComponent;
  let fixture: ComponentFixture<AweSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AweSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AweSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
