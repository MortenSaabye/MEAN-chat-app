import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { baseUrl } from '../../environments/environment'
@Injectable()
export class SocketService {
  socket
  constructor() { 
    this.createSocket()
  }

  disconnect(){
    this.socket.disconnect()
    console.log('disconnecting')
  }

  createSocket() {
    if(this.socket) {
      this.socket = null
    }
    this.socket = io.connect('http://localhost:3000')
    this.socket.on('connection', (room) => {
      console.log(`event for creation of ${room} was received`)
    })
  }

  join(roomId: string) {
    console.log('sending join event')
    this.socket.emit('join', roomId)
  }

  leave(roomId: string) {
    console.log('sending leave event')
    this.socket.emit('leave', roomId)
  }

  room(roomname: string){
    console.log('sending room event')
    this.socket.emit('room', roomname)
  }

  message(roomId: string) {
    console.log(`sending event for message`)
    this.socket.emit('message', roomId)
  } 
}
