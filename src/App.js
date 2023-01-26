import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilders/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { Route, Switch } from 'react-router-dom';

// <BurgerBuilder></BurgerBuilder> is the section of <main></main> (due to props.children) from Layout.js

class App extends Component {
 
 render(){
   return (
     <div>
       <Layout>
         <Switch>
           <Route path="/checkout" component={Checkout}/>
           <Route path="/" exact component={BurgerBuilder}/>
           <Route path="/orders" component={Orders} />
         </Switch>  
       </Layout>
     </div>
   );
 }
    
}

export default App;
