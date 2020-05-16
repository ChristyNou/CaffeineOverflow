export class Product {
    _id?: number;
    name: string;
    description: string;
    category: string;
    tags: string[];
    withdrawn?: boolean;
    extraData: {
      brand: string,
      quantity: string,
      typeOfQuantity: string,
      type: string
    } 
  }