import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import Body from './Body'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './containers/Login'
import Register from './containers/Register'
import Contact from './containers/Contact'
import Impression from './containers/Impression'
import Support from './containers/Support'
import ITconsulting from './containers/ITconsulting'
import Services from './containers/Services'
import Shop from './containers/Shop'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'
import Activate from './containers/Activate'
import ProductDetails from './containers/ProductDetails'
import Layout from './hocs/Layout';
import store from './store';


function App() {
  return (
  <Provider store={store}>
    <Router>
      <Layout>
           <Switch>
            <Route exact path='/' component={Body} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/Checkout' component={Checkout} />
            <Route exact path='/Cart/:id?' component={Cart} />
            <Route exact path='/product/:id' component={ProductDetails} />
            <Route exact path='/Support' component={Support} />
            <Route exact path='/ITconsulting' component={ITconsulting} />
            <Route exact path='/Shop' component={Shop} />
            <Route exact path='/Services' component={Services} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/activate/:uid/:token' component={Activate} />

            <Route exact path='/Impression' component={Impression} />

            </Switch>
        </Layout>
    </Router>
  </Provider>
  );
}

export default App;
