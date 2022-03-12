import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-news',
  templateUrl: './section-news.component.html',
  styleUrls: ['./section-news.component.scss']
})
export class SectionNewsComponent implements OnInit {

  listFeedBack = [
    {
      title: "LÝ DO MÀ BẠN CẦN PHẢI MUA BAO DA CHÌA KHÓA Ô TÔ NGAY LẬP TỨC",
      detail: "Chắc hẳn có rất nhiều người vẫn chưa nhận ra được sự quan trọng của chiếc bao da chìa khóa ô t...",
      time: "18/08/2021",
      srcImg: "https://bizweb.dktcdn.net/100/430/435/articles/bao-da-chia-khoa-o-to-9346bd053a9f46c09e1c13a597b2603f-grande.jpg?v=1629254332703"
    },
    {
      title: "Lý do nên chọn mua balo da bò để sử dụng",
      detail: "Balo là phụ kiện không thể thiếu trong tủ đồ của các chị em và cả cánh mày râu nữa. Tuy được làm...",
      time: "18/08/2021",
      srcImg: "https://bizweb.dktcdn.net/100/430/435/articles/balo-da-bo-sap-dang-doc-6c33f6496a2f432ba2ec24401744274a-grande.jpg?v=1629254170963"
    },
    {
      title: "LÝ DO MÀ BẠN CẦN PHẢI MUA BAO DA CHÌA KHÓA Ô TÔ NGAY LẬP TỨC",
      detail: "Chiếc balo đi làm là thứ mà dân công sở sẽ phải mang theo bên mình gần như mỗi ngày, nhất là...",
      time: "18/08/2021",
      srcImg: "https://bizweb.dktcdn.net/100/430/435/articles/3744eca3c35ed49e977d7cd46d1f88a5.jpg?v=1629254063000"
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }



}
