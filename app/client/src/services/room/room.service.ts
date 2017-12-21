import { Injectable } from '@angular/core';
import { baseUrl } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Room } from '../../models/room'
import { User } from '../../models/user'
import { Observable } from 'rxjs/Observable'
import { tap } from 'rxjs/operators/tap';
import { SocketService } from '../socket/socket.service'

@Injectable()
export class RoomService {
  private roomsUrl = baseUrl + 'rooms'
  constructor(
    private http: HttpClient, 
    private socketService: SocketService) { 
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl)
  }

  getSubscribers(roomId: string): Observable<User[]> {
    return this.http.get<User[]>(this.roomsUrl + `/${roomId}/users`)
  }

  createRoom(room: Room): Observable<Room> {
    console.log(room.roomname)
    return this.http.post<Room>(this.roomsUrl, room).pipe(
      tap(_ => this.socketService.room(room.roomname))
    )
  }

  joinRoom(roomId: string, userId: string): Observable<Object> {
    const reqObject = {
      roomId: roomId,
      userId: userId
    }
    console.log(reqObject)
    return this.http.patch<Object>(this.roomsUrl + '/join', reqObject).pipe(
      tap(_ => this.socketService.join(reqObject.roomId))
    )
  }

  getRoomname(roomId: string): Observable<Object> {
    return this.http.get<Object>(`${this.roomsUrl}/roomname/${roomId}`)
  }
  leaveRoom(roomId: string, userId): Observable<Object> {
    const reqObject = {
      roomId: roomId,
      userId: userId
    }
    return this.http.patch<Object>(this.roomsUrl + '/leave', reqObject).pipe(
      tap(_ => this.socketService.leave(reqObject.roomId))
    )
  }

}
