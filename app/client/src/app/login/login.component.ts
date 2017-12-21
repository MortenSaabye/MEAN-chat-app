import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie'
import { LoginService } from '../../services/login/login.service'
import { Router } from '@angular/router'
import * as io from 'socket.io-client'
import { baseUrl } from '../../environments/environment'
import { SocketService } from '../../services/socket/socket.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  constructor(
    private cookieService: CookieService, 
    private loginService: LoginService,
    private router: Router,
    private socketService: SocketService) { }

  ngOnInit() {
    
  }

  login(): void {
    this.socketService.createSocket()
    this.loginService.login(this.username, this.password).subscribe((user) => {
      console.log(user)
      this.cookieService.put("isLoggedIn", "true")
      this.cookieService.put("userId", user.id)
      this.cookieService.put("username", user.username)
      this.router.navigateByUrl('/rooms')
    })
  }
  create(): void {
    this.loginService.create(this.username, this.password).subscribe((user) => {
      this.cookieService.put("isLoggedIn", "true")
      this.cookieService.put("userId", user.id)
      this.cookieService.put("username", user.username)
      this.router.navigateByUrl('/rooms')
    })
  }
}
