import React from "react";
import bag1 from "../assets/bag_1.png";

function Product({span, image, name, price}) {
    return (
        <article>
            <span>{span}</span>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product