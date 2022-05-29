import express from "express";
import bcrypt from "bcryptjs";

import User from "../models/user.js";
import Admin from "../models/admin.js";
import Communication from "../models/communication.js";
import VinegradResults from "../models/vinegradResults.js";

const router = express.Router();

// localhost:5000/users 'a yapılan post isteği
router.post("/kayitol", async (req, res) => {
  try {
    console.log(req.body);
    const {
      username,
      firstName,
      lastName,
      password,
      email,
      gender,
      grade,
      age,
    } = req.body;

    const userExists = await User.findOne({ username });
    if (userExists)
      return res
        .status(400)
        .json({ message: "Kullanıcı adı daha önce alınmış." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
      grade,
    });

    return res.status(201).json(createdUser);
  } catch (error) {
    return res.json({ message: "Kayıt olma işlemi başarısız." });
  }
});

// localhost:5000/users/signin POST request
router.post("/girisyap", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ message: "Kullanıcı adı hatalı." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Şifre yanlış." });

    return res.status(200).json({ user, message: "Giriş Başarılı." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/admin/users", async (req, res) => {
  try {
    const users = await User.find().select("firstName lastName age gender signedAt username grade email");
    res.status(200).json(users);
  } catch (error) {
      res.status(404).json({message: error.message})
  }
});

router.post("/admin/signup", async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      password,
      email,
      gender,
      age,
    } = req.body;

    const userExists = await Admin.findOne({ username });
    if (userExists)
      return res
        .status(400)
        .json({ message: "Kullanıcı adı daha önce alınmış." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await Admin.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
    });

    return res.status(201).json(createdUser);
  } catch (error) {
    return res.json({ message: "Kayıt olma işlemi başarısız." });
  }
});


router.get("/admin", async (req, res)=> {
  try {
    let datas = {}
    const userCount = await User.collection.countDocuments();
    const messageCount = await Communication.collection.countDocuments()
    const vinegradTestCount = await VinegradResults.collection.countDocuments()
    datas = {
      userCount : userCount,
      messageCount: messageCount,
      vinegradTestCount: vinegradTestCount
    }
    res.status(200).json(datas);

  } catch (error) {
    return res.json({message : "Hata"})
  }
})

router.get("/admin/messages", async (req, res)=> {
  try {
    const messages = await Communication.find()
    res.status(200).json(messages);
  } catch (error) {
    return res.json({message : "Hata"})
  }
})

router.post("/admin/signin", async (req,res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin)
      return res.status(400).json({ message: "Kullanıcı adı hatalı." });

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Şifre yanlış." });

    return res.status(200).json({ admin, message: "Giriş Başarılı." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
})

export default router;
