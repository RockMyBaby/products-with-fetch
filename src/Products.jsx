import React, { useEffect, useState } from "react";
import './Products.css';

export const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await fetch('https://dummyjson.com/products');
                if(!response.ok){
                    throw new Error('Got Error')
                }
                const data = await response.json();
                console.log(data.products)
                setProducts(data.products);
                setLoading(false)
            }catch(e){
                setLoading(false)
            }
        }
        fetchProduct();
    },[])

    return(
        <div>
            {loading ? 
                <div>Loading...</div> : (<div>
                    <ul className="product-list">
                        {products.map((item)=>{
                           return <li key={item.id}>{item.title}</li>
                        })}
                    </ul>
                </div>)}
        </div>
    )
}