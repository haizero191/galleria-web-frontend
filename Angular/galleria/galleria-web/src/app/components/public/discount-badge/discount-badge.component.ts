import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-badge',
  templateUrl: './discount-badge.component.html',
  styleUrls: ['./discount-badge.component.scss']
})
export class DiscountBadgeComponent implements OnInit {

  @Input('discount') discount: string;

  constructor() {
    this.discount = '';
  }

  ngOnInit(): void {
  }

}
