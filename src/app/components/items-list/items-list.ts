import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../model';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'items-list',
  imports: [NzListModule, NzIconModule, NzSpaceModule, RouterLink],
  templateUrl: './items-list.html',
  styleUrl: './items-list.scss',
})
export class ItemsList {
  items = input<Item[]>([]);
}
