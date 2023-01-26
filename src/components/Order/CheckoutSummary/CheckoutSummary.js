import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/button';
import classes from './CheckoutSummary.css';


// This props.ingredients are different from BurgerBuilder.js
const checkoutsummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!!</h1>
            <div style={{width: '100px', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger" 
                clicked={props.checkoutCancel}>CANCEL</Button>
            <Button 
                btnType="Success" 
                clicked={props.checkoutComplete}>CONTINUE</Button>
        </div>
    );
}

export default checkoutsummary;