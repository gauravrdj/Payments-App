
import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import {Balance} from "../components/Balance";
import {Users} from "../components/Users";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




export const Dashboard = ()=>{
    const navigate=useNavigate();
    const [balance, setBalance]=useState(0);
    useEffect(()=>{
       axios.get('http://localhost:3000/api/v1/account/balance', {
        headers :{
            Authorization : "Bearer " + localStorage.getItem('token'),
        }
       }).then((res)=>{
             setBalance(res.data.balance);
       }).catch((e)=>{
          alert('You are not logged in/ Unable to fetch balance');
          navigate('/signin');
       });
    }, [balance]);
    return <div>
        <Appbar/>
        <div className="m-8">
           <Balance balance={balance} value={"10,000"}/>
           
           <Users/>
        </div>
    </div>
}