import React from 'react'

function Products(props) {
    return (
        <div>
            {props.array.map((el,index)=><div key={index}><p>{el}</p><button onClick={()=>props.handleAddtoCart(el)} >Add</button></div>)}
        </div>
    )
}

export default Products
