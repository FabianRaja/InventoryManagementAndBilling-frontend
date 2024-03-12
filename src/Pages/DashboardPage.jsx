import WorkSpace from "../Components/WorkSpace";

export default function DashboardPage(){
    return(
        <div className="dashboard-section text-center">
            <WorkSpace>
                
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-4 mb-4">
            <div className="stats shadow skeleton">
  
            <div className="stat place-items-center">
                <div className="stat-title font-black">Total Products</div>
                <div className="stat-value">18</div>
            </div>
            
            <div className="stat place-items-center">
                <div className="stat-title font-black">Total Quantity</div>
                <div className="stat-value">44</div>            
            </div>
            
            <div className="stat place-items-center">
                <div className="stat-title font-black">Total Store Value</div>
                <div className="stat-value">60000</div>
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
    <tbody className="font-bold">
      <tr>
        <th>1</th> 
        <td>MotherBoard</td> 
        <td>12</td> 
        <td>9902</td> 
        <td className="cursor-pointer font-black">EDIT</td> 
        <td className="cursor-pointer font-black">DELETE</td> 
        <td className="cursor-pointer font-black">Add to Cart</td> 
      </tr>
    </tbody> 
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