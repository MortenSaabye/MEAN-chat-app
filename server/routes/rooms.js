var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Room = mongoose.model('Room')
const Message = mongoose.model('Message')


//retrieve all rooms from the DB
router.get('/', (req, res) => {
  Room.find((err, rooms) => {
    if(err != null) {
      res.send(`something went wrong ${err}`)
    } else {
      res.status(200)
      res.send(rooms)
    }
  })
})


//insert a new room
router.post('/', (req, res) => {
  
  const room = new Room(req.body)
  room.save((err, room) => {
    if(err != null) {
      console.log(err)
      res.send(`something went wrong ${err}`)
    } else {
      console.log('room was added to db')
      res.status(200)
      res.json({'message': 'room was created', 'room': room})
    }
  })
})

router.patch('/join', (req, res) =>{
  const roomId = mongoose.Types.ObjectId(req.body.roomId)
  console.log(roomId)
  
  Room.findById(roomId, (err, room) => {
    room.users.push(req.body.userId)
    room.save()
    res.json({"message": `Joined the room ${room.roomname}`})
  })
})

router.patch('/leave', (req, res) =>{
  const roomId = mongoose.Types.ObjectId(req.body.roomId)
  console.log(roomId)

  Room.findById(roomId, (err, room) => {
    room.users.remove(req.body.userId)
    
    room.save()
    res.json({"message": `left the room ${room.roomname}`})
  })
})

router.get('/:room/users', (req, res) => {
  const roomId = req.params.room
  Room.findById(roomId).populate('users', ['username', 'currentMood']).exec((err, room) => {
    console.log(room.users)
    res.json(room.users)
  })
})


// Get all messages from a room
router.get('/:room/messages', (req, res) => {
  const roomId = req.params.room
  Message.find({"room": roomId}).populate('user', ['username', 'currentMood']).exec((err, messages) => {
    console.log(messages)
    res.json(messages)
  })
})

// send a message
router.post('/:room/send', (req, res) => {
  let message = new Message(req.body)
  const roomId = req.params.room
  const userId = req.body.user._id
  message.room = roomId
  message.user = userId

  message.save((err, message) => {
    res.json(message)
  })
})




module.exports = router;