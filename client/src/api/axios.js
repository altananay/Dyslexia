import axios from "axios"

const HTTP = axios.create({
<<<<<<< HEAD
    //baseURL: "https://disleksi.herokuapp.com"
    baseURL: "http://localhost:5000"
=======
    //baseURL: "http://localhost:5000"
>>>>>>> b04261bf72575685eab35066ad58b90c415c8011
})

export const addContact = async (formData) => await HTTP.post("/iletisim", formData)

export const signUp = async (userData) => await HTTP.post("/kayitol", userData)

export const login = async (userData) => await HTTP.post("/girisyap", userData)

export const adminSignUp = async (adminData) => await HTTP.post("/admin/signup", adminData);

export const fetchUsers = async () => await HTTP.get("/admin/users")
