import {Link,Redirect} from 'react-router-dom';
import { Fragment } from 'react';
const Product = ({ product,history }) =>{
const addToCartHandler=(id) =>{
        history.push(`/cart/${product._id}`)
};
const outOfStock= () =>(
<Fragment>
<button onClick={() => addToCartHandler(product._id)}  class="octf-btn button disable"  >Add to cart </button>
</Fragment>


);
const notOutOfStock= () =>(
<Fragment>
<button onClick={() => addToCartHandler(product._id)}  class="octf-btn octf-btn-primary " >Add to cart </button>
</Fragment>

);
const isOutOfStock= (stock) =>{
if(stock <= 0) return true;
return false;
};

    return(

                        <div class="col-md-4 col-sm-6">
                            <div class="product-item">
                                <div class="product-media">
                                    <Link to={`/product/${product._id}`}>
                                        <img  src={product.image} class="" alt=""/>
                                    </Link>
                                    <div class="wrapper-add-to-cart">
                                        <div class="add-to-cart-inner">
                                            {isOutOfStock(product.countInStock) ? outOfStock() : notOutOfStock() }
                                        </div>
                                    </div>
                                </div>
                                <h2 class="woocommerce-loop-product__title"><a href="single=product.html">{product.name}</a></h2>
                                <div class="star-rating">
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                </div>
                                <span class="price-product"><span class="amount"><span>$</span>{product.price}</span></span>
                            </div>
                        </div>


            );

};
export default Product;