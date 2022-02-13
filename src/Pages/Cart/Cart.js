import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../../features/cartSlice";
import CheckoutModal from '../Checkout/CheckoutModal/CheckoutModal';

import { Link } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import { Button } from "@mui/material";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [openCheckout, setOpenCheckout] = useState(false);
    const handleCheckoutOpen = () => setOpenCheckout(true);
    const handleCheckoutClose = () => setOpenCheckout(false);


    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <>
            <Navigation></Navigation>
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="titles">
                            <h3 className="product-title">Product</h3>
                            <h3 className="price">Price</h3>
                            <h3 className="quantity">Quantity</h3>
                            <h3 className="total">Total</h3>
                        </div>
                        <div className="cart-items">
                            {cart.cartItems &&
                                cart.cartItems.map((cartItem) => (
                                    <div className="cart-item" key={cartItem._id}>
                                        <div className="cart-product">
                                            <img src={cartItem.img} alt={cartItem.product_name} />
                                            <div>
                                                <h3>{cartItem.product_name}</h3>
                                                <p>{cartItem.categories}</p>
                                                <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">${cartItem.sell_price}</div>
                                        <div className="cart-product-quantity">
                                            <button onClick={() => handleDecreaseCart(cartItem)}>
                                                -
                                            </button>
                                            <div className="count">{cartItem.cartQuantity}</div>
                                            <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                        </div>
                                        <div className="cart-product-total-price">
                                            ${cartItem.sell_price * cartItem.cartQuantity}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="cart-summary">
                            <button className="clear-btn" onClick={() => handleClearCart()}>
                                Clear Cart
                            </button>
                            <div className="cart-checkout">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span className="amount">${cart.cartTotalAmount}</span>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Button onClick={handleCheckoutOpen} className='button-design fw-bold' variant='contained'>Checkout</Button>
                                <CheckoutModal
                                    cart={cart}
                                    handleCheckoutClose={handleCheckoutClose}
                                    openCheckout={openCheckout}
                                >
                                </CheckoutModal>
                                <div className="continue-shopping">
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;