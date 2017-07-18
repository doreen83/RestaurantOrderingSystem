import { Injectable } from '@angular/core'
import { IMenuItem } from './menuitem.model'

@Injectable()

export class MenuService {
    getMenuItems():IMenuItem[] {
        return MENU_ITEMS
    }
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
