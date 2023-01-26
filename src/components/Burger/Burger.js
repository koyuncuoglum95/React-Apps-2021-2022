import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



// Object.keys() method brings the array properties(salad, meat,bacon and cheese ones) from the another file (briging ingredients array from BurgerBuilder.js)
// i is an index. key=(igKey + i) fixes the row of igKey(ingredients from Burgerbuilder.js)
// reduce((arr, el) => {return arr.concat(el);}, [] );  arr is previous value and el is current value. This is adding current value to previous value.

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient  key={igKey + i} type={igKey}/>;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [] );

   if(transformedIngredients.length === 0) {
       transformedIngredients = <p>Please start adding ingredients</p>
   }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;