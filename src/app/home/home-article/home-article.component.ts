import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../service/home.service';


@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.css']
})
export class HomeArticleComponent implements OnInit {
  data;
  communityId: any = 4;
  constructor(
    private homeService: HomeService,
  ) { }
  ngOnInit() {
    this.homeService.getBillTypes(this.communityId).subscribe(function(res) {
      this.data = res;
      console.log(this.data);
  });
  }
}
