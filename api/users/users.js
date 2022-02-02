const express=require('express');
const uuid=require('uuid');
const Users=require('./User');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send(Users);
})

router.get("/:userid",(req,res)=>{
    // console.log(user);
    // const user = Users.find(user=> user.id===req.params.userid);
    const user = Users.find(user => {
       return (Number(user.id) === Number(req.params.userid));
    });
   
    if(!user){
        res.status(400).send("User not found");
    }
    res.status(200).json(user);
})


module.exports = router;

