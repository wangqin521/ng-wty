import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-head',
  templateUrl: './child-head.component.html',
  styleUrls: ['./child-head.component.css']
})
export class ChildHeadComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
