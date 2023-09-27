let input = '';

const solve = () => {
    let score1= Number(input.split("-")[0])
    let score2= Number(input.split("-")[1])
    if(score1>score2){
        console.log("FIRST")
    }
    if(score1==score2){
        console.log("DRAW")
    }
    if(score1<score2){
        console.log("SECOND")
    }
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);