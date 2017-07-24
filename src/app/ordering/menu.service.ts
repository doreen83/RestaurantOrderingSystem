import { Injectable } from '@angular/core'
import { IMenuItem } from './menuitem.model'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class MenuService {
    constructor(private http: Http) {
        
    }
    getMenuItems():Observable<IMenuItem[]> {
    //    return MENU_ITEMS
    let menuItems$ = this.http.get('URL', {headers: this.getHeaders()})
    .map(mapMenuItems)
    return menuItems$
    }
    
    private getHeaders() {
        let headers = new Headers()
        headers.append('Accept', 'application/json')
        return headers
    }
}

function mapMenuItems(response:Response): IMenuItem[]{
   return response.json().results.map(toMenuItem)
}

function toMenuItem(r:any): IMenuItem{
  let menuItem = <IMenuItem>({
    //id: extractId(r),
    name: r.name
  });
  console.log('Parsed menu item:', menuItem);
  return menuItem;
}
const MENU_ITEMS = [
    {
        id: '1',
        name: 'Nachos',
        desc: 'Some Nachos',
        price: 9.5
    },
    {
        id: '2',
        name: 'Mac and Cheese',
        desc: 'Some mac and cheese',
        price: 10.5
    },
    {
        id: '3',
        name: 'Pizza',
        desc: 'Deep dish pizza',
        price: 20.0
    }
]
