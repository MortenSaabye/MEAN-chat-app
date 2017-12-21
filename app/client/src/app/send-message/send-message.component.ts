import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Message } from '../../models/message'
import { User } from '../../models/user'
import { MessageService } from '../../services/message/message.service'
import { CookieService } from 'ngx-cookie'

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  message: string
  @Input() roomId: string
  @Output() newMessage = new EventEmitter()
  constructor(private messageService: MessageService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  sendMessage(roomId:string):void {
    let message = new Message()
    let user = new User()
    const userId = this.cookieService.get('userId')
    console.log(userId)
    user._id = userId
    message.user = user
    if(!this.message || this.message === "") {
      return
    }
    message.message = this.message
    this.message = null
    console.log(message)
    this.messageService.sendMessage(this.roomId, message).subscribe((_) => {this.newMessage.emit()})
  }
}
