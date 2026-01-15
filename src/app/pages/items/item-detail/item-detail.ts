import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDisplay } from '../../../components/item-display/item-display';
import { ItemsApi } from '../../../services/items-api/items-api';
import { Item } from '../../../model';

@Component({
  selector: 'app-item-detail',
  imports: [ItemDisplay],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.scss'
})
export class ItemDetail implements OnInit {
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
