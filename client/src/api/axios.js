import axios from "axios"

const HTTP = axios.create({
    baseURL: "https://disleksi.herokuapp.com/"
})

export const addContact = async (formData) => await HTTP.post("/iletisim", formData)