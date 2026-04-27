import React,{useState} from "react"
import {transferMoney} from "../services/accountService.jsx"
import '../App.css';

function Transfer(){

const [from,setFrom]=useState("")
const [to,setTo]=useState("")
const [amount,setAmount]=useState("")

const transfer=()=>{

transferMoney(from,to,amount)
.then(res=>{
alert(res.data)
})

}

return(

<div>

<h2>Transfer Money</h2>

<input placeholder="From Account" onChange={(e)=>setFrom(e.target.value)}/>
<input placeholder="To Account" onChange={(e)=>setTo(e.target.value)}/>
<input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>

<button onClick={transfer}>Transfer</button>

</div>

)

}

export default Transfer