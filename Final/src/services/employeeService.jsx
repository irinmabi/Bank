import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";

export const registerEmployee = (emp) =>{
 return axios.post(`${BASE_URL}/regemp`,emp)
}

export const loginEmployee = (email,password) =>{
 return axios.post(`${BASE_URL}/loginemp`,{email,password})
}

export const viewEmployee = (id) =>{
 return axios.get(`${BASE_URL}/view/${id}`)
}

export const viewCustomers = () =>{
 return axios.get(`${BASE_URL}/customers`)
}

export const deleteCustomer = (id) =>{
 return axios.delete(`${BASE_URL}/delete/${id}`)
}

export const updateCustomer = (customer) =>{
 return axios.put(`${BASE_URL}/updatecustom`,customer)
}

export const pendingAccounts = () =>{
 return axios.get(`${BASE_URL}/pending`)
}

export const approveAccount = (id) =>{
 return axios.put(`${BASE_URL}/approve/${id}`)
}

export const rejectAccount = (id) =>{
 return axios.put(`${BASE_URL}/reject/${id}`)
}

export const viewTransactions = (accNo) =>{
 return axios.get(`${BASE_URL}/transactions/${accNo}`)
}