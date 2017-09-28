import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ProductHighlightsComponent }   from './product-highlights.component';
import { LoginComponent } from "./login.component";
 
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: ProductHighlightsComponent },
  { path: "login", component: LoginComponent }  
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}