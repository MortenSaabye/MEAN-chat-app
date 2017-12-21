import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule }     from './app-routing.module';

import { CookieModule } from 'ngx-cookie'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomService } from '../services/room/room.service';
import { SocketService } from '../services/socket/socket.service'
import { LoginService } from '../services/login/login.service'
import { MessageService } from '../services/message/message.service' 
import { SubscribersComponent } from './subscribers/subscribers.component';
import { MessagesComponent } from './messages/messages.component';
import { SendMessageComponent } from './send-message/send-message.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomsComponent,
    SubscribersComponent,
    MessagesComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [RoomService, MessageService, LoginService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
