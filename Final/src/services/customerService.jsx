import axios from "axios";

const BASE_URL="http://localhost:8080/custom";

export const registerCustomer=(data)=>{
return axios.post(BASE_URL+"/reg",data);
}

export const loginCustomer=(email,password)=>{
return axios.post(BASE_URL+"/login",{
email: email,
password: password
});
}
export const viewCustomer = (customerId) => {
  return axios.get(BASE_URL + "/view/" + customerId); // ✅ Fixed URL
};