import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './site/home/home.component';
import { ItemsComponent } from './site/items/items.component';
import { LoginComponent } from './site/login/login.component';

const appRoutes: Routes = [

   { path: 'home', component: HomeComponent},

   { path: 'login', component: LoginComponent},

   { path: 'items', component: ItemsComponent},
 
   { path : '', redirectTo : '/home' , pathMatch : 'full'  }
   
   ];



@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      SidebarComponent,
      HeaderComponent,
      SidemenuComponent,
      FooterComponent,
      HomeComponent,
      ItemsComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
