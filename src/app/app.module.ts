import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import * as Hammer from 'hammerjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './dialogs/login/login.component';
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

export class MyHammerConfig extends HammerGestureConfig{
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    TodosComponent,
    TodoTasksComponent,
    TodoCompletedComponent,
    DetailsDialogComponent,
    AlertDialogComponent,
    EditDialogComponent,
    SuccessMessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents:[
    DetailsDialogComponent,
    AlertDialogComponent,
    EditDialogComponent,
    SuccessMessageDialogComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
