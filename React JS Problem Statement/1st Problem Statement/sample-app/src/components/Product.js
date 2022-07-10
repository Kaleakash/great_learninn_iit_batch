export default function Product(props){
    const {product,onAdd}= props; // de-structure 
    return(
        
        <div>
            {/* <img src={props.product.image} width="200px" height="200px"/>
            <div>
                <span>Name : {props.product.name} Price : {props.product.price}</span>
            </div>
            <div>
                <input type="button" value="Add To Cart" onClick={()=>props.onAdd(props.product)}
                />
            </div> */}
             <img src={product.image} width="200px" height="200px"/>
            <div>
                <span>Name : {product.name} Price : {product.price}</span>
            </div>
            <div>
<input type="button" value="Add To Cart" onClick={()=>onAdd(product)}
                className="btn btn-success"/>
            </div>
        </div>
    )
}