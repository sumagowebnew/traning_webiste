import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

import { CommonmainComponent } from './components/main/commonmain/commonmain.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { EventDataComponent } from './Event/event-data/event-data.component';
import { ProgramFeesListComponent } from './components/main/program-fees-list/program-fees-list.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
   
    CommonmainComponent,
    DashboardComponent,
    AddEventComponent,
    EventDataComponent,
    ProgramFeesListComponent,


  
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
