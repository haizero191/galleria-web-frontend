import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-section-video',
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss']
})
export class SectionVideoComponent implements OnInit {

  isOpenVideo: boolean = false;
  statusVideo: boolean = false;

  constructor() { }

  

  ngOnInit(): void {
  }
  
 

  handleClikedFromChild(event:boolean) {
    this.isOpenVideo = true;
  }

  onOpenVideo() {
    this.isOpenVideo = !this.isOpenVideo;
    console.log("asdad")
    console.log(this.isOpenVideo)
  }

  

}
