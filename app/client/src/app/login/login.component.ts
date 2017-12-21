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
  cookiesEnabled
  usernameTaken
  invalidLogin
  constructor(
    private cookieService: CookieService, 
    private loginService: LoginService,
    private router: Router,
    private socketService: SocketService) { }

  ngOnInit() {
  }

  login(): void {
    this.usernameTaken = false
    this.invalidLogin = false
    this.cookiesEnabled = navigator.cookieEnabled
    if(!this.cookiesEnabled){
      return
    }
    this.socketService.createSocket()
    this.loginService.login(this.username, this.password).subscribe((user) => {
      if(!user.username) {
        this.invalidLogin = true
        return
      } else {
        this.invalidLogin = false
      }
      this.router.navigateByUrl('/rooms')
      this.setupCookies(user)
    })
  }
  create(): void {
    this.usernameTaken = false
    this.invalidLogin = false
    this.cookiesEnabled = navigator.cookieEnabled
    if(!this.cookiesEnabled){
      return
    }
    this.loginService.create(this.username, this.password).subscribe((user) => {
      if(!user.username) {
        this.usernameTaken = true
        return
      } else {
        this.usernameTaken = false
      }
      this.socketService.createSocket()
      this.router.navigateByUrl('/rooms')
      this.setupCookies(user)
    })
  }

  setupCookies(user){
    this.cookieService.put("isLoggedIn", "true")
    this.cookieService.put("userId", user.id)
    this.cookieService.put("username", user.username)
  }
}
