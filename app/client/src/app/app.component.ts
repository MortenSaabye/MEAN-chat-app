import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../services/login/login.service'
import { CookieService } from 'ngx-cookie'
import { RoomService } from '../services/room/room.service'
import { SocketService } from '../services/socket/socket.service'
import { tap } from 'rxjs/operators/tap';

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
        if(user) {
          this.setUsername(user)
        } 
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
    this.deleteCookies()
  }

  deleteCookies(){
    this.cookieService.removeAll()
  }
  setUsername(username: any): void {
    this.username = username
  }
}
