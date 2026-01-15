import { Component, input } from '@angular/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { Item } from '../../model';
@Component({
  selector: 'app-item-display',
  imports: [NzDescriptionsModule],
  templateUrl: './item-display.html',
  styleUrl: './item-display.scss',
})
export class ItemDisplay {
  item = input<Item>();
}
