import { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import { connect,useSelector } from 'react-redux';
import { logout } from '../actions/auth';
const Navbar = ({isAuthenticated, logout}) => {
const logout_user = () => {
        logout();
        Redirect('/')
    };

const [count,setCount]=useState(0);
const cartItems = useSelector(state => state.cart.cartItems)
const auth = useSelector(state => state.auth)
const { user } = auth
const countHandler =() =>{
    let cnt=0
    cartItems.map(x=> {
    cnt+=parseInt(x.qty)
    })
    setCount(cnt)
    console.log(count)

};
useEffect(() =>{
countHandler()
},[cartItems])
 const guestLinks = () => (
        <Fragment>
        <div class="mt-4 ml-3  memeber">
                                <Link to='/Login'>
                                <button type="button" class="btn btn-outline-primary mt-2 pb-2 pt-2">
                                <i class="ri-user-line pr-1"></i>
                                Memeber</button>
                                </Link>
                     </div>
            <div className="octf-header-module">
                               <div className="btn-cta-group contact-header">
                               <i className="ri-phone-fill"></i>
                               <div className="cinfo-header">
                               <span>avez des questions?</span>
                               <span className="main-text"><a href="tel:+212667-661947">+212 667-661947</a></span>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    const authLinks = () => (

     <Fragment>

<div  className="main-navigation">
                                <ul className="menu">
                                    <li className="menu-item-has-children  "><i class="ri-user-line pr-1"></i><a href="#">{user && user.first_name+" "+user.last_name}</a>
                                        <ul className="sub-menu">
                                            <li><a href=""><i class="ri-user-settings-fill mr-1"></i>Profile</a></li>
                                            <li><a href=""><i class="ri-settings-3-fill mr-1"></i>Settings</a></li>
                                            <li><a onClick={() => logout_user()} href=""><i class="ri-logout-box-line mr-1"></i>Logout</a></li>
                                        </ul>
                                    </li>
                                 </ul>
</div>
     </Fragment>
    );
    return ( 
    <div  className="header">
        
    <section id="topbar" className="d-none d-lg-block">
    <div className="container clearfix">
      <div className="contact-infos float-left">
        <i className="icofont-envelope"></i><a href="mailto:sifdinnh@gmail.com">contact@example.com</a>
        <i className="icofont-phone"></i> +212 667-661947
      </div>
      <div className="social-links float-right">
        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
        <a href="https://wa.me/212667661947" className="skype"><i className="icofont-whatsapp"></i></a>
        <a href="https://www.linkedin.com/company/it-inspire-maroc/" className="linkedin"><i className="icofont-linkedin"></i></a>
      </div>
    </div>
  </section>
    <header id="site-header" className="site-header header-style-2 header-fullwidth sticky-header header-static">
    <div className="octf-main-header">
        <div className="octf-area-wrap">
            <div className="container-fluid octf-mainbar-container">
                <div className="octf-mainbar">
                    <div className="octf-mainbar-row octf-row">
                        <div className="octf-col logo-col">
                            <div id="site-logo" className="site-logo">
                                <Link to="">
                                    <img src={Logo} alt="IT INSPIRE" />
                                </Link>
                            </div>
                        </div>
                        <div className="octf-col menu-col">
                            <nav id="site-navigation" className="main-navigation">
                                <ul className="menu">
                                    <li className="current-menu-item current-menu-ancestor">
                                        <Link to="">Home</Link>
                                    
                                    </li>
                                    <li className="menu-item-has-children  "><Link to="#about">À PROPOS</Link>
                                        <ul className="sub-menu">
                                            <li><a href="about-us.html">À PROPOS DE NOUS</a></li>
                                            <li><a href="our-team.html">Equipe</a></li>
                                            <li><a href="single-team.html">Réalisations</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><Link to="/Services">Services</Link>
                                        <ul className="sub-menu mega-menu">
                                          <div className="column">
                                            <h3>Our company</h3>
                                            <img src="./assets/img/logoM.png" />
                                          </div>

                                     
                                        <div className="row">
                                  
                                            <div className="column">
                                              <h6>Impression digital</h6>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                            </div>
                                            <div className="column">
                                              <h6>IT Consulting</h6>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                            </div>
                                            <div className="column">
                                              <h6>IT Security</h6>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                            </div>
                                            <div className="column">
                                              <h6>IT Security</h6>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                              <a href="#"><i className="ri-arrow-right-s-fill"></i>Link 1</a>
                                            </div>
                                  `        </div>
                                  
                                   
                                   
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><Link to="/Shop">Shop</Link>
                                  
                                    </li>
                                    <li className="menu-item-has-children"><Link to="/Support">Support</Link>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Call Support Center</a></li>
                                            <li><a href="blog-grid.html">Ticket</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="octf-col cta-col text-right">

                            <div className="octf-btn-cta">

                                
                            <div class="octf-header-module cart-btn-hover">
                                    <div class="h-cart-btn octf-cta-icons">
                                        <Link class="cart-icon" to="/Cart"><i class="ri-shopping-cart-line"></i><span class="count">{count}</span></Link>
                                    </div>  
                                    <div class="site-header-cart">
                                        <div class="widget woocommerce widget_shopping_cart">
                                            <div class="widget_shopping_cart_content">
                                             {/*<p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>*/}
                                                <ul class="cart_list">
                                                {cartItems.map((item) => (

                                                    <li class="clearfix">
                                                        <a href="#" class="remove remove_from_cart_button">×</a>
                                                        <div class="thumb">
                                                            <a href="single-product.html"><img src={item.image} alt=""/></a>
                                                        </div>
                                                        <div class="entry-header">
                                                            <h6><a href="single-product.html">{item.name}</a></h6>
                                                            <span class="price-product"><span class="quantity">{item.qty} × </span><span class="amount"><span>$</span>39.99</span></span>
                                                        </div>
                                                    </li>



                                                ))}


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                

                                {isAuthenticated ? authLinks() : guestLinks()}

                           
                                
                            </div>                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header_mobile">
        <div className="container">
            <div className="mlogo_wrapper clearfix">
                <div className="mobile_logo">
                    <a href="index.html">
                        <img src="assets/img/logo.jpg" alt="IT INSPIRE"/>
                    </a>
                </div>
                <div id="mmenu_toggle">
                    <button></button>
                </div>
            </div>
            <div className="mmenu_wrapper">
                <div className="mobile_nav collapse">
                    <ul id="menu-main-menu" className="mobile_mainmenu">
                        <li className="menu-item-has-children">
                            <a href="index.html">Home</a>
              
                        </li>
                        <li className="menu-item-has-children current-menu-item current-menu-ancestor"><a href="#">À PROPOS</a>
                            <ul className="sub-menu">
                                <li><a href="#">À PROPOS DE NOUS</a></li>
                                <li><a href="#">Equipe</a></li>
                                <li><a href="#">Our team</a></li>
                                <li><a href="#">Réalisations</a></li>
      
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="Services.html">Services</a>
                            <ul className="sub-menu">
                                <li><a href="impression.html">impression numérique</a></li>
                                <li><a href="IT_consulting.html">IT CONSULTING</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="#">Shop</a>
                            
                        </li>
                        <li className="menu-item-has-children"><a href="support.html">Support</a>
                          <ul className="sub-menu">
                            <li><a href="#">Call Support Center</a></li>
                            <li><a href="#">Ticket</a></li>
                        </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    </div>
</header>

               
                   
</div>         

     );
}
const mapStateToProps = state => {
     return {
     isAuthenticated: state.auth.isAuthenticated
     };
};

export default connect(mapStateToProps, { logout })(Navbar);