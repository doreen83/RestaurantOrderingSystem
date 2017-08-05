import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'
import { AboutUsComponent } from './aboutus.component'
import { HoursAndLocationComponent } from './hoursandlocation.component'
import { MenuComponent } from './menu.component'
import { OrderingComponent } from './ordering/ordering.component'
import { SideNavbarComponent} from './nav/side.navbar.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { MenuService } from './ordering/menu.service'
import { MenuItemComponent } from './ordering/menuitem.component'
import { ShoppingcartService } from './ordering/shoppingcart.service'
import { HeaderComponent } from './header.component'
import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './googlemaps.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HoursAndLocationComponent,
    MenuComponent,
    OrderingComponent,
    SideNavbarComponent,
    MenuItemComponent,
    HeaderComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGr6CUycwKRsjjHb7JNXKT-kc5qobt-FQ'
    })
  ],
  providers: [MenuService, ShoppingcartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
