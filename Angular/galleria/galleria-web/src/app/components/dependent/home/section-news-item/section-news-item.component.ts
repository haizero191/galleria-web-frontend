import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-news-item',
  templateUrl: './section-news-item.component.html',
  styleUrls: ['./section-news-item.component.scss']
})
export class SectionNewsItemComponent implements OnInit {

  @Input('srcImg') srcImg: string = '';
  @Input('time') time: string = '';
  @Input('title') title: string = '';
  @Input('detail') detail: string = '';
 

  constructor() { }

  ngOnInit(): void {
  }

}
