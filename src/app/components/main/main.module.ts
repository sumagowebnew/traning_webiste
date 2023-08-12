import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';


import { CerticateComponent } from './certicate/certicate.component';

import { AboutComponent } from './about/about.component';
import { DiplomaProgramCategoryComponent } from './Our_Program/diploma-program-category/diploma-program-category.component';
import { ContactComponent } from './contact/contact.component';
import { AddPopularCourseComponent } from './add-popular-course/add-popular-course.component';

import { AboutCounterComponent } from './about-counter/about-counter.component';
import { ProgramsDetailsComponent } from './programs-details/programs-details.component';
import { ArchievementComponent } from './archievement/archievement.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpertReviewComponent } from './expert-review/expert-review.component';
import { GoogleReviewComponent } from './google-review/google-review.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { BrochuerComponent } from './brochuer/brochuer.component';
import { BannerComponent } from './banner/banner.component';
import { HireComponent } from './hire/hire.component';
import { MentorComponent } from './mentor/mentor.component';
import { FaqComponent } from './faq/faq.component';
import { AluminiComponent } from './alumini/alumini.component';
import { FormsModule } from '@angular/forms';
import { AddOurofficeComponent } from './add-ouroffice/add-ouroffice.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddLogoComponent } from './add-logo/add-logo.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubcourseComponent } from './add-subcourse/add-subcourse.component';
import { SubcourseComponent } from './subcourse/subcourse.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [


    CerticateComponent,

    AboutComponent,
    DiplomaProgramCategoryComponent,
    ContactComponent,
    AddPopularCourseComponent,
  
    AboutCounterComponent,
    ProgramsDetailsComponent,
    ArchievementComponent,
    ApplyNowComponent,
    ExpertReviewComponent,
    GoogleReviewComponent,
    ConsultingComponent,
    BrochuerComponent,
    BannerComponent,
    HireComponent,
    MentorComponent,
    FaqComponent,
    AluminiComponent,
    AddOurofficeComponent,
    CompanyDetailsComponent,
    AddLogoComponent,
    AddProductComponent,
    AddSubcourseComponent,
    SubcourseComponent,
    CourseComponent
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule
    

  ]
})
export class MainModule { }
