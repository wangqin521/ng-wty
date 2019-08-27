import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClassifyComponent } from './classify/classify.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'classify', component: ClassifyComponent },
  { path: 'list', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'me', component: MeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
