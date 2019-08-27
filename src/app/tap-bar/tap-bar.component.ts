import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tap-bar',
  templateUrl: './tap-bar.component.html',
  styleUrls: ['./tap-bar.component.css']
})
export class TapBarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
}
