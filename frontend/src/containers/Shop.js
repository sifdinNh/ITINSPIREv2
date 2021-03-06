import '../assets/css/woocommerce.css';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product';
import { listProducts } from '../actions/productActions'

const Shop = ({history}) => {
const dispatch = useDispatch()
const productList = useSelector(state => state.productList)
const { error, loading, products } = productList
useEffect(() =>{
dispatch(listProducts())


},[dispatch])
    return ( 
         
  <div id="content" class="site-content">
   
  <div class="shop-catalog">
    <div class="container">
        <div class="row">
            <div class="widget-area primary-sidebar col-lg-3 col-md-12 col-sm-12">
                <aside id="search-2" class="widget widget_search">
                    <form role="search" method="get" id="search-form" class="search-form">
                        <input type="search" class="search-field" placeholder="Search…" value="" name="s" />
                        <button type="submit" class="search-submit"><i class="ri-search-line"></i></button>
                    </form>
                </aside>
                <aside class="widget widget_categories">
                    <h5 class="widget-title">catégories</h5>
                    <ul>
                        <li><a href="#">accessoires</a> <span class="posts-count">(4)</span></li>
                        <li><a href="#">impression numérique</a> <span class="posts-count">(4)</span></li>
                  
                        
                    </ul>
                </aside>
                <aside class="widget widget_products">
                    <h5 class="widget-title">en solde</h5>
                    <ul class="popular-product clearfix">
                        <li class="clearfix"> 
                            <div class="thumb">
                                <a href="single-product.html"><img src="http://7n1adsghana.com/wp-content/uploads/2018/04/largeformat-300x300.jpg" alt=""/></a>
                            </div>
                            <div class="entry-header">
                                <h6><a href="single-product.html">XEROX B215 MULTIFUNCTION PRINTER</a></h6>
                                <span class="price-product"><span class="amount"><span>$</span>39.99</span></span>
                            </div>
                        </li>
              
                        <li class="clearfix"> 
                            <div class="thumb">
                                <a href="single-product.html"><img src="https://image.made-in-china.com/202f0j00kyzEbQqcYCrH/Large-Format-Printer-Machine-Dx7-Outdoor-3200mm-China-Manufacturer.jpg" alt=""/></a>
                            </div>
                            <div class="entry-header">
                                <h6><a href="single-product.html">XEROX B215 PRINTER</a></h6>
                                <span class="price-product">
                                    <del><span class="amount"><span>$</span>59.99</span></del> 
                                    <ins><span class="amount"><span>$</span>29.99</span></ins>
                                </span>
                            </div>
                        </li>
              
                        
                    </ul>
                </aside>
                <aside class="widget woocommerce widget_price_filter">
                    <h5 class="widget-title">Filter by price</h5>
                    <form method="get">
                        <div class="price_slider_wrapper">
                            <div class="price_label">
                                Price: <span class="from">$10</span> — <span class="to">$70</span>
                            </div>
                            <div class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                                <span class="ui-slider-handle ui-state-default ui-corner-all move"></span>
                                <span class="ui-slider-handle ui-state-default ui-corner-all"></span>
                            </div>
                            <div class="price_slider_amount" data-step="10">
                                <div class="ot-button">
                                    <a href="#" class="btn-details"><i class="flaticon-right-arrow-1"></i> Filter</a>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </form>
                </aside>
                <aside class="widget widget_tag_cloud">
                    <h5 class="widget-title">Tags</h5>
                    <div class="tagcloud">
                        <a href="#">accessories</a>
                        <a href="#">business</a>
                        <a href="#">development</a>
                        <a href="#">startup</a>
                    </div>
                </aside>
                <aside class="widget woocommerce widget_shopping_cart">
                    <h5 class="widget-title">Shopping Cart</h5>
                    <div class="widget_shopping_cart_content">
                        <ul class="cart_list">
                            <li class="clearfix"> 
                                <a href="#" class="remove remove_from_cart_button">×</a> 
                                <div class="thumb">
                                    <a href="single-product.html"><img src="https://ae01.alicdn.com/kf/HTB1vJiBu5CYBuNkSnaVq6AMsVXan/1440-dpi-A3-size-clothes-printing-machine-uv-flatbed-printer-for-t-shirt-cloth-with-multifunction.jpg" alt=""/></a>
                                </div>
                                <div class="entry-header">
                                    <h6><a href="single-product.html">XEROX B215 PRINTER</a></h6>
                                    <span class="price-product"><span class="quantity">1 × </span><span class="amount"><span>$</span>39.99</span></span>
                                </div>
                            </li>
                            <li class="clearfix"> 
                                <a href="#" class="remove remove_from_cart_button">×</a> 
                                <div class="thumb">
                                    <a href="single-product.html"><img src="https://image.made-in-china.com/202f0j00kyzEbQqcYCrH/Large-Format-Printer-Machine-Dx7-Outdoor-3200mm-China-Manufacturer.jpg" alt=""/></a>
                                </div>
                                <div class="entry-header">
                                    <h6><a href="single-product.html">XEROX B215 PRINTER</a></h6>
                                    <span class="price-product"><span class="quantity">1 × </span><span class="amount"><span>$</span>39.99</span></span>
                                </div>
                            </li>
                        </ul>
                        <p class="woocommerce-mini-cart__total total">
                            <strong>Subtotal:</strong> <span class="amount"><span>$</span>139.98</span>   
                        </p>
                        <p class="woocommerce-mini-cart__buttons buttons">
                            <a href="cart.html" class="octf-btn octf-btn-primary button wc-forward">View cart</a>
                            <a href="checkout.html" class="octf-btn  button  checkout wc-forward">Checkout</a>
                        </p>
                    </div>
                </aside>
            </div>
            <div class="col-lg-9 col-md-12 order-first order-lg-last mb-lg-0 mb-5">
                <p class="woocommerce-result-count">Showing 1–9 of 12 results</p>
                <form class="woocommerce-ordering" method="get">
                    <select name="orderby" class="orderby" aria-label="Shop order">
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by latest</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                    </select>
                    <input type="hidden" name="paged" value="1"/>
                </form>
                <div class="product">
                    <div class="row">

                            {products && products.map(product => (


                            <Product product={product} history={history} />


                            ))}
                       
                       
                    </div>
                </div>
                <ul class="page-pagination text-center mt-3 none-style">
                    <li><a class="prev page-numbers" href="#"><i class="ri-arrow-left-line"></i></a></li>
                    <li><a class="page-numbers" href="#">1</a></li>
                    <li><span aria-current="page" class="page-numbers current">2</span></li>
                    <li><a class="page-numbers" href="#">3</a></li>
                    <li><a class="next page-numbers" href="#"><i class="ri-arrow-right-line"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>


     );
}
 
export default Shop;