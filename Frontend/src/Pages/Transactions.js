//In the name of Allah

import { useEffect, useState } from "react";
const axios = require('axios').default;



export default function Transactions() {
    let [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    function getTransactions(){
        let getTransactionsUrl = "http://127.0.0.1:5212/transaction/get";
        axios.get(getTransactionsUrl)
            .then((response) => {
                if (response.status === 200) {
                    setTransactions(transactions = response.data);
                    console.log(transactions);
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios
    }//func

    return (
        <div>
            <h1>Transactions</h1>
            <ul>{transactions.map((val, index) => {
                return <div> <li key={index}>{"ProductID : " + val.productId +" | "+ "TransactionID : " + val.transactionId + " | Price : " + val.price}</li>
                </div>
            })}</ul>
        </div>
    );
}//func