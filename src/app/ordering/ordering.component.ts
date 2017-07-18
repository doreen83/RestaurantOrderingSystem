import { Component } from '@angular/core'
import { MenuService } from './menu.service'
import { IMenuItem } from './menuitem.model'

@Component({
    templateUrl: './ordering.html'
})
export class OrderingComponent {
    items:IMenuItem[];
    
    constructor(menuService:MenuService) {
        this.items = menuService.getMenuItems();
    }
}