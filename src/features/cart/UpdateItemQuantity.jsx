import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuanityt,
  increaseItemQuantity,
  removeItem,
} from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const cart = useSelector((store) => store.cart.cart);
  const pizza = cart.find((item) => item.pizzaId === pizzaId);
  let tempQuanity = pizza.quantity;
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (tempQuanity === 1) {
      dispatch(removeItem(pizzaId));
    }
    dispatch(decreaseItemQuanityt(pizzaId));
  };
  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        disabled={tempQuanity === 0}
        onClick={decreaseQuantity}
        type="round"
      >
        -
      </Button>
      <p>{pizza.quantity}</p>
      <Button onClick={increaseQuantity} type="round">
        +
      </Button>
    </div>
  );
}
