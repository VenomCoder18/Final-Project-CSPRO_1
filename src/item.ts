export type Item = {

    "name": string;
    "description": string;
    "cost": number;
}

export type ItemPair = {
    
    item: Item;
    quantity: number;    
}
export default Item;