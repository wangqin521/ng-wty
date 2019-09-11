import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {
  title: string;
  constructor() { }
  ngOnInit() {
    this.title = '收货地址管理';
  }
}
