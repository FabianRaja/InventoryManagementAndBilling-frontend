import Cart from "../Components/Cart";
import WorkSpace from "../Components/WorkSpace";

export default function CartPage(){
    return(
        <div className="cart-page-section">
            <WorkSpace>
                <Cart/>
            </WorkSpace>
        </div>
    )
}