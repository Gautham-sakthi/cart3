import React from 'react'

function Cart(props) {
    const totalPrice = props.array.reduce((a,c)=>a+c.price*c.count,0);
    console.log(totalPrice)
    return (
        <div>
            {props.array.map((el,index)=><div key={index}><p>{`product name: ${el.name}, total price is:${el.count*el.price}`}</p> <button onClick={()=>props.handleAdd(el)}>+</button> <button onClick={()=>props.handleRemove(el)}>-</button> {el.count} </div>)}
            <p>total price:{totalPrice}</p>
        </div>
    )
}

export default Cart
