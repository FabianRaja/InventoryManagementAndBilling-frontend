export default function Cart(){
    return(
        <div className="cart-section text-center background-set">
  <h1 className="font-bold text-xl mt-10 mb-10">CART</h1>
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-center">
        <th></th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Quantity</th>
        <th>Add Product</th>
        <th>Remove Product</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="font-bold text-center">
        <th>1</th>
        <td>Monitor</td>
        <td>12000</td>
        <td>1</td>
        <td className="cursor-pointer">+</td>
        <td className="cursor-pointer">-</td>
      </tr>
    </tbody>
  </table>
</div>
<h2 className="mt-10 font-bold">TOTAL PRICE-  50000</h2>
<button className="btn btn-neutral mt-10">Get Bill</button>

</div>
    )
}