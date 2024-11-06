import { useState } from "react";

function ProductForm(props) {

    const [newTitle,setTitle]=useState('');   // abhi newTitle mein kuch bhi nhi stored hai bcz useState('')
    const [newDate,setDate]=useState('');
    // Ab jaise yaha par title aur date ko change kar rhe hai, agar bohot saare values ko change karna pada toh sabhi ke liye useState call nhi karege, uske liye objects ka kuch hota hai wo padhege

    function titleChangeHandler(event) { // onChange: Jab bhi kuch likhege toh ye execute hoga, titleChangeHandler is the name of the function. event as a parameter isliye pass kiye hai bcz wo values print kara rhe hai 
        console.log(event.target.value);
        setTitle(event.target.value);  // isse kya hoga ki input field par jo bhi likh rhe hai wo value ab newTitle mein stored hogi
    }

    function dateChangeHandler(event) { // event as a parameter pass kiye hai bcz tabhi niche event ko access kar payege
        console.log(event.target.value);
        setDate(event.target.value);
        console.log("Printing");
        console.log(newTitle);
        console.log(newDate); // jab humlog date print kara rhe hai toh date jo pichli baar select kiye the wo print hoga, try selecting dates 4-5 times, you'll get to know. Bcz useState doesnt change the values instantaneously, it schedules. Same should work with title if we console.log(title); in function titleChangeHandler(event)
    }

    // Kya ho rha hai ki agar kuch bhi title likh rhe hai ya phir date select kar rhe hai, agar uske baad add product par click kar rhe hai toh sab kuch remove ho ja rha hai jo ki uska default behaviour hai toh usko saved reakhne ke liye ye function likh rhe hai
    function submitHandler(event) {
        event.preventDefault();
        const productData= {   // creating an object, just to print its data. Object is a key value pair and key ka naam kuch bhi rakh skte hai
            title:newTitle,  // we can give any name to title like t, tit,... 
            date:newDate   // any name can be given to date also
        };
        console.log(productData);

        props.onSaveProduct(productData);
        
        // Ab humlog kya chahte hai ki add product click karne ke baad empty ho jaaye phir se toh...
        setTitle('');  // but ye karne se kuch nhi hoga bcz ye kya karega ki newTitle ko empty toh kar dega but wo UI par display nhi hoga kyuki newTitle aur newDate linked hi nhi hai toh niche jakar input tag mein value={newTitle} karna hoga
        setDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-product-title">
                <lable>Title</lable>
                <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-product-date">
                <label>Date</label>
                <input type="date" value={newDate} onChange={dateChangeHandler} min="2024-01-01" max="2025-01-01"></input>
            </div>
            <div className="new-product-button">
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;