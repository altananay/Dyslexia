import express from "express";
import bcrypt from 'bcryptjs'
import User from "../models/user.js"

const router = express.Router();

// localhost:5000/users 'a yapılan post isteği
router.post("/kayitol", async (req, res)=>{
    try {
        console.log(req.body)
        const { username, firstName, lastName, password, email, gender, grade, age } = req.body;
        
        const userExists = await User.findOne({ username })
        if(userExists)
            return res.status(400).json({ message: 'Kullanıcı adı daha önce alınmış.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            username,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            age,
            gender,
            grade
        })

        return res.status(201).json(createdUser);
    } catch (error) {
        return res.json({message: "Kayıt olma işlemi başarısız."})
    }
})

// localhost:5000/users/signin POST request
router.post("/girisyap", async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if(!user)
            return res.status(400).json({message: "Kullanıcı adı hatalı."})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Şifre yanlış."})
        
        return res.status(200).json({ user, message: 'Giriş Başarılı.' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router;