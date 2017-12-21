import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Room } from '../../models/room'
import { RoomService } from '../../services/room/room.service'
import { SocketService } from '../../services/socket/socket.service'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[]
  roomName: string
  userId: string
  about: string
  constructor(private roomService: RoomService, 
    private router: Router, 
    private cookieService: CookieService,
    private socketService: SocketService) {
      if(!this.socketService.socket.hasListeners('room'))     
      this.socketService.socket.on('room', (_) => {
        console.log('received room event')
        this.getRooms()
      })
  }

  ngOnInit() {
    this.getRooms()
  }
  getRooms(): void {
    this.roomService.getRooms()
    .subscribe(rooms => this.rooms = rooms)
  }

  createRoom(): void {
    const room = new Room()
    if(this.roomName === "" || !this.roomName || !this.about || this.about === "") {
      return
    }
    room.roomname = this.roomName
    room.about = this.about
    this.roomService.createRoom(room).subscribe((_) => this.getRooms())
    this.roomName = null
    this.about = null
  }

  joinRoom(roomId: string): void {
    const userId = this.cookieService.get('userId')
    this.cookieService.put('roomId', roomId)
    this.roomService.joinRoom(roomId, userId).subscribe((_) => {
      this.router.navigateByUrl(`/rooms/${roomId}`)
    })
  }
}
