import axios from "axios";

const BASE_URL = "http://localhost:8080/admin";

class AdminService{

getEmployees(){
return axios.get(BASE_URL+"/employees");
}

getEmployeeById(id){
return axios.get(BASE_URL+"/employee/"+id);
}

updateEmployee(id,employee){
return axios.put(BASE_URL+"/employee/update/"+id,employee);
}

deleteEmployee(id){
return axios.delete(BASE_URL+"/employee/delete/"+id);
}

getAccounts(){
return axios.get(BASE_URL+"/accounts");
}

getAccountsWithCustomers() {
    return axios.get(BASE_URL + "/accounts/details");
}

getTransactions(){
return axios.get(BASE_URL+"/transactions");
}

}

export default new AdminService();