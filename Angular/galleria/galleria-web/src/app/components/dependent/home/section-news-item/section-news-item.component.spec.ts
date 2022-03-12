import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNewsItemComponent } from './section-news-item.component';

describe('SectionNewsItemComponent', () => {
  let component: SectionNewsItemComponent;
  let fixture: ComponentFixture<SectionNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
