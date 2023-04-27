export default Item;

export type Item = {

    "name": string;
    "description": string;
    "cost": number;
    "url": string;
}

export type ItemPair = {
    
    item: Item;
    quantity: number;    
}