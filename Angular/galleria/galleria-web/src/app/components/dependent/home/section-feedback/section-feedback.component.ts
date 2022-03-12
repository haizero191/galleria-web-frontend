import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-feedback',
  templateUrl: './section-feedback.component.html',
  styleUrls: ['./section-feedback.component.scss']
})
export class SectionFeedbackComponent implements OnInit {

  feedbackList = [
    {
      feedback: "Mình rất thích đưa khách hàng của mình đến đây bởi vì phong cách rất chuyên nghiệp.Hơn nữa thức uống ở đây rất ngon, có hương vị rất khác biệt , các vị khách của mình vô cùng thích.",
      user: {
        url_image: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/sec_khach_hang1.png?1645199285789",
        name: "Nguyễn Thị Lan"
      }
    },
    {
      feedback: "Phong cách Galleria vô cùng khác biệt nhưng lại hợp ý mình.Mình và các bạn của mình mỗi khi gặp mặt thì đều đến đây cả.Mong Galleria luôn cho nhiều đồ ăn mới nhé.",
      user: {
        url_image: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/sec_khach_hang2.png?1645199285789",
        name: "Trịnh Hữu Đức"
      }
    },
    {
      feedback: "Nhân viên tư vấn tận tình, dễ thương. Nhân viên lấy mẫu lại trẻ đẹp, cẩn thận và chu đáo. Nói chung, anh đánh giá dịch vụ tốt. Anh thấy cần phải quảng bá rộng rãi nhiều hơn để có nhiều người biết đến hơn.",
      user: {
        url_image: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/sec_khach_hang3.png?1645199285789",
        name: "Hoàng Liên Sơn"
      }
    },
    {
      feedback: "Mình rất thích đưa khách hàng của mình đến đây bởi vì phong cách rất chuyên nghiệp.Hơn nữa thức uống ở đây rất ngon, có hương vị rất khác biệt , các vị khách của mình vô cùng thích.",
      user: {
        url_image: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/sec_khach_hang4.png?1645199285789",
        name: "Nguyễn Văn Minh"
      }
    },
    {
      feedback: "Nhân viên tư vấn tận tình, dễ thương. Nhân viên lấy mẫu lại trẻ đẹp, cẩn thận và chu đáo. Nói chung, anh đánh giá dịch vụ tốt. Anh thấy cần phải quảng bá rộng rãi nhiều hơn để có nhiều người biết đến hơn.",
      user: {
        url_image: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/sec_khach_hang5.png?1645199285789",
        name: "Trịnh Kim Chi"
      }
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
