import { Component } from '@angular/core'
import { MenuService } from './menu.service'
import { IMenuItem } from './menuitem.model'
import { IMenuCategory } from './menucategory.model'

@Component({
    templateUrl: './ordering.html',
    styleUrls: ['./ordering.component.css']
})
export class OrderingComponent {
    items:IMenuItem[] = [];
    categories:IMenuCategory[] = [];
    
    constructor(private menuService:MenuService) {
    }
    
    ngOnInit() {
        this.menuService.getMenuItems().subscribe(p=> this.items = p)
        this.menuService.getMenuCategories().subscribe(p=> this.categories = p)
    }
}