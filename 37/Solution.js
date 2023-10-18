let input = '';

const solve = () => {
    let symbols = input.split(" ")
    let a = symbols[0]
    let b = symbols[1]
    let c = symbols[2]
    let answer = "NO"
    if((a==b)&&(b==c)&&(c==a)){
        answer= "YES"}
    console.log(answer)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);