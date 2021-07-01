import React from 'react'

function Cart(props) {
    return (
        <div>
            {props.array.map((el,index)=><div key={index}><p>{el}</p></div>)}

        </div>
    )
}

export default Cart
