import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterContentChecked} from '@angular/core';
declare var  AMap: any;
@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {
  isShorten: boolean;
  isHide: boolean;
  @ViewChild('cancel', {static: true}) cancel: any;

  constructor() { }
  ngOnInit(): void {
    this.isShorten = false;
    this.isHide = true;
    this.getMap ();
  }

  // 地图要放到函数里。
  getMap() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 14,
      scrollWheel: true, // 禁止鼠标滚轮缩放
      center: [118.797500, 32.088500]
    });

  }

  search(e: any) {
    console.log(e);
  }
  onFocus(e: any) {
    this.isShorten = true;
    this.isHide = false;
  }
  getCancel() {
    this.isShorten = false;
    this.isHide = true;
  }
}
