import { Routes } from '@angular/router';
import { Items } from './items';
import { ItemDetail } from './item-detail/item-detail';

export const ITEMS_ROUTES: Routes = [
  { path: '', component: Items },
  { path: ':id', component: ItemDetail },
];
