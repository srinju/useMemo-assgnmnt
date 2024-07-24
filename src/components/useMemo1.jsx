//assignment 1 >>
//in this assignment , your task is to create a component that performs an expensive calculation(finding the factorial) based on a user input
//use useMemo to ensure that the calculation is only recomputed when the input changes , not on every render.

import { useMemo, useState } from "react";

export function Assignment1() {
    const [input,setInput] = useState(0);

    const expensiveValue = useMemo(() => { //this runs when the input chnages and no renders or runs the operation on any other change in the site 
        let value = 1;
        for (let i = 1 ; i<=input ; i++){
            value = value * i;
        }
        return value;
    },[input]);


    return (
        <div>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value is {expensiveValue}</p>
        </div>
    )
}