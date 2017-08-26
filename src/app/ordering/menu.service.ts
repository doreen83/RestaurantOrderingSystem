import { Injectable } from '@angular/core'
import { IMenuItem } from './menuitem.model'
import { IMenuCategory } from './menucategory.model'
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class MenuService {
    constructor(private http: Http) {
        
    }
    getMenuItems():Observable<IMenuItem[]> {
        //    return MENU_ITEMS
        console.log('getting menu items')
        let menuItems = this.http.get('http://localhost:5000/menuItem', {headers: this.getHeaders()}).map(mapMenuItems)
        console.log('got menu items: ' + menuItems)
        return menuItems
    }
    
    getMenuCategories():Observable<IMenuCategory[]> {
        console.log('getting menu categories')
        let menuCategories = this.http.get('http://localhost:5000/menuCategory', {headers: this.getHeaders()}).map(mapMenuCategories)
        return menuCategories
    }
    
    private getHeaders() {
        let headers = new Headers()
        headers.append('Accept', 'application/json')
        return headers
    }
}

function mapMenuItems(response:Response): IMenuItem[]{
    console.log('response: ' + response.json().results);
    return response.json().map(toMenuItem)
}

function mapMenuCategories(response:Response): IMenuCategory[] {
    console.log('response: ' + response.json().results);
    return response.json().map(toMenuCategory); 
}

function toMenuCategory(r:any): IMenuCategory{
    let menuCategory = <IMenuCategory>({
        name: r.name,
        description: r.description,
        options: r.options,
        prices: r.prices
    });
    console.log('Parsed menu category: ', menuCategory);
    return menuCategory;
}

function toMenuItem(r:any): IMenuItem{
  let menuItem = <IMenuItem>({
    //id: extractId(r),
    name: r.name,
    prices: r.prices,
    description: r.description,
    category: r.category
  });
  console.log('Parsed menu item: ', menuItem);
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
