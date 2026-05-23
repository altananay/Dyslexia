import express from "express";

const router = express.Router();

// In-memory mock store
const mockVinegradResults = [];

router.post("/test", async (req, res) => {
  try {
    const username = req.body.User.username;
    const firstName = req.body.User.firstName;
    const lastName = req.body.User.lastName;
    const email = req.body.User.email;
    const age = req.body.User.age;
    const gender = req.body.User.gender;
    const grade = req.body.User.grade;
    const result = req.body.Result;

    const userExists = mockVinegradResults.find((r) => r.username === username);
    if (userExists) {
      return res.status(400).json({ message: "Kullanıcı daha önce test olmuş." });
    }

    const testResult = {
      _id: "mock_test_" + Date.now(),
      username, firstName, lastName, email, age, gender, grade,
      Result: result,
      createdAt: new Date(),
    };
    mockVinegradResults.push(testResult);
    return res.status(200).json(testResult);
  } catch (error) {
    return res.status(400).json({ message: String(error) });
  }
});

router.get("/admin/vinegradtestresults", async (req, res) => {
  try {
    return res.status(200).json(mockVinegradResults);
  } catch (error) {
    return res.status(400).json({ message: String(error) });
  }
});

export default router;
