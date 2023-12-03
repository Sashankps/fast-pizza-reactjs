import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const username = useSelector((store) => store.user.username);
  const cart = useSelector((store) => store.cart.cart);
  let isCartEmpty = false;
  if (cart.length === 0) {
    isCartEmpty = true;
  }
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  // const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      {isCartEmpty ? (
        <>
          <h1 className="mt-10 text-xl font-bold">
            Add pizzas to continue ordering{" "}
          </h1>
        </>
      ) : (
        <div className="mt-6 space-x-2">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>
          <Button onClick={clearCartHandler} type="secondary">
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];
