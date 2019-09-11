import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { CommonService } from '../service/common.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnChanges, AfterViewInit {
  @Input() headAdvert: any;
  lists: any;
  swiper: Swiper;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const that = this;
    if (changes.headAdvert !== undefined) {
      that.lists = changes.headAdvert.currentValue;
    }
    // tslint:disable-next-line: only-arrow-functions
    that.lists.map(function(item: any) {
      item.url = that.commonService.picNetworkPrefix(item.url);
    });
  }
  ngAfterViewInit() {
    this.swiper = new Swiper ('.swiper-container', {
      initialSlide:  0,
      observer: true,
      observeParents: true,
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
