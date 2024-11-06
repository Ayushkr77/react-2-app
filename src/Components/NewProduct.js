import ProductForm from "./ProductForm";

function NewProduct(props) {

    function saveProduct(product) {
        console.log("I am inside NewProduct.js");
        console.log(product);
        props.ayush(product);  // calling parent function
    }

    return(
        <div className="new-product">
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    )
}
export default NewProduct;