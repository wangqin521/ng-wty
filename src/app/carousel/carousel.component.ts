import { Component, Input, SimpleChanges, OnChanges} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnChanges {
  constructor() {}
  swiper: Swiper;
  @Input() carousels;
  ngOnChanges(changes: SimpleChanges) {
    console.log(3);
    this.getCarousels((data) => {
      console.log(data);
    });
    this.swiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  getCarousels(back) {
    setTimeout(() => {
      back(this.carousels);
    }, 500);
  }
}
