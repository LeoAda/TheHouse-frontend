import { Component, input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { Item } from '../../model';
@Component({
  selector: 'item-edit',
  imports: [NzDescriptionsModule,NzInputModule, FormsModule],
  templateUrl: './item-edit.html',
  styleUrl: './item-edit.scss',
})
export class ItemEdit {
  item = input<Item>();
}
