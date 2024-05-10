import React from "react";
import productsData from '../productsdata';
import Product from './Product';
function Productslist() {
    const products = productsData.map((product) => {
        return (
            /*
            If You need to display products that price is less than  20 write this code...
           product.price < 20 ? <Product product={product} key={product.id}/> : null
           */
            <Product product={product} key={product.id} />
        )
    });
    return (
        <div className="ProductsList">
            <div className="row">
                {products}
            </div>
        </div>


    );
};

export default Productslist;