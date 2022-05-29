import express from "express";
import mongoose from "mongoose";
import vinegradResults from "../models/vinegradResults.js";

const router = express.Router();

router.post("/test", async (req, res) => {
  try {
    console.log(req.body);

    const username = req.body.User.username;
    const firstName = req.body.User.firstName;
    const lastName = req.body.User.lastName;
    const email = req.body.User.email;
    const age = req.body.User.age;
    const gender = req.body.User.gender;
    const grade = req.body.User.grade;
    const result = req.body.Result;
    console.log(username, firstName, lastName, email, age, gender, grade, result)

    const userExists = await vinegradResults.findOne({ username });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "Kullanıcı daha önce test olmuş." });
    }

    const testResult = await vinegradResults.create({
      username,
      firstName,
      lastName,
      email,
      age,
      gender,
      grade,
      Result: result,
    });

    return res.status(200).json(testResult);
  } catch (error) {
    return res.status(400).json({message: error})
  }
});

router.get("/admin/vinegradtestresults", async (req, res) => {
  try {
    const testResults = await vinegradResults.find()
    return res.status(200).json(testResults);
  } catch (error) {
    return res.status(400).json({message: error});
  }
})

export default router;
