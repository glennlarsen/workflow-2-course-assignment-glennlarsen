import { bread, cheese, lettuce, milk, tomato } from './items';
import { ShoppingCart } from './question-4';

//1
test("Add a single item to the cart", () => {
    const myCart = new ShoppingCart();
    myCart.addToCart(cheese);
    expect(myCart).toEqual({cart: [cheese]});
    expect(myCart.getCostTotal()).toBe(5.95);
    expect(myCart.getNumberOfItems()).toBe(1);
    expect(myCart.getCart()).toEqual([cheese]);
})

//2
test("Add 3 separate items to the cart", () => {
    const myCart = new ShoppingCart();
    myCart.addToCart(cheese);
    myCart.addToCart(bread);
    myCart.addToCart(lettuce);
    expect(myCart).toEqual({cart: [cheese, bread, lettuce]});
    expect(myCart.getCostTotal()).toBe(17.15);
    expect(myCart.getNumberOfItems()).toBe(3);
    expect(myCart.getCart()).toEqual([cheese, bread, lettuce]);
})

//3
test("Add 3 same items to the cart", () => {
    const myCart = new ShoppingCart();
    myCart.addToCart(cheese);
    myCart.addToCart(cheese);
    myCart.addToCart(cheese);
    expect(myCart).toEqual({cart: [cheese]});
    expect(myCart.getCostTotal()).toBe(5.95);
    expect(myCart.getNumberOfItems()).toBe(1);
    expect(myCart.getCart()).toEqual([cheese]);
})

//4
test("Add 2 separate items to the cart and remove a single item", () => {
    const myCart = new ShoppingCart();
    myCart.addToCart(cheese);
    myCart.addToCart(milk);
    myCart.removeFromCart(cheese);
    expect(myCart).toEqual({cart: [milk]});
    expect(myCart.getCostTotal()).toBe(19.99);
    expect(myCart.getNumberOfItems()).toBe(1);
    expect(myCart.getCart()).toEqual([milk]);
})