/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)



const Cart =  Ember.Object.extend({
  orders: [],
  addToCart(item) {
    this.orders.push(item);
    return ("Added " + item.description + "to the cart.");
  },

  totalPrice: Ember.computed('orders.@each.price', function() {
    let sum = orders.map((order) => order.price * order.quantity).reduce((a,b) => a+b);
    return sum;
  })
});

let mycart = Cart.create({
  orders: [
    Ember.Object.create({quantity: 2, price: 5, description: "Hats"}),
    Ember.Object.create({quantity: 1, price: 20, description: "Desk Lamp"}),
    Ember.Object.create({quantity: 3, price: 8, description: "Hand Towels"}),
  ]
});
