import { useNavigate } from "react-router-dom";
import WorkSpace from "../Components/WorkSpace";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { deleteProduct } from "../Helpers/helper";
import Swal from "sweetalert2";


export default function DashboardPage(){

  const navigate=useNavigate();

  const {data,setProductName,setProductPrice,setProductQuantity,cartObj,cartCount,setCartCount}=useContext(AppCtx);
  
 
  let quantity=0;
  if(data){
       quantity=data.reduce((accumulator,value,index)=>{
        return accumulator+=value.productQuantity
       },0)
  };
  let value=0;
  if(data){
       value=data.reduce((accumulator,value,index)=>{
        return accumulator+=(value.productPrice*value.productQuantity)
       },0)
  }

  async function deleteFunction(productName){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if(result.isConfirmed) {
        const object={
          productName,
          id:localStorage.getItem("id")
        };
        await deleteProduct(object).then((response)=>{console.log(response.message)}).catch((response)=>console.log(response.message));
        await Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted",
          icon: "success"
        });
        window.location.reload();
      }
    });
 
  }
  function editFunction(name,quantity,price){
    setProductName(name);
    setProductQuantity(quantity);
    setProductPrice(price);
    navigate("/editproduct");
  }

  async function addToCartFunction(name,quantity,price){
    //preventing from adding same product in cart multiple times
        const a=cartObj.find((value,index)=>{
          if(value.productName===name){
            return "yes"
          }
        });
        if(!a){

          await Swal.fire({
            title: `Available Quantity - ${quantity}`,
            input: "number",
            inputAttributes: {
              autocapitalize: "off",
              max:quantity,
              min:1
            },
            showCancelButton: true,
            confirmButtonText: "Add To Cart",
            showLoaderOnConfirm: true,
            preConfirm: async (customQuantity) => {
              let quantity=!customQuantity?1:customQuantity;
                const obj={
                  description:name,
                  quantity,
                  price,
                  taxRate:18
                };
               cartObj.push(obj);
            },
          }).then(async(result) => {
            if (result.isConfirmed) {
              setCartCount(cartCount+1);
              await Swal.fire("Product Added To Cart Successfully", "", "success");
            }
          });
        }
        
 }

  useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/")
    };
    setProductName("");
    setProductQuantity("");
    setProductPrice("");
},[])

    return(
        <div className="dashboard-section text-center">
            <WorkSpace>
                
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-4 mb-4">
            <div className="stats glass">
  
            <div className="stat place-items-center">
                <div className="stat-title font-black">TOTAL PRODUCTS</div>
                <div className="stat-value text-xl">{data?data.length:0}</div>
            </div>
            
            <div className="stat place-items-center">
                <div className="stat-title font-black">TOTAL QUANTITY</div>
                <div className="stat-value text-xl">{quantity}</div>            
            </div>
            
            <div className="stat place-items-center">
                <div className="stat-title font-black">TOTAL STORE VALUE</div>
                <div className="stat-value text-xl">{value}</div>
            </div>
            
            </div>
            </div><hr/>
        
            <div className="overflow-x-auto">
  <table className="table table-xs background-set text-center">
    <thead>
      <tr>
        <th></th> 
        <th>Product Name</th> 
        <th>Quantity In Stock</th> 
        <th>Product Price</th> 
        <th>Action</th> 
        <th>Action</th>
        <th>Buy</th> 
      </tr>
    </thead> 
      {data?data?.map((value,index)=>(
         <tbody className="font-bold" key={index}>
        <tr>
        <th>{index+1}</th> 
        <td className="uppercase">{value.productName}</td> 
        <td>{value.productQuantity}</td> 
        <td>{value.productPrice}</td> 
        <td className="cursor-pointer" onClick={()=>editFunction(value.productName,value.productQuantity,value.productPrice)}>EDIT</td> 
        <td className="cursor-pointer" onClick={()=>deleteFunction(value.productName)}>DELETE</td> 
        <td className="cursor-pointer uppercase" onClick={()=>addToCartFunction(value.productName,value.productQuantity,value.productPrice)}>Add to Cart</td> 
      </tr>
      </tbody> 
      )):""}
    
  </table>
</div>

{/* <div className="toast toast-center">
  <div className="alert alert-neutral pl-8">
    <span>Product added successfully</span>
  </div>
</div> */}



            </WorkSpace>
        </div>
    )
}