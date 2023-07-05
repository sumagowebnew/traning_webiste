import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonmainComponent } from 'src/app/components/main/commonmain/commonmain.component';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:CommonmainComponent,children:[
    {path:'dashboard',component:DashboardComponent},
   
   
    {path:'course',component:CourseComponent},
    {path:'about',component:AboutComponent},
    {path:'',redirectTo:'/main/dashboard',pathMatch:'full'},


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
