import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';


import { CerticateComponent } from './certicate/certicate.component';

import { AboutComponent } from './about/about.component';
import { DiplomaProgramCategoryComponent } from './Our_Program/diploma-program-category/diploma-program-category.component';
import { ContactComponent } from './contact/contact.component';
import { AddPopularCourseComponent } from './add-popular-course/add-popular-course.component';
import { HomeCounterComponent } from './home-counter/home-counter.component';
import { AboutCounterComponent } from './about-counter/about-counter.component';
import { ProgramsDetailsComponent } from './programs-details/programs-details.component';
import { ArchievementComponent } from './archievement/archievement.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpertReviewComponent } from './expert-review/expert-review.component';
import { GoogleReviewComponent } from './google-review/google-review.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { BrochuerComponent } from './brochuer/brochuer.component';


@NgModule({
  declarations: [


    CerticateComponent,

    AboutComponent,
    DiplomaProgramCategoryComponent,
    ContactComponent,
    AddPopularCourseComponent,
    HomeCounterComponent,
    AboutCounterComponent,
    ProgramsDetailsComponent,
    ArchievementComponent,
    ApplyNowComponent,
    ExpertReviewComponent,
    GoogleReviewComponent,
    ConsultingComponent,
    BrochuerComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
    

  ]
})
export class MainModule { }
