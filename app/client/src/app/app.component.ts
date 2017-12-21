import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie'
import { Router } from '@angular/router'
import { LoginService } from '../services/login/login.service'
import { RoomService } from '../services/room/room.service'
import { tap } from 'rxjs/operators/tap';
import { SocketService } from '../services/socket/socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Messaging app';
  isLoggedIn: string
  username: string
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private socketService: SocketService,
    private roomService: RoomService,
    private loginService: LoginService){
      this.loginService.didLogIn.subscribe((user) => {
        this.setUsername(user)
        console.log("set username")
      })
    }
  ngOnInit() {
    this.isLoggedIn = this.cookieService.get("isLoggedIn")
    if(this.isLoggedIn !== "true") {
      this.router.navigateByUrl('/login')
    } else {
      this.username = this.cookieService.get('username')
    }
  }
  logout():void {
    this.cookieService.put('isLoggedIn', "false")
    this.router.navigateByUrl('/login')
    this.username = null
    const roomId = this.cookieService.get('roomId')
    const userId = this.cookieService.get('userId')
    if(roomId) {
      this.roomService.leaveRoom(roomId, userId).subscribe(_ => {
        console.log(`left room ${roomId}`)
        this.socketService.disconnect()
      })
    }
  }
  setUsername(username: any): void {
    this.username = username
  }
  
}
