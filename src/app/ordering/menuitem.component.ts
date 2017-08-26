import { Component, Input } from '@angular/core'
import { ShoppingcartService } from './shoppingcart.service'
import { IMenuItem } from './menuitem.model'
import { IMenuCategory } from './menucategory.model'

@Component ({
    selector: 'menu-item',
    templateUrl: './menuitem.component.html',
    styleUrls: ['./menuitem.component.css']
})
export class MenuItemComponent {
    @Input() item:IMenuItem
    @Input() categories:IMenuCategory[]
    
    constructor(private shoppingcartService:ShoppingcartService) {

    }
   
}