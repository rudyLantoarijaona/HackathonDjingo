import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ChatComponent } from './component/chat/chat.component';
import { PhylactereComponent } from './component/phylactere/phylactere.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    PhylactereComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
