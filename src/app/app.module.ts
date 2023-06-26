import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { PostListsComponent } from './components/post-lists/post-lists.component';
import { FormComponent } from './components/form/form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AppendPipe } from './pipes/append.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListsComponent,
    FormComponent,
    UserFormComponent,
    PipesComponent,
    AppendPipe,
    SummaryPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
