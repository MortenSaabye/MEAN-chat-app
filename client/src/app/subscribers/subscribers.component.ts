import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user'
import { RoomService } from '../../services/room/room.service'
import { SocketService } from '../../services/socket/socket.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  users: User[]
  roomId: string
  constructor(private roomService: RoomService, 
    private route: ActivatedRoute,
    private socketService: SocketService) {
      if(this.socketService.socket.hasListeners('subscriber')){
        this.socketService.socket.removeListener('subscriber')
      }
      this.socketService.socket.on('subscriber', ()=> {
        console.log('received subscriber event')
        this.getSubscribers()
      })
   }
  
  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id')
    this.getSubscribers()
  }

  getSubscribers() :void {
    this.roomService.getSubscribers(this.roomId).subscribe(users => {
      this.users = users
      console.log(this.users)
      console.log('requested subs')
    })
  }
}
