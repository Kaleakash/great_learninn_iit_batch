import Product from "./Product"

export default function Main(props) {
    const {products,onAdd}=props;           //de-structure 
    return(
        <div>
            <h2>Main components</h2>
            {/* {
                props.products.map((product)=> 
                <Product key={product.id} product={product} onAdd={props.onAdd}></Product>
                )
            } */}
            {
                products.map((product)=> 
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                )
            }
        </div>
    )
}