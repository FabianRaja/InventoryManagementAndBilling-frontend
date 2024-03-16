import { createContext, useEffect, useState } from "react";
import { getAllData } from "../Helpers/helper";

export const AppCtx=createContext(null);

export default function AppContext({children}){
    const [result,setResult]=useState();
    const [switching,setSwitching]=useState();
    const [loading,setLoading]=useState("off");
    const [data,setData]=useState();
    const [productName,setProductName]=useState();
    const [productQuantity,setProductQuantity]=useState();
    const [productPrice,setProductPrice]=useState();
    const [cartObj,setCartObj]=useState([]);
    const [confirm,setConfirm]=useState("off");
    const [cartCount,setCartCount]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    useEffect(async()=>{
        if(localStorage.getItem("id")){
            const object={
                id:localStorage.getItem("id")
            }
            await getAllData(object).then(async(response)=>{
                if(response.message==="all product fetched Successfully"){
                    const object=response.data;
                    object.sort((a,b)=>{
                        const nameA=a.productName.toLowerCase();
                        const nameB=b.productName.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    })
                    setData(object);
                }else{
                    console.log(response.message);
                }
                }).catch((response)=>{console.log(response.message)
                window.location.reload();
                });
        }
                
    },[])
    return(
        <AppCtx.Provider
        value={{result,setResult,switching,setSwitching,loading,setLoading,data,productName,productQuantity,productPrice,setProductName,setProductPrice,setProductQuantity,cartObj,setCartObj,confirm,setConfirm,cartCount,setCartCount,totalPrice,setTotalPrice}}
        >
            {children}
        </AppCtx.Provider>
    )
}