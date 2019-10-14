import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//mport { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule,Routes} from '@angular/router';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { LoginComponent } from './user/login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    ChatModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent,pathMatch:'full'},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'*',component:LoginComponent},
      {path:'**',component:LoginComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
