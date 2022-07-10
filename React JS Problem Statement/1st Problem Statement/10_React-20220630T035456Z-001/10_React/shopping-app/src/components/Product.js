


export default function Product(props){


    return(
        <div>
            <img src={props.product.image}  width="200p" height="200px"/>
            <span>Name :{props.product.name} Price : {props.product.price}</span>
            <input type="Button" value="Add To Cart" onClick=""/>
        </div>
    )
}