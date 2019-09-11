import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../service/home.service';


@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.css']
})
export class HomeArticleComponent implements OnInit {
  data: {
    headAdvert: any,
    homePage: any,
    homePageTemplateInfo: any
  };
  communityId: any = 3;

  constructor(
    private homeService: HomeService,
  ) { }
  ngOnInit() {
    this.getHomeData();
  }
  getHomeData(): void {
    // tslint:disable-next-line: prefer-const
    let that = this;
    that.homeService.getHomeData(that.communityId)
    // tslint:disable-next-line: only-arrow-functions
    .subscribe(function(res: any) {
      that.data = res.data;
      return that.data;
    });
  }
}
