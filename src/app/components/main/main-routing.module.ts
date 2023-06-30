import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonmainComponent } from 'src/app/components/main/commonmain/commonmain.component';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:CommonmainComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/main/dashboard',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
