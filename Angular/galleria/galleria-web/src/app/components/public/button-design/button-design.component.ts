import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-design',
  templateUrl: './button-design.component.html',
  styleUrls: ['./button-design.component.scss']
})
export class ButtonDesignComponent implements OnInit {

  @Input('color') color: string = '';
  @Input('bg') bg: string = '';
  @Input('borderStr') border: string = '';
  @Input('text') text: string = 'Mua ngay';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
