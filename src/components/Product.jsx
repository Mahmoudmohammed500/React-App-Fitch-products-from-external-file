import '../components/product.css';
function Product(props) {
    return (
        <div className="Card" key={props.product.id}>
                <img src={props.product.image} alt="" />
                <h1>{props.product.title}</h1>
                <h3>{props.product.description}</h3>
                <p>price : {props.product.price}</p>
                <button onClick={() => {
                    console.log("You bought product that price is", props.product.price);
                }}>  Buy this product</button>
            </div>
    );
}
export default Product;