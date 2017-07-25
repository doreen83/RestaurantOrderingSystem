import { Component } from '@angular/core'
import { MenuService } from './menu.service'
import { IMenuItem } from './menuitem.model'

@Component({
    templateUrl: './ordering.html'
})
export class OrderingComponent {
    items:IMenuItem[] = [];
    
    constructor(private menuService:MenuService) {
    }
    
    ngOnInit() {
        this.menuService.getMenuItems().subscribe(p=> this.items = p);
    }
}