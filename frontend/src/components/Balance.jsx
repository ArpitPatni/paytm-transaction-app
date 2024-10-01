import axios from "axios"
import { useEffect, useState } from "react"

export const Balance = ({ value }) => {
    const[money,setMoney]=useState(100)

   useEffect(() => {
     const fetchBalance = async () => {
       try {
         const response = await axios.get(
           "http://localhost:3000/api/v1/account/balance",
           {
             headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
             },
           }
         );
         setMoney(Math.floor(response.data.balance));
       } catch (error) {
         console.error("Error fetching balance:", error);
       }
     };

     fetchBalance();
   }, []);
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {money}
        </div>
    </div>
}