//In the name of Allah
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
const axios = require('axios').default;



export default function Count(){
    let [products,setProducts] = useState([{'id':'','name':'','price':0.0}]);
    let navigate = useNavigate();


    useEffect(()=>{
        getProducts();
    },[]);//useEffect

    function getProducts(){
        let getProductsUrl = "http://127.0.0.1:5212/product/get";
        axios.get(getProductsUrl)
            .then((response) => {
                if (response.status === 200) {
                    setProducts(products = response.data);
                    console.log(products);
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios
    }//func


    function addProductHandler(){
        navigate('/product/add');
    }//func
    function editProductHandler(event,param){
        navigate('/product/edit',{state:{name:param}});
    }//func

    function getTransactionHandler(){
        navigate('/transaction/get');
    }//func

    function removeProductHandler(event,param){
        let removeProductsUrl = "http://127.0.0.1:5212/product/remove?productName="+param;
        axios.delete(removeProductsUrl)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    window.location.reload(false);
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios
        
    }//func

    function sellProductHandler(event,param){
        let transaction = {
            "userDTO":{"name":"xem","password":"xem"},
            "productDTOs":[
                           {"name":param,"price":0}
                          ]
          };
          console.log(transaction);
        let sellProductsUrl = "http://127.0.0.1:5212/transaction/add";
        axios.post(sellProductsUrl,transaction)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Transaction : "+response.data);
                    removeProductHandler(event,param);
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios
        
    }//func

    return (
        <div className='Count'>
            <h1>Dashboard</h1>
            <button onClick={addProductHandler} >Add Product</button>
            <button onClick={getTransactionHandler} >Transactions</button>

            <div>
                <ul>{products.map((val,index)=>{ 
                    return <div> <li key={index}>{"name : "+val.name +" | price : "+val.price}</li> 
                    <button onClick={event=>editProductHandler(event,val.name)}>Edit Product</button>
                    <button onClick={event=>removeProductHandler(event,val.name)}>Remove Product</button>
                    <button onClick={event=>sellProductHandler(event,val.name)}>Sell</button>
                    </div>})}</ul>
            </div>
        </div>
    );
}//func
