import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { CourseComponent } from './course/course.component';
import { NewsComponent } from './Event/news/news.component';
import { CelebrationComponent } from './Event/celebration/celebration.component';
import { AwardComponent } from './Event/award/award.component';
import { BirthdayComponent } from './Event/birthday/birthday.component';
import { MouComponent } from './Event/mou/mou.component';
import { CerticateComponent } from './certicate/certicate.component';

import { AboutComponent } from './about/about.component';
import { DiplomaProgramCategoryComponent } from './Our_Program/diploma-program-category/diploma-program-category.component';



@NgModule({
  declarations: [
    CourseComponent,
    NewsComponent,
    CelebrationComponent,
    AwardComponent,
    BirthdayComponent,
    MouComponent,
    CerticateComponent,
  
    AboutComponent,
    DiplomaProgramCategoryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
