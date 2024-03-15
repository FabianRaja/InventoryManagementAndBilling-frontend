import { useContext, useEffect } from "react"
import { AppCtx } from "../Context/AppContext"
import { activateAccount } from "../Helpers/helper";
import { useNavigate, useParams } from "react-router-dom";

export default function ActivationPage(){

    const {result,setResult,setSwitching}=useContext(AppCtx);

    const params=useParams();
    const id=params.id;
    const navigate=useNavigate();

    useEffect(()=>{
       activateAccount(id).then((response)=>setResult(response.message)).catch((response)=>setResult(response.message));
       setTimeout(()=>{
          navigate("/login");
          setSwitching("login")
       },5000)
    },[])
    return(
        <div className="activation-page-section background-set h-screen text-center">
            {result?<div><h1 className="pt-56 font-black uppercase">{result}</h1>
            <h2>Redirecting to login page in few seconds</h2></div>:""}
            
        </div>
    )
}