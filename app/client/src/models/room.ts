import { User } from './user'

export class Room {
    _id: string
    roomname: string
    about: string
    users: User[]
}