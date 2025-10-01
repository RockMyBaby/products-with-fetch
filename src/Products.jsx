import React, { useEffect, useState, } from "react";
import { useAppContext } from "./store";
import StarRating from "./StarRating";
import './Products.css';

export const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    console.log(products)
    const {totalPrice, totalItems, product,setProduct,setTotalPrice,setTotalItems} = useAppContext();
    console.log(totalPrice,totalItems,product)

    const handleAddToCart = (item) => {
        console.log(item);
        if(product.some((prod)=>prod.name===item.title)){
            product.forEach(element => {
                if(element.name===item.title){
                    element.quantity = element.quantity ? element.quantity + 1 : 2;
                    setProduct([...product,] )
                }
            });
        }else{
            setProduct([...product,{name:item.title,quantity: 1, price:item.price, id:item.id}]);
        }
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + item.price);
    }

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
                           return <li key={item.id}>
                                <div className="product-card">
                                    <div><img height="200px" width="150px" src={item.images} ></img></div>
                                    <div>{item.title}</div>
                                    <div>Price :- ${item.price}</div>
                                    <div style={{fontStyle:"italic",fontSize:"15px",marginTop:"20px",marginBottom:"20px"}}>"{item.description}"</div>
                                    <StarRating rating={item.rating} />
                                    <div><button  onClick={()=>handleAddToCart(item)}>Add To Cart</button></div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>)}
        </div>
    )
}