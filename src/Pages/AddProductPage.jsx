import WorkSpace from "../Components/WorkSpace";

export default function AddProductPage(){
    return(
        <div className="add-product-section ">
            <WorkSpace>
                <div className="p-10 ml-80">
                <div className="card w-96 glass">
            <div className="card-body text-center ">
            <h2 class="card-title text-center justify-center ">ADDING A PRODUCT</h2>
            <form>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="number" placeholder="Product Quantity" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs mb-2" />
            <button className="btn glass w-44 mb-2">Add Product</button><br/>
            </form>
            </div>
            </div>
                </div>
           
          
            
            </WorkSpace>
        </div>
    )
}