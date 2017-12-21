import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message'
import { MessageService } from '../../services/message/message.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { RoomService } from '../../services/room/room.service'
import { SocketService } from '../../services/socket/socket.service'
import { CookieService } from 'ngx-cookie'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[]
  roomId: string
  userId: string
  roomname: string
  message: string

  constructor(
    private messageService: MessageService,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private location: Location,
    private cookieService: CookieService,
    private socketService: SocketService) {
      if(this.socketService.socket.hasListeners('message')){
        this.socketService.socket.removeListener('message')
      }
      this.socketService.socket.on('message', ()=> {
        console.log('received message event')
        this.getMessages()
      })
    }

  ngOnInit() {
    this.userId = this.cookieService.get("userId")
    this.roomId = this.route.snapshot.paramMap.get('id')
    this.getMessages()
    this.getRoomname()
  }

  ngOnDestroy(){
    this.roomService.leaveRoom(this.roomId, this.userId).subscribe((_) => console.log(`left room: ${this.roomId}`))
  }
  getMessages():void {
    this.messageService.getMessages(this.roomId).subscribe(messages => {
      messages.forEach(message => {
        if(message.user._id == this.userId) {
          message.received = "false"
        } else {
          message.received = "true"
        }
      })
      this.messages = messages
    })
  }

  getRoomname():void {
    this.roomService.getRoomname(this.roomId).subscribe(roomname => this.roomname = roomname["roomname"])
  }

  newMessage(event) {
    this.getMessages()
  }
  
  goBack(): void {
    this.location.back()
  }
}
