import '../assets/css/woocommerce.css'
import { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import { ORDER_CREATE_RESET } from '../actions/types'
import { createOrder } from '../actions/orderActions'

const Checkout = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice)  + Number(cart.taxPrice)).toFixed(2)


useEffect(() => {
        if (success) {
            history.push('/')
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success])
const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            itemsPrice: cart.itemsPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }


const empyCart=() =>(
<Fragment>

<div class="alert alert-primary" role="alert">
  <h6>cart is Empty</h6>
</div>

</Fragment>

);

    const { cartItems,shippingAddress } = cart
const [shippingFormData, setShippingFormData] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
const { address, city,postalCode,country } = shippingAddress;

const submitHandler = (e) => {
        e.preventDefault()
        const { address, city,postalCode,country } = shippingFormData;
        console.log(address);
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
       // history.push('/payment')
        placeOrder()
    }
const onChange = e => setShippingFormData({ ...shippingFormData, [e.target.name]: e.target.value });
    return ( 
        <div id="content" class="site-content">
    <div class="page-header flex-middle">
        <div class="container">
            <div class="inner flex-middle">
                <h1 class="page-title">Page de vérification</h1>
                <ul id="breadcrumbs" class="breadcrumbs none-style">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Checkout Page</li>
                </ul>    
            </div>
        </div>
    </div>
    <section class="shop-cart">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="shop_checkout">
                        <div class="woocommerce-form-coupon-toggle">
                            <div class="woocommerce-info">
                                <i class="far fa-window-maximize"></i> 
                                Have a coupon? <a class="showcoupon">Click here to enter your code</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <form onSubmit={e =>submitHandler(e) }>
            <div class="row">
                <div class="col-lg-6">
                    <div class="woocommerce-billing-fields">
                        <h3>informations de livraison</h3>
                        <div class="woocommerce-billing-fields__field-wrapper">
                            <div class="row">
                            <p class="col-lg-12">
                                    <label for="billing_address_1" class="">adresse <abbr class="required" title="required">*</abbr></label>
                                    <input type="text" onChange={e => onChange(e)} class="input-text " name="address" id="billing_address_1" placeholder="Adresse"  autocomplete="address-line1" data-placeholder="House number and street name" required/>
                                </p>
                                <p class="col-lg-12">
                                    <label for="billing_country" class="">pays <abbr class="required" title="required">*</abbr></label>
                                    <span class="woocommerce-input-wrapper"><select onChange={e => onChange(e)} name="country" id="billing_country" class="country_to_state country_select select2-hidden-accessible" autocomplete="country" tabindex="-1"  required aria-hidden="true"><option value="">Select a country / region…</option><option value="AX">Åland Islands</option><option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN" selected="selected">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></span>
                                </p>
                                <p class="col-lg-12">
                                    <label for="billing_city" class="">Ville <abbr class="required" title="required">*</abbr></label>
                                    <input type="text" class="input-text " onChange={e => onChange(e)} name="city" id="billing_city" placeholder=""  required/>
                                </p>
                                <p class="col-lg-12">
                                    <label for="postalCode" class="">Code Postal<abbr class="required" title="required">*</abbr></label>
                                    <input type="text" class="input-text " onChange={e => onChange(e)} name="postalCode" id="postalCode" placeholder="" required/>
                                </p>
                            <div class="col-lg-12">
                                <div class="woocommerce-additional-fields">
                                    <h3>informations supplémentaires</h3>
                                    <div class="woocommerce-additional-fields__field-wrapper">
                                        <div class="row">

                                        </div>
                                        <p class="notes" id="order_comments_field" data-priority="">
                                            <label for="order_comments" class=""><span class="optional">(optional)</span></label>
                                            <span class="woocommerce-input-wrapper">
                                                <textarea name="order_comments" class="input-text " id="order_comments" placeholder="" rows="2" cols="5"></textarea>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                        </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <h3 class="order_review_heading">votre commande</h3>
                    <table class="shop_table woocommerce-checkout-review-order-table">
                        <thead>
                            <tr>
                                <th class="product-name">Produit</th>
                                <th class="product-total">sous-total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.length === 0 ? empyCart():console.log("hi")}
                        {cartItems.map((item)=>(

                        <tr class="cart_item">
                                <td class="product-name">{item.name} <strong class="product-quantity">× {item.qty}</strong></td>
                                <td class="product-total"><span class="amount"><span>$</span>{item.price * item.qty}</span></td>
                            </tr>


                        ))}
                        </tbody>
                        <tfoot>
                            <tr class="cart-subtotal">
                                <th>Taxes</th>
                                <td><span class="amount"><span>$</span>{cart.taxPrice}</span></td>
                            </tr>
                            <tr class="order-total">
                                <th>Total</th>
                                <td><strong><span class="amount"><span>$</span>{cart.totalPrice}</span></strong> </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div id="payment" class="woocommerce-checkout-payment">
                        <ul class="wc_payment_methods payment_methods methods">
                            <li class="woocommerce-notice woocommerce-notice--info woocommerce-info"><i class="far fa-window-maximize"></i> Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</li>
                        </ul>
                        <div class="place-order text-right">
                            <button type="submit" class="octf-btn button"  id="place_order" value="Place order">Passer commande</button>
                        </div>
                    </div>
                </div>

            </div>
        </form>
        </div>
    </section>
    
</div>


   
     );
}
 
export default Checkout;