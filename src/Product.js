import React from 'react'

function Product(props) {
    return (
        <div>
            <h2><font color="#3AC1EF">Name: {props.name}</font></h2>
            <p>price: {props.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <p>description: {props.description}</p>
            <hr/>
        </div>
    )
}

export default Product