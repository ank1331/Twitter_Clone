import express from "express"
import User from "../Model/userModel.js"


const router = express.Router()



router.get("/", (req, res)=>{
    res.send("this is home page for the process")
})

export default router