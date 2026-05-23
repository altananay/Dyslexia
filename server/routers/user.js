import express from "express";
import Cryptr from "cryptr";

const router = express.Router();

let cryptr = new Cryptr("hashedPassword");

// In-memory mock stores
const mockUsers = [
  {
    _id: "mock_user_1",
    username: "testuser",
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    password: cryptr.encrypt("test"),
    age: "10",
    gender: "Erkek",
    grade: "5",
    signedAt: new Date(),
  },
];

const mockAdmins = [
  {
    _id: "mock_admin_1",
    username: "admin",
    firstName: "Admin",
    lastName: "User",
    email: "admin@example.com",
    password: cryptr.encrypt("admin"),
    age: "30",
    gender: "Erkek",
  },
];

router.post("/kayitol", async (req, res) => {
  try {
    const { username, firstName, lastName, password, email, gender, grade, age } = req.body;

    const userExists = mockUsers.find((u) => u.username === username);
    if (userExists)
      return res.status(400).json({ message: "Kullanıcı adı daha önce alınmış." });

    const hashedPassword = cryptr.encrypt(password);
    const createdUser = {
      _id: "mock_user_" + Date.now(),
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
      grade,
      signedAt: new Date(),
    };
    mockUsers.push(createdUser);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.json({ message: "Kayıt olma işlemi başarısız." });
  }
});

router.post("/girisyap", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = mockUsers.find((u) => u.username === username);
    if (!user)
      return res.status(400).json({ message: "Kullanıcı adı hatalı." });

    const encode = cryptr.decrypt(user.password);
    if (encode !== password)
      return res.status(400).json({ message: "Şifre yanlış." });

    return res.status(200).json({ user, message: "Giriş Başarılı." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/admin/users", async (req, res) => {
  try {
    const users = mockUsers.map(({ _id, firstName, lastName, age, gender, signedAt, username, grade, email }) => ({
      _id, firstName, lastName, age, gender, signedAt, username, grade, email,
    }));
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/admin/signup", async (req, res) => {
  try {
    const { username, firstName, lastName, password, email, gender, age } = req.body;

    const userExists = mockAdmins.find((a) => a.username === username);
    if (userExists)
      return res.status(400).json({ message: "Kullanıcı adı daha önce alınmış." });

    const hashedPassword = cryptr.encrypt(password);
    const createdUser = {
      _id: "mock_admin_" + Date.now(),
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
    };
    mockAdmins.push(createdUser);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.json({ message: "Kayıt olma işlemi başarısız." });
  }
});

router.get("/admin", async (req, res) => {
  try {
    const datas = {
      userCount: mockUsers.length,
      messageCount: 0,
      vinegradTestCount: 0,
    };
    res.status(200).json(datas);
  } catch (error) {
    return res.json({ message: "Hata" });
  }
});

router.get("/admin/messages", async (req, res) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    return res.json({ message: "Hata" });
  }
});

router.post("/admin/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = mockAdmins.find((a) => a.username === username);
    if (!admin)
      return res.status(400).json({ message: "Kullanıcı adı hatalı." });

    const encode = cryptr.decrypt(admin.password);
    if (encode !== password)
      return res.status(400).json({ message: "Şifre yanlış." });

    return res.status(200).json({ admin, message: "Giriş Başarılı." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/admin/userpasswords", async (req, res) => {
  try {
    const users = mockUsers.map((u) => ({
      username: u.username,
      password: cryptr.decrypt(u.password),
    }));
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default router;
