
export default function Basket(props) {
const {cartDetails,onAdd,onRemove,checkout}=props;      //de-structure 
const itemPrice = cartDetails.reduce((pre,curr)=>pre + curr.qty*curr.price , 0);
const taxPrice = itemPrice*0.18;
const shippingPrice = itemPrice > 15000?0:800;
const totalPrice = itemPrice+taxPrice+shippingPrice;
    return(
    <div>
            <h2>Cart Details </h2>
            {cartDetails.length==0 && <div>Cart is Empty</div>}
            {<div>
                <h4>Number Of items in cart {cartDetails.length}</h4>
                    {cartDetails.map(item=>(
                        <div>
                        <span>Name : {item.name}</span>
                        <span>Price : {item.price}</span>
                        <span>Qty : {item.qty}</span>
                        <input type="button" value="+" onClick={()=>onAdd(item)}/>
                        <input type="button" value="-" onClick={()=>onRemove(item)}/>
                        </div>
                    ))}
                    <hr/>
                    {
                        cartDetails.length!=0 && (
                            <div>
                                <span>Item Price : &#x20B9;{itemPrice}</span><br/>
                                <span>Tax Price : &#x20B9;{taxPrice}</span><br/>
                                <span>Shipping Price : &#x20B9;{shippingPrice}</span><br/>
                                <span>Total Price : &#x20B9;{totalPrice}</span><br/>
                            </div>
                        )
                    }
                    <br/>
                    <input type="button" value="Checkout " onClick={()=>checkout()}/>
            </div>}
    </div>
    )
}