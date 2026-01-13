import { Component, inject, OnInit, signal } from '@angular/core';
import { Item, ItemsApi } from '../items-api/items-api';

@Component({
  selector: 'app-items',
  imports: [],
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
