import React,{useState} from "react"
import {checkBalance} from "../services/accountService.jsx"
import '../App.css';

function CheckBalance(){

const [accno,setAccno]=useState("")
const [balance,setBalance]=useState("")

const getBalance=()=>{

checkBalance(accno)
.then(res=>{
setBalance(res.data.balance)
})

}

return(

<div>

<h2>Check Balance</h2>

<input placeholder="Account Number" onChange={(e)=>setAccno(e.target.value)}/>

<button onClick={getBalance}>Check</button>

<h3>Balance : {balance}</h3>

</div>

)

}

export default CheckBalance