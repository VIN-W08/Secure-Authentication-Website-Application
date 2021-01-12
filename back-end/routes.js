const express = require("express");
const router = express.Router();
const Member = require("./models/Member.js");
const bcryptjs = require("bcryptjs");

router.post("/sign-up",(req, res)=>{
    bcryptjs.hash(req.body.password, 10, (error, hash)=>{
        const member = new Member({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        member.save();
    })
}) 
 
router.post("/login", (req, res)=>{
    const found = Member.find({
        email: req.body.email

    }, (error, res)=>{ 
        bcryptjs.compare(req.body.password, res[0].password, (error, res)=>{
            if(res == true){
                console.log("Registered");
            }  
            else{ 
                console.log("Not Registered");
            }
        });
    })
}) 
  
module.exports = router; 