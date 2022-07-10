import Product from "./Product";

export default function Main(props){


    return(
        <div>
            <h2>Product Details</h2>
            <div>
                {
                    props.products.map((pp,index)=> (
                        <Product key={pp.id} product={pp}></Product>
                    ))
                }
            </div>
        </div>
    )
}