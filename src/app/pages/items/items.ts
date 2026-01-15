import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemsApi } from '../../services/items-api/items-api';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { Item } from '../../model';
import { ItemsList } from "../../components/items-list/items-list";
@Component({
  selector: 'app-items',
  imports: [NzListModule, NzIconModule, NzSpaceModule, ItemsList],
  templateUrl: './items.html',
  styleUrl: './items.scss',
})
export class Items implements OnInit {
  private itemsApi = inject(ItemsApi);
  protected items = signal<Item[]>([]);

  ngOnInit() {
    this.itemsApi.getItems().subscribe((data) => {
        this.items.set(data);
      }
    );
  }
}
