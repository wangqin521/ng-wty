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
import { SelectAddressComponent } from './select-address/select-address.component';
import { ChildHeadComponent } from './child-head/child-head.component';


@NgModule({
  // （可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。
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
    SelectAddressComponent,
    ChildHeadComponent,
  ],
  // exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。
  exports: [],
  // imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  // providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供商，这通常是首选方式。）
  providers: [],
  // bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
  bootstrap: [AppComponent]
})
export class AppModule {

}

