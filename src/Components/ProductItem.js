import React, {useState} from "react"; // useState for state
// useState is a hook that returns an array with two elements: the current state value and a function to update that state(or value).

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem=(props) => {

    const [title,setTitle]=useState(props.title);  // Abhi title mein maggi, tide jo bhi hai wo store rahega par click karne ke baad title ko PopCorn set kar dege. SetTitle do kaam karta haipehle toh titel ko popcorn mein change kar dega aur phir dobara se render karega(re-render) toh popcoen mein change ho jayega aur UI mein humlog ko popcorn dikhega. useState mein wo value jata hai jisse humlog initialize karana chahte hai yaha par jo ki props.title hai aur wo 2 chiz return karta hai, pehla jo bhi value hai aur doosra jo valye mein update karna hai. Here setTitle is a function.
    // We are using const and then changing the state still its working bcz the const keyword is about keeping the reference to the state consistent, not the value itself. The state value can change without causing an error.

    function clickHandler() { // Event listener in react. Niche jab humlog onClick={clickHandler} likh rhe hai agar uski jagah onClick={clickHandler()} likh dege toh jab humlog click nhi bhi karege toh bhi function call ho jayega. Aur aisa zaruri nhi hai ki function ka naam handler se end kare but convention hai jaise clickHandler
        // title="PopCorn";  will not work
        setTitle("PopCorn"); // say agar uppar const title=props.title hota aur yaha agar humlog title="Popcorn" likhte toh tutle variable mein toh ab Popcorn stored hota but UI mein humlog ko button click kaene ke baad Popcorn nhi dikhta bcz React single time render karta hai. Toh UI mein change karne ke liye matlab click karne ke baad Popcorn dikhne ke liye humlog ko useState ka concept use karna hoga. Agar humlog state ka concept use karege toh UI phir se rerender hoga aur humlog ko UI mein change dekhne ko milega, we had to import useState. setTitle title variable mein bhi value change kar dega aur UI mein bhi
        console.log("Button clicked");
    }
    return (
        <Card className="product-item">
            <ProductDate date={props.date}/>
            <div className="product-item_description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>  
        </Card>
    );
}
export default ProductItem;