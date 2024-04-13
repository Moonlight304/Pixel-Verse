import { useRecoilValue } from "recoil";
import { Cart } from '../store/atoms/Cart.jsx'

export function CartPage() {
    const cart = useRecoilValue(Cart);
    console.log({ cart });

    return (
        <>
            <h1> Carts :  </h1>
        </>
    );
}