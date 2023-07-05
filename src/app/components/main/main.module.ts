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
import { FullStackComponent } from './Our_Program/full-stack/full-stack.component';
import { MEANStackComponent } from './Our_Program/mean-stack/mean-stack.component';
import { MernStackComponent } from './Our_Program/mern-stack/mern-stack.component';
import { PythonComponent } from './Our_Program/python/python.component';
import { UiUxComponent } from './Our_Program/ui-ux/ui-ux.component';
import { SoftwareTestingComponent } from './Our_Program/software-testing/software-testing.component';
import { DataScienceComponent } from './Our_Program/data-science/data-science.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    CourseComponent,
    NewsComponent,
    CelebrationComponent,
    AwardComponent,
    BirthdayComponent,
    MouComponent,
    CerticateComponent,
    FullStackComponent,
    MEANStackComponent,
    MernStackComponent,
    PythonComponent,
    UiUxComponent,
    SoftwareTestingComponent,
    DataScienceComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
