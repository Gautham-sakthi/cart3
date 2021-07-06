import React,{useState} from 'react'

function Products(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    function nameChange(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    function costChange(event){
        console.log(event.target.value)
        setPrice(event.target.value)
    }
    function handleButton(){
        if(name===''){
            alert('must enter name')
        }
        if(price===''){
            alert('must enter price')
        }
        console.log('name:',name);
        console.log('price:',price);
        props.settingProduct([...props.array,{name:name,price:price,count:1}])
    }
    return (
        <div>
            <h1>Add new items in product</h1>
            <input type='text' placeholder='itemname' onChange={(event)=>nameChange(event)}></input><br/>
            <input type='text' placeholder='price' onChange={(event)=>costChange(event)}></input><br/>
            <button type='button' onClick={handleButton}>add new item in product</button>
            <hr/>
            <h1>Default product list</h1>
            {props.array.map((el,index)=><div key={index}><p>{`item name: ${el.name} price: $${el.price}`}</p><button onClick={()=>props.handleAddtoCart(el)}>Add</button></div>)}
        </div>
    )
}

export default Products
