import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonmainComponent } from 'src/app/components/main/commonmain/commonmain.component';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';

import { AboutComponent } from './about/about.component';
import { AddEventComponent } from 'src/app/Event/add-event/add-event.component';
import { DiplomaProgramCategoryComponent } from './Our_Program/diploma-program-category/diploma-program-category.component';
import { CerticateComponent } from './certicate/certicate.component';
import { ContactComponent } from './contact/contact.component';
import { AddPopularCourseComponent } from './add-popular-course/add-popular-course.component';
import { ArchievementComponent } from './archievement/archievement.component';
import { AboutCounterComponent } from './about-counter/about-counter.component';
import { EventDataComponent } from 'src/app/Event/event-data/event-data.component';
import { ProgramsDetailsComponent } from './programs-details/programs-details.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';

const routes: Routes = [
  {path:'',component:CommonmainComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'apply_now',component:ApplyNowComponent},
    {path:'popular_course',component:AddPopularCourseComponent},
    {path:'archievement',component:ArchievementComponent},

    {path:'about',component:AboutComponent},
    {path:'about_counter',component:AboutCounterComponent},

    {path:'event',component:AddEventComponent},
    {path:'eventdata',component:EventDataComponent},

    {path:'diploma_program_category',component:DiplomaProgramCategoryComponent},
    {path:'program_details',component:ProgramsDetailsComponent},


    {path:'certificate',component:CerticateComponent},
    {path:'contact',component:ContactComponent},

    {path:'',redirectTo:'/main/dashboard',pathMatch:'full'},


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
