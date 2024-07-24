//in this assignemnt you will create a component that renders a large list of sentences and includes an input field for filtering these items.
//the goal is to use usememo to optimise the filtering process , ensuring the list is only re-calculated when necessary (eg : when the filter criteria changes ).
//we will pass more than on value in the dependency array in this assignment 

//what it does is there are 1000 lines of sentences and when on the input box you type a word then those words appear on the screen which has the words you did input 

import { useMemo, useState } from "react";

const words = ["hi" , "my" , "name" , "is" , "for" , " to" , "random" , "word"]; //defining words
const TOTAL_LINES = 1000; //defining number of lines it will have 
const ALL_WORDS = []; //defing an empty array where it will store all of these
for (let i = 0 ; i < TOTAL_LINES ; i++) { //this outerloop will run 1000 times that is for all the lines
    let sentence= ""; //creating an empty sentence 
    for(let j = 0 ; j < words.length ; j ++) { //loop to insert words in the sentence 
        sentence += (words[Math.floor(words.length*Math.random())]); //insserting random words in the word array 
        sentence += " "; //adding the words with a space
    }
    ALL_WORDS.push(sentence); //finaly pushing all the words in the sentence 
}

export function Assignment2() {

    const [sentences,setSentences] = useState(ALL_WORDS); //this creates the default that is will show all the sentences that is 1000 lines of sentences 
    const [filter,setFilter] = useState(""); //this filter state variable will store the current value inside this input box 

    const filteredSentences = useMemo(() => {   //this part of expensive operation will run whenever the sentences change and obv when the filter also changes
        return sentences.filter(x => x.includes(filter)); //this means if the filter that is the input value is that is put if it is there inside the sentences then keep it else dont keep it
    },[sentences,filter]); 

    return (//on the .map part we are transforming the sentences array that is the 1000 llines long to those filtered sentences when the filter is putted inside the input box 
        <div> 
            <input type="text" onChange={(e) => {
                setFilter(e.target.value)
            }} />
            
            {filteredSentences.map(word => <div>
                {word}
            </div>)}
        </div>
    )
}