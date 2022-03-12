import { Component, OnInit, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  @Input('title') title: string;
  @Input('smTitle') smTitle: string;
  @Input('itemType') itemType: string;



  listCate = [
    {
      url: "https://bizweb.dktcdn.net/thumb/medium/100/430/435/themes/831833/assets/section_category_images1.jpg?1645199285789",
      text: "Giày da nam"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/section_category_images2.jpg?1645199285789",
      text: "Ví da nam"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/section_category_images3.jpg?1645199285789",
      text: "Thắt lưng"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/section_category_images4.jpg?1645199285789",
      text: "Túi xách"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/section_category_images5.jpg?1645199285789",
      text: "Găng tay"
    },
    {
      url: "https://bizweb.dktcdn.net/100/430/435/themes/831833/assets/section_category_images6.jpg?1645199285789",
      text: "Dây da đồng hồ"
    }
  ];

  listProduct = [
    {
      url: "https://bizweb.dktcdn.net/thumb/large/100/430/435/products/staad-14-2000x.jpg?v=1628564369000",
      text: "Túi đựng laptop BackPack",
      price: 400000,
      discount: 0,
      special: true
    },
    {
      url: "https://bizweb.dktcdn.net/thumb/large/100/430/435/products/that-lung-quan-jean-cao-cap-dj625-cf-2.jpg?v=1629269200000",
      text: "Thắt lưng quần jean mặt khóa xỏ kim DJ625-CF",
      price: 400000,
      discount: 44,
      special: true
    },
    {
      url: "https://bizweb.dktcdn.net/thumb/large/100/430/435/products/vntan-31n-compressed.jpg?v=1629269388000",
      text: "Ví nam dáng cổ điển VNTAN-31N",
      price: 430000,
      discount: 0,
      special: true
    },
    {
      url: "https://bizweb.dktcdn.net/thumb/large/100/430/435/products/giay-tay-nam-buoc-day-van-da-gnta2695-n-5.jpg?v=1629269613000",
      text: "Giày tây nam buộc dây vân da GNTA2695-N",
      price: 900000,
      discount: 44,
      special: true
    },
    {
      url: "https://bizweb.dktcdn.net/thumb/large/100/430/435/products/that-lung-quan-jean-tam-anh-dj613-d.jpg?v=1629269283000",
      text: "Thắt lưng quần jean may 2 đường chỉ DJ613-D",
      price: 400000,
      discount: 0,
      special: true
    },
    {
      url: "https://bizweb.dktcdn.net/thumb/large/100/430/435/products/vntad5082-x-1.jpg?v=1629269460000",
      text: "Ví da bò nam đai ngang da trơn VNTAD5082-X",
      price: 400000,
      discount: 100,
      special: true
    },
    
    
  ]
  
  listSection:any = [];

  constructor() {
    this.title = '';
    this.smTitle ='';
    this.itemType = '';
  }

  // roundSizeItem = 234;
  // squareSizeItem = 250;

  sizeImageClass = "desktop-size";
  valueCountPx = 234;
  counter = 0;
  amount = 5;



  ngOnInit(): void {
    if(this.itemType == 'square'){
      this.amount = 4;
      this.valueCountPx = 250 + 50 + 12;
      this.listSection = this.listProduct;
    }
    else if(this.itemType == 'round'){
      this.amount = 5;
      this.listSection = this.listCate;
    }
    else {
      this.amount = 5;
      this.listSection = this.listCate;
    }
  }


  

  

  public onResize(event:any) {
    console.log(event.target.innerWidth)
    var screenSize = event.target.innerWidth;
    if(this.itemType != 'square') {
      if(screenSize <= 640){
        this.amount = 2;
        this.sizeImageClass = 'mobile-size';
      }
      else if(screenSize >= 768 && screenSize < 1024) {
        this.amount = 3;
        this.sizeImageClass = 'tablet-size';
      }
      else if(screenSize >= 1024){
        this.amount = 5;
        this.sizeImageClass = 'desktop-size';
      }
      else {
        this.valueCountPx = 234;
        this.counter = 0;
        this.amount = 5;
      }
    }
  }
  
  public onChangeSize() {
    return {
      'mobile-size': this.sizeImageClass == 'mobile-size',
      'tablet-size': this.sizeImageClass == 'tablet-size',
      'desktop-size': this.sizeImageClass == 'desktop-size'

    }
  }

  public onPrev(el:any) {
    this.counter++;
    if(this.counter > this.listCate.length - this.amount) 
      this.counter = 0;
    let lengthMove = -this.valueCountPx * this.counter;
    el.style.transform = `translateX(${lengthMove}px)`;
    el.style.transition = "0.4s";
    console.log(lengthMove)
  }

  public onNext(el:any) {
    this.counter++;
    if(this.counter > this.listCate.length - this.amount) {
      this.counter = 0;
    }
    el.style.transition = "0.4s";
    let lengthMove = -this.valueCountPx * this.counter;
    el.style.transform = `translateX(${lengthMove}px)`;
  }

  public setInnerStyle() {
    let innerLength = this.valueCountPx * this.amount;
    let style = {
      'max-width': `${innerLength}px`
    }
    return style;
  }

}
