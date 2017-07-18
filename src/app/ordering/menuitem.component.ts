import { Component, Input } from '@angular/core'
import { ShoppingcartService } from './shoppingcart.service'
import { IMenuItem } from './menuitem.model'

@Component ({
    selector: 'menu-item',
    template: `
        <p class="item-name">{{item.name}} {{item.price}}</p>
        <p class="item-price">{{item.desc}} <button (click)="shoppingcartService.addItemToCart()">Order</button></p>
    `
})
export class MenuItemComponent {
    @Input() item:IMenuItem

    constructor(private shoppingcartService:ShoppingcartService) {

    }
   
}