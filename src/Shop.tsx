import React, {useState} from 'react';
import Item, {ItemPair} from './item.ts';
export default Shop;

// Shop.tsx provides components of the Shop overlay, item counter, and shopping cart 
type ShopProps = {
    supply: Item[],
    itemUrl: string[]
}

type EntryProps={
    cart: ItemPair[],
    itemUrl: string[],
    addOne: (index: number)=>void,
    subOne: (index: number)=>void,
    itemClick:(newItem: Item, newCount: number)=>void,
    supply: Item[],
    count: number[],
    index: number
}

type CountProps= {
    addOne: (index: number)=>void,
    subOne: (index: number)=>void,
    count: number,
    index: number
}

type AddProps={
    itemClick: (newItem: Item, newCount: number)=>void,
    item: Item,
    count: number
}

export function Shop(props: ShopProps) {
    
    // Manually set supply defined in App.tsx
    const [cart, setCart] = useState<ItemPair[]>([
                                                    {item: props.supply[0], quantity: 0},
                                                    {item: props.supply[1], quantity: 0},
                                                    {item: props.supply[2], quantity: 0},
                                                    {item: props.supply[3], quantity: 0},
                                                    {item: props.supply[4], quantity: 0}]);
    // count will track how many items a user wants to put in a cart.
    // each element refers to a corresponding item possibility                                                
    const [count, setCount] = useState([0,0,0,0,0]);
    // count state needs +1 and -1 button, as well as pass to cart
    // here is functionality we can reuse
    const addOne: (index: number)=> void = function(index: number) { 
        if (index === 0) {
            setCount([count[0]+1,count[1],count[2], count[3], count[4] ]);
        } else if (index === 1) {
            setCount([count[0],count[1]+1,count[2], count[3], count[4] ]);             
        } else if (index === 2) {
            setCount([count[0],count[1],count[2]+1, count[3], count[4] ]);             
        } else if (index === 3) {
            setCount([count[0],count[1],count[2], count[3]+1, count[4] ]);             
        } else {
            setCount([count[0],count[1],count[2], count[3], count[4]+1 ]);             
        }
    }
    const subOne: (index: number)=> void = function(index: number) { 
        if (index === 0) {
            setCount([count[0]-1,count[1],count[2], count[3], count[4] ]);
        } else if (index === 1) {
            setCount([count[0],count[1]-1,count[2], count[3], count[4] ]);             
        } else if (index === 2) {
            setCount([count[0],count[1],count[2]-1, count[3], count[4] ]);             
        } else if (index === 3) {
            setCount([count[0],count[1],count[2], count[3]-1, count[4] ]);             
        } else {
            setCount([count[0],count[1],count[2], count[3], count[4]-1 ]);             
        }
    }
    // Passes items to cart and resets proper counter
    const itemClick: (newItem: Item, newCount: number)=> void = function(newItem: Item, newCount: number) {
        switch (newItem.name) {
            case cart[0].item.name:
                setCart([
                    {item: cart[0].item, quantity: cart[0].quantity+newCount},
                    cart[1], cart[2], cart[3], cart[4]
                ]);
                setCount([0,count[1],count[2], count[3], count[4] ]);
                break;
            case cart[1].item.name:
                setCart([
                    cart[0],
                    {item: cart[1].item, quantity: cart[1].quantity+newCount},
                    cart[2], cart[3], cart[4]
                ]);   
                setCount([count[0],0,count[2], count[3], count[4] ]);             
                break;
            case cart[2].item.name:
                setCart([
                    cart[0], cart[1],
                    {item: cart[2].item, quantity: cart[2].quantity+newCount},
                    cart[3], cart[4]
                ]);
                setCount([count[0],count[1],0, count[3], count[4] ]);             
                break;
            case cart[3].item.name:
                setCart([
                    cart[0], cart[1], cart[2],
                    {item: cart[3].item, quantity: cart[3].quantity+newCount},
                    cart[4]
                ]);
                setCount([count[0],count[1],count[2], 0, count[4] ]);             
                break;
            case cart[4].item.name:
                setCart([
                    cart[0], cart[1], cart[2], cart[3],
                    {item: cart[4].item, quantity: cart[4].quantity+newCount},
                ]);
                setCount([count[0],count[1],count[2], count[3], 0 ]);             
                break;
            // default should never trigger
            default:
                console.log("ERROR: ITEM OUT OF BOUNDS");
                break;    
        }
    };

    return (
        <div>
            <header style = {{fontSize: 40, textAlign: "center"}}>
                Item Shop
            </header>
            
            <p style={{margin: 15}}>

                <ItemEntry cart={cart} itemUrl={props.itemUrl} addOne={addOne} subOne={subOne} itemClick={itemClick} supply={props.supply} count={count} index={0}/>
                <ItemEntry cart={cart} itemUrl={props.itemUrl} addOne={addOne} subOne={subOne} itemClick={itemClick} supply={props.supply} count={count} index={1}/>
                <ItemEntry cart={cart} itemUrl={props.itemUrl} addOne={addOne} subOne={subOne} itemClick={itemClick} supply={props.supply} count={count} index={2}/>
                <ItemEntry cart={cart} itemUrl={props.itemUrl} addOne={addOne} subOne={subOne} itemClick={itemClick} supply={props.supply} count={count} index={3}/>
                <ItemEntry cart={cart} itemUrl={props.itemUrl} addOne={addOne} subOne={subOne} itemClick={itemClick} supply={props.supply} count={count} index={4}/>
                
                <span style={{fontWeight: "bold", fontSize: 20, textDecorationLine: 'underline'}}>
                    Your Cart:
                </span> <div/>
                {cart[0].item.name + ": " + cart[0].quantity} <div/>
                {cart[1].item.name + ": " + cart[1].quantity} <div/>
                {cart[2].item.name + ": " + cart[2].quantity} <div/>
                {cart[3].item.name + ": " + cart[3].quantity} <div/>
                {cart[4].item.name + ": " + cart[4].quantity}
                <p/>
                Total Cost: {   
                            cart[0].item.cost*cart[0].quantity +
                            cart[1].item.cost*cart[1].quantity +
                            cart[2].item.cost*cart[2].quantity +
                            cart[3].item.cost*cart[3].quantity +
                            cart[4].item.cost*cart[4].quantity
                }
                <div/>
                <button onClick={() => setCart([{item: cart[0].item, quantity: 0},
                                                {item: cart[1].item, quantity: 0},
                                                {item: cart[2].item, quantity: 0},
                                                {item: cart[3].item, quantity: 0},
                                                {item: cart[4].item, quantity: 0}])}> 
                    Empty Cart 
                </button>
            </p>
        </div>
    );
}

function ItemEntry(props: EntryProps) {
    return (
        <div>
            {/* Every item needs a title, image, description, cost, and proper buttons */}
            <span style={{fontWeight: "bold", fontSize: 24, textDecorationLine: 'underline'}}> 
                {props.cart[props.index].item.name} 
            </span> <div/>

            <img src={props.itemUrl[props.index]}/><div/>

            {props.cart[props.index].item.description} <div/>

            Cost: {props.cart[props.index].item.cost}

            <ItemCount addOne={props.addOne} subOne={props.subOne} count = {props.count[props.index]} index={props.index}/>
            <ItemAdd itemClick={props.itemClick} item={props.supply[props.index]} count={props.count[props.index]}/>
            <p/>
        </div>
    );
}

function ItemCount(props: CountProps) {
    return (
        <div>
            <button onClick= {()=> {props.subOne(props.index)}}>
                -1
            </button>
            {" " + props.count}  {/* UI could be better */}
            <button onClick={()=> {props.addOne(props.index)}}>
                +1
            </button>
        </div>
    );
}

function ItemAdd(props: AddProps) {
    // on click, adjust cart item count
    const handleClick=function() {
        props.itemClick(props.item, props.count);
    }
    return (
        <div>
            <button onClick={handleClick}>
                Add to cart
            </button>    
        </div>
    );
}