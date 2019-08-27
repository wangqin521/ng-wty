import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// 首页
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeArticleComponent } from './home/home-article/home-article.component';

// 分类
import { ClassifyComponent } from './classify/classify.component';
import { ClassifyArticleComponent } from './classify/classify-article/classify-article.component';

// 常够清单
import { ListComponent } from './list/list.component';
import { ListArticleComponent } from './list/list-article/list-article.component';

// 购物车
import { CartComponent } from './cart/cart.component';
import { CartArticleComponent } from './cart/cart-article/cart-article.component';

// 我的
import { MeComponent } from './me/me.component';
import { MeArticleComponent } from './me/me-article/me-article.component';

// 通用子组件
import { TapBarComponent } from './tap-bar/tap-bar.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    TapBarComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeArticleComponent,
    ListArticleComponent,
    CartArticleComponent,
    MeArticleComponent,
    ClassifyComponent,
    ClassifyArticleComponent,
    ListComponent,
    CartComponent,
    MeComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

