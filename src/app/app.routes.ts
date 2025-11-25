import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cart } from './components/cart/cart';
import { AppProductList } from './components/product-list/product-list';
import { AboutUs } from './components/about-us/about-us';
import { DetailPage } from './components/detail-page/detail-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cart',
    component: Cart,
  },

  {
    path: 'products',
    component: AppProductList,
  },
  {
    path: 'aboutUs',
    component: AboutUs,
  },
  {
    path: 'detailPage/:id',
    component: DetailPage,
  },
];
