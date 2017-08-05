import { Routes } from '@angular/router'
import { AboutUsComponent } from './aboutus.component'
import { HoursAndLocationComponent } from './hoursandlocation.component'
import { MenuComponent } from './menu.component'
import { OrderingComponent} from './ordering/ordering.component'

export const appRoutes:Routes = [
    { path: '', component: AboutUsComponent},
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'hoursandlocation', component: HoursAndLocationComponent },
    //{ path: 'menu', component: MenuComponent},
    { path: 'ordering', component: OrderingComponent},
    { path: '**', redirectTo: '' }
]