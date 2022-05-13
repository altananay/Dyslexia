import axios from "axios"

const HTTP = axios.create({
    baseURL: "http://localhost:5000"
})

export const addContact = async (formData) => await HTTP.post("/iletisim", formData)