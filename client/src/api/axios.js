import axios from "axios"

const HTTP = axios.create({
    //baseURL: "https://disleksi.herokuapp.com"
    baseURL: "http://localhost:5000"
})

export const addContact = async (formData) => await HTTP.post("/iletisim", formData)

export const signUp = async (userData) => await HTTP.post("/kayitol", userData)

export const login = async (userData) => await HTTP.post("/girisyap", userData)