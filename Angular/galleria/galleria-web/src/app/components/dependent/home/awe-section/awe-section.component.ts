import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awe-section',
  templateUrl: './awe-section.component.html',
  styleUrls: ['./awe-section.component.scss']
})
export class AweSectionComponent implements OnInit {

  arrImages = [
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/slider_1.png?1645199285789",
      title: "hãy biến nó của riêng bạn",
      smText: "Dù nhu cầu ngân sách của bạn là gì, chúng tôi có một chiếc túi đẹp cho bạn"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/slider_2.png?1645199285789",
      title: "phù hợp với nhiều lứa tuổi",
      smText: "Sứ giả da nguyên tấm của chúng tôi bền, đẹp"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/slider_3.png?1645199285789",
      title: "sẵn sàng cho du lịch",
      smText: "Ba lô của chúng tôi sẽ thoải mái và an toàn chứa tất cả các thiết bị của bạn"
    }
  ]

  currentImage = this.arrImages[0];

  constructor() { }

  ngOnInit(): void {
  }

  public mouseEnter(el:any) {
    let currentImg = el.getAttribute('data-current');
    this.currentImage = this.arrImages[currentImg]
  }

}
