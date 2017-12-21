import { Injectable } from '@angular/core';
import { baseUrl } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Message } from '../../models/message'
import { Observable } from 'rxjs/Observable'
import { CookieService } from 'ngx-cookie'
import { SocketService } from '../socket/socket.service'
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient, 
    private cookieService: CookieService,
    private socketService: SocketService) {}

  getMessages(roomId: string): Observable<Message[]> {
    const url = `${baseUrl}rooms/${roomId}/messages`
    return this.http.get<Message[]>(url)
  }

  sendMessage(roomId: string, message: Message): Observable<Message> {
    const url = `${baseUrl}rooms/${roomId}/send`
    return this.http.post<Message>(url, message).pipe(
      tap(_ => this.socketService.message(roomId))
    )
  }

  
}
