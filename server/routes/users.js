var express = require('express');
var router = express.Router();
const passport = require('passport')
const User = require('mongoose').model('User')

//get all users back from db
router.get('/', (req, res) => {
  User.find((err, users) => {
    if(err != null) {
      res.send(`something went wrong ${err}`)
    } else {
      res.status(200)
      res.send(users)
    }
  })
})


//insert a new user
router.post('/signUp', (req, res) => {
  const user = new User(req.body)
  user.save((err, result) => {
    if(err != null) {
      console.log(err)
      res.send(`something went wrong ${err}`)
    } else {
      console.log('user was added to db')
      res.status(200)
      req.login(user, (err) => {
        if (err) {
          console.log(err)
          res.send(`${err}`)
        }
        let user = {
          username: result.username,
          id: result._id
        }
        res.json(user)
      })
    }
  })
})


//change mood of user
router.patch('/change-mood', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    user.currentMood = req.body.currentMood
    user.save((err, user) => {
      res.json({'message': `Your mood has been changed to ${user.currentMood}`})
    })
  })
})
router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if(err) {
      res.json({"message": "login is wrong"})
    }
    if(user) {
      console.log(user)
      let userObj = {
        username: user.username,
        id: user._id
      }
      res.json(userObj)
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('user was logged out')
})

router.get('/current', (req, res) => {
  if(req.session.userId) {
    res.json({id: req.session.userId})
    console.log("yes user")
  } else {
    res.json({message: "No user logged in"})
    console.log("no user")
  }
})

module.exports = router;
