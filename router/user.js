const express = require('express')
const userModel = require('../model/user')
const bcrypt = require('bcryptjs')
const router = express.Router()

// userInfo

// 회원가입
router.post("/signup", (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {

        if(err){
            return res.status(500).json({
                msg : err.message
            })
        }
        else{
            const newUser = new userModel(
                {
                    name : req.body.userName,
                    email : req.body.userEmail,
                    password : hash
                }
            )

            newUser
                .save()
                .then(user => {
                    res.json({
                        msg : "register user",
                        userInfo : user
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        msg : err.message
                    })
                })
        }

    })


})

// 로그인
router.post("/login", (req, res) => {

})

module.exports = router