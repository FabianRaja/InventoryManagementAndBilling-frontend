import { useNavigate } from "react-router-dom";
import Background from "./Background";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";

export default function BasePage({children}){

    const navigate=useNavigate();

    const {setResult,switching,setSwitching}=useContext(AppCtx);

    useEffect(()=>{
           setResult("");
    },[])
    return(
        <div className="base-page-section">
            <Background>
            <div className="grid grid-cols-2 gap-4 text-center items-center h-screen">
            <div className="p-10">
                <b className="font-black text-xl">Inventory Management and Billing Application</b>
                <p>Inventory System to control and manage products in the warehouse in real time and integrated to make it easier to develop your business</p>

            </div>

            <div>

            <div className="card w-96 glass">
            <div className="card-body">
                
            <div className="join grid grid-cols-2">
            <button className={switching==="register"?"join-item btn btn-outline  bg-neutral text-base-100 border-0 font-bold":"join-item btn btn-outline font-bold"} onClick={()=>{
                navigate("/");
                setSwitching("register")
                }}>Register</button>
            <button className={switching==="login"?"join-item btn btn-outline bg-neutral text-base-100 border-0 font-bold":"join-item btn btn-outline font-bold"} onClick={()=>{
                navigate("/login");
                setSwitching("login");
                }}>Login</button>
            </div>
            {children}
            
            <div className="card-actions justify-end">
            </div>
            </div>
            </div>

            </div>

            </div>
            </Background>
        </div>
    )
}