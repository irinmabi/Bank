import React,{useState} from "react"
import {depositMoney} from "../services/accountService.jsx"
import "../App.css";

function Deposit(){

const [accno,setAccno]=useState("")
const [amount,setAmount]=useState("")

const deposit=()=>{

depositMoney(accno,amount)
.then(()=>{
alert("Money Deposited")
})
.catch(err=>{
console.log(err)
alert("Deposit failed")
})

}

return(

<div>

<h2>Deposit</h2>

<input placeholder="Account Number" onChange={(e)=>setAccno(e.target.value)}/>

<input type="number" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>

<button onClick={deposit}>Deposit</button>

</div>

)

}

export default Deposit