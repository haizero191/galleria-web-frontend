import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRegisInfoComponent } from './section-regis-info.component';

describe('SectionRegisInfoComponent', () => {
  let component: SectionRegisInfoComponent;
  let fixture: ComponentFixture<SectionRegisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRegisInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRegisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
