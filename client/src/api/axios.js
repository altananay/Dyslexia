import axios from "axios"

const HTTP = axios.create({
    baseURL: ""
})

export const addContact = async (formData) => await HTTP.post("/iletisim", formData)

export const signUp = async (userData) => await HTTP.post("/kayitol", userData)

export const login = async (userData) => await HTTP.post("/girisyap", userData)

export const adminSignUp = async (adminData) => await HTTP.post("/admin/signup", adminData);

export const fetchUsers = async () => await HTTP.get("/admin/users")

export const fetchDatas = async () => await HTTP.get("/admin")

export const fetchMessages = async () => await HTTP.get("/admin/messages")

export const fetchVinegradTestResults = async () => await HTTP.get("/admin/vinegradtestresults");

export const adminLogin = async (adminData) => await HTTP.post("/admin/signin", adminData)

export const vinegradResult = async (data) => await HTTP.post("/test", data)

export const fetchUsersAndPasswords = async () => await HTTP.get("/admin/userpasswords");
