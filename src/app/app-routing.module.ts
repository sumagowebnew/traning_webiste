import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';

import { authGuard } from './guard/auth.guard';


const routes: Routes = [
 
  // {path:'',redirectTo:'sign-in',pathMatch:'full'},
  {path:'sign-in',component:SignInComponent},

  {
    path:'main',
    canActivate:[authGuard],
    loadChildren:()=>import('./components/main/main.module').then((m)=>m.MainModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
