import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../../model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ItemsApi {
  private http = inject(HttpClient);
  readonly url = `${environment.backendUrl}/api/items`;
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }

  createItem(id: string, item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.url}/${id}`, item);
  }

  updateItem(id: string, item: Item): Observable<Item> {
    return this.http.patch<Item>(`${this.url}/${id}`, item);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
