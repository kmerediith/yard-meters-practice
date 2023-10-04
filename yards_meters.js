let inputYards = prompt("enter a number and we will convert it from yards to meters")


function convertToMeters(yards){
    return yards * 0.9144;
}
let convertedMeters = convertToMeters(inputYards);


function createMessage(yards, meters){
    let message = '';
    const numYards = yards * 1;

    if (numYards === 1760){
        message = "That is a long mile"
    }else if (numYards === 100){
        message = "That is as long as a football field";
    }else if (numYards === 26){
        message = "That is a long as a tennis court!";
    }

    return `${yards} yards is ${ meters} meters. ${message}`;
}

let output = createMessage(inputYards, convertedMeters);
console.log(output);