import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-feedback-item',
  templateUrl: './section-feedback-item.component.html',
  styleUrls: ['./section-feedback-item.component.scss']
})
export class SectionFeedbackItemComponent implements OnInit {

  @Input('feedback') feedback: string = '';
  @Input('urlImage') urlImage: string = '';
  @Input('name') name: string = '';

  
  constructor() { }

  ngOnInit(): void {
  }

}
