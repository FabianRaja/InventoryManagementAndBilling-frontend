import { useEffect } from "react";
import Cart from "../Components/Cart";
import WorkSpace from "../Components/WorkSpace";


export default function CartPage(){

    

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/")
        }
    },[])

    return(
        <div className="cart-page-section">
            <WorkSpace>
                <Cart/>
            </WorkSpace>
        </div>
    )
}