import { Component, NgModule } from '@angular/core';
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
import { ExpertReviewComponent } from './expert-review/expert-review.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { GoogleReviewComponent } from './google-review/google-review.component';
import { BrochuerComponent } from './brochuer/brochuer.component';
import { BannerComponent } from './banner/banner.component';
import { AluminiComponent } from './alumini/alumini.component';
import { FaqComponent } from './faq/faq.component';
import { HireComponent } from './hire/hire.component';
import { MentorComponent } from './mentor/mentor.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddOurofficeComponent } from './add-ouroffice/add-ouroffice.component';
import { AddLogoComponent } from './add-logo/add-logo.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubcourseComponent } from './add-subcourse/add-subcourse.component';
import { CourseComponent } from './course/course.component';
import { ProgramFeesListComponent } from 'src/app/components/main/program-fees-list/program-fees-list.component';
import { CohortsComponent } from './cohorts/cohorts.component';
import { HandsonCategoryComponent } from './handson-category/handson-category.component';
import { HandsonProjectComponent } from './handson-project/handson-project.component';
import { SubcourseDetailsComponent } from './subcourse-details/subcourse-details.component';

const routes: Routes = [
  {path:'',component:CommonmainComponent,children:[
    {path:'dashboard',component:DashboardComponent},

    {path:'apply_now',component:ApplyNowComponent},
    {path:'popular_course',component:AddPopularCourseComponent},
    {path:'archievement',component:ArchievementComponent},
    {path:'expert_review',component:ExpertReviewComponent},
    {path:'consulting',component:ConsultingComponent},
    {path:'add_logo',component:AddLogoComponent},
    {path:'add_product',component:AddProductComponent},
    {path:'add_course',component:CourseComponent},
    {path:'add_subcourse',component:AddSubcourseComponent},
    {path:'subcourse_detail',component:SubcourseDetailsComponent},

    {path:'about',component:AboutComponent},
    {path:'about_counter',component:AboutCounterComponent},
    {path:'google_review',component:GoogleReviewComponent},
  

    {path:'event',component:AddEventComponent},
    {path:'eventdata',component:EventDataComponent},

    {path:'diploma_program_category',component:DiplomaProgramCategoryComponent},
    {path:'program_details',component:ProgramsDetailsComponent},
    {path:'broucher',component:BrochuerComponent},
   


    {path:'certificate',component:CerticateComponent},
    {path:'contact',component:ContactComponent},
    {path:'Company_detail',component:CompanyDetailsComponent},
    {path:'Office',component:AddOurofficeComponent},

    {path:'banner',component:BannerComponent},
    {path:'alumini',component:AluminiComponent},
    {path:'faq',component:FaqComponent},
    {path:'hire',component:HireComponent},
    {path:'mentor',component:MentorComponent},
    {path:'program-fees-list',component:ProgramFeesListComponent},
    {path:'cohorts',component:CohortsComponent},
    {path:'handsonCategory',component:HandsonCategoryComponent},
    {path:'handsonProject',component:HandsonProjectComponent},

    {path:'',redirectTo:'/main/dashboard',pathMatch:'full'},


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
