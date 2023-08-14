import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';

import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
 
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:SignInComponent},



  {
    path:'main',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./components/main/main.module').then((m)=>m.MainModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
