import '../assets/css/woocommerce.css'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart,removeFromCartAll } from '../actions/cartActions'

const Cart = ({match, history}) => {
    const productId = match.params.id
    const dispatch = useDispatch()
    const [Count, setCount] = useState({});
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const onChange = (e,id) => dispatch(addToCart(id,Number(e.target.value)));
    console.log(Count)
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId))
        }
    }, [dispatch, productId])
    const removeFromCartAllHandler=() =>{
        dispatch(removeFromCartAll())
    };
    const removeFromCartHandler=(id) =>{
        dispatch(removeFromCart(id))
    };
    return ( 
        <div id="content" class="site-content">
        <div class="page-header flex-middle">
            <div class="container">
                <div class="inner flex-middle">
                    <h1 class="page-title">Cart Page</h1>
                    <ul id="breadcrumbs" class="breadcrumbs none-style">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Cart</li>
                    </ul>    
                </div>
            </div>
        </div>
        <section class="shop-cart">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <table class="shop-cart-table shop_table_responsive">
                            <thead>
                                <tr>
                                    <th class="product-name">Product</th>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-price-title">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Subtotal</th>
                                    <th class="product-remove">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cartItems.map(item =>(
                                <tr class="woocommerce-cart-form__cart-item cart_item">
                                    <td class="product-cart-item" data-title="Product">
                                        <div class="cart-item">
                                            <div class="thumb">
                                                <a href="single-product.html"><img src={item.image} alt=""/></a>
                                            </div>
                                            <div class="entry-header">
                                                <h6><a href="single-product.html">{item.name}</a></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="actions"></td>
                                    <td class="product-price" data-title="Price"><span class="amount"><span>$</span>{item.price}</span></td>
                                    <td class="product-quantity" data-title="Quantity">
                                        <div class="quantity">
                                            <input type="number" onChange={(e) => onChange(e,item.product)} id="quantity" class="input-text qty text" step="1" min={item.qty} name="cart"  placeholder={item.qty}/>
                                        </div>
                                    </td>
                                    <td class="product-subtotal" data-title="Subtotal"><span class="amount"><span>$</span>{item.price * item.qty}</span></td>
                                    <td class="product-remove actions"><Link to="/Cart" onClick={() => removeFromCartHandler(item.product)} class="remove"><i class="flaticon-close"></i></Link></td>
                                </tr>
                            ))}

                                <tr>
                                    <td colspan="6" class="actions text-right">
                                        <div class="coupon">
                                            <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="Coupon code"/> 
                                            <button type="submit" class="octf-btn button" name="apply_coupon" value="Apply coupon">Apply</button>
                                        </div>
                                        <button type="submit" class="octf-btn button disable" disabled name="update_cart" value="Update cart">Update cart</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="cart-collaterals">
                            <div class="cart_totals">
                                <h5>Cart totals</h5>
                                <table class="shop_table">
                                    <tbody>
                                        <tr class="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td data-title="Subtotal"><span class="amount"><span>$</span>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></td>
                                        </tr>
                                        <tr class="order-total">
                                            <th>Total</th>
                                            <td data-title="Total"><strong><span class="amount"><span>$</span>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="wc-proceed-to-checkout">
                                    <Link to="/Checkout" class="octf-btn checkout-button button alt wc-forward"> Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
     );
}
 
export default Cart;