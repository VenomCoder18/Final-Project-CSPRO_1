import React, {useState} from "react";
import {fetchData, DataResponse} from "./DataManager.tsx";
import {Item, ItemPair} from './item.ts';


// shopping cart -- data structure
//                  item  and number--maybe use itempair code
//                  item type contains name cost and description

function Shop() {
    const [cart, setCart] = useState();

    return (
        <div>
            
        </div>
    );
}