export type Item = {

    "name": string;
    "description": string;
    "cost": number;
}

export class ItemPair {
    
    item: Item;
    quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }

    getItem(): Item {
        return this.item;
    }
    setItem(item: Item): void {
        this.item = item;
    }
    getQuantity(): number {
        return this.quantity;
    }
    setQuantity(quantity: number) {
        this.quantity = quantity;
    }
}