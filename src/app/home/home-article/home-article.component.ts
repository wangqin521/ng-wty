import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../service/home.service';


@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.css']
})
export class HomeArticleComponent implements OnInit {
  data: any;
  headAdvert: any;
  homePage: any;
  homePageTemplateInfo: any;
  communityId: any = 4;
  constructor(
    private homeService: HomeService,
  ) { }
  ngOnInit() {
    console.log(2);
    this.data = this.getHomeData();
    console.log(this.data);
  }
  getHomeData(): void {
    this.homeService.getHomeData(this.communityId).subscribe(function(res: any) {
      console.log(res);
      return this.data = res.data;
    });
  }
}
