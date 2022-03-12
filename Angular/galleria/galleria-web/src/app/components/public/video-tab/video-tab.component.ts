import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-tab',
  templateUrl: './video-tab.component.html',
  styleUrls: ['./video-tab.component.scss']
})
export class VideoTabComponent implements OnInit {
  @Input('status') status:boolean = true;
  @Output() childClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  


  constructor() {
  }

  ngOnInit(): void {
    
   
  }



  closeVideo() {
      console.log(this.childClicked)
      this.childClicked.emit(false);
  }

  
 

}
 