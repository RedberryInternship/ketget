let input = '';

const solve = () => {
    let inputNumber = +input;
    while(inputNumber%2==1){
        inputNumber= Math.floor(inputNumber/10)
        if (inputNumber===0)
        inputNumber= "0"
    }
    console.log(inputNumber)

}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);