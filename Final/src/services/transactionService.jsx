import axios from "axios";

const BASE_URL="http://localhost:8080/transaction";

export const viewTransactions=(accno)=>{
return axios.get(BASE_URL+"/history/"+accno);
}