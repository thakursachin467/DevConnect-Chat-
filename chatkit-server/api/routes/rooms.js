const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const room = require('../../models/Rooms');
const secret = require('../../Config/keys');
const chatkit = require('../../Config/chatkit');
const shortid = require('shortid');


//@route POST /api/room/invite/:name
//@description create a room
//@access private route


router.post('/invite/:teamId', (req, res) => {
  console.log('object')
  const { teamId } = req.params.teamId;
  room.findOne({ roomId: teamId })
    .then((room) => {
      if (!room) {
        const id = shortid.generate();
        data = new room({
          roomId: teamId,
          token: id
        })
        data.save()
          .then((res) => {
            const link = 'https://admiring-snyder-dead31.netlify.com/invite/' + id;
            res.json({
              success: true,
              token: link
            });
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        res.json({
          success: true,
          token: room.token
        });
      }
    })
    .catch((err) => {
      console.log(err);
    })


});


//@route POST /api/room/deleteRoom/:name
//@description delete a room
//@access private route

router.get('/add/:id', (req, res) => {
  const userId = req.body.user;
  const id = req.params.id;
  user.findOne({ token: id })
    .then((room) => {
      if (!room) {
        res.json({
          success: false
        });
      } else {
        chatkit.addUsersToRoom({
          roomId: room.roomId,
          userIds: userId
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

      }
    })
    .catch((err) => {
      console.log(err);
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