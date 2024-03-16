import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { billProduct } from "../Helpers/helper";
import easyinvoice from 'easyinvoice';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart(){

  const {cartObj,setCartObj,cartCount,setCartCount,totalPrice,setTotalPrice,loading,setLoading}=useContext(AppCtx);

  const navigate=useNavigate();

  async function removeFunction(name){


    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then(async(result) => {
      if(result.isConfirmed) {
            const filterData=cartObj.filter((value,index)=>value.description!=name);
            await setCartObj(filterData);
            await setCartCount(cartCount-1);
            if(filterData.length!=0){
              const price=filterData.reduce((accumulator,value,index)=>{
                return accumulator+=(value.quantity*value.price)
            },0)
            await setTotalPrice(price);
            }else{
              setTotalPrice(0);
            }
        await Swal.fire({
          title: "Removed!",
          text: "Product has been removed from cart",
          icon: "success"
        });
      }
    });
  }

     

  async function billProductFunction(){
    setLoading("on");
    const object={
      id:localStorage.getItem("id"),
      billData:cartObj
    };
    await billProduct(object).then((response)=>console.log(response.message)).catch((response)=>console.log(response.message));

    var data = {
      apiKey: "free", // Please register to receive a production apiKey: https://app.budgetinvoice.com/register
      mode: "development", // Production or development, defaults to production
      products:cartObj
    };
  
    await easyinvoice.createInvoice(data,function(result){
      easyinvoice.download("Bill.pdf",result.pdf)
    })
    await setLoading("off");
    setTimeout(()=>{
      navigate("/dashboard");
      window.location.reload();
    },2000)
  }
  useEffect(()=>{
        if(cartObj.length!=0){
          const price=cartObj.reduce((accumulator,value,index)=>{
            return accumulator+=(value.quantity*value.price)
           },0);
           setTotalPrice(price);
        }else{
          setTotalPrice(0)
        }
        setLoading("off")
  },[])
  
  
  return(
        <div className="cart-section text-center background-set">
  <h1 className="font-bold text-xl mt-10 mb-10">IN CART</h1>
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-center">
        <th></th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    {cartObj?cartObj?.map((value,index)=>(
      <tbody key={index}>
      <tr className="font-bold text-center">
        <th>{index+1}</th>
        <td className="uppercase">{value.description}</td>
        <td>{value.price}</td>
        <td>{value.quantity}</td>
        <td className="cursor-pointer uppercase" onClick={()=>removeFunction(value.description)}>Remove</td>
      </tr>
    </tbody>
    )):""}
  </table>
</div>
<h1 className="font-bold mt-5 uppercase">Total Price - {totalPrice}</h1>
<button className="btn btn-neutral mt-5" onClick={()=>billProductFunction()}>{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Get Bill"}</button>

</div>
    )
}