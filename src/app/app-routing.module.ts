import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import{HoomeComponent} from './hoome/hoome.component'
import{FullComponent} from './Layout/full/full.component'
import {BlankComponent} from './Layout/blank/blank.component'
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',
   component:FullComponent,
   children:[
  {path:'dashboard',component:HoomeComponent}
   ]   
},
{
  path:'',
  component:BlankComponent,
  children:[
  {path:'login',component:LoginComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
