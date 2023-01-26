import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

// We can use same component for different pages like Checkout and BurgerBuilder
class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    // entries take key and value of query just like Object.key() method.
    // The following lifecycle method shows the number of ingredients object value in URL 
    // URLSearchParams(this.props.location.search) search all default and updated values from Burgerbuilder.js at the same time..
    
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        
        // The following code explains that if 'price=' 4.00 , then price object will be next totalPrice(based what ingredients the user clicks.) Overall, totalPrice from Burgerbuilder.js will be 8.90 again.

        for(let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1];
            }
            else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }


    checkoutCompleteHandler = () => {
        // this goes /checkout/contact-data page when you click continue on CheckoutSummary.js
        this.props.history.replace('/checkout/contact-data');
    }
    
    checkoutCancelHandler = () => {
        // This one just go back to the page.
        this.props.history.goBack();
    }

     // this.props.match.path is whatever url you have before  /contact-data
     // ...props is the custom one. Whatever props you bring work in <ContactData />
     
    render() {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutComplete={this.checkoutCompleteHandler}
                checkoutCancel={this.checkoutCancelHandler}/>
                <Route
                path= {this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}  {...props}/>)} />
            </div>
        )
    }
}

export default Checkout;
