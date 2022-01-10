import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DocumentComponent } from './document/document.component';
import { CategoryComponent } from './category/category.component';
import { DocumentSearchPipe } from './document/document-search.pipe';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    DocumentComponent,
    CategoryComponent,
    DocumentSearchPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
