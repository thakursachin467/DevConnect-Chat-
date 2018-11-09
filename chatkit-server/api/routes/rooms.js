const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const chatkit = require('../../Config/chatkit');


//@route POST /api/room/invite/:name
//@description create a room
//@access private route

router.get('/invite/:teamId', (req, res) => {


});


//@route POST /api/room/deleteRoom/:name
//@description delete a room
//@access private route

router.get('/add/:id', (req, res) => {
  const userIds = req.body.user;
  chatkit.addUsersToRoom({
    roomId: room.id,
    userIds: userIds
  })
    .then(() => {
      console.log('added');
      res.status(200).json({
        sucess: true
      })
    })
    .catch(err => {
      console.error(err)
      res.status(400).json({
        sucess: false,
        error: err
      })
    })
});


router.get('/delete/:id', (req, res) => {
  const roomId = req.body.roomId;
  chatkit.deleteRoom({
    id: Number(roomId)
  })
    .then(() => {
      res.status(200).json({
        sucess: true
      })
      console.log('gone forever')
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({
        sucess: false,
        error: err
      })
    })
});


module.exports = router;