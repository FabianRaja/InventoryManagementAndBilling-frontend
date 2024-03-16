import { useFormik } from "formik";
import WorkSpace from "../Components/WorkSpace";
import { editSchema } from "../Helpers/Schema";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { editProduct } from "../Helpers/helper";
import { useNavigate } from "react-router-dom";

export default function EditProductPage(){

    const {productName,productQuantity,productPrice,result,setResult,loading,setLoading}=useContext(AppCtx);
    const navigate=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/")
        };
        setResult("");
        setLoading("off")
    },[])

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            oldProductName:productName,
            productName:productName,
            productQuantity:productQuantity,
            productPrice:productPrice,
            id:localStorage.getItem("id")
        },
        validationSchema:editSchema,
        onSubmit:(object)=>{
            setLoading("on")
            editProduct(object).then((response)=>{
                setTimeout(()=>{
                    setLoading("off");
                    setResult(response.message);
                },1000);
                setTimeout(()=>{
                    navigate("/dashboard");
                    window.location.reload();
                },2000)
            }).catch((response)=>{
                setTimeout(()=>{
                    setLoading("off")
                    setResult(response.message);
                },1000)  
            });
        }
    })

    return(
        <div className="edit-product-section ">
            <WorkSpace>
                <div className="background-set">
                <div className="content-center-section mt-10">
                <div className="card w-96 glass">
            <div className="card-body text-center ">
            <h2 className="card-title text-center justify-center ">EDITING A PRODUCT</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-2"  value={values.productName} onChange={handleChange} onBlur={handleBlur} name="productName"/>
            {touched.productName && errors.productName?(<div className="font-bold text-xs mb-1">{errors.productName}</div>):("")}
            <input type="number" placeholder="Product Quantity" className="input input-bordered w-full max-w-xs mb-2" value={values.productQuantity} onChange={handleChange} onBlur={handleBlur} name="productQuantity" />
            {touched.productQuantity && errors.productQuantity?(<div className="font-bold text-xs mb-1">{errors.productQuantity}</div>):("")}
            <input type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs mb-2" value={values.productPrice} onChange={handleChange} onBlur={handleBlur} name="productPrice" />
            {touched.productPrice && errors.productPrice?(<div className="font-bold text-xs mb-1">{errors.productPrice}</div>):("")}
            <button className="btn glass w-44 mb-2" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Submit Changes"}</button><br/>
            {result?(<div className="font-bold text-sm mt-3 capitalize">{result}</div>):""}
            </form>
            </div>
            </div>
            </div>
                </div>
                
           
          
            
            </WorkSpace>
        </div>
    )
}