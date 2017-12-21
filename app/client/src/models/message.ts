import { User } from "./user"

export class Message {
    _id: string
    user: User
    room: string
    message: string
    received: string
}