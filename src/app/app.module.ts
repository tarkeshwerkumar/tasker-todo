import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './componets/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodosComponent } from './todos/todos/todos.component';
import { TodoTasksComponent } from './todos/todo-tasks/todo-tasks.component';
import { TodoCompletedComponent } from './todos/todo-completed/todo-completed.component';
import { DetailsDialogComponent } from './todos/todo-tasks/details.component';
import { AlertDialogComponent } from 'src/app/dialogs/alert/alert.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { SuccessMessageDialogComponent } from './dialogs/success-message/success-message.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    TodosComponent,
    TodoTasksComponent,
    TodoCompletedComponent,
    DetailsDialogComponent,
    AlertDialogComponent,
    EditDialogComponent,
    SuccessMessageDialogComponent,
    LoginComponent,
    AboutComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule
  ],
  entryComponents:[
    DetailsDialogComponent,
    AlertDialogComponent,
    EditDialogComponent,
    SuccessMessageDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
