//you have been given a list of items you shopped from the grocery store 
//you need to calculate the total amount of money you spent 

import { useMemo, useState } from "react";

export const Assignment3 = () => {
    const [items,setItems] = useState([
        {name : 'chocolates' , value:10},
        {name : 'chips' , value:20},
        {name : 'onion' , value:30},
        {name : 'tomato' , value:30},
    //add more items as needed 
    ]);

//we should wrap this toal value inside an usememo because the total value is dependent on the items that is if the item is not added it will unnncessary run the for loop operation whihc is nothing but unoptimized code 
//seo we wrap the totalvalue inide an usememo hook

/*
const totalValue = useMemo(() => {
    let totalValue = 0;
    for(let i = 0 ; i < items.length ; i ++){
        totalValue = totalValue + items[i].value;
    }
    return totalValue;
},[items]);
*/

const totalValue = useMemo(() => { //instead of the for loop we can use this reduce function that is much better because the reduce() method pass two parameters to the callbacl function they are accumulator and item , the accumulator item is the single value that will be returned by the reduce() method . it will contain the calue returned by the callback function in each iteration. and that basically how the reduce() method works . it iterates over each elemeny in your array , and each iteration returns a single value , which is the accumulator
    const totalValue = items.reduce((accumulator,item) => {
        return accumulator + item.value;
    },0)
    return totalValue;
},[items]);


    return (
        <div>
            <ul>
                {items.map((item,index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value : {totalValue}</p>
        </div>
    );
};
