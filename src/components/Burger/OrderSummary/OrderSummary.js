import React, { Component } from 'react';
import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/button';

class OrderSummary extends Component  {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]} </li>);
        });
        
        
            return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.Cancelpurchase}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.Continuepurchase}>CONTINUE</Button>
            </Aux>
            )};        
    }


export default OrderSummary;