import { Routes } from '@angular/router';
import { Items } from './items';
import { PagesItemDetail } from './item-detail/item-detail';
import { PagesItemEdit } from './item-edit/item-edit';

export const ITEMS_ROUTES: Routes = [
  { path: '', component: Items },
  { path: ':id', component: PagesItemDetail },
  { path: ':id/edit', component: PagesItemEdit }
];
