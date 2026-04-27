import axios from "axios";

const BASE_URL="http://localhost:8080/account";

export const applyAccount = (data, customerId) => {
  return axios.post(`http://localhost:8080/account/apply/${customerId}`, data);
};

export const checkBalance=(accno)=>{
return axios.get(BASE_URL+"/balance/"+accno);
}

export const depositMoney=(accno,amount)=>{
return axios.put(BASE_URL+"/deposit/"+accno+"/"+amount);
}

export const transferMoney = (from, to, amount) => {
  return axios.put(BASE_URL + "/transfer/" + from + "/" + to + "/" + amount);
};

export const viewAccount=(accno)=>{
return axios.get(BASE_URL+"/view/"+accno);
}
export const getAccountsByCustomerId = (customerId) => {
  return axios.get(BASE_URL + "/customer/" + customerId);
};