import { bread, cheese, lettuce, milk, tomato } from './items';

// Create an interface called "Item" with the following variables and types:
// id: number
// name: string
// price: number

interface Item {
  id: number;
  name: string;
  price: number;
}

export class ShoppingCart {
  // Add the correct array type to cart
   cart: Item[] = [];

  // Add the correct return type
  getCostTotal() {
    const costTotal: number = this.cart.reduce((total: number, item: Item) => {
      total += item.price;
      return total;

    }, 0);
    return costTotal;
  }

  // Add the correct return type
  getNumberOfItems(): number {
    const cartLength = this.cart.length;
    return cartLength;
  }

  // Add the correct return type
  getCart(): Item[] {
    const thisCart = [...this.cart];
    return thisCart;
  }

  // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type
  addToCart(item: Item): void {
    const itemExists: (boolean | Item) = this.cart.find((currentItem) => {
      if (currentItem.id === item.id) {
        return true;
      }
    });
    if (!itemExists) {
      this.cart.push(item);
    }
  }

  // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type
  removeFromCart(item: Item) {
    const newCart: (boolean | Item[]) = this.cart.filter((currentItem) => {
      if (currentItem.id !== item.id) {
        return true;
      }
    });
    this.cart = [...newCart];
  }
}

// Examples, feel free to delete
const myCart = new ShoppingCart();
myCart.addToCart(bread);
myCart.removeFromCart(bread);
