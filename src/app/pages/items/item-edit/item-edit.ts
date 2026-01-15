import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemEdit } from '../../../components/item-edit/item-edit';
import { ItemsApi } from '../../../services/items-api/items-api';
import { Item } from '../../../model';
@Component({
  selector: 'pages-item-edit',
  imports: [ItemEdit],
  templateUrl: './item-edit.html',
  styleUrl: './item-edit.scss',
})
export class PagesItemEdit {
  private route = inject(ActivatedRoute);
  private itemsApi = inject(ItemsApi);
  
  protected item = signal<Item | undefined>(undefined);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.itemsApi.getItem(id).subscribe((data) => {
        this.item.set(data);
      });
    }
  }
}
