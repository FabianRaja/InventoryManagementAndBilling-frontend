import WorkSpace from "../Components/WorkSpace";

export default function EditProductPage(){
    return(
        <div className="edit-product-section ">
            <WorkSpace>
                <div className="p-10 ml-80">
                <div className="card w-96 glass">
            <div className="card-body text-center ">
            <h2 class="card-title text-center justify-center ">EDITING A PRODUCT</h2>
            <form>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="number" placeholder="Product Quantity" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs mb-2" />
            <button className="btn glass w-44 mb-2">Submit Changes</button><br/>
            </form>
            </div>
            </div>
            </div>
           
          
            
            </WorkSpace>
        </div>
    )
}