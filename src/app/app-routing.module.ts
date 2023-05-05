import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcoffeeComponent } from './addcoffee/addcoffee.component';
import { EditcoffeeComponent } from './editcoffee/editcoffee.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path:'', component:LobbyComponent
  },
  {
    path:'add-coffee', component:AddcoffeeComponent
  },{
    path:'edit-coffee/:id', component:EditcoffeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
